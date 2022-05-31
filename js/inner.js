window.onload=function(){
    showProductList();
}
var a;
window.onload = function() {
    showBillList();
    showCustomersList();
}
function showBillList() {
    let billArray = [];
    billArray = JSON.parse(localStorage.getItem('HoaDon')) ? JSON.parse(localStorage.getItem('HoaDon')) : [];            

    let tr='<tr>'+
    '<th>STT</th>'+
    '<th >Mã đơn hàng</th>'+
    '<th>Phương thức thanh toán</th>'+
    '<th>Mã khách hàng</th>'+
    '<th style="display:none">Tên khách hàng</th>'+
    '<th style="display:none">Địa chỉ</th>'+
    '<th style="display:none">SĐT</th>'+
    '<th style="display:none">Sản phẩm</th>'+
    '<th style="display:none">Tên sản phẩm</th>'+
    '<th style="display:none">Size</th>'+
    '<th style="display:none">Quantity</th>'+
    '<th>Tổng tiền</th>'+
    '<th style="display:none">Mã thẻ</th>'+
    '<th >Tình trạng</th>'+
    '<th>Chi tiết đơn hàng</th>'+
    '<th style="display:none">Ngày xuất</th>'+
    '<th style="display:none">Thời gian xuất</th>'+
    '<th id="thaotac">Thao tác</th>'+
    '</tr><br>';
    for(let i=0 ; i<billArray.length ; i++ ){
       
        //Ở localStorage ghi tên thuộc tính gì thì userArray.(thuộc tính) đó
        tr += '<tr>'+
        '<td>'+(i+1)+'</td>'+
        '<td class="idBill">HD'+(i+1)+'</td>'+
        '<td  class="phuongthuc">' + billArray[i].phuongthuc + '</td>'+
        '<td  class="idCustomers">KH'+(i+1)+'</td>'+
        '<td class="TenKhachHang"style="display:none">'+billArray[i].name+'</td>'+
        '<td class="DiaChi" style="display:none">'+billArray[i].address+'</td>'+
        '<td class="SoDienThoai" style="display:none">'+billArray[i].phone+'</td>';
        for(j=0;j<billArray[i].sanpham.length;j++){
        tr+='<td class="SanPham" style="display:none"><img src="'+billArray[i].sanpham[j].sanpham+'"</td>'+
            '<td class="TenSanPham" style="display:none">'+billArray[i].sanpham[j].tensanpham+'</td>'+
            '<td class="size" style="display:none">'+billArray[i].sanpham[j].size+'</td>'+
            '<td class="quantity" style="display:none">'+billArray[i].sanpham[j].soluong+'</td>';
        }   
        tr+='<td  class="tongtien">'+billArray[i].tongtien+'</td>'+
        '<td class="MaThe" style="display:none">'+billArray[i].mathe+'</td>'+
        '<td  class="tinhtrang" onclick="xemChiTiet(this)">Đang xử lý</td>'+
        '<td onclick="ChiTietHoaDon(this)"><a href="chitiethoadon.html">Xem</a></td>'+
        '<td class="NgayXuat" style="display:none">'+billArray[i].ngayxuat+'</td>'+
        '<td class="ThoiGianXuat" style="display:none">'+billArray[i].thoigianxuat+'</td>'+
        '<td onclick="deleteBill(\''+billArray[i].name+'\')"><i class="fas fa-trash-alt"></i></td>'+
        '</tr><br>';            

    }
    document.getElementById('receive').innerHTML=tr;
}
var today=new Date();
function ChiTietHoaDon(obj){
    obj=obj.parentElement;
    const madonhang = obj.getElementsByClassName('idBill')[0].innerHTML;
    const sanpham=obj.getElementsByClassName('SanPham')[0].innerHTML;
    const phuongthuc=obj.getElementsByClassName('phuongthuc')[0].innerHTML;
    const makhachhang=obj.getElementsByClassName('idCustomers')[0].innerHTML;
    const tensanpham= obj.getElementsByClassName('TenSanPham')[0].innerHTML;
    const size=obj.getElementsByClassName('size')[0].innerHTML;
    const quantity=obj.getElementsByClassName('quantity')[0].innerHTML;
    const tongtien=obj.getElementsByClassName('tongtien')[0].innerHTML;
    const tenkhachhang=obj.getElementsByClassName('TenKhachHang')[0].innerHTML;
    const diachi=obj.getElementsByClassName('DiaChi')[0].innerHTML;
    const sodienthoai = obj.getElementsByClassName('SoDienThoai')[0].innerHTML;
    const mathe=obj.getElementsByClassName('MaThe')[0].innerHTML;
    const ngayxuat=obj.getElementsByClassName('NgayXuat')[0].innerHTML;
    const thoigianxuat=obj.getElementsByClassName('ThoiGianXuat')[0].innerHTML;
    var sp={
        'sanpham':sanpham,
        'tensanpham':tensanpham,
        'size':size,
        'quantity':quantity
    }
    var ChiTietHoaDon={
        "madonhang": madonhang,
        'sanpham':sp,
        'phuongthuc':phuongthuc,
        "makhachhang":makhachhang,
        "tongtien":tongtien,
        "tenkhachhang":tenkhachhang,
        'diachi':diachi,
        'sodienthoai':sodienthoai,
        'mathe':mathe,
        'ngayxuat':ngayxuat,
        'thoigianxuat':thoigianxuat
      }
    localStorage.setItem('ChiTietHoaDon',JSON.stringify(ChiTietHoaDon));
}
function showChiTietHoaDon(){
    let ChiTietHoaDon = JSON.parse(localStorage.getItem('ChiTietHoaDon')) ? JSON.parse(localStorage.getItem('ChiTietHoaDon')) : [];            
    var html='<div>'+
'<div class="khachhang">'+
    '<h1>THÔNG TIN KHÁCH HÀNG</h1>'+
    '<div class="makhachhang">Mã khách hàng: '+ChiTietHoaDon.makhachhang+'</div>'+
    '<div class="tenkh">Họ Tên Khách Hàng: '+ChiTietHoaDon.tenkhachhang+'</div>'+
    '<div class="diachikh">Địa chỉ Khách Hàng: '+ChiTietHoaDon.diachi+'</div>'+
    '<div class="sodienthoaikh">Số điện thoại Khách Hàng: '+ChiTietHoaDon.sodienthoai+'</div>'+
    '<div class="phuongthuckh">Phương thức thanh toán: '+ChiTietHoaDon.phuongthuc+'</div>'+
    '<div class="mathekh">Mã thẻ(nếu có): '+ChiTietHoaDon.mathe+'</div>'+
   '</div>'+
'<div class="sanphamdiv">'+
    '<h1>THÔNG TIN ĐƠN HÀNG</h1>'+
    '<div class="madonhang">Mã Hoá Đơn: '+ChiTietHoaDon.madonhang+'</div>';

    html+='<div class="tensp">Tên sản phẩm: '+ChiTietHoaDon.sanpham.tensanpham+'</div>'+
            '<div class="sizesp">Size Sản phẩm: '+ChiTietHoaDon.sanpham.size+'</div>'+
            '<div class="quantitysp">Số lượng: '+ChiTietHoaDon.sanpham.quantity+'</div>';
    html+='<div class="totalPrice">Tổng tiền đơn hàng: '+ChiTietHoaDon.tongtien+'</div>'+
    '<div class="ngayXuatHD">Ngày xuất đơn hàng: '+ChiTietHoaDon.ngayxuat+'</div>'+
    '<div class="thoiGianXuatHD">Ngày xuất đơn hàng: '+ChiTietHoaDon.thoigianxuat+'</div>'+


'</div>'+

'</div>';
document.getElementById('my-bill-detail').innerHTML=html;
}
function deleteBill(nameDelete){
var billArray= JSON.parse(localStorage.getItem('HoaDon'));
for(var i=0;i<billArray.length;i++){
    if(billArray[i].name == nameDelete){
        if(confirm('Bạn muốn xoá đơn hàng này?'))
        billArray.splice(i,1);
    }
}
    localStorage.setItem('HoaDon',JSON.stringify(billArray));
    showBillList();
}

