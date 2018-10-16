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
    console.log(data)
    // data.name
    $name.append(data.name);
    $price.append(data.price);
    $pri.append(data.price);
    $pr.append(data.price);
    // for($i=0;$i<4;$i++){
        // console.log($('.swiper-slide')[0]);
        $img.eq(0).append(`<img src="${data.img1}" alt="">`);
        $img.eq(1).append(`<img src="${data.img2}" alt="">`);
        $img.eq(2).append(`<img src="${data.img3}" alt="">`);
        $img.eq(3).append(`<img src="${data.img4}" alt="">`);
    // }
        // $src = data[0].img1;
        // $img.attr({src:$src});
})


var $add = $('.add_car');
$add.click(function(){
    
})
// $add.on('click', 'a', function (event) {
//     var target = $(event.target);
//     console.log(this);
//     var img_src = $(this).parent().attr('id');
//     console.log(img_src);
//     var opcookie = new OprationCookie();
//     var username = opcookie.setCookie('id', img_src);
// })