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
function Mahasiswa(nama, energi){ //used capital for function
        this.nama = nama;
        this.energi = energi;
    
        this.makan = function(porsi){
            this.energi += porsi;
            console.log(`Halo ${this.nama}, selamat makan!`);
        }
    
        this.main = function(jam){
            this.energi -= jam;
            console.log(`Halo ${this.nama}, selamat bermain!`);
        }
    
    }


let gilang = new Mahasiswa("Gilang",10);
let irfan = new Mahasiswa("Irfan",20)


// 4. Object.create
