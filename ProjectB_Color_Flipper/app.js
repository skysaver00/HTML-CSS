const colors = ["Medium Slate Blue","Medium Purple","Pale Turquoise","Mint Cream","Yellow Green","Navajo White","Dark Khaki","Beige","Salmon","Peru","Dark Violet","Maroon","Silver","Medium Orchid","Fire Brick","Dark Green","Pink","Yellow","Medium Violet Red","Dark Orange","Medium Turquoise","Light Coral","Powder Blue","Dark Orchid","Dark Slate Gray","Dark Slate Blue","Light Yellow","Antique White","Red","Medium Spring Green","Turquoise","Lime Green","Snow","Dark Olive Green","Indigo","Gainsboro","Forest Green","Aqua","Light Steel Blue","Gold","Goldenrod","Olive","Papaya Whip","Light Pink","Sky Blue","Violet","Blanched Almond","Thistle","Blue Violet","Medium Blue","Dark Goldenrod","Steel Blue","Medium Sea Green","Chocolate","Sienna","Sandy Brown","Burly Wood","Plum","Indian Red","Azure","Pale Violet Red","Light Goldenrod Yellow","Slate Blue","Saddle Brown","Pale Green","Light Green","Magenta","Deep Sky Blue","Light Salmon","Ghost White","Lavender Blush","Medium Aquamarine","Wheat","Chartreuse","Cornflower Blue","Green Yellow","Green","Peach Puff","Dim Gray","Royal Blue","Sea Green","Rosy Brown","Orange","Dark Red","Teal","Blue","Coral","Crimson","Spring Green","Dodger Blue","Dark Cyan","Old Lace","Dark Gray","Fuchsia","Cornsilk","Midnight Blue","Dark Salmon","Linen","Light Slate Gray","Moccasin","Light Sky Blue","Seashell","Light Blue","Dark Blue","Misty Rose","Brown","Deep Pink","Lawn Green","Orange Red","Medium Slate Blue","Lavender","Tomato","Hot Pink","Lime","Amethyst","Dark Magenta","Black","Khaki","White Smoke","Alice Blue","Cyan","Ivory","DarkTurquoise","Cadet Blue","Light Sea Green","Orchid","Honeydew","Dark Sea Green","Gray","Purple","White","Lemon Chiffon","Light Grey","Tan","Navy","Bisque","Light Cyan","Light Salmon","Aquamarine","Slate Gray","Pale Goldenrod","Floral White","Olive Drab"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    //get random number betweeon 0 - 3 colors[]

    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}