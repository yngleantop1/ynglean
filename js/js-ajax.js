// Ajax request to fetch and render github stats
$.ajax({
	url: 'https://api.github.com/repos/drqwerciak/drqwerciak.github.io',
	method: 'GET',
	dataType: 'json',
	success: function (data) {
		$('#github-stars').text(data.stargazers_count);
		$('#github-forks').text(data.forks_count);
	}
});
