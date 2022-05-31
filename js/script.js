function createAdmin(){
    var userArray=[];
    var bien="KhachHangA";
    if(localStorage.getItem('TaiKhoan')===null){
        var user1={
            username: 'admin',
            password: 'admin',
            address:'1400000000000',
            phone:'0828098274',
            fullname: 'admin',
            datesignup: '20/07/2021',
            usertype: "admin"
        }

        userArray.push(user1);
        // console.log(userArray);
        localStorage.setItem('TaiKhoan',JSON.stringify(userArray));
        showUserList();
    }
}

function showUserList(){
    if(localStorage.getItem('TaiKhoan')===null){
        return false;
    }
    userArray=JSON.parse(localStorage.getItem('TaiKhoan'));
    var tr=`
    <thead>
            <tr>
                    <th>STT</th>
                    <th>Tên tài khoản</th>
                    <th>Password</th>
                    <th>Địa chỉ</th>
                    <th>Họ và tên</th>
                    <th>Số điện thoại</th>
                    <th>Ngày đăng ký</th>
                    <th>User type</th>
                    <th colspan="2">Thao tác</th>
            </tr>
    </thead>
    `;
    for(var i=0;i<userArray.length;i++){
        tr+='<tbody>'+
        '<tr>'+
            '<td>'+(i+1)+'</td>'+
            '<td class="tentk">'+userArray[i].username+'</td>'+
            '<td class="pass">'+userArray[i].password+'</td>'+
            '<td class="address">'+userArray[i].address+'</td>'+
            '<td class="fullname">'+userArray[i].fullname+'</td>'+
            '<td class="phone">'+userArray[i].phone+'</td>'+
            '<td class="datesignup">'+userArray[i].datesignup+'</td>'+
            '<td class="usertype">'+userArray[i].usertype+'</td>'+
            '<td style="cursor:pointer;" onclick="layThongTin(this, '+(i+1)+')" id="save-button" ><i class="fas fa-edit"></i></td>'+
            '<td style="cursor:pointer;" onclick="deleteUser(\''+userArray[i].username+'\')"><i class="fas fa-trash-alt"></i></td>'+
            '</tr>'+
            '</tbody>';
    }
    document.getElementById('usersList').innerHTML=tr;
}

function deleteUser(usernameDelete){
    var userArray= JSON.parse(localStorage.getItem('TaiKhoan'));
    for(var i=0;i<userArray.length;i++){
        if(userArray[i].username == usernameDelete){
            if(confirm('Bạn muốn xoá tài khoản này?'))
                userArray.splice(i,1);
        }
    }
    localStorage.setItem('TaiKhoan',JSON.stringify(userArray));
    showUserList();
}
var userkh;

function login()
{   

    let username,password;
    username = document.getElementById('login_name').value;
    password = document.getElementById('pass').value;
    let userArray = [];
    userArray = JSON.parse(localStorage.getItem('TaiKhoan')) ? JSON.parse(localStorage.getItem('TaiKhoan')) : [];
    if(userArray.some((v) => {return v.username==username && v.password==password})){
        let currentUser = userArray.filter((v) => {return v.username==username && v.password==password})[0]
        localStorage.setItem('loginName', currentUser.username);
        localStorage.setItem('loginPass', currentUser.password);
        window.location.href = 'index.html';
    }
    else{
        alert('Bạn đăng nhập thất bại!');
    }
}
function Logout(){
    localStorage.removeItem('loginName');
    localStorage.removeItem('loginPass');
    window.location.href = 'dangnhap.html';
}
function hienthimenuAdmin(){
    var menu=['Danh Mục', 'Sản Phẩm', 'Tài Khoản'];
    var s="";
    for(i=0;i<menu.length;i++){
        var a='<li><a href="admin.html?'+i+'">'+menu[i]+'</a></li>';
        s+=a;
    }
    console.log(menu);
    document.getElementById("admin-menu").innerHTML=s;
}
function hienthiAdmin(){
    var url=window.location.href;
    var id=url.split('?');
    id=parseInt(id[1]);
    switch(id){
        case 0: document.getElementsByClassName('admin-content-right').innerHTML='<div class="information">HELLO</div>';
                break;
        case 1: document.getElementsByClassName('admin-content-right').innerHTML='<div class="information">HELLO</div>';
                break;
        case 2: document.getElementsByClassName('admin-content-right').innerHTML=' <h2>DANH SÁCH TÀI KHOẢN</h2><div class="information"><table  id="usersList"></table></div>';
                break;
        default: break;
    }
}

window.onload=function(){
    showUserList();
    createAdmin();
    hienthimenuAdmin();
    hienthiAdmin();
    createProduct();
    showProductList();
}