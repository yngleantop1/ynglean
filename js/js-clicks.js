// Smooth Scroll to same page href without modifying pathname
// https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 0, function () {
					var $target = $(target);
					$target.focus();
					if ($target.is(":focus")) {
						return false;
					} else {
						$target.attr('tabindex', '-1');
						$target.focus();
					};
				});
			}
		}
	});

$('#profile-picture').click(function () {
	window.location.href = "https://www.instagram.com/yngleanus/";
});

$('#codeblock-icon-email').click(function () {
	window.location.href = "mailto:help@drqwerciak.pl";
});

$('#codeblock-icon-github').click(function () {
	window.location.href = "https://github.com/yngleantop1/REDM/blob/main/README.md";
});

$('#codeblock-icon-linkedin').click(function () {
	window.location.href = "https://www.linkedin.com/in/drqwerciak";
});

$('#codeblock-icon-devpost').click(function () {
	window.location.href = "https://devpost.com/drqwerciak";
});

$('#codeblock-icon-unsplash').click(function () {
	window.location.href = "https://unsplash.com/@drqwerciak";
});

$('#codeblock-icon-instagram').click(function () {
	window.location.href = "https://www.instagram.com/yngleanus/";
});
