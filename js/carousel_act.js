

$(document).ready(function() {

	$('.carousel-slick').slick({

		prevArrow: "<div class='arr-l'><img src='imgs/frame/arrow-l.svg' alt=''></div>",
		nextArrow: "<div class='arr-r'><img src='imgs/frame/arrow-r.svg' alt=''></div>",
		responsive: [
			{
				breakpoint: 3200,
				settings: {

					draggable: false,
					touchMove: false,
					swipe: false,
					slidesToShow:3,
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


	//  click right 

	$('.arr-r').on('click', function(){


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst2').hasClass('item')) {

		// background image
			$('.testt').removeClass('bg-img-hm');
			$('.testt').removeClass('test1-hm');
			$('.testt').addClass('test2-hm');

		// background text top
			$('.bgafrl').removeClass('bg-img-rl-nm-1')
			$('.bgafrl').addClass('bg-img-rl-nm-2')

		// background text btm
			$('.bgafrn').removeClass('bg-img-real-nm-1')
			$('.bgafrn').addClass('bg-img-real-nm-2')

		// background img right container
			$('.bkimgcont').removeClass('bg-img-cont-2-1')
			$('.bkimgcont').addClass('bg-img-cont-2-2')

		// background img btm container 
			$('.bgimgcont3').removeClass('bg-img-cont-3-1')
			$('.bgimgcont3').addClass('bg-img-cont-3-2')

		// text name change
			$('.role-nm').html('Jesse Pinkman');
			$('.real-name').html('Aaron Paul');

		// text description change
			$('.bryan-desc').addClass('disnone');
			$('.aaron-desc').removeClass('disnone');


				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst3').hasClass('item')) {



			$('.testt').removeClass('test2-hm');
			$('.testt').addClass('test3-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-2')
			$('.bgafrl').addClass('bg-img-rl-nm-3')

			$('.bgafrn').removeClass('bg-img-real-nm-2')
			$('.bgafrn').addClass('bg-img-real-nm-3')

			$('.bkimgcont').removeClass('bg-img-cont-2-2')
			$('.bkimgcont').addClass('bg-img-cont-2-3')

			$('.bgimgcont3').removeClass('bg-img-cont-3-2')
			$('.bgimgcont3').addClass('bg-img-cont-3-3')

			$('.role-nm').html('Walter White, Jr.');
			$('.real-name').html('RJ Mitte');

		// text description change
			$('.aaron-desc').addClass('disnone');
			$('.rjmite-desc').removeClass('disnone');

				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst4').hasClass('item')) {

			$('.testt').removeClass('test3-hm');
			$('.testt').addClass('test4-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-3')
			$('.bgafrl').addClass('bg-img-rl-nm-4')

			$('.bgafrn').removeClass('bg-img-real-nm-3')
			$('.bgafrn').addClass('bg-img-real-nm-4')

			$('.bkimgcont').removeClass('bg-img-cont-2-3')
			$('.bkimgcont').addClass('bg-img-cont-2-4')

			$('.bgimgcont3').removeClass('bg-img-cont-3-3')
			$('.bgimgcont3').addClass('bg-img-cont-3-4')

			$('.role-nm').html('Skyler White');
			$('.real-name').html('Anna Gunn');

		// text description change
			$('.rjmite-desc').addClass('disnone');
			$('.anna-desc').removeClass('disnone');

				
			}
		}


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst5').hasClass('item')) {
				

			$('.testt').removeClass('test4-hm');
			$('.testt').addClass('test5-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-4')
			$('.bgafrl').addClass('bg-img-rl-nm-5')

			$('.bgafrn').removeClass('bg-img-real-nm-4')
			$('.bgafrn').addClass('bg-img-real-nm-5')

			$('.bkimgcont').removeClass('bg-img-cont-2-4')
			$('.bkimgcont').addClass('bg-img-cont-2-5')

			$('.bgimgcont3').removeClass('bg-img-cont-3-4')
			$('.bgimgcont3').addClass('bg-img-cont-3-5')

			$('.role-nm').html('Hank Schrader');
			$('.real-name').html('Dean Norris');

		// text description change
			$('.anna-desc').addClass('disnone');
			$('.hank-desc').removeClass('disnone');

			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst6').hasClass('item')) {
				
			$('.testt').removeClass('test5-hm');
			$('.testt').addClass('test6-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-5')
			$('.bgafrl').addClass('bg-img-rl-nm-6')

			$('.bgafrn').removeClass('bg-img-real-nm-5')
			$('.bgafrn').addClass('bg-img-real-nm-6')

			$('.bkimgcont').removeClass('bg-img-cont-2-5')
			$('.bkimgcont').addClass('bg-img-cont-2-6')

			$('.bgimgcont3').removeClass('bg-img-cont-3-5')
			$('.bgimgcont3').addClass('bg-img-cont-3-6')

			$('.role-nm').html('Todd Alquist');
			$('.real-name').html('Jesse Plemons');

		// text description change
			$('.hank-desc').addClass('disnone');
			$('.jesse-desc').removeClass('disnone');

			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst7').hasClass('item')) {
				

			$('.testt').removeClass('test6-hm');
			$('.testt').addClass('test7-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-6')
			$('.bgafrl').addClass('bg-img-rl-nm-7')

			$('.bgafrn').removeClass('bg-img-real-nm-6')
			$('.bgafrn').addClass('bg-img-real-nm-7')

			$('.bkimgcont').removeClass('bg-img-cont-2-6')
			$('.bkimgcont').addClass('bg-img-cont-2-7')

			$('.bgimgcont3').removeClass('bg-img-cont-3-6')
			$('.bgimgcont3').addClass('bg-img-cont-3-7')

			$('.role-nm').html('Gustavo Fring');
			$('.real-name').html('Giancarlo Esposito');

		// text description change
			$('.jesse-desc').addClass('disnone');
			$('.giancarlo-desc').removeClass('disnone');

			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst8').hasClass('item')) {


			$('.testt').removeClass('test7-hm');
			$('.testt').addClass('test8-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-7')
			$('.bgafrl').addClass('bg-img-rl-nm-8')

			$('.bgafrn').removeClass('bg-img-real-nm-7')
			$('.bgafrn').addClass('bg-img-real-nm-8')

			$('.bkimgcont').removeClass('bg-img-cont-2-7')
			$('.bkimgcont').addClass('bg-img-cont-2-8')

			$('.bgimgcont3').removeClass('bg-img-cont-3-7')
			$('.bgimgcont3').addClass('bg-img-cont-3-8')

			$('.role-nm').html('Mike Ehrmantraut');
			$('.real-name').html('Jonathan Banks');

		// text description change
			$('.giancarlo-desc').addClass('disnone');
			$('.jonathan-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst9').hasClass('item')) {


			$('.testt').removeClass('test8-hm');
			$('.testt').addClass('test9-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-8')
			$('.bgafrl').addClass('bg-img-rl-nm-9')

			$('.bgafrn').removeClass('bg-img-real-nm-8')
			$('.bgafrn').addClass('bg-img-real-nm-9')

			$('.bkimgcont').removeClass('bg-img-cont-2-8')
			$('.bkimgcont').addClass('bg-img-cont-2-9')

			$('.bgimgcont3').removeClass('bg-img-cont-3-8')
			$('.bgimgcont3').addClass('bg-img-cont-3-9')

			$('.role-nm').html('Saul Goodman');
			$('.real-name').html('Bob Odenkirk');

		// text description change
			$('.jonathan-desc').addClass('disnone');
			$('.saul-desc').removeClass('disnone');
				
			}
		}


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst10').hasClass('item')) {


			$('.testt').removeClass('test9-hm');
			$('.testt').addClass('test10-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-9')
			$('.bgafrl').addClass('bg-img-rl-nm-10')

			$('.bgafrn').removeClass('bg-img-real-nm-9')
			$('.bgafrn').addClass('bg-img-real-nm-10')

			$('.bkimgcont').removeClass('bg-img-cont-2-9')
			$('.bkimgcont').addClass('bg-img-cont-2-10')

			$('.bgimgcont3').removeClass('bg-img-cont-3-9')
			$('.bgimgcont3').addClass('bg-img-cont-3-10')

			$('.role-nm').html('Tuco Salamanca');
			$('.real-name').html('Raymond Cruz');

		// text description change
			$('.saul-desc').addClass('disnone');
			$('.tuco-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst11').hasClass('item')) {


			$('.testt').removeClass('test10-hm');
			$('.testt').addClass('test11-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-10')
			$('.bgafrl').addClass('bg-img-rl-nm-11')

			$('.bgafrn').removeClass('bg-img-real-nm-10')
			$('.bgafrn').addClass('bg-img-real-nm-11')

			$('.bkimgcont').removeClass('bg-img-cont-2-10')
			$('.bkimgcont').addClass('bg-img-cont-2-11')

			$('.bgimgcont3').removeClass('bg-img-cont-3-10')
			$('.bgimgcont3').addClass('bg-img-cont-3-11')

			$('.role-nm').html('Gale Boetticher');
			$('.real-name').html('David Costabile');

		// text description change
			$('.tuco-desc').addClass('disnone');
			$('.gale-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst12').hasClass('item')) {


			$('.testt').removeClass('test11-hm');
			$('.testt').addClass('test12-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-11')
			$('.bgafrl').addClass('bg-img-rl-nm-12')

			$('.bgafrn').removeClass('bg-img-real-nm-11')
			$('.bgafrn').addClass('bg-img-real-nm-12')

			$('.bkimgcont').removeClass('bg-img-cont-2-11')
			$('.bkimgcont').addClass('bg-img-cont-2-12')

			$('.bgimgcont3').removeClass('bg-img-cont-3-11')
			$('.bgimgcont3').addClass('bg-img-cont-3-12')

			$('.role-nm').html('Hector Salamanca');
			$('.real-name').html('Mark Margolis');

		// text description change
			$('.gale-desc').addClass('disnone');
			$('.hector-desc').removeClass('disnone');
				
			}
		}


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst13').hasClass('item')) {


			$('.testt').removeClass('test12-hm');
			$('.testt').addClass('test13-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-12')
			$('.bgafrl').addClass('bg-img-rl-nm-13')

			$('.bgafrn').removeClass('bg-img-real-nm-12')
			$('.bgafrn').addClass('bg-img-real-nm-13')

			$('.bkimgcont').removeClass('bg-img-cont-2-12')
			$('.bkimgcont').addClass('bg-img-cont-2-13')

			$('.bgimgcont3').removeClass('bg-img-cont-3-12')
			$('.bgimgcont3').addClass('bg-img-cont-3-13')

			$('.role-nm').html('Jane Margolis');
			$('.real-name').html('Krysten Ritter');

		// text description change
			$('.hector-desc').addClass('disnone');
			$('.jane-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst14').hasClass('item')) {


			$('.testt').removeClass('test13-hm');
			$('.testt').addClass('test14-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-13')
			$('.bgafrl').addClass('bg-img-rl-nm-14')

			$('.bgafrn').removeClass('bg-img-real-nm-13')
			$('.bgafrn').addClass('bg-img-real-nm-14')

			$('.bkimgcont').removeClass('bg-img-cont-2-13')
			$('.bkimgcont').addClass('bg-img-cont-2-14')

			$('.bgimgcont3').removeClass('bg-img-cont-3-13')
			$('.bgimgcont3').addClass('bg-img-cont-3-14')

			$('.role-nm').html('Steven Gomez');
			$('.real-name').html('Steven Michael Quezada');

		// text description change
			$('.jane-desc').addClass('disnone');
			$('.steven-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst15').hasClass('item')) {


			$('.testt').removeClass('test14-hm');
			$('.testt').addClass('test15-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-14')
			$('.bgafrl').addClass('bg-img-rl-nm-15')

			$('.bgafrn').removeClass('bg-img-real-nm-14')
			$('.bgafrn').addClass('bg-img-real-nm-15')

			$('.bkimgcont').removeClass('bg-img-cont-2-14')
			$('.bkimgcont').addClass('bg-img-cont-2-15')

			$('.bgimgcont3').removeClass('bg-img-cont-3-14')
			$('.bgimgcont3').addClass('bg-img-cont-3-15')

			$('.role-nm').html('Marie Schrader');
			$('.real-name').html('Betsy Brandt');

		// text description change
			$('.steven-desc').addClass('disnone');
			$('.marie-desc').removeClass('disnone');

			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst16').hasClass('item')) {


			$('.testt').removeClass('test15-hm');
			$('.testt').addClass('test16-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-15')
			$('.bgafrl').addClass('bg-img-rl-nm-16')

			$('.bgafrn').removeClass('bg-img-real-nm-15')
			$('.bgafrn').addClass('bg-img-real-nm-16')

			$('.bkimgcont').removeClass('bg-img-cont-2-15')
			$('.bkimgcont').addClass('bg-img-cont-2-16')

			$('.bgimgcont3').removeClass('bg-img-cont-3-15')
			$('.bgimgcont3').addClass('bg-img-cont-3-16')

			$('.role-nm').html('Elliot Schwartz');
			$('.real-name').html('Adam Godley');

		// text description change
			$('.marie-desc').addClass('disnone');
			$('.elliot-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst17').hasClass('item')) {


			$('.testt').removeClass('test16-hm');
			$('.testt').addClass('test17-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-16')
			$('.bgafrl').addClass('bg-img-rl-nm-17')

			$('.bgafrn').removeClass('bg-img-real-nm-16')
			$('.bgafrn').addClass('bg-img-real-nm-17')

			$('.bkimgcont').removeClass('bg-img-cont-2-16')
			$('.bkimgcont').addClass('bg-img-cont-2-17')

			$('.bgimgcont3').removeClass('bg-img-cont-3-16')
			$('.bgimgcont3').addClass('bg-img-cont-3-17')

			$('.role-nm').html('Gretchen Schwartz');
			$('.real-name').html('Jessica Hecht');

		// text description change
			$('.elliot-desc').addClass('disnone');
			$('.gretchen-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst18').hasClass('item')) {


			$('.testt').removeClass('test17-hm');
			$('.testt').addClass('test18-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-17')
			$('.bgafrl').addClass('bg-img-rl-nm-18')

			$('.bgafrn').removeClass('bg-img-real-nm-17')
			$('.bgafrn').addClass('bg-img-real-nm-18')

			$('.bkimgcont').removeClass('bg-img-cont-2-17')
			$('.bkimgcont').addClass('bg-img-cont-2-18')

			$('.bgimgcont3').removeClass('bg-img-cont-3-17')
			$('.bgimgcont3').addClass('bg-img-cont-3-18')

			$('.role-nm').html('Carmen Molina');
			$('.real-name').html('Carmen Serano');

		// text description change
			$('.gretchen-desc').addClass('disnone');
			$('.carmen-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst19').hasClass('item')) {


			$('.testt').removeClass('test18-hm');
			$('.testt').addClass('test19-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-18')
			$('.bgafrl').addClass('bg-img-rl-nm-19')

			$('.bgafrn').removeClass('bg-img-real-nm-18')
			$('.bgafrn').addClass('bg-img-real-nm-19')

			$('.bkimgcont').removeClass('bg-img-cont-2-18')
			$('.bkimgcont').addClass('bg-img-cont-2-19')

			$('.bgimgcont3').removeClass('bg-img-cont-3-18')
			$('.bgimgcont3').addClass('bg-img-cont-3-19')

			$('.role-nm').html('Ted Beneke');
			$('.real-name').html('Christopher Cousins');

		// text description change
			$('.carmen-desc').addClass('disnone');
			$('.ted-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst20').hasClass('item')) {


			$('.testt').removeClass('test19-hm');
			$('.testt').addClass('test20-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-19')
			$('.bgafrl').addClass('bg-img-rl-nm-20')

			$('.bgafrn').removeClass('bg-img-real-nm-19')
			$('.bgafrn').addClass('bg-img-real-nm-20')

			$('.bkimgcont').removeClass('bg-img-cont-2-19')
			$('.bkimgcont').addClass('bg-img-cont-2-20')

			$('.bgimgcont3').removeClass('bg-img-cont-3-19')
			$('.bgimgcont3').addClass('bg-img-cont-3-20')

			$('.role-nm').html('Lydia Rodarte');
			$('.real-name').html('Laura Fraser');

		// text description change
			$('.ted-desc').addClass('disnone');
			$('.lydia-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst21').hasClass('item')) {


			$('.testt').removeClass('test20-hm');
			$('.testt').addClass('test21-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-20')
			$('.bgafrl').addClass('bg-img-rl-nm-21')

			$('.bgafrn').removeClass('bg-img-real-nm-20')
			$('.bgafrn').addClass('bg-img-real-nm-21')

			$('.bkimgcont').removeClass('bg-img-cont-2-20')
			$('.bkimgcont').addClass('bg-img-cont-2-21')

			$('.bgimgcont3').removeClass('bg-img-cont-3-20')
			$('.bgimgcont3').addClass('bg-img-cont-3-21')

			$('.role-nm').html('Badger');
			$('.real-name').html('Matt Jones');

		// text description change
			$('.lydia-desc').addClass('disnone');
			$('.badger-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst22').hasClass('item')) {


			$('.testt').removeClass('test21-hm');
			$('.testt').addClass('test22-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-21')
			$('.bgafrl').addClass('bg-img-rl-nm-22')

			$('.bgafrn').removeClass('bg-img-real-nm-21')
			$('.bgafrn').addClass('bg-img-real-nm-22')

			$('.bkimgcont').removeClass('bg-img-cont-2-21')
			$('.bkimgcont').addClass('bg-img-cont-2-22')

			$('.bgimgcont3').removeClass('bg-img-cont-3-21')
			$('.bgimgcont3').addClass('bg-img-cont-3-22')

			$('.role-nm').html('Skinny Pete');
			$('.real-name').html('Charles Baker');

		// text description change
			$('.badger-desc').addClass('disnone');
			$('.skinny-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst23').hasClass('item')) {


			$('.testt').removeClass('test22-hm');
			$('.testt').addClass('test23-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-22')
			$('.bgafrl').addClass('bg-img-rl-nm-23')

			$('.bgafrn').removeClass('bg-img-real-nm-22')
			$('.bgafrn').addClass('bg-img-real-nm-23')

			$('.bkimgcont').removeClass('bg-img-cont-2-22')
			$('.bkimgcont').addClass('bg-img-cont-2-23')

			$('.bgimgcont3').removeClass('bg-img-cont-3-22')
			$('.bgimgcont3').addClass('bg-img-cont-3-23')

			$('.role-nm').html('Leonel Salamanca');
			$('.real-name').html('Daniel Moncada');

		// text description change
			$('.skinny-desc').addClass('disnone');
			$('.leonel-desc').removeClass('disnone');
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst24').hasClass('item')) {


			$('.testt').removeClass('test23-hm');
			$('.testt').addClass('test24-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-23')
			$('.bgafrl').addClass('bg-img-rl-nm-24')

			$('.bgafrn').removeClass('bg-img-real-nm-23')
			$('.bgafrn').addClass('bg-img-real-nm-24')

			$('.bkimgcont').removeClass('bg-img-cont-2-23')
			$('.bkimgcont').addClass('bg-img-cont-2-24')

			$('.bgimgcont3').removeClass('bg-img-cont-3-23')
			$('.bgimgcont3').addClass('bg-img-cont-3-24')

			$('.role-nm').html('Marco Salamanca');
			$('.real-name').html('Luis Moncada');

		// text description change
			$('.leonel-desc').addClass('disnone');
			$('.marco-desc').removeClass('disnone');
				
			}
		}

			if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst1').hasClass('item')) {


			$('.testt').addClass('bg-img-hm');

			$('.testt').removeClass('test24-hm');
			$('.testt').removeClass('test21-hm');
			$('.testt').removeClass('test23-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-24')
			$('.bgafrl').addClass('bg-img-rl-nm-1')
			$('.bgafrl').removeClass('bg-img-rl-nm-21')
			$('.bgafrl').removeClass('bg-img-rl-nm-23')

			$('.bgafrn').removeClass('bg-img-real-nm-24')
			$('.bgafrn').removeClass('bg-img-real-nm-21')
			$('.bgafrn').removeClass('bg-img-real-nm-23')
			$('.bgafrn').addClass('bg-img-real-nm-1')

			$('.bkimgcont').removeClass('bg-img-cont-2-24')
			$('.bkimgcont').removeClass('bg-img-cont-2-21')
			$('.bgimgcont3').removeClass('bg-img-cont-2-23')
			$('.bkimgcont').addClass('bg-img-cont-2-1')

			$('.bgimgcont3').removeClass('bg-img-cont-3-24')
			$('.bgimgcont3').removeClass('bg-img-cont-3-21')
			$('.bgimgcont3').removeClass('bg-img-cont-3-23')
			$('.bgimgcont3').addClass('bg-img-cont-3-1')

			$('.role-nm').html('Walter White');
			$('.real-name').html('Bryan Cranston');

		// text description change
			$('.badger-desc').addClass('disnone');
			$('.marco-desc').addClass('disnone');
			$('.bryan-desc').removeClass('disnone');


			}
		}




	})


	//  click left

	$('.arr-l').on('click', function() {



		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst24').hasClass('item')) {


			$('.testt').removeClass('bg-img-hm');
			$('.testt').addClass('test24-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-1');
			$('.bgafrl').addClass('bg-img-rl-nm-24');

			$('.bgafrn').removeClass('bg-img-real-nm-1');
			$('.bgafrn').addClass('bg-img-real-nm-24');

			$('.bkimgcont').removeClass('bg-img-cont-2-1');
			$('.bkimgcont').addClass('bg-img-cont-2-24')

			$('.bgimgcont3').removeClass('bg-img-cont-3-1');
			$('.bgimgcont3').addClass('bg-img-cont-3-24')

			$('.role-nm').html('Marco Salamanca');
			$('.real-name').html('Luis Moncada');

		// text description change
			$('.bryan-desc').addClass('disnone');
			$('.marco-desc').removeClass('disnone');	

			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst23').hasClass('item')) {


			$('.testt').removeClass('test24-hm');
			$('.testt').addClass('test23-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-24');
			$('.bgafrl').addClass('bg-img-rl-nm-23');

			$('.bgafrn').removeClass('bg-img-real-nm-24');
			$('.bgafrn').addClass('bg-img-real-nm-23');

			$('.bkimgcont').removeClass('bg-img-cont-2-24');
			$('.bkimgcont').addClass('bg-img-cont-2-23')

			$('.bgimgcont3').removeClass('bg-img-cont-3-24');
			$('.bgimgcont3').addClass('bg-img-cont-3-23')

			$('.role-nm').html('Leonel Salamanca');
			$('.real-name').html('Daniel Moncada');

		// text description change
			$('.marco-desc').addClass('disnone');
			$('.leonel-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst22').hasClass('item')) {


			$('.testt').removeClass('test23-hm');
			$('.testt').addClass('test22-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-23');
			$('.bgafrl').addClass('bg-img-rl-nm-22');

			$('.bgafrn').removeClass('bg-img-real-nm-23');
			$('.bgafrn').addClass('bg-img-real-nm-22');

			$('.bkimgcont').removeClass('bg-img-cont-2-23');
			$('.bkimgcont').addClass('bg-img-cont-2-22')

			$('.bgimgcont3').removeClass('bg-img-cont-3-23');
			$('.bgimgcont3').addClass('bg-img-cont-3-22')

			$('.role-nm').html('Skinny Pete');
			$('.real-name').html('Charles Baker');

		// text description change
			$('.leonel-desc').addClass('disnone');
			$('.skinny-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst21').hasClass('item')) {


			$('.testt').removeClass('test22-hm');
			$('.testt').addClass('test21-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-22');
			$('.bgafrl').addClass('bg-img-rl-nm-21');

			$('.bgafrn').removeClass('bg-img-real-nm-22');
			$('.bgafrn').addClass('bg-img-real-nm-21');

			$('.bkimgcont').removeClass('bg-img-cont-2-22');
			$('.bkimgcont').addClass('bg-img-cont-2-21')

			$('.bgimgcont3').removeClass('bg-img-cont-3-22');
			$('.bgimgcont3').addClass('bg-img-cont-3-21')

			$('.role-nm').html('Badger');
			$('.real-name').html('Matt Jones');

		// text description change
			$('.skinny-desc').addClass('disnone');
			$('.badger-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst20').hasClass('item')) {


			$('.testt').removeClass('test21-hm');
			$('.testt').addClass('test20-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-21');
			$('.bgafrl').addClass('bg-img-rl-nm-20');

			$('.bgafrn').removeClass('bg-img-real-nm-21');
			$('.bgafrn').addClass('bg-img-real-nm-20');

			$('.bkimgcont').removeClass('bg-img-cont-2-21');
			$('.bkimgcont').addClass('bg-img-cont-2-20')

			$('.bgimgcont3').removeClass('bg-img-cont-3-21');
			$('.bgimgcont3').addClass('bg-img-cont-3-20')

			$('.role-nm').html('Lydia Rodarte');
			$('.real-name').html('Laura Fraser');

		// text description change
			$('.badger-desc').addClass('disnone');
			$('.lydia-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst19').hasClass('item')) {


			$('.testt').removeClass('test20-hm');
			$('.testt').addClass('test19-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-20');
			$('.bgafrl').addClass('bg-img-rl-nm-19');

			$('.bgafrn').removeClass('bg-img-real-nm-20');
			$('.bgafrn').addClass('bg-img-real-nm-19');

			$('.bkimgcont').removeClass('bg-img-cont-2-20');
			$('.bkimgcont').addClass('bg-img-cont-2-19')

			$('.bgimgcont3').removeClass('bg-img-cont-3-20');
			$('.bgimgcont3').addClass('bg-img-cont-3-19')

			$('.role-nm').html('Ted Beneke');
			$('.real-name').html('Christopher Cousins');

		// text description change
			$('.lydia-desc').addClass('disnone');
			$('.ted-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst18').hasClass('item')) {


			$('.testt').removeClass('test19-hm');
			$('.testt').addClass('test18-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-19');
			$('.bgafrl').addClass('bg-img-rl-nm-18');

			$('.bgafrn').removeClass('bg-img-real-nm-19');
			$('.bgafrn').addClass('bg-img-real-nm-18');

			$('.bkimgcont').removeClass('bg-img-cont-2-19');
			$('.bkimgcont').addClass('bg-img-cont-2-18')

			$('.bgimgcont3').removeClass('bg-img-cont-3-19');
			$('.bgimgcont3').addClass('bg-img-cont-3-18')	

			$('.role-nm').html('Carmen Molina');
			$('.real-name').html('Carmen Serano');		

		// text description change
			$('.ted-desc').addClass('disnone');
			$('.carmen-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst17').hasClass('item')) {


			$('.testt').removeClass('test18-hm');
			$('.testt').addClass('test17-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-18');
			$('.bgafrl').addClass('bg-img-rl-nm-17');

			$('.bgafrn').removeClass('bg-img-real-nm-18');
			$('.bgafrn').addClass('bg-img-real-nm-17');

			$('.bkimgcont').removeClass('bg-img-cont-2-18');
			$('.bkimgcont').addClass('bg-img-cont-2-17')

			$('.bgimgcont3').removeClass('bg-img-cont-3-18');
			$('.bgimgcont3').addClass('bg-img-cont-3-17')			

			$('.role-nm').html('Gretchen Schwartz');
			$('.real-name').html('Jessica Hecht');

		// text description change
			$('.carmen-desc').addClass('disnone');
			$('.gretchen-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst16').hasClass('item')) {


			$('.testt').removeClass('test17-hm');
			$('.testt').addClass('test16-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-17');
			$('.bgafrl').addClass('bg-img-rl-nm-16');

			$('.bgafrn').removeClass('bg-img-real-nm-17');
			$('.bgafrn').addClass('bg-img-real-nm-16');

			$('.bkimgcont').removeClass('bg-img-cont-2-17');
			$('.bkimgcont').addClass('bg-img-cont-2-16')

			$('.bgimgcont3').removeClass('bg-img-cont-3-17');
			$('.bgimgcont3').addClass('bg-img-cont-3-16')			

			$('.role-nm').html('Elliot Schwartz');
			$('.real-name').html('Adam Godley');

		// text description change
			$('.gretchen-desc').addClass('disnone');
			$('.elliot-desc').removeClass('disnone');	
				
			}
		}		


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst15').hasClass('item')) {


			$('.testt').removeClass('test16-hm');
			$('.testt').addClass('test15-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-16');
			$('.bgafrl').addClass('bg-img-rl-nm-15');

			$('.bgafrn').removeClass('bg-img-real-nm-16');
			$('.bgafrn').addClass('bg-img-real-nm-15');

			$('.bkimgcont').removeClass('bg-img-cont-2-16');
			$('.bkimgcont').addClass('bg-img-cont-2-15')

			$('.bgimgcont3').removeClass('bg-img-cont-3-16');
			$('.bgimgcont3').addClass('bg-img-cont-3-15')			

			$('.role-nm').html('Marie Schrader');
			$('.real-name').html('Betsy Brandt');

		// text description change
			$('.elliot-desc').addClass('disnone');
			$('.marie-desc').removeClass('disnone');	
				
			}
		}		


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst14').hasClass('item')) {


			$('.testt').removeClass('test15-hm');
			$('.testt').addClass('test14-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-15');
			$('.bgafrl').addClass('bg-img-rl-nm-14');

			$('.bgafrn').removeClass('bg-img-real-nm-15');
			$('.bgafrn').addClass('bg-img-real-nm-14');

			$('.bkimgcont').removeClass('bg-img-cont-2-15');
			$('.bkimgcont').addClass('bg-img-cont-2-14')

			$('.bgimgcont3').removeClass('bg-img-cont-3-15');
			$('.bgimgcont3').addClass('bg-img-cont-3-14')			

			$('.role-nm').html('Steven Gomez');
			$('.real-name').html('Steven Michael Quezada');

		// text description change
			$('.marie-desc').addClass('disnone');
			$('.steven-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst13').hasClass('item')) {


			$('.testt').removeClass('test14-hm');
			$('.testt').addClass('test13-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-14');
			$('.bgafrl').addClass('bg-img-rl-nm-13');

			$('.bgafrn').removeClass('bg-img-real-nm-14');
			$('.bgafrn').addClass('bg-img-real-nm-13');

			$('.bkimgcont').removeClass('bg-img-cont-2-14');
			$('.bkimgcont').addClass('bg-img-cont-2-13')

			$('.bgimgcont3').removeClass('bg-img-cont-3-14');
			$('.bgimgcont3').addClass('bg-img-cont-3-13')			

			$('.role-nm').html('Jane Margolis');
			$('.real-name').html('Krysten Ritter');

		// text description change
			$('.steven-desc').addClass('disnone');
			$('.jane-desc').removeClass('disnone');	
				
			}
		}		


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst12').hasClass('item')) {


			$('.testt').removeClass('test13-hm');
			$('.testt').addClass('test12-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-13');
			$('.bgafrl').addClass('bg-img-rl-nm-12');

			$('.bgafrn').removeClass('bg-img-real-nm-13');
			$('.bgafrn').addClass('bg-img-real-nm-12');

			$('.bkimgcont').removeClass('bg-img-cont-2-13');
			$('.bkimgcont').addClass('bg-img-cont-2-12')

			$('.bgimgcont3').removeClass('bg-img-cont-3-13');
			$('.bgimgcont3').addClass('bg-img-cont-3-12')			

			$('.role-nm').html('Hector Salamanca');
			$('.real-name').html('Mark Margolis');

		// text description change
			$('.jane-desc').addClass('disnone');
			$('.hector-desc').removeClass('disnone');	
				
			}
		}		


		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst11').hasClass('item')) {


			$('.testt').removeClass('test12-hm');
			$('.testt').addClass('test11-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-12');
			$('.bgafrl').addClass('bg-img-rl-nm-11');

			$('.bgafrn').removeClass('bg-img-real-nm-12');
			$('.bgafrn').addClass('bg-img-real-nm-11');

			$('.bkimgcont').removeClass('bg-img-cont-2-12');
			$('.bkimgcont').addClass('bg-img-cont-2-11')

			$('.bgimgcont3').removeClass('bg-img-cont-3-12');
			$('.bgimgcont3').addClass('bg-img-cont-3-11')			

			$('.role-nm').html('Gale Boetticher');
			$('.real-name').html('David Costabile');

		// text description change
			$('.hector-desc').addClass('disnone');
			$('.gale-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst10').hasClass('item')) {


			$('.testt').removeClass('test11-hm');
			$('.testt').addClass('test10-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-11');
			$('.bgafrl').addClass('bg-img-rl-nm-10');

			$('.bgafrn').removeClass('bg-img-real-nm-11');
			$('.bgafrn').addClass('bg-img-real-nm-10');

			$('.bkimgcont').removeClass('bg-img-cont-2-11');
			$('.bkimgcont').addClass('bg-img-cont-2-10')

			$('.bgimgcont3').removeClass('bg-img-cont-3-11');
			$('.bgimgcont3').addClass('bg-img-cont-3-10')			

			$('.role-nm').html('Tuco Salamanca');
			$('.real-name').html('Raymond Cruz');

		// text description change
			$('.gale-desc').addClass('disnone');
			$('.tuco-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst9').hasClass('item')) {


			$('.testt').removeClass('test10-hm');
			$('.testt').addClass('test9-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-10');
			$('.bgafrl').addClass('bg-img-rl-nm-9');

			$('.bgafrn').removeClass('bg-img-real-nm-10');
			$('.bgafrn').addClass('bg-img-real-nm-9');

			$('.bkimgcont').removeClass('bg-img-cont-2-10');
			$('.bkimgcont').addClass('bg-img-cont-2-9')

			$('.bgimgcont3').removeClass('bg-img-cont-3-10');
			$('.bgimgcont3').addClass('bg-img-cont-3-9')			


			$('.role-nm').html('Saul Goodman');
			$('.real-name').html('Bob Odenkirk');

		// text description change
			$('.tuco-desc').addClass('disnone');
			$('.saul-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst8').hasClass('item')) {


			$('.testt').removeClass('test9-hm');
			$('.testt').addClass('test8-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-9');
			$('.bgafrl').addClass('bg-img-rl-nm-8');

			$('.bgafrn').removeClass('bg-img-real-nm-9');
			$('.bgafrn').addClass('bg-img-real-nm-8');

			$('.bkimgcont').removeClass('bg-img-cont-2-9');
			$('.bkimgcont').addClass('bg-img-cont-2-8')

			$('.bgimgcont3').removeClass('bg-img-cont-3-9');
			$('.bgimgcont3').addClass('bg-img-cont-3-8')			


			$('.role-nm').html('Mike Ehrmantraut');
			$('.real-name').html('Jonathan Banks');

		// text description change
			$('.saul-desc').addClass('disnone');
			$('.jonathan-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst7').hasClass('item')) {


			$('.testt').removeClass('test8-hm');
			$('.testt').addClass('test7-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-8');
			$('.bgafrl').addClass('bg-img-rl-nm-7');

			$('.bgafrn').removeClass('bg-img-real-nm-8');
			$('.bgafrn').addClass('bg-img-real-nm-7');

			$('.bkimgcont').removeClass('bg-img-cont-2-8');
			$('.bkimgcont').addClass('bg-img-cont-2-7')

			$('.bgimgcont3').removeClass('bg-img-cont-3-8');
			$('.bgimgcont3').addClass('bg-img-cont-3-7')			

			$('.role-nm').html('Gustavo Fring');
			$('.real-name').html('Giancarlo Esposito');

		// text description change
			$('.jonathan-desc').addClass('disnone');
			$('.giancarlo-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst6').hasClass('item')) {


			$('.testt').removeClass('test7-hm');
			$('.testt').addClass('test6-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-7');
			$('.bgafrl').addClass('bg-img-rl-nm-6');

			$('.bgafrn').removeClass('bg-img-real-nm-7');
			$('.bgafrn').addClass('bg-img-real-nm-6');

			$('.bkimgcont').removeClass('bg-img-cont-2-7');
			$('.bkimgcont').addClass('bg-img-cont-2-6')

			$('.bgimgcont3').removeClass('bg-img-cont-3-7');
			$('.bgimgcont3').addClass('bg-img-cont-3-6')			

			$('.role-nm').html('Todd Alquist');
			$('.real-name').html('Jesse Plemons');

		// text description change
			$('.giancarlo-desc').addClass('disnone');
			$('.jesse-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst5').hasClass('item')) {


			$('.testt').removeClass('test6-hm');
			$('.testt').addClass('test5-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-6');
			$('.bgafrl').addClass('bg-img-rl-nm-5');

			$('.bgafrn').removeClass('bg-img-real-nm-6');
			$('.bgafrn').addClass('bg-img-real-nm-5');

			$('.bkimgcont').removeClass('bg-img-cont-2-6');
			$('.bkimgcont').addClass('bg-img-cont-2-5')

			$('.bgimgcont3').removeClass('bg-img-cont-3-6');
			$('.bgimgcont3').addClass('bg-img-cont-3-5')			

			$('.role-nm').html('Hank Schrader');
			$('.real-name').html('Dean Norris');

		// text description change
			$('.jesse-desc').addClass('disnone');
			$('.hank-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst4').hasClass('item')) {


			$('.testt').removeClass('test5-hm');
			$('.testt').addClass('test4-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-5');
			$('.bgafrl').addClass('bg-img-rl-nm-4');

			$('.bgafrn').removeClass('bg-img-real-nm-5');
			$('.bgafrn').addClass('bg-img-real-nm-4');

			$('.bkimgcont').removeClass('bg-img-cont-2-5');
			$('.bkimgcont').addClass('bg-img-cont-2-4')

			$('.bgimgcont3').removeClass('bg-img-cont-3-5');
			$('.bgimgcont3').addClass('bg-img-cont-3-4')			

			$('.role-nm').html('Skyler White');
			$('.real-name').html('Anna Gunn');

		// text description change
			$('.hank-desc').addClass('disnone');
			$('.anna-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst3').hasClass('item')) {


			$('.testt').removeClass('test4-hm');
			$('.testt').addClass('test3-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-4');
			$('.bgafrl').addClass('bg-img-rl-nm-3');

			$('.bgafrn').removeClass('bg-img-real-nm-4');
			$('.bgafrn').addClass('bg-img-real-nm-3');

			$('.bkimgcont').removeClass('bg-img-cont-2-4');
			$('.bkimgcont').addClass('bg-img-cont-2-3')

			$('.bgimgcont3').removeClass('bg-img-cont-3-4');
			$('.bgimgcont3').addClass('bg-img-cont-3-3')			

			$('.role-nm').html('Walter White, Jr.');
			$('.real-name').html('RJ Mitte');

		// text description change
			$('.anna-desc').addClass('disnone');
			$('.rjmite-desc').removeClass('disnone');	
				
			}
		}		

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst2').hasClass('item')) {


			$('.testt').removeClass('test3-hm');
			$('.testt').addClass('test2-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-3');
			$('.bgafrl').addClass('bg-img-rl-nm-2');

			$('.bgafrn').removeClass('bg-img-real-nm-3');
			$('.bgafrn').addClass('bg-img-real-nm-2');

			$('.bkimgcont').removeClass('bg-img-cont-2-3');
			$('.bkimgcont').addClass('bg-img-cont-2-2')

			$('.bgimgcont3').removeClass('bg-img-cont-3-3');
			$('.bgimgcont3').addClass('bg-img-cont-3-2')			

			$('.role-nm').html('Jesse Pinkman');
			$('.real-name').html('Aaron Paul');

		// text description change
			$('.rjmite-desc').addClass('disnone');
			$('.aaron-desc').removeClass('disnone');	
				
			}
		}

		if ($('.slick-slide').hasClass('slick-center')) {

			if ($('.slick-center > div > .cst1').hasClass('item')) {

			$('.testt').removeClass('test23-hm');
			$('.testt').removeClass('test21-hm');
			$('.testt').removeClass('test2-hm');
			$('.testt').addClass('bg-img-hm');

			$('.bgafrl').removeClass('bg-img-rl-nm-23');
			$('.bgafrl').removeClass('bg-img-rl-nm-21');
			$('.bgafrl').removeClass('bg-img-rl-nm-2');
			$('.bgafrl').addClass('bg-img-rl-nm-1');

			$('.bgafrn').removeClass('bg-img-real-nm-23');
			$('.bgafrn').removeClass('bg-img-real-nm-21');
			$('.bgafrn').removeClass('bg-img-real-nm-2');
			$('.bgafrn').addClass('bg-img-real-nm-1');

			$('.bkimgcont').removeClass('bg-img-cont-2-23');
			$('.bkimgcont').removeClass('bg-img-cont-2-21');
			$('.bkimgcont').removeClass('bg-img-cont-2-2');
			$('.bkimgcont').addClass('bg-img-cont-2-1')

			$('.bgimgcont3').removeClass('bg-img-cont-3-23');
			$('.bgimgcont3').removeClass('bg-img-cont-3-21');
			$('.bgimgcont3').removeClass('bg-img-cont-3-2');
			$('.bgimgcont3').addClass('bg-img-cont-3-1')			


			$('.role-nm').html('Walter White');
			$('.real-name').html('Bryan Cranston');

		// text description change
			$('.badger-desc').addClass('disnone');
			$('.aaron-desc').addClass('disnone');
			$('.bryan-desc').removeClass('disnone');	
				
			}
		}		




	});
	





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