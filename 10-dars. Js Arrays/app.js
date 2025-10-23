// let ism = "Akbar";
// console.log(ism);

// let ismlar = [
//     "Akbar",
//     "Murod",
//     "Aziz",
//     "Alisher",
//     "Akmal",
//     "Said",
//     "Javohir",
//     "Bexruz",
//     "Nigora",
//     "Maftuna",
//     "Hasan",
//     "Jurabek",
// ];

// console.log(ismlar);
// console.log(ismlar.length);
// console.log(ismlar[8]);
// console.log(ismlar[ismlar.length - 1]);

// let randomThings = [
//     "Asad",
//     7,
//     ["Aziz", "Jasur", "Begzod"],
//     "hello",
//     null,
//     false,
//     12,
//     -5,
//     "",
//     true,
//     true,
//     0,
//     0,
//     0,
//     "nimadirlar",
// ];

// console.log(randomThings[2][1]);

// let ismlar = [
//     "Akbar",
//     "Murod",
//     "Aziz",
//     "Alisher",
//     "Akmal",
//     "Said",
//     "Javohir",
//     "Bexruz",
//     "Nigora",
//     "Maftuna",
//     "Hasan",
//     "Jurabek",
// ];

// let mashinalar = ["Malibu", "Tahoe", "Equinox", "Cobalt"];

// function showList(arr) {
//     let x = 0;

//     while (x < arr.length) {
//         console.log(arr[x]);
//         x += 1;
//     }
// }

// showList(ismlar);

// showList(mashinalar);

// showList(randomThings);

let sonlar = [2, 7, 90, 1, 54, 222, 31, 0.5, -6];

function engKattaSon(array) {
    let son = 0;
    let kichikson = array[0];

    while (son < array.length) {
        if (array[son] < kichikson) {
            kichikson = array[son];
        }
        son++;
    }
    console.log(kattaSon);
}
engKattaSon(sonlar);
