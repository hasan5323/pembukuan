const month = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","October","November","December"];
        
const d = new Date();
let name = month[d.getMonth()];
document.getElementById("bulan").innerHTML ="ini adalah bulan " + name;