const images = {
  1: require('./2.png'),
  2: require('./2.png'),
  3: require('./2.png'),
  4: require('./2.png'),
  5: require('./2.png'),
  6: require('./2.png'),
  7: require('./2.png'),
  8: require('./2.png'),
  9: require('./2.png'),
  10: require('./2.png'),
  11: require('./2.png'),
  12: require('./2.png'),
};

export default function randomImages() {
  let min = 1;
  let max = 12;
  let random = Math.floor(Math.random() * (max - min + 1)) + min;
  return images(random);
}
