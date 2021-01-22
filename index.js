//SOAL NO 1
document.write("<b>Soal No 1 <br></b>")
let jabatan = "hrd";
// let jabatan = "staff";

if(jabatan === "hrd") {
    document.write("tugas saya adalah melakukan rekrutmen untuk calon pegawai baru");
} else if (jabatan === "staff"){
    document.write("tugas saya adalah melakukan pekerjaan kantor");
} else {
    document.write("Saya tidak memiliki jabatan");
}


//SOAL NO 2
document.write("<br><br>Soal No 2 <br></b>")

// Buat conditional untuk membandingkan 2 buah nilai. 
// Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b,
//  dan a sama dengan b.

var a = 10;
var b = 55;
if (a<b) {
    document.write("nilai variabel a: " + a + " lebih kecil dari variabel b: " +b)
}else{
    document.write("nilai variabel a: " + a + " lebih besar dari variabel b: " +b)
}

//SOAL NO 3
document.write("<br><br>Soal No 3 <br></b>")

let hari = 6;

switch (hari) {
    case 1:
        hari = "Minggu";
    break;
    case 2:
        hari = "Senin";
    break;
    case 3:
        hari = "Selasa";
    break;
    case 4:
        hari = "Rabu";
    break;
    case 5:
        hari = "Kamis";
    break;
    case 6:
        hari = "Jumat";
    break;
    case 6:
        hari = "Sabtu";
    break

}
document.write("Sekarang adalah hari " + "<strong>"+hari+"</strong>");

//SOAL NO 4s
document.write("<br><br>Soal No 4 <br></b>")

let arah = "RIGHT";

switch (arah) {
    case "UP":
        arah = "Atas";
    break;
    case "RIGHT":
        arah = "Kanan";
    break;
    case "BOTTOM":
        arah = "Bawah";
    break;
    case "LEFT":
        arah = "Kiri";
    break;
}
document.write("Karakter Berjalan ke arah " + arah);

