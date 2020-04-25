(function () {
    let start = Date.now()
    let time = 1000
    window.onload = function () {
        if (!time) {
            document.getElementById('loading').style.display = 'none'
        }
        let end = Date.now()
        let gap = time - (end - start)
        setTimeout(function () {
            document.getElementById('loading').style.display = 'none'
        }, gap > 0 ? gap : 0)
    }
})()