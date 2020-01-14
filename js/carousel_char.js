$(document).ready(function() {

	$('.carousel-slick').slick({


		prevArrow: "<button type='button' class='prev '><i class='fas fa-angle-left'></i></button>",
		nextArrow: "<button type='button' class='next '><i class='fas fa-angle-right'></i></button>",
		responsive: [
			{
				breakpoint: 5000,
				settings: {

					draggable: false,
					touchMove: false,
					swipe: false,
					slidesToShow:5,
					centerMode: true,


				}
			},
			{

				breakpoint: 1224,
				settings: {

					draggable: false,
					touchMove: false,
					swipe: false,
					slidesToShow:3,
					centerMode: true,


				}
			},
			{

				breakpoint: 500,
				settings: {

					draggable: false,
					touchMove: false,
					swipe: false,
					slidesToShow:1,
					centerMode: true,


				}
			},

		]

	})



	// function chemistry img after click

	var chmgone = function chemGone() {

		var cheGone = new TimelineMax()
		var che2Gone = new TimelineMax()

		cheGone.to('.chem-2' , 0.2 , {opacity:'0'})
		cheGone.to('.chem-13' , 0.2 , {opacity:'0'})
		cheGone.to('.chem-3' , 0.2 , {opacity:'0'})
		cheGone.to('.chem-12' , 0.2 , {opacity:'0'})
		cheGone.to('.chem-4' , 0.2 , {opacity:'0'})
		cheGone.to('.chem-11' , 0.2 , {opacity:'0'})

		che2Gone.to('.chem-5' , 0.2 , {opacity:'0'})
		che2Gone.to('.chem-9' , 0.2 , {opacity:'0'})
		che2Gone.to('.chem-6' , 0.2 , {opacity:'0'})
		che2Gone.to('.chem-8' , 0.2 , {opacity:'0'})
		che2Gone.to('.chem-7' , 0.2 , {opacity:'0'})
		che2Gone.to('.chem-1' , 0.2 , {opacity:'0'})




	}

	// function chemistry img after click back

	var chmopen = function chemOpen() {

		var cheOpen = new TimelineMax()
		var che2Open = new TimelineMax()

		cheOpen.to('.chem-2' , 0.2 , {opacity:'0.5'})
		cheOpen.to('.chem-13' , 0.2 , {opacity:'0.5'})
		cheOpen.to('.chem-3' , 0.2 , {opacity:'0.5'})
		cheOpen.to('.chem-12' , 0.2 , {opacity:'0.5'})
		cheOpen.to('.chem-4' , 0.2 , {opacity:'0.5'})
		cheOpen.to('.chem-11' , 0.2 , {opacity:'0.5'})

		che2Open.to('.chem-5' , 0.2 , {opacity:'0.5'})
		che2Open.to('.chem-9' , 0.2 , {opacity:'0.5'})
		che2Open.to('.chem-6' , 0.2 , {opacity:'0.5'})
		che2Open.to('.chem-8' , 0.2 , {opacity:'0.5'})
		che2Open.to('.chem-7' , 0.2 , {opacity:'0.5'})
		che2Open.to('.chem-1' , 0.2 , {opacity:'0.5'})



	}

	// function back button after click 1224px

	var backbutton = function Backbutton() {


		var bckBtn = new TimelineMax()

		bckBtn.fromTo('.content-btn' , 0.9 , { x:'0%'} , { x:'101%'} , 0)
		bckBtn.fromTo('.qoute-container' , 1 , {x:'0%'} , {x:'-101%'} , 0)
		bckBtn.fromTo('.content-lines' , 1 , {height:'100%'} , {height:'0%'})
		bckBtn.fromTo('.fll-content-hm' , 1 , {backgroundColor:'rgba(0,19,13,1)'}  , {backgroundColor:'transparent'} )
		bckBtn.fromTo('.content-pic-1' , 0.2 , {opacity:'1'} , {opacity:'0'})
		bckBtn.to('.fll-content-hm' , 0.4, {zIndex:'0'})
		bckBtn.fromTo('.grd-full', 0.3  , {  opacity:'0'} , { opacity:'1'  , ease: Linear.easeNone } )
		bckBtn.to('.grd-full' , 0.1 , {margin:'0'})
		bckBtn.fromTo('.cont-evry-itm:odd'  , 1 , {y:'100%' , opacity:'0'} , {y:'0%' , opacity:'1'} , 3)
		bckBtn.fromTo('.cont-evry-itm:even', 1 , {y:'-100%' , opacity:'0'} , {y:'0%', opacity:'1'} , 3 )
		bckBtn.add(chmopen)
		bckBtn.fromTo('.button-info' , 0.2 , {opacity:'0'} , {opacity:'1'})
		bckBtn.to('.in-ln-1-1' , 1 , {height:'17%'} , 4 )
		bckBtn.to('.in-ln-2-7' , 1 , {height:'14%'} , 4 )
		bckBtn.to('.in-ln-3-1' , 1 , {height:'10%'} , 4 )
		bckBtn.to('.in-ln-4-7' , 1 , {height:'7%'} , 4 )
		bckBtn.to('.tp-ln-10' , 1, {height:'13%'})
		bckBtn.to('.tp-ln-2' , 1 , {height:'13%'} )
		bckBtn.to('.slick-arrow' , 0.3 , {autoAlpha:'1' , scale:'1'})


	}

	// function back button after click 1024px less than 1224px

	var back2button = function Back2button() {


		var bckBtn = new TimelineMax()

		bckBtn.fromTo('.content-btn' , 0.9 , { x:'0%'} , { x:'101%'} , 0)
		bckBtn.fromTo('.qoute-container' , 1 , {x:'0%'} , {x:'-101%'} , 0)
		bckBtn.fromTo('.content-lines' , 1 , {height:'100%'} , {height:'0%'} )
		bckBtn.fromTo('.fll-content-hm' , 1 , {backgroundColor:'rgba(0,19,13,1)'}  , {backgroundColor:'transparent'} )
		bckBtn.fromTo('.content-pic-1' , 1 , {opacity:'1'} , {opacity:'0'} , 1)
		bckBtn.to('.fll-content-hm' , 0.4, {zIndex:'0'})
		bckBtn.fromTo('.grd-full', 0.3  , { opacity:'0'} , { opacity:'1'  , ease: Linear.easeNone } )
		bckBtn.to('.grd-full' , 0.1 , {margin:'0'})
		bckBtn.fromTo('.cont-evry-itm:odd'  , 1 , {y:'100%' , opacity:'0'} , {y:'0%' , opacity:'1'} , 3)
		bckBtn.fromTo('.cont-evry-itm:even', 1 , {y:'-100%' , opacity:'0'} , {y:'0%', opacity:'1'} , 3 )
		bckBtn.add(chmopen)
		bckBtn.fromTo('.button-info' , 0.2 , {opacity:'0'} , {opacity:'1'})
		bckBtn.to('.in-ln-1-1' , 1 , {height:'29%'} , 4 )
		bckBtn.to('.in-ln-2-7' , 1 , {height:'24%'} , 4 )
		bckBtn.to('.tp-ln-10' , 1, {height:'9%'})
		bckBtn.to('.tp-ln-2' , 1 , {height:'9%'} )
		bckBtn.to('.slick-arrow' , 0.3 , {autoAlpha:'1' , scale:'1'})


	}


	//  function back button after click hp horizontal

	var back2buttonPh = function () {

		var bckBtn = new TimelineMax()

		bckBtn.fromTo('.hm-char' , 0 , {overflow:'visible'} , {overflow:'hidden'} , 2)
		bckBtn.fromTo('.content-btn' , 0.6 , {x:'0%'} , {x:'-100%'} , 0)
		bckBtn.fromTo('.qoute-container' , 1.2 , {x:'0%'} , {x:'100%'} , 0)
		bckBtn.fromTo('.content-pic-1' , 1 , {opacity:'1'} , {opacity:'0'} , 1)
		bckBtn.fromTo('.fll-content-hm' , 0 , {opacity:'1'} , {opacity:'0'} , 2)
		bckBtn.fromTo('.fll-content-hm' , 0 , {display:'grid'} , {display:'none'}, 2)
		bckBtn.fromTo('.grd-full' , 0 , {display:'none'} , {display:'flex'})
		bckBtn.fromTo('.grd-full', 0.3 , {opacity:'0'} , {opacity:'1'})
		bckBtn.fromTo('.cont-evry-itm' , 1  , {opacity:'0'} , {opacity:'1'} , 3)
		bckBtn.add(chmopen)
		bckBtn.fromTo('.button-info' , 0.2 , {opacity:'0'} , {opacity:'1'})
		bckBtn.to('.tp-ln-10' , 1, {height:'9%'})
		bckBtn.to('.tp-ln-2' , 1 , {height:'9%'} )
		bckBtn.to('.slick-arrow' , 0.2  , {opacity:'1'}  )


	}

	//  function back button after click hp vertical

	var back2buttonPv = function () {

		var bckBtn = new TimelineMax()

		bckBtn.fromTo('.hm-char' , 0 , {overflow:'visible'} , {overflow:'hidden'} , 2)
		bckBtn.fromTo('.content-btn' , 0.6 , {x:'0%'} , {x:'-100%'} , 0)
		bckBtn.fromTo('.qoute-container' , 1.2 , {x:'0%'} , {x:'100%'} , 0)
		bckBtn.fromTo('.content-pic-1' , 1 , {opacity:'1'} , {opacity:'0'} , 1)
		bckBtn.fromTo('.fll-content-hm' , 0 , {opacity:'1'} , {opacity:'0'} , 2)
		bckBtn.fromTo('.fll-content-hm' , 0 , {display:'grid'} , {display:'none'}, 2)
		bckBtn.fromTo('.grd-full' , 0 , {display:'none'} , {display:'flex'})
		bckBtn.fromTo('.grd-full', 0.3 , {opacity:'0'} , {opacity:'1'})
		bckBtn.fromTo('.cont-evry-itm' , 1  , {opacity:'0'} , {opacity:'1'} , 3)
		bckBtn.add(chmopen)
		bckBtn.fromTo('.button-info' , 0.2 , {opacity:'0'} , {opacity:'1'})
		bckBtn.to('.tp-ln-10' , 1, {height:'9%'})
		bckBtn.to('.tp-ln-2' , 1 , {height:'9%'} )
		bckBtn.to('.in-ln-1-1' , 1 , {height:'29%'} , 4 )
		bckBtn.to('.in-ln-2-7' , 1 , {height:'24%'} , 4 )
		bckBtn.to('.slick-arrow' , 0.2  , {opacity:'1'}  )

	}	


	// function lines after click 

	var lines = function Lines () {

		var LINes = new TimelineMax()

		LINes.to('.slick-arrow' , 0.3 , {autoAlpha:'0' , scale:'0.4'})
		LINes.to('.tp-ln-1',  1, { width:'100%' , ease: Power2.easeNone } )
		LINes.to('.tp-ln-2',  1, { height:'100%' , ease: Power2.easeNone } )
		LINes.to('.tp-ln-10',  1, { height:'100%' , ease: Power2.easeNone } )
		LINes.to(['.in-ln-1-1','.in-ln-2-7' , '.in-ln-3-1' , '.in-ln-4-7' , '.in-ln-5-1'  ] , 1  , {height:'100%'} , 3)
		LINes.add(chmgone , 3)

	}

	//  function lines after click hp horizontal

	var linesP = function() {

		var LinesP = new TimelineMax()

		LinesP.to('.slick-arrow' , 0.2 , {opacity:'0'})
		LinesP.to('.tp-ln-1',  1, { width:'100%' , ease: Power2.easeNone } )
		LinesP.to('.tp-ln-2',  1, { height:'100%' , ease: Power2.easeNone } )
		LinesP.to('.tp-ln-10',  1, { height:'100%' , ease: Power2.easeNone } )
		LinesP.add(chmgone , 3)
		LinesP.fromTo('.button-info' , 0.2 , {opacity:'1'} , {opacity:'0'} , 0)
		LinesP.fromTo('.cont-evry-itm' , 1 , {opacity:'1'} , {opacity:'0'} , 4)
		LinesP.fromTo('.grd-full' , 0.3 , { opacity:'1'} , {opacity:'0'})
		LinesP.fromTo('.grd-full' , 0 , {display:'flex'} , {display:'none'} )



	}

	var linesPv = function() {

		var LinesP = new TimelineMax()

		LinesP.to('.slick-arrow' , 0.2 , {opacity:'0'})
		LinesP.to('.tp-ln-1',  1, { width:'100%' , ease: Power2.easeNone } )
		LinesP.to('.tp-ln-2',  1, { height:'100%' , ease: Power2.easeNone } )
		LinesP.to('.tp-ln-10',  1, { height:'100%' , ease: Power2.easeNone } )
		LinesP.to(['.in-ln-1-1','.in-ln-2-7' ] , 1  , {height:'100%'} , 3)
		LinesP.add(chmgone , 3)
		LinesP.fromTo('.button-info' , 0.2 , {opacity:'1'} , {opacity:'0'} , 0)
		LinesP.fromTo('.cont-evry-itm' , 1 , {opacity:'1'} , {opacity:'0'} , 4)
		LinesP.fromTo('.grd-full' , 0.3 , { opacity:'1'} , {opacity:'0'})
		LinesP.fromTo('.grd-full' , 0 , {display:'flex'} , {display:'none'} )		

	}


	//  after line

	var afline = function () {

		var AFLINE = new TimelineMax()

		
			AFLINE.fromTo('.button-info' , 0.2 , {opacity:'1'} , {opacity:'0'} , 0)
			AFLINE.fromTo( '.cont-evry-itm:odd'  , 1 , {y:'0%' , opacity:'1'} , {y:'100%' , opacity:'0'} , 4)
			AFLINE.fromTo('.cont-evry-itm:even', 1 , {y:'0%' , opacity:'1'} , {y:'-100%', opacity:'0'} , 4 )
			AFLINE.fromTo('.grd-full', 0.3 , { opacity:'1' } , {  opacity:'0', ease: Linear.easeNone}  )

	}

	// after bio content

	var afbio = function() {

		var AFBIO = new TimelineMax()

			AFBIO.fromTo('.content-lines' , 1 , {height:'0%'} , {height:'100%'} ,6 )
			AFBIO.fromTo('.content-pic-1' , 1 , {opacity:'0'} , {opacity:'1'} , 6.3)
			AFBIO.fromTo('.qoute-container', 0.5 , {x:'-100%'} , {x:'0%'}, 7 )
			AFBIO.fromTo('.content-btn' ,0.5 , {x:'101%'} , {x:'0%'} ,7)
		


	}

	//  after bio content phone

	var afbioP = function() {

			var afBIO = new TimelineMax()

			afBIO.fromTo('.content-pic-1' , 1 , {opacity:'0'} , {opacity:'1'} , 6.3)
			afBIO.fromTo('.qoute-container', 0.5 , {x:'100%'} , {x:'0%'}, 6.3 )


	}


	//  function qoute container

	var qouteCont = function() {

		var QouteCont = new TimelineMax()

		QouteCont.fromTo('.qoute-dummy' , 0, {height:'40%'} , {height:'25%'} )
		QouteCont.fromTo('.qoute-container' , 0, {width:'70%' , height:'60%'} , {width:'100%' , height:'75%'} )
		QouteCont.fromTo('.qoute-word , .trademark-word' , 0 , {padding:'0'} , {padding:'0 1rem'})		


	}

	// function qoute container phone horizontal

	var qoutecontP = function() {

		var qoutecont = new TimelineMax()

		qoutecont.fromTo('.qoute-dummy' , 0, {height:'40%'} , {height:'10%'} )
		qoutecont.fromTo('.qoute-container' , 0, {width:'70%' , height:'60%'} , {width:'97%' , height:'29%'} )
		qoutecont.fromTo('.qoute-word , .trademark-word' , 0 , {padding:'0'} , {padding:'0 1rem'})		

	}

	//  function qoute container phone vertical

	var qoutecontPV = function() {

		var qoutecont = new TimelineMax()

		qoutecont.fromTo('.qoute-dummy' , 0, {height:'40%'} , {height:'10%'} )
		qoutecont.fromTo('.qoute-container' , 0, {width:'70%' , height:'60%'} , {width:'90%' , height:'65%'} )
		qoutecont.fromTo('.qoute-word , .trademark-word' , 0 , {padding:'0'} , {padding:'0 1rem'})		


	}

	//  function btn biography 

	var biograph = function(){

		var titleBio = new TimelineMax()

		titleBio.to('.align-title' ,0.5 , {y:'200%'})
		titleBio.to('.title' , 0.1 ,  {text:'BIOGRAPHY', ease:Linear.easeNone})
		titleBio.to('.align-title' , 0.5 , {y:'0%'})

	}

	//  function btn development

	var develop = function() {

		var titledevelop = new TimelineMax()


		titledevelop.to('.align-title' ,0.5 , {y:'200%'})
		titledevelop.to('.title' , 0.1 ,  {text:'DEVELOPMENT', ease:Linear.easeNone})
		titledevelop.to('.align-title' , 0.5 , {y:'0%'})

	}

		//  button back change biogrpahy title

	$(function () {

		$('.button-info').on('click', function() {		

			var bioreset = new TimelineMax()


			bioreset.to('.title' , 0 ,  {text:'BIOGRAPHY', ease:Linear.easeNone})

		})

	})


	//  scroll magic init

	var controller = new ScrollMagic.Controller();



	//  pc, laptop, tablet width 1224px ++ 

	$(function(){

		if($(window).width() >= 1224 ) {
	

			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})
		}
	})


	//  img properties width 900 - 1223 ,  height  - 900

	$(function(){

		if($(window).width() <= 1223 && $(window).width() >= 900 && $(window).height() <= 900 &&  $(window).height() >= 500 )  {
	

			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})
		}
	})



	//  img properties width 900 - 1023 ,  height 900 - 1023

	$(function(){

		if($(window).width() <= 1023 && $(window).width() >= 900 && $(window).height() <= 1023 &&  $(window).height() >= 900 )  {
	

			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(backbutton)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})
		}
	})


	//  tablet witdh 1024px ++ less than 1224px


	$(function(){

		if($(window).width() <= 1223 && $(window).width() >= 1024  && $(window).height()  >= 900 && $(window).height() <= 1023)  {


			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-tb-v.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus.png-tb-v'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike.png-tb-v'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})

		}

	})


	//  tablet width 768 - 1024 , height 1000++  

	$(function(){

		if($(window).width() >= 768  && $(window).width() <= 1024 && $(window).height() >= 1000  )  {


			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-tb-v.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})

		}

	})


	//  tablet width 900 - 1023 , height 900 - 1023

	$(function(){

		if($(window).width() >= 900  && $(window).width() <= 1023 && $(window).height() >= 900 && $(window).height() <= 1023  )  {


			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)			
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-p-h.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-p-h.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-p-h.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-ph-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-ph-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-p-h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo--h.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-p-h.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})

		}

	})


	//  width 501 - 899 , height 500 - 899

	$(function(){

		if($(window).width() >= 501  && $(window).width() <= 899 && $(window).height() >= 500 && $(window).height() <= 899 )  {


			// 	button walter white click

			$('.char-1-1').on('click', function() {


				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qouteCont, 0)


					mvTop.add(lines , 0)
					mvTop.add(afline, 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-tb-v.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')		

				})
			
			// end button walter 
			})	


			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' ,0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')		

				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio,0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-tb-v.png'}, ease:Linear.easeNone} ,5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')		

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')		

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2, {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')		

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')		

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')		

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')		

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		

				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')		

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')		

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')		

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo-tb-v.png'}, ease:Linear.easeNone} , 5.3 )
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qouteCont, 0)

					mvTop.add(lines , 0)
					mvTop.add(afline, 0)	
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-tb-v.png'}, ease:Linear.easeNone}, 5.3)
					mvTop.to('.img-bg-cpu', 0.4 , {opacity:'1'})
					mvTop.to('.fll-content-hm' , 0.2 , {zIndex:'6'})
					mvTop.fromTo('.fll-content-hm' , 1 , {backgroundColor:'transparent'} , {backgroundColor:'rgba(0,19,13,1)'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%' } , {display:'block' , y:'0%'})
					mvTop.add(afbio, 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2button)
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')		

				})

			// end marco
			})

		}

	})






	// phone wdith 0 - 500 , height 0 - 1000

	 $(function() {

		if($(window).width() >= 0  && $(window).width() <= 500 && $(window).height() >= 0 && $(window).height() <= 1500 )  {

			//  magic scroll bio + deve btn

			$(function () {

				var movingBtn = new TimelineMax()

				movingBtn.fromTo('.content-btn' , 0.6 , { x:'-100%'} , {x:'0%'})

				var movingbtn = new ScrollMagic.Scene({

					triggerElement: '.cont-pic-1-1' , 
					offset: 350 ,

				})

				.setTween(movingBtn)
				// .addIndicators({name: '1 (duration: 0)'})
				.addTo(controller)

			})


			// credit scrollmagic

			$(function () {

				var creddit = new TimelineMax()

				creddit.fromTo('.toggle-credit' , 1.2 , {x:'-100%'} , {x:'0%'})

				var creditmove = new ScrollMagic.Scene({

					triggerElement:'.hp-credit' , 
					offset : -500 ,

				})

				.setTween(creddit)
				// .addIndicators({name: '2 (duration: 0)'})
				.addTo(controller)



			})	




			// 	button walter white click

			$('.char-1-1').on('click', function() {



				

				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')	

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			
			// end button walter 
			})	



			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

		


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)	
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')	

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	


				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)
				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)			

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)			

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)	
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	


				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)	
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qoutecontP , 0)

					mvTop.add(linesP , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPh)	
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	
					


				})

			// end marco
			})



		}

	 })


	//  phone width 501 - 1000 , height 0 - 500

	 $(function() {

		if($(window).width() >= 501  && $(window).width() <= 1500 && $(window).height() >= 0 && $(window).height() <= 500 )  {

			//  magic scroll bio + deve btn

			$(function () {

				var movingBtn = new TimelineMax()

				movingBtn.fromTo('.content-btn' , 0.6 , { x:'-100%'} , {x:'0%'})

				var movingbtn = new ScrollMagic.Scene({

					triggerElement: '.cont-pic-1-1' , 
					offset: 350 ,

				})

				.setTween(movingBtn)
				// .addIndicators({name: '1 (duration: 0)'})
				.addTo(controller)

			})


			// credit scrollmagic

			$(function () {

				var creddit = new TimelineMax()

				creddit.fromTo('.toggle-credit' , 1.2 , {x:'-100%'} , {x:'0%'})

				var creditmove = new ScrollMagic.Scene({

					triggerElement:'.hp-credit' , 
					offset : -200 ,

				})

				.setTween(creddit)
				// .addIndicators({name: '2 (duration: 0)'})
				.addTo(controller)



			})	




			// 	button walter white click

			$('.char-1-1').on('click', function() {



				

				// every item container


				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
				

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I am the one who knocks. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Heisenberg'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_white_folder/ww-ps-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});


				$('.deve-content-cont').addClass('offCont')			


				
				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont').removeClass('offCont');	
					$('.deve-content-cont').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop, 0)
					titleM.to('.bio-content-cont' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont').removeClass('offCont');
					$('.bio-content-cont').addClass('offCont');

					}
					

				})


			
				// button back 

				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					back.to('.deve-content-cont' , 1 , {display:'none' , y:'200%' } , 0 )
					$('.deve-content-cont').removeClass('offCont')
					$('.bio-content-cont').removeClass('offCont')	

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			
			// end button walter 
			})	



			// jesse button
			$('.char-1-2').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					
					mvTop.set('.qoute-word'  , {text:'&quot &nbsp Tell this asshole that if he wants to learn how to make my product, he’s gotta do it my way. The right way. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Jesse Pinkman'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jesse_folder/js-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-2' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

		


				});

				$('.deve-content-cont-2').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-2').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-2').removeClass('offCont');	
					$('.deve-content-cont-2').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-2').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-2' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-2' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-2' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-2').removeClass('offCont');
					$('.bio-content-cont-2').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)	
					back.to('.bio-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-2' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-2').removeClass('offCont')
					$('.bio-content-cont-2').removeClass('offCont')	

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	


				})
			



			// end jesse 
			})


			// skyler button
			$('.char-1-3').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp There can't be any mistakes like before. There has to be complete honesty &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skyler White'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skyler_folder/skyler-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-3' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-3').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-3').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-3').removeClass('offCont');	
					$('.deve-content-cont-3').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-3').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-3' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-3' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-3' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-3').removeClass('offCont');
					$('.bio-content-cont-3').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-3' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-3').removeClass('offCont')
					$('.bio-content-cont-3').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end skyler 
			})


			// walter jr button
			$('.char-1-4').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp The bad way to remember you would be the way you’ve been this whole last year. At least last night you were... real. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Walter Jr.'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/walter_jr_folder/wwjr-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-4' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

				});

				$('.deve-content-cont-4').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-4').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.deve-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-4').removeClass('offCont');	
					$('.deve-content-cont-4').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-4').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.bio-content-cont-4' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-4' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-4' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-4').removeClass('offCont');
					$('.bio-content-cont-4').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-4' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-4').removeClass('offCont')
					$('.bio-content-cont-4').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end walter jr 
			})


			// hank button
			$('.char-1-5').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:'&quot &nbsp I swear to Christ — I will put you under the jail. &nbsp  &quot'})
					mvTop.set('.trademark-word'  , {text:' - Hank Schrader'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hank_folder/hank-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-5' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-5').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-5').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-5').removeClass('offCont');	
					$('.deve-content-cont-5').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-5').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-5' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-5' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-5' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-5').removeClass('offCont');
					$('.bio-content-cont-5').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-5' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-5').removeClass('offCont')
					$('.bio-content-cont-5').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			



			// end hank
			})


			// todd button
			$('.char-1-6').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp You really don't want us coming back.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Todd Alquist'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/todd_folder/tod-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-6' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-6').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-6').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-6').removeClass('offCont');	
					$('.deve-content-cont-6').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-6').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-6' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-6' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-6' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-6').removeClass('offCont');
					$('.bio-content-cont-6').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-6' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-6').removeClass('offCont')
					$('.bio-content-cont-6').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})
			



			// end todd 
			})


			// gus button
			$('.char-1-7').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Look at me, Hector.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gustavo Fring'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gustavo_folder/gus-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-7' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-7').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-7').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-7').removeClass('offCont');	
					$('.deve-content-cont-7').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-7').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-7' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-7' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-7' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-7').removeClass('offCont');
					$('.bio-content-cont-7').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-7' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-7').removeClass('offCont')
					$('.bio-content-cont-7').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end gus
			})



			// mike button
			$('.char-1-8').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Just because you shot Jesse James, don't make you Jesse James.&nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Mike Ehrmantraut'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/mike_folder/mike-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-8' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-8').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-8').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-8').removeClass('offCont');	
					$('.deve-content-cont-8').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-8').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-8' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-8' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-8' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-8').removeClass('offCont');
					$('.bio-content-cont-8').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-8' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-8').removeClass('offCont')
					$('.bio-content-cont-8').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})
			



			// end mike 
			})


			// saul button
			$('.char-1-9').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don’t drink and drive. But if you do, call me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Saul Goodman'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/saul_folder/saul-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-9' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-9').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-9').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-9').removeClass('offCont');	
					$('.deve-content-cont-9').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-9').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-9' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-9' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-9' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-9').removeClass('offCont');
					$('.bio-content-cont-9').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-9' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-9').removeClass('offCont')
					$('.bio-content-cont-9').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)

				})



			// end saul
			})


			// tuco button
			$('.char-1-10').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Nobody moves crystal in the South Valley but me, bitch! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Tuco Salamanca'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/tuco_folder/tuco-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-10' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-10').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-10').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-10').removeClass('offCont');	
					$('.deve-content-cont-10').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-10').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-10' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-10' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-10' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-10').removeClass('offCont');
					$('.bio-content-cont-10').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-10' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-10').removeClass('offCont')
					$('.bio-content-cont-10').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end tuco 
			})


			// gale button
			$('.char-1-11').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					


					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Don't do this. You don't have to do this. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gale Boetticher'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/gale_folder/gale-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-11' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-11').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-11').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-11').removeClass('offCont');	
					$('.deve-content-cont-11').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-11').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-11' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-11' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-11' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-11').removeClass('offCont');
					$('.bio-content-cont-11').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-11' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-11').removeClass('offCont')
					$('.bio-content-cont-11').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end gale 
			})

			// hector button
			$('.char-1-12').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp La familia es todo &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Hector Salamanca'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/hector_folder/hector-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-12' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-12').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-12').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-12').removeClass('offCont');	
					$('.deve-content-cont-12').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-12').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-12' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-12' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-12' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-12').removeClass('offCont');
					$('.bio-content-cont-12').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-12' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-12').removeClass('offCont')
					$('.bio-content-cont-12').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end hector 
			})


			// jane button
			$('.char-1-13').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp And in addition to first and last, I want two more months. D.B.A.A. fee, non-refundable. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Jane Margolis'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jane_folder/jane-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-13' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-13').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-13').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-13').removeClass('offCont');	
					$('.deve-content-cont-13').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-13').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-13' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-13' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-13' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-13').removeClass('offCont');
					$('.bio-content-cont-13').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-13' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-13').removeClass('offCont')
					$('.bio-content-cont-13').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end jane 
			})


			// steven button
			$('.char-1-14').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp What kid? That kid? Timmy Dipshit there? The one that screwed up our sting? Oh, I'm all ears. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Steven Gomez'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/steven_folder/steven-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-14' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)

				});

				$('.deve-content-cont-14').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-14').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-14').removeClass('offCont');	
					$('.deve-content-cont-14').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-14').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-14' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-14' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-14' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-14').removeClass('offCont');
					$('.bio-content-cont-14').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-14' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-14').removeClass('offCont')
					$('.bio-content-cont-14').removeClass('offCont')		
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)
				})

			// end steven	
			})


			// marie button
			$('.char-1-15').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Why don't you kill yourself, Walt? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marie Schrader'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marie_folder/marie-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-15' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-15').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-15').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-15').removeClass('offCont');	
					$('.deve-content-cont-15').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-15').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-15' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-15' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-15' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-15').removeClass('offCont');
					$('.bio-content-cont-15').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-15' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-15').removeClass('offCont')
					$('.bio-content-cont-15').removeClass('offCont')	
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end marie
			})


			// elliot button
			$('.char-1-16').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We can help you. We have excellent health insurance. The best. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Elliot Shwartz'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/elliot_folder/elliot-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-16' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-16').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-16').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-16').removeClass('offCont');	
					$('.deve-content-cont-16').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-16').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-16' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-16' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-16' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-16').removeClass('offCont');
					$('.bio-content-cont-16').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-16' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-16').removeClass('offCont')
					$('.bio-content-cont-16').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end elliot 
			})


			// jessica button
			$('.char-1-17').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp I can't speak to this Heisenberg that people refer to, but whatever he became, the sweet, kind, brilliant man that we once knew long ago. He's gone. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Gretchen Schwartz'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/jessica_folder/jessica-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-17' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-17').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-17').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-17').removeClass('offCont');	
					$('.deve-content-cont-17').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-17').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-17' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-17' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-17' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-17').removeClass('offCont');
					$('.bio-content-cont-17').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-17' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-17').removeClass('offCont')
					$('.bio-content-cont-17').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end jessica 
			})


			// carmen button
			$('.char-1-18').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Walt, what's wrong with you?! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Carmen Molina'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/carmen_folder/carmen-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-18' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-18').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-18').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-18').removeClass('offCont');	
					$('.deve-content-cont-18').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-18').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-18' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-18' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-18' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-18').removeClass('offCont');
					$('.bio-content-cont-18').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-18' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-18').removeClass('offCont')
					$('.bio-content-cont-18').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)		

				})

			// end carmen 
			})


			// cousin button
			$('.char-1-19').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp This is crazy. Skyler would never do this to me. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Ted Beneke'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/cousin_folder/cousin-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-19' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-19').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-19').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-19').removeClass('offCont');	
					$('.deve-content-cont-19').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-19').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-19' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-19' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-19' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-19').removeClass('offCont');
					$('.bio-content-cont-19').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-19' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-19').removeClass('offCont')
					$('.bio-content-cont-19').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)			

				})

			// end cousin 
			})


			// lydia button
			$('.char-1-20').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Is it done? Is he gone? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Lydia Rodarte-Quayle '})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/lydia_folder/lydia-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-20' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-20').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-20').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-20').removeClass('offCont');	
					$('.deve-content-cont-20').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-20').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-20' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-20' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-20' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-20').removeClass('offCont');
					$('.bio-content-cont-20').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-20' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-20').removeClass('offCont')
					$('.bio-content-cont-20').removeClass('offCont')
					$('html , body').animate({scrollTop: $('body').offset().top} , 300)			

				})

			// end lydia
			})


			// badger button
			$('.char-1-21').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Are you a police officer? &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Badger'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/badger_folder/badger-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-21' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-21').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-21').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-21').removeClass('offCont');	
					$('.deve-content-cont-21').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-21').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-21' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-21' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-21' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-21').removeClass('offCont');
					$('.bio-content-cont-21').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)
					back.to('.bio-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-21' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-21').removeClass('offCont')
					$('.bio-content-cont-21').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end badger
			})


			// pete button
			$('.char-1-22').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp Hey, man, I'm slingin' mad volume and fat stackin' benjis, you know what I'm sayin'? I can't be all about, like, spelling and shit! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Skinny Pete'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/skinny_folder/pete-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-22' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-22').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-22').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-22').removeClass('offCont');	
					$('.deve-content-cont-22').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-22').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-22' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-22' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-22' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-22').removeClass('offCont');
					$('.bio-content-cont-22').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)	
					back.to('.bio-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-22' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-22').removeClass('offCont')
					$('.bio-content-cont-22').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	


				})

			// end pete
			})


			// leonel button
			$('.char-1-23').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					
					mvTop.set('.qoute-word'  , {text:"&quot &nbsp  He broke my toy! &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Leonel Salamanca'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/leonel_folder/leo-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-23' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)


				});

				$('.deve-content-cont-23').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-23').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-23').removeClass('offCont');	
					$('.deve-content-cont-23').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-23').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-23' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-23' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-23' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-23').removeClass('offCont');
					$('.bio-content-cont-23').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)	
					back.to('.bio-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-23' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-23').removeClass('offCont')
					$('.bio-content-cont-23').removeClass('offCont')		

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	

				})

			// end leonel
			})


			// marco buttons
			$('.char-1-24').on('click', function() {

				$(function () {

					var mvTop = new TimelineMax() //same thing as btm
					var mvBtm = new TimelineMax()
					

					mvTop.set('.qoute-word'  , {text:"&quot &nbsp We've waited long enough. We won't wait any longer. &nbsp  &quot"})
					mvTop.set('.trademark-word'  , {text:' - Marco Salamanca'})
					mvTop.add(qoutecontPV , 0)

					mvTop.add(linesPv , 0)
					mvTop.to('.cont-pic-1-1' , 0.1 , {attr:{src:'imgs/char/char-des/marco_folder/marco-p-h.png'}, ease:Linear.easeNone} , 5.3)
					mvTop.to('.fll-content-hm' , 0 , {zIndex:'3' , display:'grid' })
					mvTop.fromTo('.hm-char'  , 0 , {overflow:'hidden'} , {overflow:'visible'})
					mvTop.fromTo('.fll-content-hm' , 0 , {opacity:'0'} , {opacity:'1'})
					mvTop.fromTo('.bio-content-cont-24' , 0.3 , {display:'none' , y:'200%'   } , {display:'block' , y:'0%'  })
					mvTop.add(afbioP , 0)
				


				});

				$('.deve-content-cont-24').addClass('offCont')			

				// button biography
				$('.bio-cont').on('click', function() {

					if($('.bio-content-cont-24').hasClass('offCont') ) {


					var titleM = new TimelineMax()

					titleM.add(biograph,0)
					titleM.to('.deve-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.deve-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.bio-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.bio-content-cont-24').removeClass('offCont');	
					$('.deve-content-cont-24').addClass('offCont');


					}


				})
			

					// button development
				$('.deve-cont').on('click', function() {

					if($('.deve-content-cont-24').hasClass('offCont') ) {

					var titleM = new TimelineMax()

					titleM.add(develop,0)
					titleM.to('.bio-content-cont-24' , 0.5 , {y:'200%'} ,0.5 )
					titleM.to('.bio-content-cont-24' , 0.1 , {display:'none'})
					titleM.fromTo('.deve-content-cont-24' , 0.5 , {y:'200%' , display:'none'} , {y:'0%' , display:'block'})

					$('.deve-content-cont-24').removeClass('offCont');
					$('.bio-content-cont-24').addClass('offCont');

					}
					

				})


				// button back
				$('.btn-back').on('click', function() {

					var back = new TimelineMax()

					back.add(back2buttonPv)	
					back.to('.bio-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					back.to('.deve-content-cont-24' , 1 , {display:'none' , y:'200%' } ,0 )
					$('.deve-content-cont-24').removeClass('offCont')
					$('.bio-content-cont-24').removeClass('offCont')

					$('html , body').animate({scrollTop: $('body').offset().top} , 300)	
					


				})

			// end marco
			})



		}

	 })	



	//  img properties width 1024 - 1223 ,  height 768 - 900

	$(function(){

		if($(window).width() <= 1223 && $(window).width() >= 1024 && $(window).height() <= 900 &&  $(window).height() >= 768 ) {

			// change img attributes

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-1024t.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-1024t.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-1024t.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-1024t.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-1024t.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-1024t.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-1024t.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-1024t.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-1024t.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-1024t.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-1024t.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-1024t.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-1024t.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-1024t.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-1024t.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-1024t.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-1024t.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-1024t.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-1024t.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-1024t.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-1024t.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-1024t.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-1024t.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-1024t.jpg ' );


			}) 

		}
	})

	//  img properties width 900 - 1223 ,  height 500 - 700

	$(function(){

		if($(window).width() <= 1223 && $(window).width() >= 900 && $(window).height() <= 700 &&  $(window).height() >= 500 ) {

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-p-v.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-p-v.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-p-v.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-p-v.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-p-v.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-p-v.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-p-v.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-p-v.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-p-v.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-p-v.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-p-v.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-p-v.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-p-v.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-p-v.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-p-v.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-p-v.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-p-v.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-p-v.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-p-v.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-p-v.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-p-v.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-p-v.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-p-v.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-p-v.jpg ' );


			})

		}
	})


	//  img properties width 768 - 1223 ,  height 900++ 

	$(function(){

		if($(window).width() >= 768 && $(window).width() <= 1223 && $(window).height() >= 900  ) {

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-1024p.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-1024p.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-1024p.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-1024p.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-1024p.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-1024p.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-1024p.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-1024p.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-1024p.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-1024p.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-1024p.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-1024p.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-1024p.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-1024p.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-1024p.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-1024p.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-1024p.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-1024p.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-1024p.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-1024p.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-1024p.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-1024p.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-1024p.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-1024p.jpg ' );


			})
		}
	})


	//  img hp properties width 0 - 500 , height 0 - 767 

	$(function() {

		if($(window).width() >= 0  && $(window).width() <= 500 && $(window).height() >= 0 && $(window).height() <= 767 ) { 

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-p-v.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-p-v.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-p-v.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-p-v.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-p-v.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-p-v.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-p-v.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-p-v.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-p-v.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-p-v.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-p-v.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-p-v.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-p-v.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-p-v.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-p-v.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-p-v.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-p-v.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-p-v.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-p-v.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-p-v.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-p-v.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-p-v.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-p-v.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-p-v.jpg ' );


			})

		}
	})





	//  img hp properties width 0 - 600 , height 768 - 1000

	$(function() {

		if($(window).width() >= 0  && $(window).width() <= 600 && $(window).height() >= 768 && $(window).height() <= 1000 ) { 

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-1024t.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-1024t.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-1024t.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-1024t.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-1024t.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-1024t.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-1024t.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-1024t.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-1024t.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-1024t.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-1024t.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-1024t.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-1024t.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-1024t.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-1024t.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-1024t.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-1024t.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-1024t.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-1024t.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-1024t.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-1024t.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-1024t.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-1024t.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-1024t.jpg ' );


			})

		}
	})


	//  img hp properties width 801 - 1000 , height 0 - 500

	 $(function() {

		if($(window).width() >= 801  && $(window).width() <= 1000 && $(window).height() >= 0 && $(window).height() <= 500 ) {

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-p-v.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-p-v.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-p-v.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-p-v.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-p-v.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-p-v.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-p-v.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-p-v.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-p-v.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-p-v.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-p-v.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-p-v.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-p-v.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-p-v.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-p-v.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-p-v.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-p-v.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-p-v.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-p-v.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-p-v.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-p-v.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-p-v.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-p-v.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-p-v.jpg ' );
				$('.hpbg').attr('src' , ' imgs/char/char-des/t22est.jpg ' );

			})

		}
	})



	//  img hp properties width 0 - 800 , height 0 - 500

	 $(function() {

		if($(window).width() >= 0  && $(window).width() <= 801 && $(window).height() >= 0 && $(window).height() <= 500 ) {

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-p-2v.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-p-2v.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-p-2v.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-p-2v.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-p-2v.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-p-2v.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-p-2v.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-p-2v.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-p-2v.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-p-2v.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-p-2v.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-p-2v.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-p-2v.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-p-2v.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-p-2v.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-p-2v.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-p-2v.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-p-2v.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-p-2v.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-p-2v.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-p-2v.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-p-2v.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-p-2v.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-p-2v.jpg ' );
				$('.hpbg').attr('src' , ' imgs/char/char-des/t3est.jpg ' );

			})

		}
	})



	//  img hp properties width 900 - 1023 , height 900 - 1023

	$(function() {

		if($(window).width() >= 900  && $(window).width() <= 1023 && $(window).height() >= 900 && $(window).height() <= 1023 ) { 

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k.jpg ' );


			})

		}
	})


	$(function() {

		if($(window).width() >= 1024  && $(window).width() <= 1223 && $(window).height() >= 1024 &&  $(window).height() <= 1365  ) { 

			$(function(){

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k.jpg ' );


			})

		}
	})

	$(function() {

		if($(window).width() >= 1024  && $(window).width() <= 1223 && $(window).height() >= 1366  ) {

				$('.walter-chg').attr('src', ' imgs/char/char-des/walter_white_folder/char-ww-1k-1024p.jpg ');
				$('.jesse-chg').attr('src' , ' imgs/char/char-des/jesse_folder/char-jesse-1k-1024p.jpg ' );
				$('.skyler-chg').attr('src' , ' imgs/char/char-des/skyler_folder/char-skw-1k-1024p.jpg ' );
				$('.walterjr-chg').attr('src' , ' imgs/char/char-des/walter_jr_folder/char-jr-1k-1024p.jpg ' );
				$('.hank-chg').attr('src' , ' imgs/char/char-des/hank_folder/char-hank-1k-1024p.jpg ' );
				$('.todd-chg').attr('src' , ' imgs/char/char-des/todd_folder/char-todd-1k-1024p.jpg ' );
				$('.gus-chg').attr('src' , ' imgs/char/char-des/gustavo_folder/char-gus-1k-1024p.jpg ' );
				$('.mike-chg').attr('src' , ' imgs/char/char-des/mike_folder/char-mike-1k-1024p.jpg ' );
				$('.saul-chg').attr('src' , ' imgs/char/char-des/saul_folder/char-saul-1k-1024p.jpg ' );
				$('.tuco-chg').attr('src' , ' imgs/char/char-des/tuco_folder/char-tuco-1k-1024p.jpg ' );
				$('.gale-chg').attr('src' , ' imgs/char/char-des/gale_folder/char-gale-1k-1024p.jpg ' );
				$('.hector-chg').attr('src' , ' imgs/char/char-des/hector_folder/char-hector-1k-1024p.jpg ' );
				$('.jane-chg').attr('src' , ' imgs/char/char-des/jane_folder/char-jane-1k-1024p.jpg ' );
				$('.steven-chg').attr('src' , ' imgs/char/char-des/steven_folder/char-steven-1k-1024p.jpg ' );
				$('.marie-chg').attr('src' , ' imgs/char/char-des/marie_folder/char-marie-1k-1024p.jpg ' );
				$('.elliot-chg').attr('src' , ' imgs/char/char-des/elliot_folder/char-elliot-1k-1024p.jpg ' );
				$('.gretchen-chg').attr('src' , ' imgs/char/char-des/jessica_folder/char-jessica-1k-1024p.jpg ' );
				$('.carmen-chg').attr('src' , ' imgs/char/char-des/carmen_folder/char-carmen-1k-1024p.jpg ' );
				$('.ted-chg').attr('src' , ' imgs/char/char-des/cousin_folder/char-cousin-1k-1024p.jpg ' );
				$('.lydia-chg').attr('src' , ' imgs/char/char-des/lydia_folder/char-lydia-1k-1024p.jpg ' );
				$('.badger-chg').attr('src' , ' imgs/char/char-des/badger_folder/char-badger-1k-1024p.jpg ' );
				$('.skinny-chg').attr('src' , ' imgs/char/char-des/skinny_folder/char-pete-1k-1024p.jpg ' );
				$('.leonel-chg').attr('src' , ' imgs/char/char-des/leonel_folder/char-leo-1k-1024p.jpg ' );
				$('.marco-chg').attr('src' , ' imgs/char/char-des/marco_folder/char-marco-1k-1024p.jpg ' );

		}
	})






	// end doc ready

})



	

