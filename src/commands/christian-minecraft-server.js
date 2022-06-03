// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "christian-minecraft-server",
  description: "Stops the swearing in your christian Minecraft server",
  options: [{ name: "text", description: "The text to filter", type: String }],

  /**
   * @param {Discord.CommandInteraction} interaction
   * @param {Discord.CommandInteractionOptionResolver} options
   */
  async execute(interaction, options) {
    const text = options.getString("text");

    let filtered = text
      .replace("fuck", "f\\*\\**")
      .replace("shit", "s\\*\\**")
      .replace("bitch", "b\\*\\*\\**")
      .replace("dick", "d\\*\\**")
      .replace("ass", "a\\*\\*")
      .replace("sex", "s\\**")
      .replace("penis", "p\\*\\*\\**")
      .replace("pussy", "p\\*\\*\\**")
      .replace("boob", "b\\*\\**");

    const embed = new Discord.MessageEmbed()
      .setDescription(filtered)
      .setColor(randomColor());

    await interaction.reply({ embeds: [embed] });
  },
};
