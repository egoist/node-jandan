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
  const page = opts.page || 1
  return 'http://jandan.net/?oxwlxojflwblxbsapi=jandan.' + p + '&page=' + page
}

jandan.ooxx = api('get_ooxx_comments')
jandan.boring = api('get_pic_comments')
