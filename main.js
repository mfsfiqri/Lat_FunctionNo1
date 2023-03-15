function luasLingkaran() {
  alert("Hitung luas lingkaran");
  const phi = 3.14;
  const jari = prompt("Masukkan jari");
  const luas = phi * jari * jari;
  console.log("luas lingkaran tersebut adalah", luas);
}

function luasSegitiga() {
  alert("Hitung luas segitiga");
  const alas = prompt("Masukkan alas:");
  const tinggi = prompt("Masukkan tinggi");
  const luas = (alas * tinggi) / 2;
  console.log("luas segitiga tersebut adalah", luas);
}

function luasPersegiPanjang() {
  alert("Hitung luas persegi panjang");
  const panjang = prompt("Masukkan panjang:");
  const lebar = prompt("Masukkan lebar:");
  const luas = panjang * lebar;
  console.log("luas persegi panjang tersebut adalah", luas);
}

function luasJajarGenjang() {
  alert("Hitung luas jajar genjang");
  const alas = prompt("Masukkan alas:");
  const tinggi = prompt("Masukkan tinggi");
  const luas = alas * tinggi;
  console.log("luas jajar genjang tersebut adalah", luas);
}

luasLingkaran();
luasSegitiga();
luasPersegiPanjang()
luasJajarGenjang()
