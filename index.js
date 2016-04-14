'use strict'
var fetch = require('isomorphic-fetch')

var jandan = module.exports = {}

function api(type) {
  return function (opts) {
    return fetch(baseURL(type, opts))
      .then(function (data) {
        return data.json()
      })
  }
}

function baseURL(p, opts) {
  opts = opts || {}
  var page = opts.page || 1
  return 'http://jandan.net/?oxwlxojflwblxbsapi=jandan.' + p + '&page=' + page
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function random() {
  var page = getRandomIntInclusive(1, 300)
  return api('get_ooxx_comments')({page: page})
    .then(function (data) {
      var random = getRandomIntInclusive(0, data.comments.length - 1)
      return data.comments[random].pics[0]
    })
}

jandan.ooxx = api('get_ooxx_comments')
jandan.boring = api('get_pic_comments')
jandan.random = random
