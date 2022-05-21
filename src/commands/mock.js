// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "mock",
  description: '"I dOnT kNOw wHAt ThIs CoMmANd dOes" 🤓',
  options: [{ name: "text", description: "The text to mock", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let mocked = "";
    for (const char of text) {
      // A 50/50 chance of making it lowercase/uppercase
      if (Math.random() > 0.5) {
        mocked += char.toUpperCase();
      } else {
        mocked += char.toLowerCase();
      }
    }

    const embed = new Discord.MessageEmbed()
      .setDescription(mocked)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
