// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "shuffle",
  description: "Osduf;oija;sodfja;osdufh aous d hfsdofgijs;doifgj sidjf;guo",
  options: [{ name: "text", description: "text fr 100% legit", type: String }],
  unshuffledTexts: {},

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

    // This is for the unshuffle command
    this.unshuffledTexts[shuffledText] = text;

    const embed = new Discord.MessageEmbed()
      .setDescription(shuffledText)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
