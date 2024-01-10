function circle(r) {
  const PI = 3.14159;
  return PI * r ** 2;
}

function rectangle(width, height) {
  return width * height;
}

function triangle(a, h) {
  return (1 / 2) * a * h;
}

module.exports = { circle, rectangle, triangle };
