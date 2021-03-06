const fs = require("fs");

// Check if the config is there
if (
  !(
    fs.existsSync(process.cwd() + "/config.json") &&
    fs.existsSync(process.cwd() + "/.env")
  )
) {
  console.log(
    "❌ The config and/or .env isn't there! Please read README.md for" +
      " instructions on how to this bot up."
  );
  process.exit(1);
}

const express = require("express");
const Discord = require("discord.js-light");
const config = require("../config.json");

// 🔑 Load .env secrets into process.env
require("dotenv").config();

const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MEMBERS],
});

// Create the command map
// commandName: commandObject
const commands = new Map();

// Dynamically load commands into the command map from the "commands" directory
for (const fileName of fs.readdirSync("src/commands")) {
  // We can assume the command name by removing the .js suffix
  const assumedCommandName = fileName.replace(".js", "");

  const command = require(`./commands/${assumedCommandName}`);
  commands.set(command.name.toLowerCase(), command);
}

// 👌 Change bot status/activity/presence, and print a nice ready message
client.on("ready", async () => {
  // Listening to /help
  // Do-Not-Disturb status
  await client.user.setPresence({
    activities: [
      {
        name: "/help",
        type: "LISTENING",
      },
    ],
    status: "dnd",
  });

  console.log("👌 Bot is ready!");
});

// Handle (/) commands
client.on("interactionCreate", async (interaction) => {
  // Ignore non-slash command interactions
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  // Find the command from our command map
  const command = commands.get(commandName);
  if (command === null) return;

  // Execute the command
  try {
    await command.execute(interaction, options);
  } catch (e) {
    const embed = new Discord.MessageEmbed()
      .setTitle("❌ Error")
      .setDescription(e)
      .setColor(0xffaaaa);

    await interaction.reply({ embeds: [embed] });
  }
});

// Check if the user actually built the web project
if (!fs.existsSync(process.cwd() + "/web/dist")) {
  console.log(
    "😬 You haven't built the website! Go into the 'web' directory and perform" +
      " 'npm i' and 'npm run build' in the terminal."
  );
  process.exit(1);
}

// Create the express app in which we will be serving the website
const expressApp = express();
expressApp.use(express.static(process.cwd() + "/web/dist"));
expressApp.get("/", (req, res) => res.sendFile("index.html"));

// Simple wrapper to get all available commands in the command map
expressApp.get("/api/v1/commands", (req, res) => {
  const list = [];
  for (const command of commands.values()) {
    const cmdObj = command;

    // Delete the execute function because useless
    if (cmdObj.execute) {
      delete cmdObj.execute;
    }

    list.push(cmdObj);
  }

  res.send(list);
});

// A route to get the number of servers
expressApp.get("/api/v1/numGuilds", (req, res) => {
  res.send(client.guilds.cache.size.toString());
});

// A route to get the number of users
expressApp.get("/api/v1/numUsers", (req, res) => {
  let numUsers = 0;
  for (const guild of client.guilds.cache.values()) {
    numUsers += guild.memberCount;
  }

  res.send(numUsers.toString());
});

// 🚀 Start the website on port in config.json
expressApp.listen(config.webPort, () =>
  console.log(`👌 Website is ready on http://localhost:${config.webPort} !`)
);

// 🚀 Start the bot from the "TOKEN" environment variable
// Easiest way to provide the token is to put it directly in your .env file:
//
//    TOKEN=YOUR_TOKEN_HERE
//
client.login(process.env.TOKEN);
