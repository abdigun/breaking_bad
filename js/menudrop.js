//  menu button

$(document).ready(function() {

	$('.menu-txt').on('click', function() {

	var menu = 	new TimelineMax()

		menu.fromTo('.menu-txt' , 0.3 , {y:'0'} , {y:'-200'})
		menu.fromTo('.menu-txt' , 0.1 , {display:'flex'} , {display:'none'})
		menu.fromTo('.menu-txt-b' ,0.1 ,{display:'none'} , {display:'flex'})
		menu.fromTo('.menu-txt-b' , 0.3 , {y:'-200'} , {y:'0'})
		menu.fromTo('.border-b' , 0.3 , { width:'100%'} , {width:'0%'} , 0)
		menu.fromTo('.menu-dropdown' , 0.2 , {height:'0%' } , {height:'15%' } , 0.3)
		menu.fromTo('.border-menu-in-r' , 0.2 , {height:'0%'} , {height:'100%'} , 0.3)
		menu.fromTo('.border-menu-in-l' , 0.2 , {height:'0%'} , {height:'100%'} , 0.3)
		menu.fromTo('.border-menu-in-b' , 0.2 , {width:'0%'} , {width:'100%'} , 0.7)
		menu.fromTo('.drop-home' , 0.2 , {x:'200%'} , {x:'0%'} , 1.1)
		menu.fromTo('.drop-cast' , 0.2 , {x:'-200%'} , {x:'0%'} , 1.1)
		menu.fromTo('.drop-char' , 0.2 , {x:'200%'} , {x:'0%'} , 1.1)





	})


	$('.menu-txt-b').on('click', function() {

		var menuB = 	new TimelineMax()


		menuB.fromTo('.menu-txt-b' , 0.3 , {y:'0'} , {y:'-200'} , 0)
		menuB.fromTo('.menu-txt-b' ,0.1 , {display:'flex'} ,{display:'none'} , 0.3  )
		menuB.fromTo('.menu-txt' , 0.1 , {display:'none'} , {display:'flex'} , 0.3 )
		menuB.fromTo('.menu-txt' , 0.3 , {y:'-200'} , {y:'0'} , 0.4)
		menuB.fromTo('.drop-home' , 0.2 , {x:'0%'} , {x:'200%'} , 0)
		menuB.fromTo('.drop-cast' , 0.2 , {x:'0%'} , {x:'-200%'} , 0)
		menuB.fromTo('.drop-char' , 0.2 , {x:'0%'} , {x:'200%'} , 0)
		menuB.fromTo('.border-menu-in-b' , 0.3 , {width:'100%'} , {width:'0%'} , 0.2 )	
		menuB.fromTo('.border-menu-in-r' , 0.2 , {height:'100%'} , {height:'0%'} , 0.6)
		menuB.fromTo('.border-menu-in-l' , 0.2 , {height:'100%'} , {height:'0%'} , 0.6)
		menuB.fromTo('.menu-dropdown' , 0.2 , {height:'15%' } , {height:'0%' } , 0.6 )
		menuB.fromTo('.border-b' , 0.3  , {width:'0%'} ,  { width:'100%'} , 1.1)



	})


})


