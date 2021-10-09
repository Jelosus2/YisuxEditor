const htmlBtn = document.getElementById('html-btn')
const htmlFn = document.getElementById('html-fn')
const html1 = document.getElementById('html')

const cssBtn = document.getElementById('css-btn')
const cssFn = document.getElementById('css-fn')
const css1 = document.getElementById('css')

const jsBtn = document.getElementById('js-btn')
const jsFn = document.getElementById('js-fn')
const js1 = document.getElementById('js')

document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 's') {
        return alert('Well tried!')
    }
})

function htmlDownload(filename, text) {
    var pom = document.createElement('a')
    pom.setAttribute('href', 'data:text/html;charset=utf-8,' + encodeURIComponent(text))
    pom.setAttribute('download', filename)
    pom.style.display = 'none'
    document.body.appendChild(pom)
    pom.click()
    document.body.removeChild(pom)
}

function cssDownload(filename, text) {
    var pom = document.createElement('a')
    pom.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(text))
    pom.setAttribute('download', filename)
    pom.style.display = 'none'
    document.body.appendChild(pom)
    pom.click()
    document.body.removeChild(pom)
}

function jsDownload(filename, text) {
    var pom = document.createElement('a')
    pom.setAttribute('href', 'data:text/javascript;charset=utf-8,' + encodeURIComponent(text))
    pom.setAttribute('download', filename)
    pom.style.display = 'none'
    document.body.appendChild(pom)
    pom.click()
    document.body.removeChild(pom)
}

htmlBtn.addEventListener('click', () => {
    if (!htmlFn.value.endsWith('.html') && htmlFn.value != "") {
        htmlFn.value = htmlFn.value + ".html"
    } else if (!htmlFn.value) {
        htmlFn.value = "index.html"
    } else {
        htmlFn.value = htmlFn.value
    }

    htmlDownload(htmlFn.value, html1.value)
})

cssBtn.addEventListener('click', () => {
    if (!cssFn.value.endsWith('.css') && cssFn.value != "") {
        cssFn.value = cssFn.value + ".css"
    } else if (!cssFn.value) {
        cssFn.value = "styles.css"
    } else {
        cssFn.value = cssFn.value
    }

    cssDownload(cssFn.value, css1.value)
})

jsBtn.addEventListener('click', () => {
    if (!jsFn.value.endsWith('.js') && jsFn.value != "") {
        jsFn.value = jsFn.value + ".js"
    } else if (!jsFn.value) {
        jsFn.value = "script.js"
    } else {
        jsFn.value = jsFn.value
    }

    jsDownload(jsFn.value, js1.value)
})

function Preview() {
    var html = document.getElementById('html').value
    var css = "<style>" + document.getElementById('css').value + "</style>"
    var js = "<scri" + "pt>" + document.getElementById('js').value + "</scri" + "pt>"
    var runBox = document.getElementById('run-box').checked
    var frame = document.getElementById('preview-window').contentWindow.document

    frame.open()
    if (!runBox) {
        frame.write(html+css)
    } else {
        frame.write(html+css+js)
    }
    frame.close()
}