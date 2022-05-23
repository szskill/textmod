// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "shuffle",
  description: "spdijfapsidjf pasidjfpa isjdfpaijsdpifj",
  options: [{ name: "text", description: "text fr 100% legit", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let shuffledText = text
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");

    const embed = new Discord.MessageEmbed()
      .setDescription(shuffledText)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
