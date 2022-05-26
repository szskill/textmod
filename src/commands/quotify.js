// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "quotify",
  description: "motivational 😢",
  options: [{ name: "text", description: "The quote", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let quotified = `_"${text}"_\n- ${interaction.member.displayName}`;

    const embed = new Discord.MessageEmbed()
      .setDescription(quotified)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
