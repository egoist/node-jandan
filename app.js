var request = require('request')
	,	cheerio = require('cheerio')

var argv = process.argv.slice(2)
  , url = 'http://jandan.net/ooxx'

if(argv[0]) {
  console.log('fetching page ' + argv[0])
  url += '/page-' + argv[0]
}


request.get(url, function (error, response, body) {
  if (error) {
    console.log('url not exists')
    return
  }
	var $ = cheerio.load(body)
	$('.commentlist').find('img').each(function () {
		var source = $(this).attr('src')
		console.log(source)
	})
})