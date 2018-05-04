$(function(){
	if($(".about_envirImg2").length>0){
		var $Img2=$(".about_envirImg2");
		var $li=$Img2.find("li");
		var $span=$(".about_envirImg2_bar").children("span");
		var curr=0;
		var Timer=null;
		var autoScroll=true;
		var len=$li.length;
		
		$span.on("click",function(){
			curr=$(this).index();
			$li.eq(curr).addClass("active").siblings().removeClass("active");
			$(this).addClass("active").siblings().removeClass("active");
		})
		var autoMove=function(){
			curr++;
			if(curr==len){
				curr=0;
			}
			$li.eq(curr).addClass("active").siblings().removeClass("active");
			$span.eq(curr).addClass("active").siblings().removeClass("active");
		}
		
		if(autoScroll){
			Timer=setInterval(autoMove,3000)
			$Img2.on({
				"mouseenter":function(){
					clearInterval(Timer);
				},
				"mouseleave":function(){
					Timer=setInterval(autoMove,3000);
				}
			})
		}		
	}
})
