scene.setBackgroundColor(0)
let Ak47 = 1
info.setScore(0)
forever(function () {
    let USPS = 0
    if (USPS == 1) {
        if (controller.A.isPressed()) {
            music.play(music.createSong(assets.song`AK-47`), music.PlaybackMode.InBackground)
            pause(300)
        }
    }
})
forever(function () {
    if (Ak47 == 1) {
        if (controller.A.isPressed()) {
            music.play(music.createSong(assets.song`AK-47`), music.PlaybackMode.InBackground)
            pause(75)
        }
    }
})
