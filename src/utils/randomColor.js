/**
 * Generates a random color.
 * Usually used in `Discord.MessageEmbed`s.
 */
const randomColor = () => {
  return Math.round(Math.random() * 0xffffff);
};

module.exports = randomColor;
