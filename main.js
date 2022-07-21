/***
 * BT1: 
 */


document.getElementById('btnKQ').onclick = function() {
    //input
    var diem1 = document.getElementById('diem1').value * 1;
    var diem2 = document.getElementById('diem2').value * 1;
    var diem3 = document.getElementById('diem3').value * 1;
    var kv = document.getElementById('khuVuc').value;
    var dt = document.getElementById('doiTuong').value * 1;
    var diemChuan = document.getElementById('diemChuan').value * 1;
    var ketQua;
    //process
    switch(kv) {    //Khu vực
        case 'A':
            kv = 2; 
        break;
        case 'B':
            kv = 1;
        break;
        case 'C':
            kv = 0.5;
        break;
        default:
            kv = 0;
    }
    switch(dt) {    //Đối tượng
        case 1:
            dt = 2.5; 
        break;
        case 2:
            dt = 1.5;
        break;
        case 3:
            dt = 1;
        break;
        default:
            dt = 0;
    }
    
    var sum = dt + kv + diem1 + diem2 + diem3;

    if(diem1 <= 0 || diem2 <= 0 || diem3 <= 0) {
        ketQua = "Bạn đã rớt. Do có điểm nhỏ hơn 0"
    }else if(sum < diemChuan ) {
        ketQua = "Bạn đã rớt. Do không đạt điểm chuẩn"
    }else {
        ketQua = "Bạn đã đậu. Tổng điểm là: " + sum;
    }
    //output
    document.getElementById('ketQua').innerHTML = ketQua;
}


/**
 * BT2:
 */


document.getElementById('btnTinh').onclick = function() {
    //input
    var name = document.getElementById('name').value;
    var soKW = document.getElementById('soKW').value * 1;
    var total = 0;
    //process
    
    if(soKW <= 50) {
        total = soKW * 500;
    }else if(soKW <= 100) {
        total = (50 * 500) + (soKW - 50) * 650;
    }else if(soKW <= 200) {
        total = (50 * 500) + (50 * 650) + (soKW - 100) * 850;
    }else if(sokw <= 350) {
        total = (50 * 500) + (50 * 650) + (100 * 850) + (sokw - 200) * 110;
    }else {
        total = (50 * 500) + (50 * 650) + (100 * 850) + (150 * 1100) + (soKW - 350) * 1300;
    }
    //VND
    var formart = new Intl.NumberFormat("vn-VN");
    var totalVnd = formart.format(total) + ' VND';
    //output
    document.getElementById('total').innerHTML = "Họ & tên: " + name + "; Tiền điện: " + totalVnd;
}