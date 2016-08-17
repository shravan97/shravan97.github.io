
$(document).ready(
	function () {

		$('#ham').click(function(){
		$('#mobile_menu').animate({
			height:"toggle"
		},1000);
	});

		if($(window).height() < 600)
		{
			$('#name').css('top','35%');
			$('#quote').css('top','100px');
			$('#quote').css('left','50px');
		}
		else
		{
			$('#name').css('top','25%');
			$('#quote').css('top','0');
			$('#quote').css('left','0');		
		}

		if($(window).width()<768)
		{
			$("#menu").hide();
			$("#ham").show();
		}
		else
		{ 
			$("#menu").show();
			$("#mobile_menu").hide();
			$("#ham").hide();
		}
	});

$(window).resize(function(){
	if($(window).height()<600)
	{
		$('#name').css('top','35%');
		$('#quote').css('top','100px');
		$('#quote').css('left','50px');
	}
	else
	{
		$('#name').css('top','25%');
		$('#quote').css('top','0');
		$('#quote').css('left','0');
	}

	if($(window).width()<768)
	{
		$("#menu").hide();
		$("#ham").show();
	}
	else
	{ 
		$("#menu").show();
		$("#mobile_menu").hide();
		$("#ham").hide();
	}
});
function scroll_reveal()
{
	var sr_rot = ScrollReveal({duration:1000,opacity:0,reset:true,easing:'ease'});
	sr_rot.reveal('#quote',{distance:'200px'});
	sr_rot.reveal('#self',{distance:'-50px'});
	// sr_rot.reveal('#codes',{distance:'100px',duration:1000})
	
}