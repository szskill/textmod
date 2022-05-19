// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const emojis = require("../../data/emojis.json");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "reverse",
  description: "probably reverses the text lol idk",
  options: [{ name: "text", description: "the text", type: String }],

  randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  },

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    // Reverse the string by converting it to an array, reversing it, then
    // converting it back to a string
    const reversed = text.split("").reverse().join("");

    const embed = new Discord.MessageEmbed()
      .setDescription(reversed)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
