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