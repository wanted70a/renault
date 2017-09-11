$( document ).ready(function() {
    //cache dom
    var $body = $('body'),
    	$search = $body.find('.nav--mob__search'),
    	$dropDownLink = $body.find('#myVan'),
    	$dropMenu = $body.find('.my-van--drop');

    	//alert('radi');

    //FUNCTIONS
    //slide menu on hover
    $dropDownLink.hover(function(){
    	$dropMenu.slideDown(300);
    	$dropDownLink.css({"color":"#fff", "border-bottom":".3rem solid #fff"});
    });

    $dropMenu.hover(function() {
        $dropMenu.css('display','block');
    },
    function() {
        $dropMenu.slideUp(300);
    });
});