const products=document.querySelectorAll('.sanpham');
const prev=document.querySelector('.prev');
const next= document.querySelector('.next');
const page= document.querySelector('.page');
const maxItem=8;//số sản phẩm lớn nhất trong 1 trang
let sotrang=1;
const pagination = Math.ceil(products.length/maxItem); //số trang bằng chiều dài mảng chia cho max item
    //math ceil là làm tròn số
prev.addEventListener('click',function(){
    sotrang--;
    check();
    showItem();
})
next.addEventListener('click',function(){
    sotrang++;
    check();
    showItem();
})
function check(){
    if(sotrang==pagination){
        next.classList.add('disabled');
    }
    else{
        next.classList.remove('disabled');
    }
    if(sotrang==1){
        prev.classList.add('disabled');
    }
    else{
        prev.classList.remove('disabled');
    }
}
function showItem(){
    for(let i=0;i<products.length;i++){//duyệt danh sách sản phẩm
        products[i].classList.remove("show");
        products[i].classList.add("hide");
        if(i>=(sotrang*maxItem)-maxItem && i<sotrang*maxItem){//nếu điều kiện thoả thì show ra màn hình các sản phẩm có trong trang
            products[i].classList.remove("hide");    
        products[i].classList.add("show");
        }
        page.innerHTML=sotrang;
    }
}
window.onload=function(){
    showItem();
    check();
}