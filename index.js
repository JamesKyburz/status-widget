var domify = require('domify')
var insertCss = require('insert-css')
var html = require('./html')
var style = require('./style')

module.exports = create

function create (opt) {
  opt = opt || {}
  var showTime = opt.showTime || 3000
  var appendToEl = opt.appendToEl || window.document.body
  var el
  return status

  function status (err, successText) {
    if (!el) append()
    if (err && err.message) err = err.message
    reset()
    if (err) {
      el.classList.add('error')
      el.textContent = err
    } else {
      el.classList.add('success')
      el.textContent = successText
    }
    setTimeout(reset, showTime)
  }

  function append () {
    insertCss(style)
    el = appendToEl.appendChild(domify(html))
  }

  function reset () {
    el.classList.remove('success')
    el.classList.remove('error')
  }
}
