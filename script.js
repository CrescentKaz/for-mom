const testing = true;

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
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();
const months = ["01jan", "02feb", "03mar", "04apr", "05may", "06jun", "07jul", "08aug", "09sep", "10oct", "11nov", "12dec"];
const folderPath = "/images/" + months[month] + "/";
const backgroundImageUrl = getRandomImage(folderPath);
const specificDate = "\"" + months[month] + "_" + day + "\"";

const decHoliday = "Merry Christmas!";
const decTag = "Let it snow! Let it snow! Let it snow!";

function getRandomImage(folder) {
// images are hard-coded. need to find a way to generate this automatically. iterate over a loop? might have issues with access to the folder contents
    const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg"];
    const randomImage = images[Math.floor(Math.random() * images.length)];
    const answer = folder + randomImage;
    return answer;
}

function moveLocation(item) {
    const newLeft = Math.floor(Math.random() * (window.innerWidth - item.width));
    const newTop = Math.floor(Math.random() * (window.innerHeight - item.height));
    item.style.left = newLeft + "px"; 
    item.style.top = newTop + "px";
    console.log("moveLocation triggered for " + item);
} 

const visualsM = [
    {
        name: "01jan",
        "main_title": "Happy New Year!",
        "sub_title": year,
        "decor_item": [tan_balloon, tan_balloon, tan_balloon, tan_balloon, tan_balloon]
    },
    {
        name: "02feb",
        "main_title": "Happy Valentine's Day",
        "sub_title": "OXO <3 <3 <3 XOX",
        "decor_item": [red_balloon, pink_balloon, red_balloon, pink_balloon, red_balloon]
    }, 
    {
        name: "03mar",
        "main_title": "Happy St. Patrick's Day",
        "sub_title": "May luck be with you",
        "decor_item": [green_balloon, green_balloon, green_balloon, green_balloon, green_balloon]
    },
    {
        name: "04apr",
        "main_title": "",
        "sub_title": "April showers bring May flowers~",
        "decor_item": [blue_balloon, green_balloon, pink_balloon, orange_balloon, purple_balloon]
    },
    {
        name: "05may",
        "main_title": "Happy Mother's Month!!",
        "sub_title": "I love you Mom!",
        "decor_item": [pink_balloon, purple_balloon, pink_balloon, purple_balloon, pink_balloon]
    },
    {
        name: "06jun",
        "main_title": "Happy Summer!",
        "sub_title": "Iced tea in my hand and toes in the sand~",
        "decor_item": [red_balloon, orange_balloon, pink_balloon, red_balloon, orange_balloon]
    },
    {
        name: "07jul",
        "main_title": "Happy Summer!",
        "sub_title": "Iced tea in my hand and toes in the sand~",
        "decor_item": [orange_balloon, red_balloon, orange_balloon, red_balloon, orange_balloon]
    },
    {
        name: "08aug",
        "main_title": "Happy Back-To-School Days!",
        "sub_title": "Got your summer homework done?",
        "decor_item": [blue_balloon, purple_balloon, green_balloon, red_balloon, orange_balloon]
    },
    {
        name: "09sep",
        "main_title": "It's September.",
        "sub_title": "It's too hot in Texas to think of anything for this month.",
        "decor_item": [red_balloon, red_balloon, red_balloon, red_balloon, red_balloon]
    },
    {
        name: "10oct",
        "main_title": "Happy Halloween!~",
        "sub_title": "It's the spooky season of fear and terror~",
        "decor_item": [purple_balloon, purple_balloon, orange_balloon, orange_balloon, orange_balloon]
    },
    {
        name: "11nov",
        "main_title": "Happy Thanksgiving!",
        "sub_title": "Thankful for my Mom and all my family.",
        "decor_item": [tan_balloon, orange_balloon, red_balloon, tan_balloon, orange_balloon]
    },
    {
        name: "12dec",
        "main_title": "Merry Christmas!",
        "sub_title": "No peeking at your presents!",
        "decor_item": [red_balloon, green_balloon, red_balloon, green_balloon, green_balloon]
    }
];

