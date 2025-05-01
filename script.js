const decor1 = document.getElementById("decor1");
const decor2 = document.getElementById("decor2");
const decor3 = document.getElementById("decor3");
const decor4 = document.getElementById("decor4");
const decor5 = document.getElementById("decor5");
const background_image = document.getElementById("background-image");

const red_balloon = "./images/red.png";
const blue_balloon = "./images/blue.png";

const today = new Date();
const day = today.getDate()+1;
const month = today.getMonth()+1;
const monthFolder = today.getMonth();
const year = today.getFullYear();
const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const folderPath = "/images/" + months[monthFolder] + "/";
// const backgroundImageUrl = getRandomImage(folderPath);

/*
document.body.style.backgroundImage = `url("${backgroundImageUrl}")`;
*/

/*
function getRandomImage(folder) {
// images are hard-coded. need to find a way to generate this automatically. iterate over a loop? might have issues with access to the folder contents
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return folder + randomImage;
}
*/

// the line below still isn't triggering
// decor1.addEventListener("click", moveLocation(decor1));

function moveLocation(item) {
    const currentLeft = parseInt(item.style.left || 0);
    const currentTop = parseInt(item.style.top || 0);
    const newLeft = Math.floor(Math.random() * (window.innerWidth - item.width));
    const newTop = Math.floor(Math.random() * (window.innerHeight - item.height));
    item.style.left = newLeft + "px"; 
    item.style.top = newTop + "px";
    console.log("moveLocation triggered for " + item)
} 

// is it possible to update this giant if/else into a function and array like i did with The Cave?
// i'd like to try

const visuals = [
    {
        
        "main_title": ["Happy New Year!"],
        "sub_title": [year, ],
        "decor_item": [red_balloon, blue_balloon, ]
    }
]



if (month === 1) {
    holiday_name.innerText = "Happy New Year!";
    holiday_tagline.innerText = year;
    background_image.src = "./images/gold_confetti_fountains.gif";
} else if (month === 2) {
    holiday_name.innerText = "Happy Valentine's Day";
    holiday_tagline.innerText = "OXO <3 <3 <3 XOX";
    decor1.src = "./images/red.png";
    decor2.src = "./images/pink.png";
    decor3.src = "./images/red.png";
    decor4.src = "./images/pink.png";
    decor5.src = "./images/red.png";
} else if (month === 3) {
    holiday_name.innerText = "Happy St. Patrick's Day";
    holiday_tagline.innerText = "May luck be with you";
    decor1.src = "./images/green.png";
    decor2.src = "./images/green.png";
    decor3.src = "./images/green.png";
    decor4.src = "./images/green.png";
    decor5.src = "./images/green.png";
    background_image.src = "./images/gold_confetti_fountains.gif";
} else if (month === 4) {
    if (day === 1) {
        holiday_name.innerText = "Happy April Fools!";
    } else {
        holiday_tagline.innerText = "April showers bring May flowers~";
    };
    decor1.src = "./images/blue.png";
    decor2.src = "./images/green.png";
    decor3.src = "./images/pink.png";
    decor4.src = "./images/orange.png";
    decor5.src = "./images/purple.png";
} else if (month === 5) {
    if (day === 4) {
        holiday_name.innerText = "May the fourth be with you.";
        holiday_tagline.innerText = "Woosh woosh! (lightsaber noises)";
        decor1.src = "./images/blue.png";
        decor2.src = "./images/red.png";
        decor3.src = "./images/blue.png";
        decor4.src = "./images/red.png";
        decor5.src = "./images/blue.png";
    } else if (day === 5) {
        holiday_name.innerText = "!Feliz Cinco de Mayo!";
    } else {
        holiday_name.innerText = "Happy Mothers Month!!";
        holiday_tagline.innerText = "I love you Mom!";
        decor1.src = "./images/pink.png";
        decor2.src = "./images/purple.png";
        decor3.src = "./images/pink.png";
        decor4.src = "./images/purple.png";
        decor5.src = "./images/pink.png";
        background_image.src = "./images/gold_confetti_fountains.gif";
    };
} else if (month === 6) {
    holiday_name.innerText = "Happy Summer!";
    holiday_tagline.innerText = "Iced tea in my hand and toes in the sand~";
} else if (month === 7) {
    if (day < 6) {
        holiday_name.innerText = "Happy Fourth of July!";
        holiday_tagline.innerText = "(insert fireworks here)";
    } else {
        holiday_name.innerText = "Happy Summer!";
        holiday_tagline.innerText = "Iced tea in my hand and toes in the sand~";
    }
} else if (month === 8) {
    holiday_name.innerText = "Happy Back-To-School Days!";
    holiday_tagline.innerText = "Got your summer homework done?";
} else if (month === 9) {
    holiday_name.innerText = "It's September.";
    holiday_tagline.innerText = "It's too hot in Texas to think of anything for this month.";
} else if (month === 10) {
    holiday_name.innerText = "Happy Halloween!~";
    holiday_tagline.innerText = "It's the spooky season of fear and terror~";
} else if (month === 11) {
    if (day === 28) {
        holiday_name.innerText = "Happy Birthday Mom!";
        holiday_tagline.innerText = "Hope your birthday is amazing! I love you!!!";
    } else {
        holiday_name.innerText = "Happy Thanksgiving!";
        holiday_tagline.innerText = "Thankful for my Mom and all my family.";
    }
} else if (month === 12) {
    if (day < 14) {
        holiday_name.innerText = "Merry Christmas!";
        holiday_tagline.innerText = "No peeking at your presents!";
    } else if (day === 14) {
        holiday_name.innerText = "On the first day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: a partridge in a pear tree!";
    } else if (day === 15) {
        holiday_name.innerText = "On the second day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 16) {
        holiday_name.innerText = "On the third day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 17) {
        holiday_name.innerText = "On the fourth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 18) {
        holiday_name.innerText = "On the fifth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 19) {
        holiday_name.innerText = "On the sixth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 20) {
        holiday_name.innerText = "On the seventh day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 21) {
        holiday_name.innerText = "On the eighth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 22) {
        holiday_name.innerText = "On the ninth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 23) {
        holiday_name.innerText = "On the tenth day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 24) {
        holiday_name.innerText = "On the eleventh day of Christmas";
        holiday_tagline.innerText = "my true love gave to me: 11 pipers piping, 10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else if (day === 25) {
        holiday_name.innerText = "Merry Christmas!";
        holiday_tagline.innerText = "On the 12th day of Christmas my true love gave to me: 12 drummers drumming, 11 pipers piping, 10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!";
    } else {
        holiday_name.innerText = "Merry Christmas!";
        holiday_tagline.innerText = "Let it snow! Let it snow! Let it snow!";
    };
} else {
    holiday_name.innerText = "Error";
    holiday_tagline.innerText = "Contact the Dev and let them know the month didn't register correctly.";
};
