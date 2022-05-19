// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "expand",
  description: "e x p a n d s  e v e r y  w o r d  l i k e  t h i s",
  options: [{ name: "text", description: "The text to expand", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let expanded = "";
    for (const character of text.split("")) {
      expanded += `${character} `;
    }

    const embed = new Discord.MessageEmbed()
      .setDescription(expanded)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
