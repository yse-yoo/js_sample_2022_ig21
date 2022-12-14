var photo = $('#photo')

$(() => {

    slideToRight()

    function slideToRight() {
        photo.animate(
            { left: 300 }, 1000, 'swing', slideToDown
        )
    }

    function slideToLeft() {
        photo.animate(
            { left: 0 }, 1000, 'swing', slideToUp
        )
    }

    function slideToUp() {
        photo.animate(
            { top: 0 }, 1000, 'swing', slideToRight
        )
    }

    function slideToDown() {
        photo.animate(
            { top: 300 }, 1000, 'swing', slideToLeft
        )
    }
})