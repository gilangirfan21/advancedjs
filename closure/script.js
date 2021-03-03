// function init () {
//     // let nama = "Gilang";
//     return function (nama) {
//         console.log(nama);
//     }
    
// }

// let panggilNama = init();

// panggilNama("Gilang");
// panggilNama("Irfan");


// function ucapkanSalam(waktu) {
//     return function(nama) {
//         console.log(`Selamat ${waktu} ${nama}, semoga harimu menyenangkan`);
//     }

// }

// let selamatPagi = ucapkanSalam("pagi");
// let selamatSiang = ucapkanSalam("siang");
// let selamatSore = ucapkanSalam("sore");

// selamatPagi("Gilang");
// selamatSiang("Irfan");




let add = (function() {
    let counter = 0;
    return function() {
        return ++counter;
    }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());