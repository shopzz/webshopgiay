let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchForm.classList.toggle('active');
} // nếu bấm vào icon search thì cái bar search sẽ hiện ra

let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
} // nếu bấm vào icon nav thì cái menu sẽ hiện ra


/*----------------------HIỂN THỊ CHI TIẾT SẢN PHẨM------------------*/
const baoquan = document.querySelector(".baoquan") //class bảo quản
const chitiet = document.querySelector(".chitiet") //class chi tiết

if(baoquan){ //NẾU NHẤN VÀO BẢO QUẢN
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-chitiet").style.display="none" //THÌ CONTENT CHI TIẾT SẼ ẨN
        document.querySelector(".product-content-baoquan").style.display="block" //CONTENT BẢO QUẢN SẼ HIỆN
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){ // NẾU NHẤN VÀO CHI TIẾT
        document.querySelector(".product-content-chitiet").style.display="block" //THÌ CONTENT CHI TIẾT SẼ HIỆN
        document.querySelector(".product-content-baoquan").style.display="none" // CONTENT BẢO QUẢN SẼ ẨN
    })
}
