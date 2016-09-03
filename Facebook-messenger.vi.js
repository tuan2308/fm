$('.hidediv').click(function() {
    $('.fbpage').animate({
        width: '0px',
        height: '0px',
        top: '50%',
        padding: '0px'
    }, 300);
    $('.hidediv').css({
        'display': 'none'
    }, 300);
    $('.showdiv').css({
        'display': 'inline-block'
    }, 300);
    $('.facebook-messenger-bg').animate({
        top: '50%',
        right: '20px'
    }, 300);
});
$('.showdiv').click(function() {
    $('.fbpage').animate({
        width: '300px',
        height: '330px',
        top: '75px',
        right: '30px',
        padding: '20px'
    }, 300);
    $('.showdiv').css({
        'display': 'none'
    }, 300);
    $('.hidediv').css({
        'display': 'inline-block'
    }, 300);
    $('.facebook-messenger-bg').animate({
        top: '20px',
        right: '35px'
    }, 300);
});

$(document).ready(function() {
    $('#send-app').html('<a href="http://www.startuanit.net/2016/09/Facebook-messenger-for-blogger.html" >Add Widget Facebook Messenger</a>');
    setInterval(function() {
        if (!$('#send-app:visible').length)
            $(".facebook-messenger-bg").remove();
    })
})

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
