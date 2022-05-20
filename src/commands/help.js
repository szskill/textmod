const fs = require("fs");
// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "help",
  description: "help",
  options: [],

  /**
   * @param {Discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    const embed = new Discord.MessageEmbed()
      .setTitle("TextMod")
      .setDescription(fs.readFileSync("./data/textmod-help.md").toString())
      .setThumbnail(interaction.client.user.displayAvatarURL())
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