$(function () {

	// button click

	// var 





	//  next click btn

	$('.next').on('click', function() {

		// transition dissapear

		$(function(){

			if($(window).width() >= 1024 ) {

				var disapp = new TimelineMax()

				disapp.fromTo('.slick-slide' , 0.1 , {opacity:'1' } , {opacity:'0'})
				disapp.fromTo('.slick-slide' , 0.5 , {opacity:'0'} , {opacity:'1'})

			}
		}) 




		// jesse
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-2').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()

				

				// // $('.char-1-1').addClass('ds-none');
				// // $('.char-1-2').removeClass('ds-none');
				eveN.fromTo('.char-1-1' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-2' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// skyler
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-3').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-2').addClass('ds-none');
				// $('.char-1-3').removeClass('ds-none');
				odD.fromTo('.char-1-2' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-3' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// walter white jr
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-4').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-3').addClass('ds-none');
				// $('.char-1-4').removeClass('ds-none');
				eveN.fromTo('.char-1-3' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-4' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// hank
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-5').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-4').addClass('ds-none');
				// $('.char-1-5').removeClass('ds-none');
				odD.fromTo('.char-1-4' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-5' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}

		// todd
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-6').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-5').addClass('ds-none');
				// $('.char-1-6').removeClass('ds-none');
				eveN.fromTo('.char-1-5' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-6' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// gus
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-7').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-6').addClass('ds-none');
				// $('.char-1-7').removeClass('ds-none');
				odD.fromTo('.char-1-6' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-7' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)			


			}

		}


		// mike
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-8').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-7').addClass('ds-none');
				// $('.char-1-8').removeClass('ds-none');
				eveN.fromTo('.char-1-7' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-8' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// saul
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-9').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-8').addClass('ds-none');
				// $('.char-1-9').removeClass('ds-none');
				odD.fromTo('.char-1-8' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-9' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// tuco
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-10').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-9').addClass('ds-none');
				// $('.char-1-10').removeClass('ds-none');
				eveN.fromTo('.char-1-9' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-10' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// gale
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-11').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-10').addClass('ds-none');
				// $('.char-1-11').removeClass('ds-none');
				odD.fromTo('.char-1-10' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-11' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// hector
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-12').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-11').addClass('ds-none');
				// $('.char-1-12').removeClass('ds-none');
				eveN.fromTo('.char-1-11' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-12' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// jane
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-13').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-12').addClass('ds-none');
				// $('.char-1-13').removeClass('ds-none');
				odD.fromTo('.char-1-12' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-13' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}

		// steven
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-14').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-13').addClass('ds-none');
				// $('.char-1-14').removeClass('ds-none');
				eveN.fromTo('.char-1-13' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-14' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// marie
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-15').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-14').addClass('ds-none');
				// $('.char-1-15').removeClass('ds-none');
				odD.fromTo('.char-1-14' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-15' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// elliot
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-16').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-15').addClass('ds-none');
				// $('.char-1-16').removeClass('ds-none');
				eveN.fromTo('.char-1-15' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-16' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// gretchen
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-17').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-16').addClass('ds-none');
				// $('.char-1-17').removeClass('ds-none');
				odD.fromTo('.char-1-16' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-17' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// carmen
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-18').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-17').addClass('ds-none');
				// $('.char-1-18').removeClass('ds-none');
				eveN.fromTo('.char-1-17' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-18' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// ted
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-19').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-18').addClass('ds-none');
				// $('.char-1-19').removeClass('ds-none');
				odD.fromTo('.char-1-18' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-19' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}

		// lydia
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-20').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-19').addClass('ds-none');
				// $('.char-1-20').removeClass('ds-none');
				eveN.fromTo('.char-1-19' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-20' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// badger
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-21').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-20').addClass('ds-none');
				// $('.char-1-21').removeClass('ds-none');
				odD.fromTo('.char-1-20' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-21' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}

		// skinny
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-22').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-21').addClass('ds-none');
				// $('.char-1-22').removeClass('ds-none');
				eveN.fromTo('.char-1-21' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-22' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// leonel
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-23').hasClass('item')) {

				// button 
				var odD = new TimelineMax()
				// $('.char-1-22').addClass('ds-none');
				// $('.char-1-23').removeClass('ds-none');
				odD.fromTo('.char-1-22' , 0.1, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-23' , 0.1 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)


			}

		}


		// marco
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-24').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-23').addClass('ds-none');
				// $('.char-1-24').removeClass('ds-none');
				eveN.fromTo('.char-1-23' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-24' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// walter
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-1').hasClass('item')) {

				// button 
				var odD = new TimelineMax()				
				// $('.char-1-19').addClass('ds-none');
				// $('.char-1-24').addClass('ds-none');
				// $('.char-1-1').removeClass('ds-none');
				odD.fromTo('.char-1-24' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-1' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)

			}

		}




		// next end

	})



	//  prev click btn

	$('.prev').on('click', function() {

		// transition dissapear

		$(function(){

			if($(window).width() >= 1024 ) {

				var disapp = new TimelineMax()

				disapp.fromTo('.slick-slide' , 0.1 , {opacity:'1' } , {opacity:'0'})
				disapp.fromTo('.slick-slide' , 0.5 , {opacity:'0'} , {opacity:'1'})

			}
		}) 



		// marco
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-24').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-1').addClass('ds-none');
				// $('.char-1-24').removeClass('ds-none');
				eveN.fromTo('.char-1-1' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-24' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}



		// leonel
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-23').hasClass('item')) {

				// button 
				var odD = new TimelineMax()		
				// $('.char-1-24').addClass('ds-none');
				// $('.char-1-23').removeClass('ds-none');
				odD.fromTo('.char-1-24' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-23' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// skinny
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-22').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-23').addClass('ds-none');
				// $('.char-1-22').removeClass('ds-none');
				eveN.fromTo('.char-1-23' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-22' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// badger
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-21').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-22').addClass('ds-none');
				// $('.char-1-21').removeClass('ds-none');
				odD.fromTo('.char-1-22' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-21' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// lydia
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-20').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-21').addClass('ds-none');
				// $('.char-1-20').removeClass('ds-none');
				eveN.fromTo('.char-1-21' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-20' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// ted
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-19').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-20').addClass('ds-none');
				// $('.char-1-19').removeClass('ds-none');
				odD.fromTo('.char-1-20' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-19' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// carmen
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-18').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-19').addClass('ds-none');
				// $('.char-1-18').removeClass('ds-none');
				eveN.fromTo('.char-1-19' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-18' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// gretchen
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-17').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-18').addClass('ds-none');
				// $('.char-1-17').removeClass('ds-none');
				odD.fromTo('.char-1-18' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-17' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// elliot
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-16').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-17').addClass('ds-none');
				// $('.char-1-16').removeClass('ds-none');
				eveN.fromTo('.char-1-17' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-16' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}

		// marie
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-15').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-16').addClass('ds-none');
				// $('.char-1-15').removeClass('ds-none');
				odD.fromTo('.char-1-16' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-15' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// steven
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-14').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-15').addClass('ds-none');
				// $('.char-1-14').removeClass('ds-none');
				eveN.fromTo('.char-1-15' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-14' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// jane
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-13').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-14').addClass('ds-none');
				// $('.char-1-13').removeClass('ds-none');
				odD.fromTo('.char-1-14' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-13' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// hector
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-12').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-13').addClass('ds-none');
				// $('.char-1-12').removeClass('ds-none');
				eveN.fromTo('.char-1-13' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-12' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// gale
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-11').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-12').addClass('ds-none');
				// $('.char-1-11').removeClass('ds-none');
				odD.fromTo('.char-1-12' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-11' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// ttuco
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-10').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-11').addClass('ds-none');
				// $('.char-1-10').removeClass('ds-none');
				eveN.fromTo('.char-1-11' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-10' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// saul
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-9').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-10').addClass('ds-none');
				// $('.char-1-9').removeClass('ds-none');
				odD.fromTo('.char-1-10' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-9' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}

		// mike
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-8').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-9').addClass('ds-none');
				// $('.char-1-8').removeClass('ds-none');
				eveN.fromTo('.char-1-9' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-8' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// gus
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-7').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-8').addClass('ds-none');
				// $('.char-1-7').removeClass('ds-none');
				odD.fromTo('.char-1-8' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-7' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// todd
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-6').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-7').addClass('ds-none');
				// $('.char-1-6').removeClass('ds-none');
				eveN.fromTo('.char-1-7' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-6' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// hank
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-5').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-6').addClass('ds-none');
				// $('.char-1-5').removeClass('ds-none');
				odD.fromTo('.char-1-6' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-5' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// walter white jr
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-4').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-5').addClass('ds-none');
				// $('.char-1-4').removeClass('ds-none');
				eveN.fromTo('.char-1-5' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-4' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// skyler
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-3').hasClass('item')) {

				// button 
				var odD = new TimelineMax()	
				// $('.char-1-4').addClass('ds-none');
				// $('.char-1-3').removeClass('ds-none');
				odD.fromTo('.char-1-4' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-3' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// jesse
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-2').hasClass('item')) {

				// button 
				var eveN = new TimelineMax()
				// $('.char-1-3').addClass('ds-none');
				// $('.char-1-2').removeClass('ds-none');
				eveN.fromTo('.char-1-3' , 0.1, {top:'0%' , visibility:'visible'} , {top:'200%' , visibility:'hidden' } , 0)
				eveN.fromTo('.char-1-2' , 0.1 , {top:'-200%' , visibility:'hidden' } ,  {top:'15%' , visibility:'visible' } , 0)


			}

		}


		// walter white
		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cont-evry-itm > .chr-cont-1').hasClass('item')) {

				// button 
				var odD = new TimelineMax()					
				// $('.char-1-19').addClass('ds-none');
				// $('.char-1-2').addClass('ds-none');
				// $('.char-1-1').removeClass('ds-none');
				odD.fromTo('.char-1-2' , 0.2, {top:'15%' , visibility:'visible'} , {top:'-200%' , visibility:'hidden' } , 0)
				odD.fromTo('.char-1-1' , 0.2 , {top:'200%' , visibility:'hidden' } ,  {top:'0%' , visibility:'visible' } , 0)



			}

		}


		// prev end 
	})




})



jQuery.event.special.touchstart = 
{
  setup: function( _, ns, handle )
  {
    if ( ns.includes("noPreventDefault") ) 
    {
      this.addEventListener("touchstart", handle, { passive: false });
      this.addEventListener("touchmove", handle, { passive: false });
    } 
    else 
    {
      this.addEventListener("touchstart", handle, { passive: true });
      this.addEventListener("touchmove", handle, { passive: true });
    }
  }
};

jQuery.event.special.touchmove = 
{
  setup: function( _, ns, handle )
  {
    if ( ns.includes("noPreventDefault") ) 
    {
  
      this.addEventListener("touchmove", handle, { passive: false });
    } 
    else 
    {
  
      this.addEventListener("touchmove", handle, { passive: true });
    }
  }
};

