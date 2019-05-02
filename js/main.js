$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});


jQuery(function($) {

    $(".nav-anchor a").click(function() {  //use a class, since your ID gets mangled
        $(' .head-nav, header').toggleClass("mobile");      //add the class to the clicked element
        $(this).toggleClass("clicked");



    });
});
