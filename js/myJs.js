//menu
$(document).ready(function(){
	$(".menu_down").hover(function(){$(this).children("dl").show(200);},function(){$(this).children("dl").hide();});
	$(".menu ul li:last").css({background:"none",borderRight:"none"})
	$(".menu ul li").hover(function(){$(this).find("span a").addClass("menu_hover")},function(){$(this).find("span a").removeClass("menu_hover")})
	$(".con1 ul li:last").css({marginRight:"0"})
	$(".con3 ul li:last").css({borderRight:"none"})
})





//Add------------------------------------------------------------------------------------------------
//product_show
$(document).ready(function(){
	$(".product_show ul li").hover(
		function(){$(this).addClass("hover2")},function(){$(this).removeClass("hover2")}
	)
})



