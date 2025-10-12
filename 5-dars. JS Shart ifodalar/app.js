// Shart gaplar:

// if (5 < 3) {
//     console.log("salom");
// }

// let age = 13;
// age = 21;

// if (age > 18) {
//     console.log("Saylovda ishtirok etish mumkin");
// }

// let age = 13;

// age = 17;

// if (age > 16) {
//     console.log("Pasport olgan");
// } else {
//     console.log("Pasporti yo'q");
// }

// let admin = true;

// if (admin) {
//     console.log("Xush kelibsiz Admin");
// } else {
//     console.log("Xush kelibsiz mehmon");
// }

// let damOlish = true;
// damOlish = false;

// if (damOlish) {
//     console.log("Bugun dars yo'q");
// } else {
//     console.log("bugun dars!");
// }

// let yosh = 11;

// if (yosh > 16) {
//     console.log("Pasporti bor");
// } else if (yosh == 16) {
//     console.log("Bor pasport ol");
// } else if (yosh < 16) {
//     console.log("hali pasport olmagan");
// }

// let fasl = "kuz";

// let soat = 19.48;
// soat = 20.15;

// soat = 13.25;

// if (soat >= 13 && soat <= 14) {
//     console.log("Prounity obed qilyapti");
// } else if (soat >= 9 && soat <= 20) {
//     console.log("ProUnity Ochiq");
// } else {
//     console.log("ProUnity yopiq");
// }

// 8:30 - 9:15
// 9:20 - 10:05
// 10:10 - 10:55
// 11:20 - 12:05
// 12:10 - 12:55

// 13:00 - 13:40

// 13:40 - 14:20
// 14:20 - 15:00
// 15:00 - 15:40
// 15:45 - 16:35
// 16:35 - 17:05

// let soat = 8.15;
// soat = 9.25;

// if (soat < 8.3) {
//     console.log("Dars hali boshlanmadi.");
// } else if (soat >= 8.3 && soat < 9.15) {
//     console.log("Hozir 1-soat");
// } else if (soat >= 9.15 && soat < 9.2) {
//     console.log("1-soat tugadi, tanaffus!");
// } else if (soat >= 9.2 && soat < 10.05) {
//     console.log("Hozir 2-soat");
// }

// Switch

let fasl = prompt("hozir qaysi fasl?");

switch (fasl) {
    case "bahor":
        console.log("daraxtlar gulladi");
        break;
    case "yoz":
        console.log("quyosh, juda issiq");
        break;
    case "kuz":
        console.log("barglar to'kila boshladi");
        break;
    case "qish":
        console.log("qor, hammayoq oppoq!");
        break;
    default:
        console.log("noma'lum fasl");
        break;
}

// if (fasl == "qish") {
//     console.log("qor yog'di, hammayoq oppoq");
// } else if (fasl == "bahor") {
//     console.log("daraxtlar gulladi");
// } else if (fasl == "yoz") {
//     console.log("quyosh qizdiradi, havo issiq");
// } else if (fasl == "kuz") {
//     console.log("barglar to'kila boshladi");
// } else {
//     console.log("noma'lum fasl");
// }
