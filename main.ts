scene.setBackgroundColor(0)
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    if ((0 as any) == (true as any)) {
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (controller.A.isPressed()) {
        music.play(music.createSong(assets.song`USP-S1`), music.PlaybackMode.InBackground)
        pause(400)
    }
})
