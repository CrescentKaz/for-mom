const decor1 = document.getElementById("decor1");
const decor2 = document.getElementById("decor2");
const decor3 = document.getElementById("decor3");
const decor4 = document.getElementById("decor4");
const decor5 = document.getElementById("decor5");
const background_image = document.getElementById("background-image");

const red_balloon = "./images/red.png";
const blue_balloon = "./images/blue.png";
const pink_balloon = "./images/pink.png";
const green_balloon = "./images/green.png";
const orange_balloon = "./images/orange.png";
const purple_balloon = "./images/purple.png";
const tan_balloon = "./images/tan.png";

const today = new Date();
const day = today.getDate()+1;
const month = today.getMonth();
const year = today.getFullYear();
const months = ["01jan", "02feb", "03mar", "04apr", "05may", "06jun", "07jul", "08aug", "09sep", "10oct", "11nov", "12dec"];
const folderPath = "/images/" + months[month] + "/";
// const backgroundImageUrl = getRandomImage(folderPath);

//document.body.style.backgroundImage = `url("${backgroundImageUrl}")`;

/*
function getRandomImage(folder) {
// images are hard-coded. need to find a way to generate this automatically. iterate over a loop? might have issues with access to the folder contents
    const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    return folder + randomImage;
}
*/

function moveLocation(item) {
//    const currentLeft = parseInt(item.style.left || 0);
//    const currentTop = parseInt(item.style.top || 0);
    const newLeft = Math.floor(Math.random() * (window.innerWidth - item.width));
    const newTop = Math.floor(Math.random() * (window.innerHeight - item.height));
    item.style.left = newLeft + "px"; 
    item.style.top = newTop + "px";
    console.log("moveLocation triggered for " + item)
} 

// is it possible to update this giant if/else into a function and array like i did with The Cave?
// i'd like to try

const visualsM = [
    {
        name: "01jan",
        "main_title": "Happy New Year!",
        "sub_title": year,
        "decor_item": [tan_balloon, tan_balloon, tan_balloon, tan_balloon, tan_balloon],
        haveDay: false
    },
    {
        name: "02feb",
        "main_title": "Happy Valentine's Day",
        "sub_title": "OXO <3 <3 <3 XOX",
        "decor_item": [red_balloon, pink_balloon, red_balloon, pink_balloon, red_balloon],
        haveDay: false
    }, 
    {
        name: "03mar",
        "main_title": "Happy St. Patrick's Day",
        "sub_title": "May luck be with you",
        "decor_item": [green_balloon, green_balloon, green_balloon, green_balloon, green_balloon],
        haveDay: false
    },
    {
        name: "04apr",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: true
    },
    {
        name: "05may",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "06jun",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "07jul",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "08aug",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "09sep",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "10oct",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "11nov",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: false
    },
    {
        name: "12dec",
        "main_title": "",
        "sub_title": "",
        "decor_item": [],
        haveDay: true
    }
];

const visualsD = [
    {
        // name = today
        name: "",
        "main_title": "",
        "sub_title": "",
        "decor_item": []
    }
];

/*
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
*/

function updatePageM(visualsM) {
    holiday_name.innerText = visuals.main_title;
    holiday_tagline.innerText = visuals.sub_title;
    decor1.src = visuals[decor_item][0];
    decor2.src = visuals[decor_item][1];
    decor3.src = visuals[decor_item][2];
    decor4.src = visuals[decor_item][3];
    decor5.src = visuals[decor_item][4];
}

function updatePageD(visualsD) {
    holiday_name.innerText = visuals.main_title;
    holiday_tagline.innerText = visuals.sub_title;
    decor1.src = visuals[decor_item][0];
    decor2.src = visuals[decor_item][1];
    decor3.src = visuals[decor_item][2];
    decor4.src = visuals[decor_item][3];
    decor5.src = visuals[decor_item][4];
}

function howSpecific() {
    if (visualsM.haveDay) {
        updatePageD(visualsD.name[today]);
    } else {
        updatePageM(visualsM[month]);
    }
};

howSpecific();
