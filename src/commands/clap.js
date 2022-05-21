// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "clap",
  description: "Adds 👏 the 👏 clap 👏 emoji 👏 to 👏 each 👏 word 👏",
  options: [
    { name: "text", description: "The text to clap-ify", type: String },
  ],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");
    const words = text.split(" ");

    let clapped = "";
    for (const word of words) {
      // Add a clap emoji to each word
      clapped += `${word} 👏 `;
    }

    const embed = new Discord.MessageEmbed()
      .setDescription(clapped)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