function showCustomersList() {
    let customersArray = [];
    customersArray = JSON.parse(localStorage.getItem('HoaDon')) ? JSON.parse(localStorage.getItem('HoaDon')) : [];            
    let tr='<tr>'+
    '<th>STT</th>'+
    '<th>Mã Khách Hàng</th>'+
    '<th>Họ tên khách hàng</th>'+
    '<th>Địa chỉ</th>'+
    '<th>Số điện thoại</th>'+
    '<th>Email</th>'+
    '<th>Thao tác</th>'+
    '</tr>'+
    '<br>';
    for(let i=0 ; i<customersArray.length ; i++ ){//duyệt danh sách hoá đơn
       
        //Ở localStorage ghi tên thuộc tính gì thì userArray.(thuộc tính) đó
        tr += '<tr>'+
        '<td>'+(i+1)+'</td>'+
        '<td>KH'+(i+1)+'</td>'+
        '<td class="idBill" style="display:none">HD'+(i+1)+'</td>'+
        '<td>' + customersArray[i].name + '</td>'+
        '<td>' + customersArray[i].address + '</td>'+
        '<td>' + customersArray[i].phone + '</td>'+
        '<td>' + customersArray[i].email + '</td>'+
        '<td onclick="deleteCustomers(\''+customersArray[i].name+'\')"><i class="fas fa-trash-alt"></i></td>'+
        '</tr>'+
        '<br>';            

    }
    document.getElementById('customers').innerHTML=tr;
}

function deleteCustomers(nameDelete){
var customersArray= JSON.parse(localStorage.getItem('HoaDon'));
for(var i=0;i<customersArray.length;i++){
    if(customersArray[i].name == nameDelete){
        if(confirm('Bạn muốn xoá khách hàng này?'))
        customersArray.splice(i,1);
    }
}
localStorage.setItem('HoaDon',JSON.stringify(billArray));
showCustomersList();
}
