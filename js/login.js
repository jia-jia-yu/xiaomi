var $user = document.querySelector('.int_a');
var $pass = document.querySelector('.int_b');
var $but = document.querySelector('.login_area button');
// console.log($user);
$but.onclick = function () {
    var $text = $user.value;
    var $text_p = $pass.value;
    $.get("php/login.php", {
            user: $text,
            pass: $text_p
        },
        function (data) {
            alert(data);
            if(data == '登录成功'){
                window.location.href = "index.html";
            }
        })
}