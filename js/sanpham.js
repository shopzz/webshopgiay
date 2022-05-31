    var dataList=[];
    /*B1: LẤY DANH SÁCH SẢN PHẨM ĐÃ CÓ TRONG LOCALSTORAGE*/
    var DanhSachSanPham=localStorage.getItem('DanhSachSanPham');
    if(DanhSachSanPham==null)
    {
        DanhSachSanPham=new Array();
    }
    function taoSanPham(){
        DanhSachSanPham=JSON.parse(localStorage.getItem('DanhSachSanPham'));
        /*B1: truy cập tới node tên sản phẩm*/
        // var nodeHinhSP=document.getElementById('hinhAnh');
        // var HinhSP=nodeHinhSP.files.value;
            var arr=document.getElementsByTagName('input');
            var hinhanh=arr[6].value;
            var tensp=arr[7].value;
            var giasp=arr[8].value;
            var phantram=arr[9].value;
            var id=arr[10].value;
            var brand=arr[11].value;
            var detail=arr[12].value;
            if(hinhanh==''||tensp==''||giasp==''||phantram==''||id==''||brand==''||detail==''){
                alert('Tất cả thông tin đều là bắt buộc, xin hãy nhập hết!');
                return;
            }
            if(isNaN(id)){
                alert("Chưa nhập đúng định dạng ID!");
                return;
            }
            for(i=0;i<DanhSachSanPham.length;i++){
                if(id==DanhSachSanPham[i].ID){
                    alert('ID này đã tồn tại!');
                    return;
                }
            }

        var nodeHinhSP= document.getElementById("hinhAnh");
        var HinhSP=nodeHinhSP.value;
        nodeHinhSP.value='';
        /*B2: Lấy dữ liệu người dùng nhập*/
        var nodeTenSP=document.getElementById('ten');
        var TenSP=nodeTenSP.value;
        nodeTenSP.value='';
        var nodeGiaSP=document.getElementById('giasp');
        var GiaSP=parseInt(nodeGiaSP.value);
        nodeGiaSP.value='';
        var nodePhanTramGiamGia=document.getElementById('phantramgiamgia');
        var phanTramGiamGia=nodePhanTramGiamGia.value;
        nodePhanTramGiamGia.value='';
        var nodeID=document.getElementById('soid');
        var ID=nodeID.value;
        nodeID.value='';
        var nodeBrand=document.getElementById('brand');
        var Brand=nodeBrand.value;
        nodeBrand.value='';
        var nodeDetail=document.getElementById('detail-product');
        var Detail=nodeDetail.value;
        nodeDetail.value='';
        var SanPham=TaoDoiTuongSanPham(HinhSP,TenSP,GiaSP,phanTramGiamGia,ID,Brand,Detail); //khi tạo sản phẩm mới thì chưa có id
        /*B3: Đưa sản phẩm vào danh sácgh */
        DanhSachSanPham.push(SanPham);
        /*Lưu trữ danh sách sản phẩm xuống localstorage */
        var jsonDSSP=JSON.stringify(DanhSachSanPham);
        localStorage.setItem('DanhSachSanPham',jsonDSSP);
        alert('Thêm sản phẩm thành công!');
    }

    function chuyenDanhSachDoiTuongSPHTML(DanhSachSanPham){
        var HTMLDSSanPham='<div class="products-content">';
        for(var i=0;i<DanhSachSanPham.length;i++){
            var SanPham=DanhSachSanPham[i];
            var htmlSanPham=chuyenDoiTuongSPHTML(SanPham);
            HTMLDSSanPham+=htmlSanPham;
        }
        HTMLDSSanPham+='</div>';
        return HTMLDSSanPham;
    }
    createProduct();
