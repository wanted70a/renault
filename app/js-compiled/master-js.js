var slider = '1.Homepage';

function x (y){
	return y +10;
}

var person = {
	name:'Bojana',
	age:34
};

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
$( document ).ready(function() {
    //cache dom
    var $body = $('body'),
    	$dropDownLink = $body.find('#myBusiness'),
    	$dropMenu = $body.find('.nav--mob__subMenu'),
            $burger = $body.find('.nav--mob__burger'),
        $search = $body.find('.nav--mob__search');

    //functions
    $dropDownLink.click(function(){
        $dropDownLink.find('a.nav--mob__link').toggleClass('active')
        $dropMenu.slideToggle(300);
    });    
      
});
var page ='index';
var pages = ['404','articles'];