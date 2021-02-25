// 1. Object Literal
// PROBLEM -> tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama : "Gilang", //property
//     energi : 10,
//     makan : function(porsi){  //method
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}. Selamat makan`); //used ` (backticks)
//     }
// }

// let mahasiswa2 = {
//     nama : "Irfan", //property
//     energi : 20,
//     makan : function(porsi){  //method
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}. Selamat makan`); //used ` (backticks)
//     }
// }



// 2. Function Declaration
// function Mahasiswa(nama, energi){ //used capital for function
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     }


//     return mahasiswa;
// }

// let gilang = Mahasiswa("Gilang",10);
// let irfan = Mahasiswa("Irfan",20); 




// 3. Constraction Function (keyword new)
// function Mahasiswa(nama, energi){ //used capital for function
//         this.nama = nama;
//         this.energi = energi;
    
//         this.makan = function(porsi){
//             this.energi += porsi;
//             console.log(`Halo ${this.nama}, selamat makan!`);
//         }
    
//         this.main = function(jam){
//             this.energi -= jam;
//             console.log(`Halo ${this.nama}, selamat bermain!`);
//         }
    
//     }


// let gilang = new Mahasiswa("Gilang",10);
// let irfan = new Mahasiswa("Irfan",20)


// 4. Object.create
//Lebih efektif dan penulisan lebih ringkas dibanding 1,2,3

//Model function declaration
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, selamat bermain!`);
//     },

//     tidur: function(jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){ //used capital for function
//         let mahasiswa = Object.create(methodMahasiswa);
//         mahasiswa.nama = nama;
//         mahasiswa.energi = energi;

//         return mahasiswa;

// }

//     let gilang = Mahasiswa("Gilang",10);
//     let irfan = Mahasiswa("Irfan",20); 


// //Model Constraction Function
// function Mahasiswa(nama, energi){ //used capital for function
//         //let this = Object.create(Mahasiswa.prototye); ->secara otomatis membuat variabel this, parent object Mahasiswa.prototye
//         this.nama = nama;
//         this.energi = energi;
// }

// Mahasiswa.prototype.makan = function (prosi) {
//     this.energi += prosi;
//     return console.log(`Halo ${this.nama}, selamat makan!`);
// }

// Mahasiswa.prototype.main = function (jam) {
//     this.energi -= jam;
//     return console.log(`Helo ${this.nama}, selamat bermain!`);
// }

// Mahasiswa.prototype.tidur = function (jam) {
//     this.energi += jam * 2;
//     return console.log(`Helo ${this.nama}, selamat tidur!`);
// }


//     let gilang = new Mahasiswa("Gilang",10);
//     let irfan = new Mahasiswa("Irfan",20); 


//Versi Class
class Mahasiswa {
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }


    makan(prosi) {
        this.energi += prosi;
        return console.log(`Halo ${this.nama}, selamat makan!`);
    }

    main(jam) {
        this.energi -= jam;
        return console.log(`Helo ${this.nama}, selamat bermain!`);
    }

    tidur(jam) {
        this.energi += jam * 2;
        return console.log(`Helo ${this.nama}, selamat tidur!`);
    }

}

    let gilang = new Mahasiswa("Gilang",10);
    let irfan = new Mahasiswa("Irfan",20); 