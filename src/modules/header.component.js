import $ from 'jquery'

$('<h1/>')
.text('hello world from jQuery')
.css({
    textAlign: 'center',
    color: '#133714'
})
.appendTo($('header'))