const colors = require("colors");

const ranColor = colors.getRandomColor();
console.log(`You should use ${ranColor.name} on your website. It's HTML code is ${ranColor.code}`);

const favoriteColor = colors.getBlue();
console.log(`My favorite color is ${favoriteColor.name}/${favoriteColor.code}, btw`);
