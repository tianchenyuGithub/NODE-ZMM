$(init);

function init() {
    $("body").on('click', '#loginBtn', doLogin);
}

function doLogin() {
    $.ajax({
        type: "POST",
        url: "/login",
        contentType: "application/json",
        dataType: "json",
        data: JSON.stringify({
            'usr': $("#usr").val(),
            'pwd': $("#pwd").val()
        }),
        success: function(result) {
            if (result.code == 99) {
                $(".login-box-msg").text(result.msg);
                console.log("hi");
            } else {
                $.cookie('username', result.data.username, {expires:30});
                $.cookie('password', result.data.password, {expires:30});
                $.cookie('id', result.data._id, {expires:30});
                location.href = "/";
            }
        }
    })
}

// $(init);
// function init() {
//     $("#loginform").validate({
//         errorLabelContainer: "#errorMsg",
//         wrapper:"span",
//         submitHandler:function(form) {
//             doLogin();  //验证成功登陆
//         }
//     });
//     $("body").on('click', '#loginBtn', doLogin);
//
// }
//
//
// function doLogin() {
//     // $.ajax({
//     //     type: "POST",
//     //     url: "/login",
//     //     contentType: "application/json",
//     //     dataType: "json",
//     //     data: JSON.stringify({
//     //         'usr': $("#usr").val(),
//     //         'pwd': $("#pwd").val()
//     //     }),
//     //     success: function(result) {
//     //         if (result.code == 99) {
//     //             $(".login-box-msg").text(result.msg);
//     //         } else {
//     //             $.cookie('username', result.data.username, {expires:30});
//     //             $.cookie('password', result.data.password, {expires:30});
//     //             $.cookie('id', result.data._id, {expires:30});
//     //             $.cookie('userThumb',result.data.userThumb,{expires:30});
//     //             location.href = "/";
//     //         }
//     //     }
//     // })
// }