const visualsD = [
    {
        name: "04apr_01",
        "main_title": "Happy April Fools!",
        "sub_title": "",
        "decor_item": [blue_balloon, green_balloon, pink_balloon, orange_balloon, purple_balloon]
    },
    {
        name: "05may_04",
        "main_title": "May the fourth be with you.",
        "sub_title": "Woosh woosh! (lightsaber noises)",
        "decor_item": [blue_balloon, red_balloon, blue_balloon, red_balloon, blue_balloon]
    },
    {
        name: "05may_05",
        "main_title": "!Feliz Cinco de Mayo!",
        "sub_title": "",
        "decor_item": []
    },
    {
        name: "07jul_01",
        "main_title": "Happy Fourth of July!",
        "sub_title": "(insert fireworks here)",
        "decor_item": []
    },
    {
        name: "07jul_02",
        "main_title": "Happy Fourth of July!",
        "sub_title": "(insert fireworks here)",
        "decor_item": []
    },
    {
        name: "07jul_03",
        "main_title": "Happy Fourth of July!",
        "sub_title": "(insert fireworks here)",
        "decor_item": []
    },
    {
        name: "07jul_04",
        "main_title": "Happy Fourth of July!",
        "sub_title": "(insert fireworks here)",
        "decor_item": []
    },
    {
        name: "07jul_05",
        "main_title": "Happy Fourth of July!",
        "sub_title": "(insert fireworks here)",
        "decor_item": []
    },
    {
        name: "11nov_28",
        "main_title": "Happy Birthday Mom!",
        "sub_title": "Hope your birthday is amazing! I love you!!!",
        "decor_item": []
    },
    {
        name: "12dec_14",
        "main_title": "On the first day of Christmas my true love gave to me:",
        "sub_title": "A partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_15",
        "main_title": "On the second day of Christmas my true love gave to me:",
        "sub_title": "2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_16",
        "main_title": "On the third day of Christmas my true love gave to me:",
        "sub_title": "3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_17",
        "main_title": "On the fourth day of Christmas my true love gave to me:",
        "sub_title": "4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_18",
        "main_title": "On the fifth day of Christmas my true love gave to me:",
        "sub_title": "5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_19",
        "main_title": "On the sixth day of Christmas my true love gave to me:",
        "sub_title": "6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_20",
        "main_title": "On the seventh day of Christmas my true love gave to me:",
        "sub_title": "7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_21",
        "main_title": "On the eighth day of Christmas my true love gave to me:",
        "sub_title": "8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_22",
        "main_title": "On the ninth day of Christmas my true love gave to me:",
        "sub_title": "9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_23",
        "main_title": "On the tenth day of Christmas my true love gave to me:",
        "sub_title": "10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_24",
        "main_title": "On the eleventh day of Christmas my true love gave to me:",
        "sub_title": "11 pipers piping, 10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_25",
        "main_title": "Merry Christmas!",
        "sub_title": "On the 12th day of Christmas my true love gave to me: 12 drummers drumming, 11 pipers piping, 10 lords a-leaping, 9 ladies dancing, 8 maids a-milking, 7 swans a-swimming, 6 geese a-laying, 5 golden rings, 4 calling birds, 3 French hens, 2 turtle doves, and a partridge in a pear tree!",
        "decor_item": []
    },
    {
        name: "12dec_26",
        "main_title": decHoliday,
        "sub_title": decTag,
        "decor_item": []
    },
    {
        name: "12dec_27",
        "main_title": decHoliday,
        "sub_title": decTag,
        "decor_item": []
    },
    {
        name: "12dec_28",
        "main_title": decHoliday,
        "sub_title": decTag,
        "decor_item": []
    },
    {
        name: "12dec_29",
        "main_title": decHoliday,
        "sub_title": decTag,
        "decor_item": []
    },
    {
        name: "12dec_30",
        "main_title": decHoliday,
        "sub_title": decTag,
        "decor_item": []
    },
    {
        name: "12dec_31",
        "main_title": "Happy New Years Eve!",
        "sub_title": year,
        "decor_item": []
    }
];

function updatePageM(visualsM) {
    holiday_name.innerText = visualsM.main_title;
    holiday_tagline.innerText = visualsM.sub_title;
    decor1.src = visualsM.decor_item[0];
    decor2.src = visualsM.decor_item[1];
    decor3.src = visualsM.decor_item[2];
    decor4.src = visualsM.decor_item[3];
    decor5.src = visualsM.decor_item[4];
    background_image.src = backgroundImageUrl;
    if (testing) {
        console.log("decor1 (month) source is: " + visualsM.decor_item[0]);
        console.log("background loaded as " + backgroundImageUrl);
    }
}

function updatePageD(visualsD) {
    holiday_name.innerText = visualsD.main_title;
    holiday_tagline.innerText = visualsD.sub_title;
    decor1.src = visualsD.decor_item[0];
    decor2.src = visualsD.decor_item[1];
    decor3.src = visualsD.decor_item[2];
    decor4.src = visualsD.decor_item[3];
    decor5.src = visualsD.decor_item[4];
    background_image.src = backgroundImageUrl;
    if (testing) {
        console.log("decor1 (day) source is: " + visualsD.decor_item[0]);
        console.log("background loaded as " + backgroundImageUrl);
    }
}

function howSpecific() {
    if(visualsD.some(visualsD => visualsD.name === specificDate)) {
        updatePageD(visualsD.name[specificDate]);
    } else {
        updatePageM(visualsM[month]);
    };
};

howSpecific();
