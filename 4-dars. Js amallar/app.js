// Taqqoslash amallari  - chiqaradi boolean
//      <       kichik

// console.log(5 < 1);

//      >       katta

// console.log(5 > 1);

//      <=      kichik yo teng

// console.log(5 < 5);

// console.log(5 > 5);

// console.log(5 <= 5);

//      >=      katta yo teng

// console.log(5 >= 5);

//      ==      teng

// console.log(5 == 5);
// console.log(5 == 1);

//      !=      teng emas

// console.log(5 != 1);
// console.log(5 != 5);

// Mantiqiy amallar = bular ham boolean qiymat qaytaradi

//      ||      yoki

// console.log(5 > 4 || 5 < 4); // true
// console.log(5 < 4 || 5 > 4); // true
// console.log(5 < 4 || 5 > 6); // false

// console.log(5 == 5 || 5 < 3); // true

//      &&      va

// console.log(5 > 3 && 5 < 9); // true
// console.log(5 > 3 && 5 < 3); // false
// console.log(5 > 7 && 5 < 1); // false

// let ism = "Murod";
// let yosh = 14;

// console.log(ism == "Murod" || yosh == 18);

//      !       emas
// console.log(!(yosh > 18));

// Turlarning o'zgarishi

// console.log(String(78));
// console.log(String(false));
// console.log(String(true));
// console.log(String(undefined));

// console.log(Number("hello"));
// console.log(Number("09"));
// console.log(Number("090"));
// console.log(Number("-9.0"));
// console.log(Number(true));
// console.log(Number(null));
// console.log(Number(false));

// let a = Number(true);
// let b = Number(true);

// console.log(a + b);
// console.log(true + true);
// console.log(false + true);

// console.log(Boolean("salom"));
// console.log(Boolean(""));
// console.log(Boolean(null));
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(1));
// console.log(Boolean("hello"));
// console.log(Boolean("  sdfas   asdf  "));
// console.log(Boolean());

"" + 1 + 0; // "10"
"" - 1 + 0; // -1
true + "false"; // 1 / "1false"
6 / "3"; // 2
2 * "3"; // 6
4 + 5 + "px"; // "9px"
"$" + 4 + 5; // "$45"
"4" - 2; // 2
"4px" - 2; // NaN
"  -9  " + 5; // "  -9  5"
"  -9  " - 5; // -14
null + 1; // 1
undefined + 1; //
