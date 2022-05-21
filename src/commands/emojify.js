// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const emojis = require("../../data/emojis.json");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "emojify",
  description: "Adds ➕ an 🔨 emoji 😎 to ☝️ every 🌐 word 🗣️",
  options: [{ name: "text", description: "The text to emojify", type: String }],

  randomEmoji() {
    return emojis[Math.floor(Math.random() * emojis.length)];
  },

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");
    const words = text.split(" ");

    let emojified = "";
    for (const word of words) {
      // Add an emoji between each word
      emojified += `${word} ${this.randomEmoji()} `;
    }

    const embed = new Discord.MessageEmbed()
      .setDescription(emojified)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
