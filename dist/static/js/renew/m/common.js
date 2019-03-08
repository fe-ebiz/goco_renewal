$(function() {
	
	footerFn();
	bnbFn();
	
});

// 푸터 기능
function footerFn() {
	$(".rn-footer .address .fold").on("click", function() {
		$(this).toggleClass("on");
		$(this).next().slideToggle();
		// alert('hi');

		// if ( $(".rn-footer .address .area").css("display") == "none" ) {
		// 	$(".rn-footer .address .area").slideDown();
		// } else {
		// 	$(".rn-footer .address .area").slideUp();
		// }
		// if ( !$(".rn-footer .address .area").is(":visible") ) {
		// 	$(".rn-footer .address .area").slideDown();
		// } else {
		// 	$(".rn-footer .address .area").slideUp();
		// }
	});
}

// 하단 고정 메뉴 기능
function bnbFn() {
	$(".bnb .menu > li a").on("click", function() {
		$(this).closest("li").toggleClass("on");
	});
}