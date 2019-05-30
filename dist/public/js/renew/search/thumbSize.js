$(function () {


});

function thumbSize(obj, rateNumber, customWd, customHt) {
	var $thumb = $(obj);

	$thumb.each(function(i, e) {
        $(e).css({
            // width: "auto"
        });
		var wd =  $(e).width(),
			ht =  $(e).height(),
			rate = wd / ht,
			rateNum = Number(rateNumber),
			src =  $(e).attr("src");
		// console.log( i + ", " + wd + ", " + ht  + ", " + rateNum  + ", " + rate);
		// console.log( src );
		// 높이가 너비보다 클 경우, 작은 너비를 먼저 맞힌 후 높이 중앙 정렬
		if ( wd <= ht ) {
			if ( rate <= rateNum ) {
				wd = $(e).width(customWd);
				ht = $(e).height();

				console.log(ht);
				$(e).css({
					position: "absolute",
					top: "50%",
					marginTop: "-" + (ht/2) + "px"
				});
			} else if ( rate > rateNum ) {
				ht = $(e).height(customHt);
				wd =  $(e).width();

				$(e).css({
					position: "absolute",
					left: "50%",
					marginLeft: "-" + (wd/2) + "px"
				});
			}
		}
		// 너비가 높이보다 클 경우, 작은 높이를 먼저 맞힌 후 높이 중앙 정렬
		if ( wd > ht ) {
			// console.log( i + ", " + wd + ", " + ht  + ", " + rateNum  + ", " + rate);
			if ( rate <= rateNum ) {
				wd = $(e).width(customWd);
				ht = $(e).height();

				console.log(ht);
				$(e).css({
					position: "absolute",
					top: "50%",
					marginTop: "-" + (ht/2) + "px"
				});
			} else if ( rate > rateNum ) {
				ht = $(e).height(customHt);
				wd =  $(e).width();

				$(e).css({
					position: "absolute",
					left: "50%",
					marginLeft: "-" + (wd/2) + "px"
				});
			}
		}

		// console.log("-----------------------------");
		// console.log( i + ", " + wd + ", " + ht);

	});

}
