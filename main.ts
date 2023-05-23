scene.setBackgroundColor(0)
let M4A1S = 1
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
    let Ak47 = 0
    if (Ak47 == 1) {
        if (controller.A.isPressed()) {
            music.play(music.createSong(assets.song`AK-47`), music.PlaybackMode.InBackground)
            pause(75)
        }
    }
})
forever(function () {
    if (M4A1S == 1) {
        if (controller.A.isPressed()) {
            music.play(music.createSong(assets.song`M4A1-S`), music.PlaybackMode.InBackground)
            pause(80)
        }
    }
})
