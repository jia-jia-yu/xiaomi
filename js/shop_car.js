window.onload = function () {
	var all = document.querySelector(".kong input"); //全选checkbox
	var box = document.getElementsByClassName('kuang'); //子复选框

	//遍历checkbox，把子复选框的checked设置成全选框的状态，实现全选/全不选
	all.onclick = function () {
		for (var i = 0; i < box.length; i++) {
			box[i].checked = this.checked;
		}
	};
	//遍历checkbox，子复选框有一个未选中时，如果全选框设为false不选状态
	for (var i = 0; i < box.length; i++) {
		box[i].onclick = function () {
			if (!this.checked) {
				all.checked = false;
			}
		};
	}
}



var $heji = $('.shop_j_right i');
var $shop = $('.shop');
var c = localStorage.name;
c = JSON.parse(c);
	console.log(c)
// for(var i=0;i<c.length;i++){
// 	c[i].id;
// }
$.get('php/shop_car.php', {
	id:c
},
	function (data) {
		var data = JSON.parse(data);
		console.log(data);
		for(var i = 0;i<data.length;i++){
			console.log(data[i])
			$shop.append(`
				<div class="shop_content">
					<div class="shop_li">
						<div class="kong_2">
							<input class="kuang" type="checkbox">
						</div>
						<div class="shop_img">
							<img src="${data[i].img1}" alt="">
						</div>
						<div class="shop_name">${data[i].name}</div>
						<div class="shop_price">${data[i].price}元</div>
						<div class="shop_num">
							<div class="num_inp">
								<div class="left">-</div>
								<input type="number" value="1">
								<div class="right">+</div>
							</div>
						</div>
						<div class="shop_total"><i>${data[i].price}</i>元</div>
						<div class="shop_action">
							<a href="javascript:;">
								<i class="iconfont icon-cha"></i>
							</a>
						</div>
					</div>
				</div>
			`)
		}
	})



	$shop.on("click",'.left',function (event) {
		var target = $(event.target);
		var i = target.next('input').val();
		i--;
		if (i <= 1) {
			i = 1;
		}
		target.next('input').val(i);
		// $('.shop_total i').html(data*i)
		// var b = target.
		// var a = target.parents('.shop_num').next('.shop_total').children().html();
		// target.parents('.shop_num').next('.shop_total').children().html(a*i);
		// console.log(a);
	})
	$shop.on("click",".right",function (event) {
		var target = $(event.target);
		var i = target.prev('input').val();
		i++;
		target.prev('input').val(i);
	})

$shop.on('click','.shop_action a',function(event){
	var target = $(event.target);
	console.log(target.parents('.shop_content'))
	target.parents('.shop_content').remove();
	localStorage.removeItem('name.remove(0)');
})