function createProduct(){
	if(localStorage.getItem('DanhSachSanPham')==null){
		var productArray = [
			{ID:10042,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.', Brand:'ADIDAS',    HinhSP:'https://assets.adidas.com/images/w_600,f_auto,q_auto/1f893c7c14424f6f8f72a98101359ecb_9366/Giay_Grand_Court_trang_F36483_01_standard.jpg', TenSP:'Adidas Grand Court', GiaSP:2500000,phanTramGiamGia:0.2},
			{ID:10041,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'ADIDAS',    HinhSP:'https://deestore.vn/wp-content/uploads/2019/04/Superstar_Shoes_White_EG4958_01_standard.jpg', TenSP:'Adidas Superstar', GiaSP:2400000,phanTramGiamGia:0.1},
			{ID:10040,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'ADIDAS',    HinhSP:'https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/cd1631e9d6fb48ccaedcaafc0106320f_9366/Giay_UltraBoost_20_trang_EF1042_01_standard.jpg', TenSP:'Adidas Ultraboost 20', GiaSP:5000000,phanTramGiamGia:0.2},
			{ID:10045,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.', Brand:'ADIDAS',    HinhSP:'https://assets.adidas.com/images/w_600,f_auto,q_auto/b021aabd9254426f99e3ad2000309d0e_9366/Giay_adidas_Ultraboost_DNA_x_LEGO(r)_Colors_DJen_H67953_01_standard.jpg', TenSP:'Adidas Ultraboost DNAxLEGO', GiaSP:5000000,phanTramGiamGia:0.1},
			{ID:10046,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'NIKE',    HinhSP:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/jvcf7clhvzyavyopsi9n/revolution-5-road-running-shoes-8P3bh3.png', TenSP:'Nike Revolution 5', GiaSP:3239000,phanTramGiamGia:0.1},
			{ID:10047,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'NIKE',    HinhSP:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/fb7eda3c-5ac8-4d05-a18f-1c2c5e82e36e/blazer-mid-77-vintage-shoe-dNWPTj.png', TenSP:'Nike Blazer Mid 77', GiaSP:3239000,phanTramGiamGia:0.1},
            {ID:10048,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'NIKE',    HinhSP:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/00b4e9ef-6dc1-4c84-9569-d8b85c430371/air-max-2021-womens-shoes-CkfHnZ.png', TenSP:'Nike Air Max 2021', GiaSP:4239000,phanTramGiamGia:0.1},
			{ID:10049,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'NIKE',    HinhSP:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ekooqxmzujps9pj0vlak/air-max-270-mens-shoes-KkLcGR.png', TenSP:'Nike Air Max 270', GiaSP:3239000,phanTramGiamGia:0.1},

            {ID:10050,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'PUMA',    HinhSP:'https://thesneakerhouse.com/wp-content/uploads/2020/11/Puma-37157026-11.jpg', TenSP:'Puma RS-X3', GiaSP:1239000,phanTramGiamGia:0.1},
            {ID:10051,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'PUMA',    HinhSP:'https://shopgiayreplica.com/wp-content/uploads/2019/04/puma-fenty-trang-bong-replica.jpg', TenSP:'Puma Fenty', GiaSP:2239000,phanTramGiamGia:0.1},
            {ID:10052,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'PUMA',    HinhSP:'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/309668/04/sv01/fnd/EEA/fmt/png/PUMA-Shuffle-Trainers', TenSP:'Puma Shuffle Trainers', GiaSP:2219000,phanTramGiamGia:0.1},
            {ID:10053,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'PUMA',    HinhSP:'https://www.studio-88.co.za/pub/media/catalog/product/cache/bd76f6abb00859c1813be1a204cdea22/p/m/pma2154ybd-puma-xray-jr-black-37292036-v1_jpg_1.jpg', TenSP:'Puma X-Ray Youth Sneaker', GiaSP:3239000,phanTramGiamGia:0.1},

            {ID:10054,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'FILA',    HinhSP:'https://cdn-images.farfetch-contents.com/marcelo-burlon-county-of-milan-fila-fusion-sneakers_17430798_36816794_2048.jpg', TenSP:'Fila Fusion Sneakers',GiaSP:2239000,phanTramGiamGia:0.1},
            {ID:10055,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'FILA',    HinhSP:'https://bizweb.dktcdn.net/thumb/1024x1024/100/289/867/products/fila-heritage-disruptor-ii-white-fs1hta1071x-1.png?v=1558067300693', TenSP:'Fila Disruptor 2', GiaSP:1239000,phanTramGiamGia:0.1},
            {ID:10056,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'FILA',    HinhSP:'https://bizweb.dktcdn.net/thumb/1024x1024/100/289/867/products/fila-disruptor-2-logo-cream-fs1htb3194x-crm-1.jpg?v=1573998243427', TenSP:'Fila Disruptor 2 Logo Cream' ,GiaSP:1539000,phanTramGiamGia:0.1},
            {ID:10057,Detail:'Mang đến sự thoải mái và phong cách không thể nhầm lẫn. Da mềm ở phía trên tăng thêm độ bền trong khi cổ giày co giãn cá tính hóa sự vừa vặn.' ,Brand:'FILA',    HinhSP:'https://bizweb.dktcdn.net/100/289/867/products/fila-interlation-gray-1jm00790-050-1.jpg?v=1575873132010', TenSP:'Fila Interation Gray', GiaSP:1839000,phanTramGiamGia:0.1},
            ];
		localStorage.setItem('DanhSachSanPham',JSON.stringify(productArray));
	}
}
function renderProduct(){
    /*B1: LẤY DANH SÁCH SẢN PHẨM TRONG LOCALSTORAGE*/
    var jsonDanhSachSanPham=localStorage.getItem('DanhSachSanPham');
    var DanhSachSanPham=TaoDoiTuongSanPham().fromJSON(jsonDanhSachSanPham);
    /*BƯỚC 2: CHUYỂN DANH SÁCH ĐỐI TƯỢNG SANG ĐOẠN HTML*/
    var HTML=chuyenDanhSachDoiTuongSPHTML(DanhSachSanPham);
    /*Bước 3: Gắn đoạn html đó vào section products*/
    var nodeProduct=document.getElementById('products');
    nodeProduct.innerHTML=HTML;
}
    /*Chuyển một đối tượng thành một đoạn html */
    function chuyenDoiTuongSPHTML(SanPham){
    
        SanPham=TaoDoiTuongSanPham(SanPham.HinhSP,SanPham.TenSP,SanPham.GiaSP,SanPham.phanTramGiamGia,SanPham.ID,SanPham.Brand,SanPham.Detail);
        var html='<div class="sanpham '+SanPham.Brand+'">'+
            '<div class="hinhanhsp">'+
                '<img src="'+SanPham.HinhSP+'" alt="">'+
            '</div>'+
            '<h1 class="ten-sp">'+SanPham.TenSP+'</h1>'+
            '<div class="gia">'+
            '<p class="gia-sp">'+SanPham.GiaSP+'</p>'+
            '<p class="giamgia">'+SanPham.tinhGiaBan()+'</p>'+
            
            '<p class="brand" style="display:none">'+SanPham.Brand+'</p>'+
            '<p class="id" style="display:none">'+SanPham.ID+'</p>'+
            '<p class="product-detail" style="display:none">'+SanPham.Detail+'</p>'+
            '</div>'+
            '<a href="chitietsanpham.html"  onclick="ChiTietSanPham(this);"><button class="button-btn">Xem chi tiết</button></a>'+    
            '</div>';
        return html;
    }
    function showProductList(){
        if(localStorage.getItem('DanhSachSanPham')===null){
            return false;
        }
        var DanhSachSanPham=JSON.parse(localStorage.getItem('DanhSachSanPham'));
        var HTMLDSSanPham= `<table>
            <thead>
            <tr>
                    <th>STT</th>
                    <th>Sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá sản phẩm</th>
                    <th>Phần trăm giảm giá</th>
                    <th>ID</th>
                    <th>BRAND</th>
                    <th colspan="2">Thao tác</th>
            </tr>
        </thead>`;
        for(var i=0;i<DanhSachSanPham.length;i++){
            HTMLDSSanPham+='<tbody>'+
                '<td>'+(i+1)+'</td>'+
                '<td class="hinhanh"><img src="'+DanhSachSanPham[i].HinhSP+'" alt=""></td>'+
                '<td class="tensp">'+DanhSachSanPham[i].TenSP+'</td>'+
                '<td class="giasp">'+DanhSachSanPham[i].GiaSP+'</td>'+
                '<td class="phantram">'+DanhSachSanPham[i].phanTramGiamGia+'</td>'+
                '<td class="soid">'+DanhSachSanPham[i].ID+'</td>'+
                '<td class="brand">'+DanhSachSanPham[i].Brand +'</td>'+
                '<td style="cursor:pointer;" onclick="layThongTinSanPham(this);" id="save-button" ><i class="fas fa-edit"></i></td>'+
                '<td style="cursor:pointer;" onclick="deleteProduct(\''+DanhSachSanPham[i].TenSP+'\')"><i class="fas fa-trash-alt"></i></td>'+
            '</tbody>'+
            '</table>';
        }
        document.getElementById("myTable").innerHTML=HTMLDSSanPham;
    }
    function deleteProduct(productnameDelete){
        var DanhSachSanPham= JSON.parse(localStorage.getItem('DanhSachSanPham'));
        for(var i=0;i<DanhSachSanPham.length;i++){
            if(DanhSachSanPham[i].TenSP == productnameDelete){
                if(confirm('Bạn muốn xoá sản phẩm này?'))                
                    DanhSachSanPham.splice(i,1);
            }
        }
        showProductList();
        localStorage.setItem('DanhSachSanPham',JSON.stringify(DanhSachSanPham));
        showProductList();
    }
    function ChiTietSanPham(obj){
        obj=obj.parentElement;
        const img = obj.getElementsByClassName('hinhanhsp')[0].innerHTML;
        const name = obj.getElementsByClassName('ten-sp')[0].innerHTML;
        const price= obj.getElementsByClassName('gia-sp')[0].innerHTML;
        const pricegg = obj.getElementsByClassName('giamgia')[0].innerHTML;
        const brand = obj.getElementsByClassName('brand')[0].innerHTML;
        const ID=obj.getElementsByClassName('id')[0].innerHTML;
        const detail=obj.getElementsByClassName('product-detail')[0].innerHTML;
        var object={
            "img":img,
            "name":name,
            "price":price,
            "pricegg":pricegg,
            "brand": brand,
            "ID":ID,
            "detail":detail
        }
        localStorage.setItem('ChiTiet',JSON.stringify(object));    
    }
    function showChiTietSanPham(){
        var ChiTiet=JSON.parse(localStorage.getItem('ChiTiet'));
        var html='<div class="container">'+
        '<div class="product-top">'+
        '<p><a href="index.html">TRANG CHỦ</a></p><span>&#8594;</span><p><a href="index.html">'+ChiTiet.brand+'</a></p><span>&#8594;</span><p>'+ChiTiet.name+'</p>'+
    '</div>'+
        '<div class="product-content-detail">'+
        '<div class="product-content-left">'+
                    '<div class="product-content-left-big-img">'+
                        ''+ChiTiet.img+''+
                    '</div>'+
                    '</div>'+
                '<div class="product-content-right">'+
                    '<div class="product-content-right-product-name">'+
                        '<h1 class="product-name">'+ChiTiet.name+'</h1>'+
                        '<p class="product-id">MSP:'+ChiTiet.ID+'</p>'+
                    '</div>'+
                    '<div class="product-content-right-product-price">'+
                        '<p class="product-price" style="text-decoration:line-through">'+ChiTiet.price+'</p>'+
                        '<p class="product-price">'+ChiTiet.pricegg+'</p>'+
                    '</div>'+
                    '<div class="product-content-product-size">'+
                        '<p style="font-weight: bold;">Size</p>'+
                        '<div class="size">'+
                            '<span class="size-btn active">36</span>'+
                            '<span class="size-btn">37</span>'+
                            '<span class="size-btn">38</span>'+
                            '<span class="size-btn">39</span>'+
                            '<span class="size-btn">40</span>'+
                            '<span class="size-btn">41</span>'+
                            '<span class="size-btn">42</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="product-quantity">'+
                        '<p style="font-weight: bold;">Số lượng:</p>'+
                        '<input type="number" name="" id="soluong" min="0" value="1">'+
                    '</div>'+
                    '<p style="color:red">Vui lòng chọn size giày</p>'+
                    '<div class="product-content-product-button">'+
                        '<button onclick="themvaogiohangctsp(this)"><p>Thêm vào giỏ hàng</p></button>'+
                        '<button><a href="index.html"><p> TÌM THÊM TẠI CỬA HÀNG</p></a></button>'+
                    '</div>'+
                  
                    '<div class="product-content-right-bottom">'+
                        '<div class="product-content-right-bottom-top">'+
                            '<i class="fas fa-sort-down"></i>'+
                        '</div>'+
                        '<div class="product-content-bottom-content-big">'+
                            '<div class="product-content-big-title">'+
                                '<div class="product-content-big-title-item chitiet">'+
                                    '<p>Chi tiết</p>'+
                                '</div>'+
                                '<div class="product-content-big-title-item baoquan">'+
                                    '<p>Bảo quản</p>'+
                                '</div>'+
                               

                            '</div>'+
                            '<div class="product-content-bottom-content">'+
                                '<div class="product-content-chitiet">'+
                                    '<p>'+ChiTiet.detail+'</p>'+
                                    '<p style="font-weight: bold; padding-bottom: 10px;">Tham khảo size:</p>'+
                                    '<a href="./imagines/sizechart.jpg"><img src="./imagines/sizechart.jpg" alt=""></a>'+

                                    
                                '</div>'+
                                '<div class="product-content-baoquan">'+
                                    'Chi tiết bảo quản giày:<br /> <br />'+
                                    '● Bước 1: Cởi hết dây giày và tháo miếng lót giày để giặt riêng. Lưu ý là phải tháo rời luôn miếng lót giày.<br /> <br />'+

                                    '● Bước 2: Dùng một miếng vải khô mềm để lau sạch bụi bẩn bám trên giày, kể cả ở đế giày trước khi giặt để vệ sinh được dễ hơn.<br /> <br />'+
                                
                                    '● Bước 3: Sử dụng chất tẩy nhẹ (dầu gội, sữa tắm) và pha loãng với nước và tiến hành vệ sinh toàn bộ giày. Không sử dụng bàn chải cứng, có thể tận dụng bàn chải đánh răng cũ có lông mềm để giảm trầy xước phần da trên thân giày nhé.<br /> <br />'+

                                    '● Bước 4: Rửa sạch lại với nước, dùng khăn khô hoặc khăn giấy để thấm giày cho đến khi ráo nước và sạch hoàn toàn xà phòng còn sót lại.<br /> <br />'+

                                    '● Bước 5: Phơi giày khô tự nhiên ở nhiệt độ phòng (hoặc để trước quạt gió). Không phơi giày ngoài nắng vì như vậy keo sẽ bị hở.<br /> <br />'+
                                '</div>'+
                            
                            '</div>'+
                        '</div>'+
                    '</div>'+
                  
                '</div>'+
                '</div>'+
                '</div>';        
        document.getElementsByClassName('product-detail')[0].innerHTML=html;
    }
    //MÔ TẢ: ĐỂ TẠO RA ĐÓI TƯỢNG DỰA VÀO CÁC THUỘC TÍNH ĐƯỢC TRUYỀN VÀO
    /*
    input: Các thuộc tính
    Output: một đối tượng
    */


       function TaoDoiTuongSanPham(HinhSP,TenSP,GiaSP,phanTramGiamGia,ID,Brand,Detail){
        var SanPham=new Object();
        //B1: TẠO THUỘC TÍNH VÀ PHƯƠNG THỨC CHO ĐỐI TƯỢNG
        SanPham.HinhSP=HinhSP;
        SanPham.TenSP=TenSP;
        SanPham.GiaSP=GiaSP;
        SanPham.phanTramGiamGia=phanTramGiamGia;
        SanPham.ID=ID;
        SanPham.Brand=Brand;
        SanPham.Detail=Detail;
        /*B2: VIẾT PHƯƠNG THỨC COH ĐỐI TƯỢNG*/
        SanPham.tinhGiaBan=function(){
            var giaban=this.GiaSP*(1-this.phanTramGiamGia);
            return giaban;
        }
        SanPham.toJson=function(){ //chuyển đổi đối tượng sản phẩm thahnhf chuỗi json
            var json=JSON.stringify(this);
            return json;
        }
        SanPham.fromJSON=function(json){
            var doiTuongDayDu=new Object();
            /*Chuyển json thành đối tượng */
            var doiTuong=JSON.parse(json);
            /*chuyển đối tượng thành đối tượng đầy đủ*/
            doiTuongDayDu=TaoDoiTuongSanPham(doiTuong.HinhSP,doiTuong.TenSP,doiTuong.GiaSP,doiTuong.phanTramGiamGia,doiTuong.ID,doiTuong.Brand,doiTuong.Detail);
            return doiTuongDayDu;
        }
        SanPham.fromJSON=function(jsonDanhSachSanPham){
            var DanhSachSanPhamDayDu=new Array();
            var DanhSachSanPham=JSON.parse(jsonDanhSachSanPham);
            for(var i=0;i<DanhSachSanPham.length;i++){
                var SanPham=DanhSachSanPham[i];
                var SanPhamDayDu=TaoDoiTuongSanPham(SanPham.HinhSP,SanPham.TenSP,SanPham.GiaSP,SanPham.phanTramGiamGia,SanPham.ID,SanPham.Brand,SanPham.Detail);
                DanhSachSanPhamDayDu[i]=SanPhamDayDu;
            }
            return DanhSachSanPhamDayDu;
        }
        return SanPham;
    }
   
    function TaoID(){
        var id='';
        //sinh id, tạo id theo thời gian
        
        //lấy milisecond ở thời điểm hiện tại,1s=1000mmilisecond
        //đảm bảo trong 1 milisecond không có hai hàm tạo id theo thời gian
        id=Math.random().toString().substr(2,10)+"_"+String(new Date().getTime());
        return id;
    } // XÁC SUẤT SIÊU NHỎ ĐỂ BỊ TRÙNG
    /*UUID*/

/*BỨC 3: NẾU CÓ TỒN TẠI THÌ LẤY RA ĐỐI TƯỢNG ĐÓ*/
    
    /*
    input:id
    output: đối tượng có id = id
    */
    function TruyXuatSanPhamTheoID(ID){
        /*BƯỚC 1: LẤY DANH SÁCH TOÀN BỘ ĐỐI TƯỢNG*/
    var jsonDanhSachSanPham=localStorage.getItem('DanhSachSanPham');
    var DanhSachSanPham=JSON.parse(jsonDanhSachSanPham);
    /*BƯỚC 2: DUYỆT TOÀN BỘ ĐỐI TƯỢNG, KIỂM TRA XEM ID CỦA ĐỐI TƯỢNG CÓ BẰNG VỚI ID TRUYỀN VÀO KHÔNG*/
    for(var i=0;i<DanhSachSanPham.length;i++){
        var SanPhamHienTai=DanhSachSanPham[i];
        if(SanPhamHienTai.ID==ID){
            return SanPhamHienTai;
         }
        }
    }
    function TruyXuatSanPhamTheoTen(TenSP){
        var jsonDanhSachSanPham=localStorage.getItem('DanhSachSanPham');
        var DanhSachSanPham=JSON.parse(jsonDanhSachSanPham);
        for(var i=0;i<DanhSachSanPham.length;i++){
            var SanPhamHienTai=DanhSachSanPham[i];
            if(SanPhamHienTai.TenSP==TenSP){
                return SanPhamHienTai;
            }
        }
    }

var giohang=new Array();
function themvaogiohangctsp(x){
    var gh=localStorage.getItem('GioHang');
    var giohang=JSON.parse(gh);
    //đưa hai dòng đầu vào note khi chưa tạo localStorage GioHang
    //nếu tạo rồi thì bỏ note
    var boxsp=x.parentElement.parentElement.parentElement;
    var divleft=boxsp.children[0];
    var divright=boxsp.children[1];
    var img=divleft.children[0].children[0].src;
    var name=divright.children[0].children[0].innerHTML;
    var price=divright.children[1].children[0].innerHTML;
    var pricegg=divright.children[1].children[1].innerHTML;
    var size=divright.children[2].children[1].getElementsByClassName("size-btn active")[0].innerHTML;
    var quantity=parseInt(divright.children[3].children[1].value);
    var sp=new Array(img,name,price,pricegg,size,quantity);
    var kt=0; //kiểm tra xem sản phẩm có trong giỏ hàng không
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1]==name){
            kt=1;
            if(giohang[i][4]==size){
                kt=1;
                quantity+=parseInt(giohang[i][5]);
                giohang[i][5]=quantity; //cập nhật lại số lượng xong thoát vòng lặp
                break;
            }
            else{
                giohang.push(sp);
                break;
            }
        }
    }
    if(kt==0){
        giohang.push(sp);
    } 
    //lưu giỏ hàng lên localStorage
    localStorage.setItem('GioHang',JSON.stringify(giohang));
}

function showgiohang(){
    var gh=localStorage.getItem('GioHang');
    var giohang=JSON.parse(gh);
    if(giohang==""){
        document.getElementById('my-cart').innerHTML='<div class="cart-noitem">Hiện chưa có gì trong giỏ hàng của bạn</div>';
        document.getElementById('donhang').innerHTML='<div class="cart-noitem">Hiện bạn chưa mua sản phẩm gì</div>';
    }
    else{
    var thongtingiohang='<tr>'+ 
    '<th>Sản phẩm</th>'+
    '<th>Tên sản phẩm</th>'+
    '<th>Size</th>'+
    '<th>Giá gốc</th>'+
    '<th>Giá giảm</th>'+
    '<th>Số lượng</th>'+
    '<th>Xoá</th>'+
    '<th>Giá</th>'+
  '</tr>';
    var tongtien=0;
    var thongtindonhang='';
    for(let i=0;i<giohang.length;i++){
        var dongia=parseInt(giohang[i][3])*parseInt(giohang[i][5]);
        tongtien=tongtien + dongia;
        thongtingiohang+='<tbody>'+
        '<tr>'+
        '<td id="hinhanh"><img src="'+giohang[i][0]+'"></td>'+
        '<td id="tensp">'+giohang[i][1]+'</td>'+
        '<td>'+giohang[i][4]+'</td>'+
        '<td id="giasp">'+giohang[i][2]+'</td>'+
        '<td id="giamgia">'+giohang[i][3]+'</td>'+
        '<td>'+giohang[i][5]+'</td>'+
        '<td><i onclick="deleteCart(\''+giohang[i][1]+'\')" class="fas fa-trash-alt"></i></td>'+
        '<td>'+dongia+'</td>'+
        '</tr>'+
        '</tbody>';
        thongtindonhang='<table>'+
        '<tbody>'+
        '<tr>'+
        '<th colspan="2">ĐƠN HÀNG</th>'+ 
    '</tr>'+
    '<tr>'+
        '<td>TỔNG SẢN PHẨM</td>'+
        '<td>'+(i+1)+'</td>'+
    '</tr>'+

    '<tr>'+
        '<td>TỔNG TIỀN HÀNG</td>'+
        '<td><p>'+tongtien+'VND</p></td>'+
    '</tr>'+

    '<tr>'+
        '<td>TẠM TÍNH</td>'+
        '<td><p style="color:black;font-weight:bold;">'+tongtien+'VND</p></td>'+
    '</tr>'+
    '</tbody>'+
    '</table>'+
    '<div class="cart-content-right-text ">'+
    '<p>Bạn sẽ được miễn phí ship khi đơn hàng của bạn có tổng giá trị trên 1.000.000đ</p>'+
'</div>'+
'<div class="cart-content-right-button">'+
    '<button><a href="index.html">TIẾP TỤC MUA SẮM</a></button>'+
    '<button><a href="trangthanhtoan.html">THANH TOÁN</a></button>'+
'</div>';
    }
    thongtingiohang+='<tr>'+    
    '<th colspan="7">Tổng tiền</th>'+
    '<th>'+tongtien+'</th>'+
    '</tr>';
    document.getElementById('my-cart').innerHTML=thongtingiohang;
    document.getElementById('donhang').innerHTML=thongtindonhang;
    }

}
function showMyBill(){
    var gh=localStorage.getItem('GioHang');
    var giohang=JSON.parse(gh);
    if(giohang==''){
        document.getElementById('my-bill').innerHTML='<div class="cart-noitem">Hiện bạn chưa mua sản phẩm nào</div>';

    }
    else{
    var thongtinbill='<thead>'+
    '<tr>'+
        '<th class="sanpham">Sản phẩm</th>'+
        '<th class="tensanpham">Tên sản phẩm</th>'+
        '<th class="size">Size</th>'+
        '<th class="quantity">Số lượng</th>'+
        '<th class="totalprice">Thành tiền</th>'+
    '</tr>'+
'</thead>';
    var tongtien=0;
    for(let i=0;i<giohang.length;i++){
        var dongia=parseInt(giohang[i][3])*parseInt(giohang[i][5]);
        tongtien=tongtien+dongia;
        thongtinbill+='<tbody>'+
        '<tr class="my-bill-product">'+
        '<td id="sanpham"><img src="'+giohang[i][0]+'"></td>'+
        '<td id="tensanpham">'+giohang[i][1]+'</td>'+
        '<td id="size">'+giohang[i][4]+'</td>'+

        '<td id="quantity">'+giohang[i][5]+'</td>'+
        '<td id="totalprice">'+giohang[i][3]+'</td>'+
    '</tr>'
    '</tbody>';
    }
    thongtinbill+='<tr>'+
    '<td colspan="4">Tổng tiền</td>'+
    '<td id="totalPriceAll">'+tongtien+'</td>'+
    '</tr>';
    document.getElementById('my-bill').innerHTML=thongtinbill;
    }
}

function deleteCart(nameProduct){
    var giohang= JSON.parse(localStorage.getItem('GioHang'));
    for(var i=0;i<giohang.length;i++){
        if(giohang[i][1] == nameProduct){
            if(confirm('Bạn muốn xoá sản phẩm này khỏi giỏ hàng?'))
            giohang.splice(i,1);
        }
    }
    localStorage.setItem('GioHang',JSON.stringify(giohang));
    showgiohang();
}
function xoagiohang(tensp){
    var giohang=JSON.parse(localStorage.getItem('GioHang'));
    for(let i=0;i<giohang.length;i++){
        if(giohang[i][1].name==tensp){
            if(confirm('Bạn muốn xoá sản phẩm này khỏi giỏ hàng?'))
            giohang.splice(i,1);
        }
    }
    showcountsp();
    showmycart();    
    localStorage.setItem('GioHang',JSON.stringify(giohang));

}
window.onload=function(){
    createProduct();
}

    
    