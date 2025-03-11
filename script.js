let move = Math.floor(Math.random()*100);
console.log(move);

const decor1 = document.getElementById("#decor1");
const decor2 = document.getElementById("#decor2");
const decor3 = document.getElementById("#decor3");
const decor4 = document.getElementById("#decor4");
const decor5 = document.getElementById("#decor5");
const background_image = document.getElementById("#background-image");

const today = new Date();
const day = today.getDate();
const month = today.getMonth()+1;
const year = today.getFullYear();

/*
decor1.addEventListener("click", moveLocation(decor1));
console.log(move);

function moveLocation(ball) {
    ball.style.top = move + "vh"; 
    ball.style.left = Math.floor(Math.random()*100) + "vw";
}

decor1.addEventListener("click", function() {decor1.style.top = move+"vh"; decor1.style.left = move+"vw"});
decor2.addEventListener("click", function() {decor2.style.top = "move"; decor2.style.left = "move"});
decor3.addEventListener("click", function() {decor3.style.top = "move"; decor3.style.left = "move"});
decor4.addEventListener("click", function() {decor4.style.top = "move"; decor4.style.left = "move"});
decor5.addEventListener("click", function() {decor5.style.top = "move"; decor5.style.left = "move"});
*/

if (month === 1) {
    holiday_name.innerText = "Happy New Year!";
    holiday_tagline.innerText = year;
    background_image.src = "./images/gold_confetti_fountains.gif";
} else if (month === 2) {
    holiday_name.innerText = "Happy Valentine's Day";
    holiday_tagline.innerText = "OXO <3 <3 <3 XOX";
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
    holiday_name.innerText = "Happy April Fools!";
    holiday_tagline.innerText = "April showers bring May flowers~";
} else if (month === 5) {
    if (day === 4) {
        holiday_name.innerText = "May the fourth be with you.";
        holiday_tagline.innerText = "Woosh woosh! (lightsaber noises)";
    } else if (day === 5) {
        holiday_name.innerText = "!Feliz Cinco de Mayo!";
    } else {
        holiday_name.innerText = "Happy Mothers Day!!";
        holiday_tagline.innerText = "I love you Mom!";
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