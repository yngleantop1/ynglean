// Theme Settings & Toggles
// Note: Header script sets drqwerciak-data-theme according to local storage
localStorage.getItem('drqwerciak-data-theme') === 'light' ? light() : dark();

document.querySelector('#logo').addEventListener('click', function () {
	document.documentElement.getAttribute('drqwerciak-data-theme') === 'light' ? dark() : light();
});

function light() {
	document.documentElement.setAttribute('drqwerciak-data-theme', 'light');
	$('#code-website-theme').text('"masochist mode"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/cat-animate.gif");
	}, 100);
	localStorage.setItem('drqwerciak-data-theme', 'light');
	changeFavicon('dark');
}

function dark() {
	document.documentElement.setAttribute('drqwerciak-data-theme', 'dark');
	$('#code-website-theme').text('"midnight"');
	setTimeout(() => {
		$("#logo").attr("src", "/assets/img/cat.gif");
	}, 100);
	localStorage.setItem('drqwerciak-data-theme', 'dark');
	changeFavicon('light');
}

function changeFavicon(mode) {
	document.querySelectorAll("link[type='image/png']").forEach(function (e) {
		e.href = 'assets/img/favicon/' + e.sizes.value + mode + '.png';
	});
}
