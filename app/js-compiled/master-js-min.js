function x(n){return n+10}var slider="1.Homepage",person={name:"Bojana",age:34};$(document).ready(function(){var n=$("body"),o=(n.find(".nav--mob__search"),n.find("#myVan")),e=n.find(".my-van--drop");o.hover(function(){e.slideDown(300),o.css({color:"#fff","border-bottom":".3rem solid #fff"})}),e.hover(function(){e.css("display","block")},function(){e.slideUp(300)})}),$(document).ready(function(){var n=$("body"),o=n.find(".wrapper.wrapper--main"),e=n.find(".tint"),a=n.find(".nav--mob__menu"),i=n.find("#myBusiness"),s=n.find(".nav--mob__subMenu"),l=n.find(".nav--mob__burger");n.find(".nav--mob__search");l.click(function(){l.find("i").toggleClass("fa-bars").toggleClass("fa-times"),a.animate({width:"toggle"},250),o.toggleClass("active",600).promise().done(function(){e.toggleClass("active")})}),i.click(function(){i.find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up"),s.slideToggle(300)})}),$(document).ready(function(){var n=$("body"),o=(n.find(".nav--mob__burger"),n.find(".fa-search")),e=n.find(".search-box__close"),a=n.find(".search-box");o.click(function(){n.toggleClass("no-scroll"),$("html").toggleClass("no-scroll"),a.fadeIn(300)}),e.click(function(){a.fadeOut(300),n.toggleClass("no-scroll"),$("html").toggleClass("no-scroll")})});var page="index",pages=["404","articles"];