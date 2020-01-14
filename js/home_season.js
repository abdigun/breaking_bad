	



//  sekali je bergreak left 200 - 0 phone


$(document).ready(function() { 

	var controllers = new ScrollMagic.Controller();
	




	$(function() {  // betulkan movement sikit x click repeat

		var clickB = new TimelineMax()

		$('#BTN_B').on('click', function() {
			clickB.to('dummy-box' , 0 , {opacity:'0'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'0%'} , {x:'-200%'} , 0.1)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'0%'} , {x:'200%'} , 0.1)
			clickB.to('.mnu-cont-vin' , 0.4 , {opacity:'0'})
			clickB.to('.mnu-cont-vin' , 0 , {display:'block'})
			clickB.to('.title-sea-big' , 0.3 , {x:'200%'})
			clickB.to('.seallcont' , 0.3 ,{opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {display:'flex'} )
			clickB.to('.seallcont' , 0.3 , {display:'none'} )
			clickB.to('.hover-cont-all' , 0 , {position:'relative'})
			clickB.to('.hover-cont-all' , 0.2 , {opacity:'1'})


		})		

		$('.co1n').on('click', function() {

			clickB.to('.hover-cont-all' , 0.2 , {opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {position:'absolute'})
			clickB.to('.Sea-1-cont', 0.3 , {display:'flex'} , 0.2)
			clickB.to('.hover-cont-all' , 0 , {display:'none'})
			clickB.to('.Sea-1-cont' , 0.3 , {opacity:'1'})
			clickB.fromTo('.title-sea-big' , 0.3 ,{x:'200%' } , {x:'0%'})
			clickB.fromTo('.mnu-cont-vin' , 0 , {display:'none'} , {display:'block'})
			clickB.fromTo('.mnu-cont-vin' , 0.4 , {opacity:'0'} , {opacity:'1'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'-200%'} , {x:'0%'} , 1.5)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'200%'} , {x:'0%'} , 1.5)



		})		

		$('.co2n').on('click', function() {

			clickB.to('.hover-cont-all' , 0.2 , {opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {position:'absolute'})
			clickB.to('.Sea-2-cont', 0.3 , {display:'flex'} , 0.2)
			clickB.to('.hover-cont-all' , 0 , {display:'none'})
			clickB.to('.Sea-2-cont' , 0.3 , {opacity:'1'})
			clickB.fromTo('.title-sea-big' , 0.3 ,{x:'200%' } , {x:'0%'})
			clickB.fromTo('.mnu-cont-vin' , 0 , {display:'none'} , {display:'block'})
			clickB.fromTo('.mnu-cont-vin' , 0.4 , {opacity:'0'} , {opacity:'1'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'-200%'} , {x:'0%'} , 1.5)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'200%'} , {x:'0%'} , 1.5)



		})	


		$('.co3n').on('click', function() {

			clickB.to('.hover-cont-all' , 0.2 , {opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {position:'absolute'})
			clickB.to('.Sea-3-cont', 0.3 , {display:'flex'} , 0.2)
			clickB.to('.hover-cont-all' , 0 , {display:'none'})
			clickB.to('.Sea-3-cont' , 0.3 , {opacity:'1'})
			clickB.fromTo('.title-sea-big' , 0.3 ,{x:'200%' } , {x:'0%'})
			clickB.fromTo('.mnu-cont-vin' , 0 , {display:'none'} , {display:'block'})
			clickB.fromTo('.mnu-cont-vin' , 0.4 , {opacity:'0'} , {opacity:'1'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'-200%'} , {x:'0%'} , 1.5)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'200%'} , {x:'0%'} , 1.5)



		})	


		$('.co4n').on('click', function() {

			clickB.to('.hover-cont-all' , 0.2 , {opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {position:'absolute'})
			clickB.to('.Sea-4-cont', 0.3 , {display:'flex'} , 0.2)
			clickB.to('.hover-cont-all' , 0 , {display:'none'})
			clickB.to('.Sea-4-cont' , 0.3 , {opacity:'1'})
			clickB.fromTo('.title-sea-big' , 0.3 ,{x:'200%' } , {x:'0%'})
			clickB.fromTo('.mnu-cont-vin' , 0 , {display:'none'} , {display:'block'})
			clickB.fromTo('.mnu-cont-vin' , 0.4 , {opacity:'0'} , {opacity:'1'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'-200%'} , {x:'0%'} , 1.5)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'200%'} , {x:'0%'} , 1.5)



		})	


		$('.co5n').on('click', function() {

			clickB.to('.hover-cont-all' , 0.2 , {opacity:'0'})
			clickB.to('.hover-cont-all' , 0 , {position:'absolute'})
			clickB.to('.Sea-5-cont', 0.3 , {display:'flex'} , 0.2)
			clickB.to('.hover-cont-all' , 0 , {display:'none'})
			clickB.to('.Sea-5-cont' , 0.3 , {opacity:'1'})
			clickB.fromTo('.title-sea-big' , 0.3 ,{x:'200%' } , {x:'0%'})
			clickB.fromTo('.mnu-cont-vin' , 0 , {display:'none'} , {display:'block'})
			clickB.fromTo('.mnu-cont-vin' , 0.4 , {opacity:'0'} , {opacity:'1'})
			clickB.fromTo('.epi-cont:odd' , 0.5 , {x:'-200%'} , {x:'0%'} , 1.5)
			clickB.fromTo('.epi-cont:even' , 0.5 , {x:'200%'} , {x:'0%'} , 1.5)



		})	


	});

	//  button read more

	$(function() {

		var btnSyn = new TimelineMax()

		$('.button_readintro').on('click', function() {

			btnSyn.to('.button_readintro' , 0.5 , {opacity:'0'})
			btnSyn.to('.button_readintro' , 0 , {display:'none'})
			btnSyn.to('.skw' , 0.5 , {x:'100%'} , 0.3)
			btnSyn.to('.sh-skw' , 0.3 , {x:'100%'})
			btnSyn.to('.set_introtxt' , 0.3 , {margin:'0'})
			btnSyn.to('.sec-cont-synopsis-p' , 0 , {height:'95%' , overflow:'auto'})
			btnSyn.to('.intro_not_more' , 0.5 , {display:'flex'})
			btnSyn.to('.intro_not_more' , 0.5 , {opacity:'1'})



		})


	});




	//  width 1224++

	$(function(){

		if($(window).width() >= 1224 ) {



			// hover  

			$(function() {
				var hovering = new TimelineMax();
				var outo = new TimelineMax();


				// hover

					$('.intro-vin-cont').hover( 
								function() {
						$(this).next().css({'width' :'20%' , 'height' : '85%'})
						$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
						$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
						$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

						$(this).prev().css({'width' :'20%' , 'height' : '85%'})
						$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
						$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
						$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

						$(this).css({'width' : '100%' , 'height' : '90%' } )



						$(this).children().css({'opacity':'1'})
						$(this).next().find('.termi-text-vin').css({'opacity':'0'})
						$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

						},
							function() {

						$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
						$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



					})

					$('.block-termi-hover').mouseout(function()
					{
							hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
					})		  	


					// color hover 

					$(".co1n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
					  }
					);

					$(".co2n").hover(
					  function() {
							hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

					  }
					);

					$(".co3n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

					  }
					);

					$(".co4n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

					  }
					);

					$(".co4n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

					  }
					);

					$(".co5n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

					  }
					);

			});

			$(function() {

				var introB = new TimelineMax()
					.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

					var scene = new ScrollMagic.Scene({
						triggerElement: '.cont-synopsis-p',
						offset: 100,
					})
					.setTween(introB)
					.addTo(controllers)

			})

			$(function() {

				var MO = new TimelineMax()
					.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

				var MONCE = new ScrollMagic.Scene({
					triggerElement: '.cont-synopsis-p',
					offset: 100,
					reverse:false
				})
				.setTween(MO)
				.addTo(controllers)


			})

			$(function() {

				var naVop = new TimelineMax()
				.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
				.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
				.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

				var scene = new ScrollMagic.Scene({
				triggerElement: '.synopsis',
				offset: 200 ,
				})
				.setTween(naVop)
				.addTo(controllers)

			});

			$(function() {

					$('.imgf').attr('src', ' imgs/home_3page.jpg ');
					$('.imgb').attr('src' , ' imgs/home_3pageb.jpg ' );
			});


		}})

	//  width 900 - 1223 ,  height 500 - 900 2

	$(function(){

		if($(window).width() <= 1223 && $(window).width() >= 900 && $(window).height() <= 900 &&  $(window).height() >= 500 ) {

			// hover  

			$(function() {
				var hovering = new TimelineMax();
				var outo = new TimelineMax();


				// hover

					$('.intro-vin-cont').hover( 
								function() {
						$(this).next().css({'width' :'20%' , 'height' : '85%'})
						$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
						$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
						$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

						$(this).prev().css({'width' :'20%' , 'height' : '85%'})
						$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
						$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
						$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

						$(this).css({'width' : '100%' , 'height' : '90%' } )



						$(this).children().css({'opacity':'1'})
						$(this).next().find('.termi-text-vin').css({'opacity':'0'})
						$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

						},
							function() {

						$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
						$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



					})

					$('.block-termi-hover').mouseout(function()
					{
							hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
					})		  	


					// color hover 

					$(".co1n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
					  }
					);

					$(".co2n").hover(
					  function() {
							hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

					  }
					);

					$(".co3n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

					  }
					);

					$(".co4n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

					  }
					);

					$(".co4n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

					  }
					);

					$(".co5n").hover(
					  function() {
					  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
					  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
					  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
					  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
					  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
					  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

					  }
					);

			});

			$(function() {

				var introB = new TimelineMax()
					.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

					var scene = new ScrollMagic.Scene({
						triggerElement: '.cont-synopsis-p',
						offset: 100,
					})
					.setTween(introB)
					.addTo(controllers)

			})

			$(function() {

				var MO = new TimelineMax()
					.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

				var MONCE = new ScrollMagic.Scene({
					triggerElement: '.cont-synopsis-p',
					offset: 100,
					reverse:false
				})
				.setTween(MO)
				.addTo(controllers)


			})

			$(function() {

				var naVop = new TimelineMax()
				.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
				.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
				.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

				var scene = new ScrollMagic.Scene({
				triggerElement: '.synopsis',
				offset: 200 ,
				})
				.setTween(naVop)
				.addTo(controllers)

			});

					$(function() {

							$('.imgf').css('background-image' , 'url("../breaking_bad/imgs/home_3page.jpg") ');
							$('.imgb').css('background-image' , 'url("../breaking_bad/imgs/home_3pageb.jpg") ' );
					});

		}})


		//   width 900 - 1023 ,  height 900 - 1023 3

		$(function(){

			if($(window).width() <= 1023 && $(window).width() >= 900 && $(window).height() <= 1023 &&  $(window).height() >= 900 )  {

				// hover  

				$(function() {
					var hovering = new TimelineMax();
					var outo = new TimelineMax();


					// hover

						$('.intro-vin-cont').hover( 
									function() {
							$(this).next().css({'width' :'20%' , 'height' : '85%'})
							$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
							$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
							$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

							$(this).prev().css({'width' :'20%' , 'height' : '85%'})
							$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
							$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
							$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

							$(this).css({'width' : '100%' , 'height' : '90%' } )



							$(this).children().css({'opacity':'1'})
							$(this).next().find('.termi-text-vin').css({'opacity':'0'})
							$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

							},
								function() {

							$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
							$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



						})

						$('.block-termi-hover').mouseout(function()
						{
								hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
						})		  	


						// color hover 

						$(".co1n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
						  }
						);

						$(".co2n").hover(
						  function() {
								hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

						  }
						);

						$(".co3n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

						  }
						);

						$(".co4n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

						  }
						);

						$(".co4n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

						  }
						);

						$(".co5n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

						  }
						);

				});

				$(function() {

					var introB = new TimelineMax()
						.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

						var scene = new ScrollMagic.Scene({
							triggerElement: '.cont-synopsis-p',
							offset: 100,
						})
						.setTween(introB)
						.addTo(controllers)

				})

				$(function() {

					var MO = new TimelineMax()
						.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

					var MONCE = new ScrollMagic.Scene({
						triggerElement: '.cont-synopsis-p',
						offset: 100,
						reverse:false
					})
					.setTween(MO)
					.addTo(controllers)


				})

				$(function() {

					var naVop = new TimelineMax()
					.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
					.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
					.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

					var scene = new ScrollMagic.Scene({
					triggerElement: '.synopsis',
					offset: 200 ,
					})
					.setTween(naVop)
					.addTo(controllers)

				});

					$(function() {

							$('.imgf').css('background-image' , 'url("../breaking_bad/imgs/home_3page.jpg") ');
							$('.imgb').css('background-image' , 'url("../breaking_bad/imgs/home_3pageb.jpg") ' );
					});

			}})

		//  tablet witdh 1024px ++ less than 1224px 4
		$(function(){

			if($(window).width() <= 1223 && $(window).width() >= 1024  && $(window).height() >= 900)  {

				// hover  

				$(function() {
					var hovering = new TimelineMax();
					var outo = new TimelineMax();


					// hover

						$('.intro-vin-cont').hover( 
									function() {
							$(this).next().css({'width' :'20%' , 'height' : '85%'})
							$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
							$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
							$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

							$(this).prev().css({'width' :'20%' , 'height' : '85%'})
							$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
							$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
							$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

							$(this).css({'width' : '100%' , 'height' : '90%' } )



							$(this).children().css({'opacity':'1'})
							$(this).next().find('.termi-text-vin').css({'opacity':'0'})
							$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

							},
								function() {

							$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
							$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



						})

						$('.block-termi-hover').mouseout(function()
						{
								hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
						})		  	


						// color hover 

						$(".co1n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
						  }
						);

						$(".co2n").hover(
						  function() {
								hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

						  }
						);

						$(".co3n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

						  }
						);

						$(".co4n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

						  }
						);

						$(".co4n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

						  }
						);

						$(".co5n").hover(
						  function() {
						  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
						  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
						  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
						  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
						  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
						  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

						  }
						);

				});

				$(function() {

					var introB = new TimelineMax()
						.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

						var scene = new ScrollMagic.Scene({
							triggerElement: '.cont-synopsis-p',
							offset: 100,
						})
						.setTween(introB)
						.addTo(controllers)

				})

				$(function() {

					var MO = new TimelineMax()
						.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

					var MONCE = new ScrollMagic.Scene({
						triggerElement: '.cont-synopsis-p',
						offset: 100,
						reverse:false
					})
					.setTween(MO)
					.addTo(controllers)


				})

				$(function() {

					var naVop = new TimelineMax()
					.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
					.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
					.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

					var scene = new ScrollMagic.Scene({
					triggerElement: '.synopsis',
					offset: 200 ,
					})
					.setTween(naVop)
					.addTo(controllers)

				});

					$(function() {

							$('.imgf').css('background-image' , 'url("../breaking_bad/imgs/home_3page.jpg") ');
							$('.imgb').css('background-image' , 'url("../breaking_bad/imgs/home_3pageb.jpg") ' );
					});

			}})

		// phone wdith 0 - 500 , height 0 - 1000

		 $(function() {

				if($(window).width() >= 0  && $(window).width() <= 500 && $(window).height() >= 0 && $(window).height() <= 1500 )  {

					// hover  

					$(function() {
						  var hovering = new TimelineMax();
						  var outo = new TimelineMax();
						  

						  	// hover

						  	$('.intro-vin-cont').hover( 
				   					function() {
						  		$(this).next().css({'width' :'90%' , 'height' : '20%'})
						  		$(this).next().next().css({'width' :'85%' , 'height' : '20%'})
						  		$(this).next().next().next().css({'width' :'75%' , 'height' : '20%'})
						  		$(this).next().next().next().next().css({'width' :'65%' , 'height' : '20%'})

						  		$(this).prev().css({'width' :'90%' , 'height' : '20%'})
						  		$(this).prev().prev().css({'width' :'85%' , 'height' : '20%'})
						  		$(this).prev().prev().prev().css({'width' :'75%' , 'height' : '20%'})
						  		$(this).prev().prev().prev().prev().css({'width' :'65%' , 'height' : '20%'})

						  		$(this).css({'width' : '100%' , 'height' : '40%' } )



						  		$(this).children().css({'opacity':'1'})
						  		$(this).next().find('.termi-text-vin').css({'opacity':'0'})
						  		$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

						  		},
						  			function() {

						  		$('.intro-vin-cont').css({'width' : '80%' , 'height' : '20%'})
						  		$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



						  	})

								$('.block-termi-hover').mouseout(function()
								{
										hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
								})		  	
						  	

						  	// color hover 

								$(".co1n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
							    }
							  );

								$(".co2n").hover(
							    function() {
										hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

							    }
						  	);

								$(".co3n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

							    }
						  	);

								$(".co4n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							    }
						  	);

								$(".co4n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							    }
						  	);

								$(".co5n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

							    }
						  	);

						});

					$(function() {

						var introB = new TimelineMax()
							.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

							var scene = new ScrollMagic.Scene({
								triggerElement: '.cont-synopsis-p',
								offset: 100,
							})
							.setTween(introB)
							.addTo(controllers)

					})

					$(function() {

						var MO = new TimelineMax()
							.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

						var MONCE = new ScrollMagic.Scene({
							triggerElement: '.cont-synopsis-p',
							offset: 100,
							reverse:false
						})
						.setTween(MO)
						.addTo(controllers)


					})

					$(function() {

						var naVop = new TimelineMax()
						.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
						.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
						.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

						var scene = new ScrollMagic.Scene({
						triggerElement: '.synopsis',
						offset: 200 ,
						})
						.setTween(naVop)
						.addTo(controllers)

					});


					$(function() {

							$('.imgf').css('background-image' , 'url("../breaking_bad/imgs/home_3pageph.jpg") ');
							$('.imgb').css('background-image' , 'url("../breaking_bad/imgs/home_3pagebph.jpg") ' );
					});

			}})

		 $(function() {

			if($(window).width() >= 500  && $(window).width() <= 899 && $(window).height() >= 500 && $(window).height() <= 899 ) {

					// hover  

					$(function() {
						  var hovering = new TimelineMax();
						  var outo = new TimelineMax();
						  

						  	// hover

						  	$('.intro-vin-cont').hover( 
				   					function() {
						  		$(this).next().css({'width' :'90%' , 'height' : '20%'})
						  		$(this).next().next().css({'width' :'85%' , 'height' : '20%'})
						  		$(this).next().next().next().css({'width' :'75%' , 'height' : '20%'})
						  		$(this).next().next().next().next().css({'width' :'65%' , 'height' : '20%'})

						  		$(this).prev().css({'width' :'90%' , 'height' : '20%'})
						  		$(this).prev().prev().css({'width' :'85%' , 'height' : '20%'})
						  		$(this).prev().prev().prev().css({'width' :'75%' , 'height' : '20%'})
						  		$(this).prev().prev().prev().prev().css({'width' :'65%' , 'height' : '20%'})

						  		$(this).css({'width' : '100%' , 'height' : '40%' } )



						  		$(this).children().css({'opacity':'1'})
						  		$(this).next().find('.termi-text-vin').css({'opacity':'0'})
						  		$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

						  		},
						  			function() {

						  		$('.intro-vin-cont').css({'width' : '80%' , 'height' : '20%'})
						  		$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



						  	})

								$('.block-termi-hover').mouseout(function()
								{
										hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
								})		  	
						  	

						  	// color hover 

								$(".co1n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
							    }
							  );

								$(".co2n").hover(
							    function() {
										hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

							    }
						  	);

								$(".co3n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

							    }
						  	);

								$(".co4n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							    }
						  	);

								$(".co4n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							    }
						  	);

								$(".co5n").hover(
							    function() {
							    	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							    	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
							    	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
							    	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
							    	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
							    	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

							    }
						  	);

						});

					$(function() {

						var introB = new TimelineMax()
							.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

							var scene = new ScrollMagic.Scene({
								triggerElement: '.cont-synopsis-p',
								offset: 100,
							})
							.setTween(introB)
							.addTo(controllers)

					})

					$(function() {

						var MO = new TimelineMax()
							.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

						var MONCE = new ScrollMagic.Scene({
							triggerElement: '.cont-synopsis-p',
							offset: 100,
							reverse:false
						})
						.setTween(MO)
						.addTo(controllers)


					})

					$(function() {

						var naVop = new TimelineMax()
						.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
						.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
						.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

						var scene = new ScrollMagic.Scene({
						triggerElement: '.synopsis',
						offset: 200 ,
						})
						.setTween(naVop)
						.addTo(controllers)

					});


			}})

		//  phone width 501 - 1000 , height 0 - 500

		$(function() {

				if($(window).width() >= 500  && $(window).width() <= 1500 && $(window).height() >= 0 && $(window).height() <= 500 )   {


					// hover  

					$(function() {
						var hovering = new TimelineMax();
						var outo = new TimelineMax();


						// hover

							$('.intro-vin-cont').hover( 
										function() {
								$(this).next().css({'width' :'10%' , 'height' : '85%'})
								$(this).next().next().css({'width' :'10%' , 'height' : '83%'})
								$(this).next().next().next().css({'width' :'10%' , 'height' : '81%'})
								$(this).next().next().next().next().css({'width' :'10%' , 'height' : '79%'})

								$(this).prev().css({'width' :'10%' , 'height' : '85%'})
								$(this).prev().prev().css({'width' :'10%' , 'height' : '83%'})
								$(this).prev().prev().prev().css({'width' :'10%' , 'height' : '81%'})
								$(this).prev().prev().prev().prev().css({'width' :'10%' , 'height' : '79%'})

								$(this).css({'width' : '100%' , 'height' : '90%' } )



								$(this).children().css({'opacity':'1'})
								$(this).next().find('.termi-text-vin').css({'opacity':'0'})
								$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

								},
									function() {

								$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
								$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



							})

							$('.block-termi-hover').mouseout(function()
							{
									hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
							})		  	


							// color hover 

							$(".co1n").hover(
							  function() {
							  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
							  }
							);

							$(".co2n").hover(
							  function() {
									hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

							  }
							);

							$(".co3n").hover(
							  function() {
							  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

							  }
							);

							$(".co4n").hover(
							  function() {
							  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							  }
							);

							$(".co4n").hover(
							  function() {
							  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

							  }
							);

							$(".co5n").hover(
							  function() {
							  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
							  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
							  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
							  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
							  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
							  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

							  }
							);

					});

					$(function() {

						var naVop = new TimelineMax()
						.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
						.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
						.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

						var scene = new ScrollMagic.Scene({
						triggerElement: '.synopsis',
						offset: 50 ,
						})
						.setTween(naVop)
						.addTo(controllers)

					});

					$(function() {

						var introB = new TimelineMax()
							.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

							var scene = new ScrollMagic.Scene({
								triggerElement: '.cont-synopsis-p',
								offset: 100,
							})
							.setTween(introB)
							.addTo(controllers)

					})

					$(function() {

						var MO = new TimelineMax()
							.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

						var MONCE = new ScrollMagic.Scene({
							triggerElement: '.cont-synopsis-p',
							offset: 100,
							reverse:false
						})
						.setTween(MO)
						.addTo(controllers)


					})

					$(function() {

							$('.imgf').css('background-image' , 'url("../breaking_bad/imgs/home_3pagepw.jpg") ');
							$('.imgb').css('background-image' , 'url("../breaking_bad/imgs/home_3pagebpw.jpg") ' );
					});


				}})

				//  tablet width 768 - 1024 , height 1000++

				$(function(){

						if($(window).width() >= 768  && $(window).width() <= 1024 && $(window).height() >= 1000  ) {

							// hover  

							$(function() {
								var hovering = new TimelineMax();
								var outo = new TimelineMax();


								// hover

									$('.intro-vin-cont').hover( 
												function() {
										$(this).next().css({'width' :'20%' , 'height' : '85%'})
										$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
										$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
										$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

										$(this).prev().css({'width' :'20%' , 'height' : '85%'})
										$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
										$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
										$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

										$(this).css({'width' : '100%' , 'height' : '90%' } )



										$(this).children().css({'opacity':'1'})
										$(this).next().find('.termi-text-vin').css({'opacity':'0'})
										$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

										},
											function() {

										$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
										$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



									})

									$('.block-termi-hover').mouseout(function()
									{
											hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
									})		  	


									// color hover 

									$(".co1n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
									  }
									);

									$(".co2n").hover(
									  function() {
											hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

									  }
									);

									$(".co3n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

									  }
									);

									$(".co4n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

									  }
									);

									$(".co4n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

									  }
									);

									$(".co5n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

									  }
									);

							});

							$(function() {

								var introB = new TimelineMax()
									.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

									var scene = new ScrollMagic.Scene({
										triggerElement: '.cont-synopsis-p',
										offset: 100,
									})
									.setTween(introB)
									.addTo(controllers)

							})

							$(function() {

								var MO = new TimelineMax()
									.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

								var MONCE = new ScrollMagic.Scene({
									triggerElement: '.cont-synopsis-p',
									offset: 100,
									reverse:false
								})
								.setTween(MO)
								.addTo(controllers)


							})

							$(function() {

								var naVop = new TimelineMax()
								.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
								.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
								.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

								var scene = new ScrollMagic.Scene({
								triggerElement: '.synopsis',
								offset: 200 ,
								})
								.setTween(naVop)
								.addTo(controllers)

							});


					}})

						//  tablet width 1024 - 1223 , height  768 - 900

				$(function(){

					if($(window).width() >= 1024  && $(window).width() <= 1223 && $(window).height() >= 768 && $(window).height() <= 900 ) {


							// hover  

							$(function() {
								var hovering = new TimelineMax();
								var outo = new TimelineMax();


								// hover

									$('.intro-vin-cont').hover( 
												function() {
										$(this).next().css({'width' :'20%' , 'height' : '85%'})
										$(this).next().next().css({'width' :'20%' , 'height' : '83%'})
										$(this).next().next().next().css({'width' :'20%' , 'height' : '81%'})
										$(this).next().next().next().next().css({'width' :'20%' , 'height' : '79%'})

										$(this).prev().css({'width' :'20%' , 'height' : '85%'})
										$(this).prev().prev().css({'width' :'20%' , 'height' : '83%'})
										$(this).prev().prev().prev().css({'width' :'20%' , 'height' : '81%'})
										$(this).prev().prev().prev().prev().css({'width' :'20%' , 'height' : '79%'})

										$(this).css({'width' : '100%' , 'height' : '90%' } )



										$(this).children().css({'opacity':'1'})
										$(this).next().find('.termi-text-vin').css({'opacity':'0'})
										$(this).prev().find('.termi-text-vin').css({'opacity':'0'})

										},
											function() {

										$('.intro-vin-cont').css({'width' : '20%' , 'height' : '80%'})
										$('.intro-vin-cont').find('.termi-text-vin').css({'opacity':'0'})



									})

									$('.block-termi-hover').mouseout(function()
									{
											hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(224,224,224 ,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(194,194,194 ,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(166,166,166 ,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(140,140,140 ,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(112,112,112 ,1)'} ,  0)					
									})		  	


									// color hover 

									$(".co1n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,136,115,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(242,117,94,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(227,94,70,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(207,70,45,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(179,42,18,1)'} ,  0)
									  }
									);

									$(".co2n").hover(
									  function() {
											hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(107,255,198,1)'} , 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(85,237,179,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(51,212,150,1)'} , 0 )
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(33,196,134,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(14,173,112,1)'} , 0 )

									  }
									);

									$(".co3n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(92,190,250,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(60,164,230,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(35,141,207,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(20,123,186,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(5,101,161,1)'} , 0)

									  }
									);

									$(".co4n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

									  }
									);

									$(".co4n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(255,201,107,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(237,179,78,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(214,155,54,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(196,136,35,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(163,108,11,1)'} , 0)

									  }
									);

									$(".co5n").hover(
									  function() {
									  	hovering.to('.dummy' , 0.1 , {opacity:'1'} )
									  	hovering.to('.contcolor-1' , 0.5 , {backgroundColor:'rgba(252,87,255,1)'}, 0)
									  	hovering.to('.contcolor-2' , 0.5 , {backgroundColor:'rgba(232,61,235,1)'} , 0 )
									  	hovering.to('.contcolor-3' , 0.5 , {backgroundColor:'rgba(209,42,212,1)'} , 0)
									  	hovering.to('.contcolor-4' , 0.5 , {backgroundColor:'rgba(186,25,189,1)'} , 0 )
									  	hovering.to('.contcolor-5' , 0.5 , {backgroundColor:'rgba(160,0,163,1)'} , 0)

									  }
									);

							});

							$(function() {

								var introB = new TimelineMax()
									.fromTo('.imgb' , 1 , {opacity:'0'} , {opacity:'1'})

									var scene = new ScrollMagic.Scene({
										triggerElement: '.cont-synopsis-p',
										offset: 100,
									})
									.setTween(introB)
									.addTo(controllers)

							});

							$(function() {

								var MO = new TimelineMax()
									.fromTo('.cont-synopsis-p' , 1 , {left:'-200%'} , {left:'0%'})

								var MONCE = new ScrollMagic.Scene({
									triggerElement: '.cont-synopsis-p',
									offset: 100,
									reverse:false
								})
								.setTween(MO)
								.addTo(controllers)


							});

							$(function() {

								var naVop = new TimelineMax()
								.fromTo('.nav_menu_cont' , 0.1 , {display:'none'} , {display:'flex'})
								.fromTo('.logo_nav_cont' , 0.3 , {opacity:'0'} , {opacity:'1'})
								.fromTo('.nav_menu_else' , 0.5 , {opacity:'0'} , {opacity:'1'})

								var scene = new ScrollMagic.Scene({
								triggerElement: '.synopsis',
								offset: 200 ,
								})
								.setTween(naVop)
								.addTo(controllers)

							});

						}})



			});



