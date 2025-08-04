// // function tambah(a, b) {
// //    return a + b;
// // }

// // let hasil = tambah(5, 3);
// // console.log("Hasil: " + hasil);

// let sepeda = {
//    merk: "United",
//    jumlah_gear: 7,
//    color: "biru",
 
//    start: function() {
//      console.log("Sepeda mulai dikayuh.");
//    },
//    brake: function() {
//      console.log("Sepeda mengerem.");
//    }
//  };
//  console.log(sepeda.merk);
//  console.log(sepeda.color);

//  sepeda.start();
//  sepeda.brake(); 

// function Car(name, model, color, weight) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
//   this.weight = weight;

//   this.start = function() {
//     console.log(`${this.name} dinyalakan.`);
//   };
//   this.drive = function() {
//     console.log(`${this.name} sedang berjalan.`);
//   };

//   }

//   let car1 = new Car("Toyota" , 2020, "blue", "1000kg");
//   let car2 = new Car("Honda" , 2021, "red", "950kg");

//   car1.start();
//   car2.drive();

// class Car {
//   constructor(name, model, color) {
//       this.name = name;
//       this.model = model;
//       this.color = color;
//   }

//   start() {
//       console.log(${this.name} Dinyalakan);
//   }

//   drive() {
//       console.log(${this.name} Berjalan);
//   }
// }

// let car1 = new Car("Toyota", 2021, "Blue")

// car1.start();

// class sepeda {
//   constructor(name, model, color) {
//       this.name = name;
//       this.model = model;
//       this.color = color;
//   }

//   start() {
//       console.log(`${this.name} Sepeda mulai Di Kayuh`);
//   }

//   drive() {
//       console.log(`${this.name} Sepeda Mengerem`);
//   }
// }

// let sepeda1 = new sepeda("Polygon", 18, "Kuning")

// sepeda1.start();

class Student {
  constructor(name, nim, department, year) {
      this.name = name;
      this.nim = nim;
      this.department = department;
      this.year = year;
  }

  introduce() {
      console.log(`Halo, saya ${this.name}, mahasiswa ${this.department} angkatan ${this.year}`);
  }

  isSenior() {
      return this.year < 2025;
  }
}

let mahasiswa1 = new Student("Azka Okana", "123456789", "Informatika", 2023);

mahasiswa1.introduce();  // Output: Halo, saya Rasy, mahasiswa Informatika angkatan 2023
console.log(mahasiswa1.isSenior());  // Output: true