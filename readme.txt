
Git is free software.
$(".qianggouye .qianggouye1 li").each(function(){
		$(this).hover(function(){
		$(".yuan").stop().animate({"opacity": 0.3},function(){
			$(".qianggouye .qianggouye1 li span").show().stop().css({"left":"-30px"}).stop().animate({"left":"62px"})
		});},function(){
			$(".yuan").stop().animate({"opacity":0});
			$(".qianggouye .qianggouye1 li .liji").hide();
			/*.parent().siblings().find(".qianggouye .qianggouye1 li span").css({"display":"none"})*/;
	})
})
	}
	)