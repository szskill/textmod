// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "uwu",
  description: "😬",
  options: [{ name: "text", description: "idc anymore </3", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let uwuified = "";

    // Lowercase it
    uwuified = uwuified.toLowerCase();

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

    // Replace Ls with Ws
    uwuified = uwuified.replace("l", "w");

    const embed = new Discord.MessageEmbed()
      .setDescription(uwuified)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
