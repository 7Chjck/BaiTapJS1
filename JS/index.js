// bài 1 : tính tiền lương nhân viên 
// B1 : xác định input 
// oneDaySalary : lương 1 ngày làm 
// workingDay : số giờ làm 
// salary : tổng lương
// var oneDaySalary = 100.000 ;
// var workingDay  ;
// var salary = oneDaySalary * workingDay ;
// b2 : xử lí 
document.getElementById('totalSalary').onclick = function () {
    var oneDaySalary = document.getElementById('oneDaySalary').value;
    var workingDay = document.getElementById('workingDay').value;
    var salary = oneDaySalary * workingDay ;
    // b3 : in giá trị ra màn hình 
    document.getElementById('salary').innerHTML = salary ;
}



// bài 2 : tính giá trị trung bình 
// b1 : xác định input 
// var soThucMot ;
// var soThucHai ;
// var soThucBa ;
// var soThucBon ;
// var soThucNam ;
// var trungBinh = (soThucMot + soThucHai + soThucBa + soThucBon + soThucNam) / 5 ;
// b2 : xử lí 
document.getElementById('giaTriTrungBinh').onclick = function() {
    var soThucMot = +document.getElementById('soThucMot').value;
    var soThucHai = +document.getElementById('soThucHai').value;
    var soThucBa = +document.getElementById('soThucBa').value;
    var soThucBon = +document.getElementById('soThucBon').value;
    var soThucNam = +document.getElementById('soThucNam').value;
    var trungBinh = (soThucMot + soThucHai + soThucBa + soThucBon + soThucNam) / 5 ;
    // b3 : in giá trị ra màn hình 
    document.getElementById('trungBinh').innerHTML = trungBinh ;
}

// bài 3 : quy đổi tiền 
// b1 : xác định input
// USD : giá USD hiện nay 
// VND : giá tiền VND 
// exchange: giá tiền sau qui đổi từ USD sang VND 
// var USD ;
// var VND = '23500'; 
// var exchange = USD * VND ;
// exchange = exchange.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
// b2 : xử lí 
document.getElementById('btn-exchange').onclick = function() {
    var USD = +document.getElementById('USD').value;
    
    var VND = document.getElementById('VND').value;
    VND = 23500;
    console.log("VND",VND);
    var exchange = USD * VND ;
    exchange = exchange.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    // b3 : in giá trị 
    document.getElementById('exchange').innerHTML = exchange;

}


// bài 4 : tính diện tích , chu vi hình chữ nhật 
// b1 : xác định input 
// chieuDai : chiều dài hình chữ nhật
// chieuRong : chiều rộng hình chữ nhật 
// dienTich : diện tích hình chữ nhật 
// chuVi : chu vi hình chữ nhật 
// dienTich = chieuDai * chieuRong ;
// chuVi = (chieuDai + chieuRong) * 2 ;

// B2 : xử lí 
document.getElementById('btn-count').onclick = function() {
    var chieuDai = document.getElementById('chieuDai').value;
    var chieuRong = document.getElementById('chieuRong').value;
    var dienTich = chieuDai * chieuRong ;
    var chuVi = (chieuDai + chieuRong ) * 2 ;
    document.getElementById('dienTich').innerHTML = "Diện tích hình chữ nhật :" + dienTich;
    document.getElementById('chuVi').innerHTML = "Chu vi hình chữ nhật :"+ chuVi;
    
}


// bài 5 : tính tổng 2 ky số 
// b1 : xác định input 
// ký số : kySo
// hàng đơn vị : hangDonVi
// hàng chục : hangChuc 
// tổng hài số = hàng dơn vị + hàng chục  : tongHaiSo

// b2 : xử lí 
document.getElementById('tong').onclick = function() {
    // lấy ký số khách hàng nhập
    var kySo = document.getElementById('kySo').value;
    
    // chỉ cho phép nhập số từ 10-99 
    if(kySo < 10 || kySo > 99){
        document.getElementById('tongHaiSo').innerHTML = "vui lòng nhập số từ 10-99";
        
    }else{
        // tìm ký số 1 (tìm hàng đơn vị)
    var hangDonVi =  kySo % 10;
   
    // tìm ký số 2 ( tìm hàng chục)
    var hangChuc = Math.floor(kySo / 10) ;

    // tổng hai số = hàng đơn vị + hàng chục
    var tongHaiSo = hangDonVi + hangChuc ;
//    b3 : in giá trị 
    document.getElementById('tongHaiSo').innerHTML = tongHaiSo;
    }
    
}