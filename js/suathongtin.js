let tableElement;
var ThongTin=[];
function layThongTin(obj){
    tableElement=obj.parentElement;
    console.log(tableElement);
    const user=tableElement.getElementsByClassName('tentk')[0].innerHTML;
    const pass=tableElement.getElementsByClassName('pass')[0].innerHTML;
    const address=tableElement.getElementsByClassName('address')[0].innerHTML;
    const fullname=tableElement.getElementsByClassName('fullname')[0].innerHTML;
    const phone=tableElement.getElementsByClassName('phone')[0].innerHTML;
    const datesignup=tableElement.getElementsByClassName('datesignup')[0].innerHTML;
    const usertype=tableElement.getElementsByClassName('usertype')[0].innerHTML;

    document.getElementById('login_name').value=user;
    document.getElementById('pass').value = pass;
    document.getElementById('address').value = address;
    document.getElementById('fullname').value = fullname;
    document.getElementById('phone').value = phone;
    document.getElementById('datesignup').value = datesignup;
    document.getElementById('usertype').value = usertype;
    openForm();
}
function suaThongTin(){
    var TaiKhoan=JSON.parse(localStorage.getItem('TaiKhoan'));
    const user=document.getElementById('login_name').value;
    const pass=document.getElementById('pass').value;
    const address=document.getElementById('address').value;
    const fullname=document.getElementById('fullname').value;
    const phone=document.getElementById('phone').value;
    const datesignup=document.getElementById('datesignup').value;
    const usertype=document.getElementById('usertype').value;

    tableElement.getElementsByClassName('tentk')[0].innerHTML=user;
    tableElement.getElementsByClassName('pass')[0].innerHTML=pass;
    tableElement.getElementsByClassName('address')[0].innerHTML=address;
    tableElement.getElementsByClassName('fullname')[0].innerHTML=fullname;
    tableElement.getElementsByClassName('phone')[0].innerHTML=phone;
    tableElement.getElementsByClassName('datesignup')[0].innerHTML=datesignup;
    tableElement.getElementsByClassName('usertype')[0].innerHTML=usertype;
    ThongTin={
        'username':user,
        'password':pass,
        'address':address,
        'fullname':fullname,
        'phone':phone,
        'datesignup':datesignup,
        'usertype':usertype
    }
    closeForm();
}
function openForm() {
    document.getElementsByClassName("popup-form")[0].style.display = "block";
}
function closeForm() {
    document.getElementsByClassName("popup-form")[0].style.display = "none";
}
let productElement;
function layThongTinSanPham(obj){
    productElement=obj.parentElement;
    const img=productElement.children[1].children[0].src;
    const name=productElement.getElementsByClassName('tensp')[0].innerHTML;
    const price=productElement.getElementsByClassName('giasp')[0].innerHTML;
    const discount=productElement.getElementsByClassName('phantram')[0].innerHTML;
    const id=productElement.getElementsByClassName('soid')[0].innerHTML;
    const brand=productElement.getElementsByClassName('brand')[0].innerHTML;

    document.getElementById('img').value=img;
    document.getElementById('name').value = name;
    document.getElementById('price').value = price;
    document.getElementById('discount').value = discount;
    document.getElementById('id').value = id;
    document.getElementById('brandsp').value = brand;
    openFormSP();
}
function suaThongTinSanPham(){
    const img=document.getElementById('img').value;
    const name=document.getElementById('name').value;
    const price=document.getElementById('price').value;
    const discount= document.getElementById('discount').value;
    const id= document.getElementById('id').value;
    const brand= document.getElementById('brandsp').value;

    productElement.children[1].children[0].src=img;
    productElement.getElementsByClassName('tensp')[0].innerHTML=name;
    productElement.getElementsByClassName('giasp')[0].innerHTML=price;
    productElement.getElementsByClassName('phantram')[0].innerHTML=discount;
    productElement.getElementsByClassName('soid')[0].innerHTML=id;
    productElement.getElementsByClassName('brand')[0].innerHTML=brand;
    closeFormSP();
}
function openFormSP() {
    document.getElementsByClassName("popup-form")[0].style.display = "block";
}
function closeFormSP(){
    document.getElementsByClassName("popup-form")[0].style.display = "none";

}