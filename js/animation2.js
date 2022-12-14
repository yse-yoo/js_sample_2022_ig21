var photo = $('#photo')

$(() => {

    // slideToRight()

    // click event を追加
    $('#startBtn').on('click', slideToRight)
    $('#stopBtn').on('click', stop)

    $('#rightBtn').on('click', slideToRight)
    $('#leftBtn').on('click', slideToLeft)
    $('#downBtn').on('click', slideToDown)
    $('#upBtn').on('click', slideToUp)

    function stop() { 
        photo.stop()
    }

    function slideToRight() {
        photo.animate(
            { left: 300 }, 1000, 'swing'
        )
    }

    function slideToLeft() {
        photo.animate(
            { left: 0 }, 1000, 'swing'
        )
    }

    function slideToUp() {
        photo.animate(
            { top: 0 }, 1000, 'swing'
        )
    }

    function slideToDown() {
        photo.animate(
            { top: 300 }, 1000, 'swing'
        )
    }
})