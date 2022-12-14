// id=photo のElement取得
var photo = $('#photo')

//Elementを隠す
photo.hide()

function open() {
    // 3秒のフェードイン
    photo.fadeIn(3000, null, close);
}

function close() {
    photo.fadeOut(3000, null, open);
}

// HTML読み込み終了後に処理
$(() => {
    open()
})