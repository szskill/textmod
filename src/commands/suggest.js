// eslint-disable-next-line no-unused-vars
const Discord = require("discord.js-light");

module.exports = {
  name: "suggest",
  description: "Suggest a feature (but not really here)",
  options: [],

  /**
   * @param {Discord.CommandInteraction} interaction
   */
  async execute(interaction) {
    await interaction.reply(
      "🤔 Suggest features at my GitHub page:" +
        " https://github.com/szskill/textmod/issues"
    );
  },
};
