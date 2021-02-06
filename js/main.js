// let titleBoxbtn = document.querySelector('.title-box');
// let linkList = document.querySelector('.list-link');



// titleBoxbtn.addEventListener('click', function(){
// 	titleBoxbtn.classList.toggle('open');
// 	linkList.classList.toggle('open');
// });

$(function(){
	"use strict"
	$('.title-box').click(function(){
		$(this).toggleClass('open');
		$(this).next('div.list-link').toggleClass('open');
	});
	$('.cart, .title-cart').click(function(){
		$('.cart-box').toggleClass('open');
	});
	$('.burger').click(function(event) {
		$('.burger').toggleClass('active')	
	})
});