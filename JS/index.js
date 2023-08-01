// bài 1 : tính tiền lương nhân viên 
var oneDaySalary = 300;
var workingDay = 30 ;
var salary = oneDaySalary * workingDay ;
console.log('salary',salary);

// bài 2 : tính giá trị trung bình 
var soThucMot = 1;
var soThucHai = 2;
var soThucBa = 3;
var soThucBon = 4;
var soThucNam = 5;
var trungBinh = (soThucMot + soThucHai + soThucBa + soThucBon + soThucNam) / 5 ;
console.log('trungBinh :',trungBinh);

// bài 3 : quy đổi tiền 
var USD = 4;
var VND = '23500'; 
VND = VND
var sauQuyDoi = USD * VND ;
sauQuyDoi = sauQuyDoi.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
console.log('sauQuyDoi :',sauQuyDoi);


// bài 4 : tính diện tích , chu vi hình chữ nhật 
var chieuDai = 5 ;
var chieuRong = 7 ;
var dienTich = chieuDai * chieuRong ;
var chuVi = (chieuDai + chieuRong) * 2 ;
console.log('dienTich',dienTich);
console.log('chuVi',chuVi);

// bài 5 : tính tổng 2 ky số 
var kySoMot = 12 ;
var kySoHai = 44 ;
var tongKySoMot = (kySoMot % 10) + Math.floor(kySoMot / 10);
var tongKySoHai = (kySoHai % 10) + Math.floor( kySoHai / 10);
var tongHaiKySo = tongKySoMot + tongKySoHai ;
console.log('tongHaiKySo',tongHaiKySo);