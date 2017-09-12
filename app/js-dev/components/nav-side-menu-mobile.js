$( document ).ready(function() {
    //cache dom
    var $body = $('body'),
        $mainWrapper = $body.find('.wrapper.wrapper--main'),
        $tint = $body.find('.tint'),
        $navMobMenu = $body.find('.nav--mob__menu'),
    	$dropDownLink = $body.find('#myBusiness'),
    	$dropMenu = $body.find('.nav--mob__subMenu'),
        $burger = $body.find('.nav--mob__burger'),
        $search = $body.find('.nav--mob__search');

    //functions

    //burger toggle menu to slide L to R
    $burger.click(function(){
        $burger.find('i').toggleClass('fa-bars').toggleClass('fa-times');
        $navMobMenu.animate({width:'toggle'},250);
         //sliding main wrapper to right 
         
        $mainWrapper.toggleClass('active',600).promise().done(function(){
            //toggle tint
            $tint.toggleClass('active');
        }); 
        
    });

   


    //togle sbmenu
    $dropDownLink.click(function(){
        //change color on active dropDown
        //$dropDownLink.find('a.nav--mob__link').toggleClass('active') 
        $dropDownLink.find('i').toggleClass('fa-chevron-down').toggleClass('fa-chevron-up');
        $dropMenu.slideToggle(300);
    });    

      
});