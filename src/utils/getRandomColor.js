function getRandomColor() {
  return `hsl(${Math.floor(Math.random() * 360)}, 100%, 30%)`;
}

export default getRandomColor;