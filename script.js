// function tambah(a, b) {
//    return a + b;
// }

// let hasil = tambah(5, 3);
// console.log("Hasil: " + hasil);

let sepeda = {
   merk: "United",
   jumlah_gear: 7,
   color: "biru",
 
   start: function() {
     console.log("Sepeda mulai dikayuh.");
   },
   brake: function() {
     console.log("Sepeda mengerem.");
   }
 };
 console.log(sepeda.merk);
 console.log(sepeda.color);

 sepeda.start();
 sepeda.brake();