scene.set_background_color(0)
info.set_score(0)
tiles.set_current_tilemap(tilemap("""
    level
"""))

def on_forever():
    if (0) == (True):
        info.change_score_by(1)
forever(on_forever)

def on_forever2():
    if controller.A.is_pressed():
        music.play(music.create_song(assets.song("""
                USP-S1
            """)),
            music.PlaybackMode.IN_BACKGROUND)
        pause(400)
forever(on_forever2)
