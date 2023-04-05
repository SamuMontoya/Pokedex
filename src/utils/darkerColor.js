const darkerColor = (color) => {
  const percentage = 0.5;

  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Reduce each component by 10%
  const darkerR = Math.floor(r * percentage);
  const darkerG = Math.floor(g * percentage);
  const darkerB = Math.floor(b * percentage);

  // Convert the darker color back to hexadecimal format
  const darkColor = `#${darkerR.toString(16)}${darkerG.toString(
    16
  )}${darkerB.toString(16)}`;

  return darkColor;
};

export default darkerColor;
