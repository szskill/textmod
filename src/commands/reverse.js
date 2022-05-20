// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "reverse",
  description: "probably reverses the text lol idk",
  options: [{ name: "text", description: "the text", type: String }],

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
