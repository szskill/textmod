// Script to deploy Slash Commands™️ based on the "commands" directory

const fs = require("fs/promises");
const { SlashCommandBuilder } = require("@discordjs/builders");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { clientID, slashCommandsGuildID } = require("../config.json");

// 🔑 Load .env secrets into process.env
require("dotenv").config();

// Wrap our (async) code in an async function to use await
(async () => {
  // Dynamically load commands from the "commands" folder
  // Each object must export a similar structure like this:
  //
  //   name: string;
  //   description: string;
  //
  const commands = [];
  for (const fileName of await fs.readdir("src/commands")) {
    // Ignore non-JS files
    if (!fileName.endsWith(".js")) return;

    // We can assume the command name by removing the .js suffix
    const assumedCommandName = fileName.replace(".js", "");

    // Get the actual command object
    const command = require(`./commands/${assumedCommandName}`);

    // Create the slash command JSON object to be used in sending the PUT
    // API request to Discord
    let slashCommandJSON = new SlashCommandBuilder()
      .setName(command.name)
      .setDescription(command.description);

    // Register options
    for (const option of command.options) {
      const { name, description, type } = option;

      switch (type) {
        case String:
          slashCommandJSON = slashCommandJSON.addStringOption((option) =>
            option.setName(name).setDescription(description).setRequired(true)
          );
          break;
        case Number:
          slashCommandJSON = slashCommandJSON.addIntegerOption((option) =>
            option.setName(name).setDescription(description).setRequired(true)
          );
          break;
        default:
          break;
      }
    }

    commands.push(slashCommandJSON);
  }

  // Create the REST object so we can send requests to Discord
  const rest = new REST().setToken(process.env.TOKEN);

  // 🚀 Deploy!
  if (slashCommandsGuildID !== "") {
    await rest.put(
      Routes.applicationGuildCommands(clientID, slashCommandsGuildID),
      {
        body: commands,
      }
    );
  } else {
    // 🌍 Global slash commands
    //
    // BIG NOTE: This will take up to an hour to register.
    // Don't cry because it doesn't show up.
    await rest.put(Routes.applicationCommands(clientID), {
      body: commands,
    });
  }

  console.log("Successfully deployed slash commands");
})();
