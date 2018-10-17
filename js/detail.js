var opcookie = new OprationCookie();
var username = opcookie.getCookie('id');
// console.log(username);



var $img = $('.swiper-wrapper .swiper-slide');
var $name = $('.minbox h1');
var $price = $('.pro-price span');
var $pr = $('.totlePrice i');
var $pri = $('.pri');
$.get('php/detail.php', {
    id:username
},
function (data) {
    var data = JSON.parse(data);
    $name.append(data.name);
    $price.append(data.price);
    $pri.append(data.price);
    $pr.append(data.price);
        $img.eq(0).append(`<img src="${data.img1}" alt="">`);
        $img.eq(1).append(`<img src="${data.img2}" alt="">`);
        $img.eq(2).append(`<img src="${data.img3}" alt="">`);
        $img.eq(3).append(`<img src="${data.img4}" alt="">`);
    
})


var $add = $('.add_car');
$add.click(function(){
    console.log(username);
    var a = localStorage.name || '[]';
    a = JSON.parse(a);   
    a.push({id:username});
    localStorage.name = JSON.stringify(a);
    // localStorage.i = JSON.parse({id:username});
})