var request = require('request')
	,	cheerio = require('cheerio')
	
request.get('http://jandan.net/ooxx', function (error, response, body) {
	var $ = cheerio.load(body)
	$('.commentlist').find('img').each(function () {
		var source = $(this).attr('src')
		console.log(source)
	})
})