function Preview() {
    var html = document.getElementById('html').value
    var css = "<style>" + document.getElementById('css').value + "</style>"
    var js = "<scri" + "pt>" + document.getElementById('js').value + "</scri" + "pt>"
    var frame = document.getElementById('preview-window').contentWindow.document

    frame.open()
    frame.write(html+css+js)
    frame.close()
}
