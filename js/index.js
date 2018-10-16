var mySwiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    speed: 500,
})

var $mi5 = $('#mi5');
// var $dt = $('#1 dt');
// var $price = $('#1 .d2 span');
// var $img = $('#1 a img');
$.get('php/index.php', {
        // id:1
    },
    function (data) {
        var data = JSON.parse(data);
        // console.log(data)
        for(var i = 1;i<=5;i++){
            $mi5.append(
                `<dl class="sj" id="${i}">
                    <a href="detail.html"><img src="${data[i-1].img1}" alt="图片" /></a>
                    <dt>${data[i-1].name}</dt>
                    <dd class="d1">全面屏2.0,5.99"大屏</dd>
                    <dd class="d2"><span>${data[i-1].price}</span>元起</dd>
                </dl>`
            )
        }
    })




$mi5.on('click', 'a', function (event) {
    var target = $(event.target);
    console.log(this);
    var img_src = $(this).parent().attr('id');
    console.log(img_src);
    var opcookie = new OprationCookie();
    var username = opcookie.setCookie('id', img_src);
})