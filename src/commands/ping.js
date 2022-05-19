// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");
const randomColor = require("../utils/randomColor");

module.exports = {
  name: "ping",
  description: "Pong!",
  options: [],

  /**
   * @param {Discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    // Figure out API latency
    const apiLatencyTimeBefore = Date.now();
    await interaction.channel.sendTyping();
    const apiLatencyMS = Date.now() - apiLatencyTimeBefore;

    // Create a fancy embed just to display the latency 😑
    const embed = new Discord.MessageEmbed()
      .setTitle("🏓 Pong!")
      .setColor(randomColor());

    embed.addField("API latency", `${apiLatencyMS.toLocaleString()}ms`);
    embed.addField(
      "Websocket latency",
      "Can someone tell me how to calculate websocket latency in Discord.JS"
    );

    await interaction.reply({ embeds: [embed] });
  },
};
