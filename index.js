'use strict'
var fetch = require('isomorphic-fetch')

var jandan = module.exports = {}

function api(type) {
  return function (opts) {
    opts = opts || {}
    var page = opts.page || 1
    return fetch(baseURL(type, {page: page}))
      .then(function (data) {
        return data.json()
      })
  }
}

function baseURL(p, opts) {
  return 'http://jandan.net/?oxwlxojflwblxbsapi=jandan.' + p + '&page=' + opts.page
}

jandan.ooxx = api('get_ooxx_comments')
jandan.boring = api('get_pic_comments')
