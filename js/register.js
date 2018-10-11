var $phone = document.querySelector('.int_a');
var $password = document.querySelector('.int_b');
var $but = document.querySelector('.regbox button');
$but.onclick = function () {
    var $text = $phone.value;
    var $pass = $password.value;
    $.get("php/register.php", {
            user: $text,
            pass: $pass
        },
        function (data) {
            alert('注册成功')
            if(data == '注册成功'){
                // console.log(1)
                window.location.href = "login.html";
            }
        });
}