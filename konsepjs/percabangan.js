let  belanja = 20000
console.log("total belanja:" +belanja)

let diskon= 0
if (belanja > 100000){
  diskon = belanja * 0.10
}
else if(belanja == 100000){
  diskon = belanja * 0.05
}
else {
  console.log("tidak dapat diskon")
}
let totalpembayaran = belanja - diskon;

 console.log("TotalBayar"+totalpembayaran)
 