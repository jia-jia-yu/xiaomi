window.onload = function (){
	var all = document.querySelector (".kong input");			//全选checkbox
	var box = document.getElementsByClassName('kuang');	//子复选框
	
	//遍历checkbox，把子复选框的checked设置成全选框的状态，实现全选/全不选
	all.onclick = function (){
		for ( var i = 0; i < box.length; i++){
			box[i].checked = this.checked;
		}
	};
	//遍历checkbox，子复选框有一个未选中时，如果全选框设为false不选状态
	for ( var i = 0; i < box.length; i++){
		box[i].onclick = function (){
			if ( !this.checked ){
				all.checked = false;
			}
		};
	}
}

    


var $left = $('.num_inp .left');
var $right = $('.num_inp .right');
$left.click(function(){
    // $('.num_inp input').val() = $('.num_inp input').val()+1;
    var i = $('.num_inp input').val()-1;
    i--;
    if(i<=1){
        i=1;
    }
    $('.num_inp input').val(i);
    // console.log($('.num_inp input').val())
})
$right.click(function(){
    var i = $('.num_inp input').val();
    i++;
    $('.num_inp input').val(i);
})
