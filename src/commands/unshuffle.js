// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const shuffleCmd = require("./shuffle");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "unshuffle",
  description: "shuffle command but like not",
  options: [{ name: "text", description: "The shuffled text", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    const unshuffledText = shuffleCmd.unshuffledTexts[text];

    const embed = new Discord.MessageEmbed()
      .setDescription(unshuffledText)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
