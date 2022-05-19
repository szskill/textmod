// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const emojis = require("../../data/emojis.json");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "uwu",
  description: "i wanna take a pic with cardi b inside my cardigan",
  options: [{ name: "text", description: "idc anymore </3", type: String }],

  randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  },

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let uwuified = "";

    // Stutter the first letter 2 times
    //
    //   hello world
    //        |
    //   h- h- hello world
    //
    const firstLetter = text[0];
    uwuified += `${firstLetter}- ${firstLetter}- ${text}`;

    // Add some dots
    uwuified += "...";

    // Lowercase it
    uwuified = uwuified.toLowerCase();

    const embed = new Discord.MessageEmbed()
      .setDescription(uwuified)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
