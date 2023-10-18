// object literal
// let Mahasiswa = {
//   nama: 'fahrul',
//   health: 10,
//   makan: function(porsi) {
//     this.health = this.health + porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   }
// }
// let Mahasiswa1 = {
//   nama: 'rendi',
//   health: 10,
//   makan: function(porsi) {
//     this.health = this.health + porsi;
//     console.log(`halo ${this.nama}, selamat makan!`);
//   }
// }

//function declaration
// function Mahasiswa(nama,health) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.health = health;

//   mahasiswa.makan =function (porsi){
//     this.health += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   }

//   mahasiswa.main =function(jam){
//     this.health -= jam
//     console.log(`halo ${this.nama}, selamat bermain`);
//   }
//   return mahasiswa;
// }
// let fahrul = Mahasiswa(`fahrul`,10);
// let yuda = Mahasiswa(`yuda`,15);

// constructor function
// function Mahasiswa(nama,health) {
  
//   this.health = health;
//   this.nama = nama;

//   this.makan =function (porsi){
//     this.health += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
//   }

//   this.main =function(jam){
//     this.health -= jam
//     console.log(`halo ${this.nama}, selamat bermain`);
//   }
 
// }
// let fahrul= new Mahasiswa(`fahrul`,19);


// function declaration object create()
// const methodMahasiswa = {
//   makan :function (porsi){
//     this.health += porsi;
//     console.log(`halo ${this.nama}, selamat makan`);
  
//   },
//   main :function(jam){
//      this.health -= jam
//      console.log(`halo ${this.nama}, selamat bermain`);
//   },
//   tidur :function(jam){
//   this.health += jam * 2; 
//   console.log(`halo ${this.nama}, selamat tidur`);
//   }
// };

//    function Mahasiswa(nama,health) {
//     let mahasiswa = Object.create(methodMahasiswa);
//      mahasiswa.nama = nama;
//      mahasiswa.health = health;
     
//   return mahasiswa;
//  }
//  let fahrul = Mahasiswa(`fahrul`,10);
//  let yuda = Mahasiswa(`yuda`,15);


//prototype
function Atlet(nama,health) {
  this.nama = nama;
  this.health = health;
}

Atlet.prototype.makan = function (porsi) {
  this.health += porsi;
  return `halo ${this.nama}, selamat makan`;
}

Atlet.prototype.tanding = function (set) {
  this.health -= set * 2;
  return `halo ${this.nama}, selamat bertanding`;
}

Atlet.prototype.latihan = function (jam) {
  this.health -= jam;
  return `halo ${this.nama}, semangat latihan!`;
}

Atlet.prototype.tidur = function (jam) {
  this.health += jam * 2;
  return `halo ${this.nama}, selamat tidur`;
}

let fahrul =new Atlet('fahrul',100);


//class
// class Dokter{
//   constructor(nama, energi){
//     this.nama = nama;
//     this.energi = energi;
//   }

//   Makan(porsi) {
//        this.energi += porsi;
//        return `halo ${this.nama}, selamat makan`;
//   }
    
//   kerja(jam) {
//        this.kerja -= jam;
//        return `halo ${this.nama}, selamat kerja`;
//   }
    
//   istirahat(jam) {
//       this.energi += jam * 2;
//       return `halo ${this.nama}, selamat istirahat`;
//   }   
// }

// let fahrul =new Dokter('fahrul',100);
// let yuda =new Dokter('yuda',50)
