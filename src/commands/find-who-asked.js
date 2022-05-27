// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "find-who-asked",
  description: "Finds who asked",
  options: [],

  /**
   * @param {Discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    const embed = new Discord.MessageEmbed()
      .setDescription("nobody")
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
