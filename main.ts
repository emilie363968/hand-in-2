function Question4 () {
    Q1 = game.askForString("Lille dyr i junglen, der hopper langt?", 24)
    if (Q1 == "frøen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 4`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 4`)
    }
}
function Question2 () {
    Q1 = game.askForString("Største edderkop i Amazonas?", 24)
    if (Q1 == "fugleedderkoppen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 2`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 2`)
    }
}
function Question1 () {
    Q1 = game.askForString("Det langsomste dyr i regnskoven?", 24)
    if (Q1 == "dovendyret") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap1`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap1`)
    }
}
function Question6 () {
    Q1 = game.askForString("Kropsdel aben svinger sig med?", 24)
    if (Q1 == "halen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 6`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 6`)
    }
}
function Question5 () {
    Q1 = game.askForString("Største slange i Amazonas?", 24)
    if (Q1 == "anakondaen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap5`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap5`)
    }
}
function Question10 () {
    Q1 = game.askForString("Hvilken fugl i regnskoven har et stort og farverigt næb? ", 24)
    if (Q1 == "tukanen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap10`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 9`)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function () {
    if (questionNumber == 0) {
        Question1()
    } else if (questionNumber == 1) {
        Question2()
    } else if (questionNumber == 2) {
        Question3()
    } else if (questionNumber == 3) {
        Question4()
    } else if (questionNumber == 4) {
        Question5()
    } else if (questionNumber == 5) {
        Question6()
    } else if (questionNumber == 6) {
        Question7()
    } else if (questionNumber == 7) {
        Question8()
    } else if (questionNumber == 8) {
        Question9()
    } else {
        Question10()
    }
    questionNumber += 1
})
function Question3 () {
    Q1 = game.askForString("Kropsdel kamæleoner bruger til fangst?", 24)
    if (Q1 == "tungen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap3`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap3`)
    }
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER! Du blev spist:(")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.shrub, function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.splash("Flot klaret! Du overlevede junglen")
})
function Question9 () {
    Q1 = game.askForString("Hvilket dyr bor i junglen og har det kraftigste bid blandt kattedyr?", 24)
    if (Q1 == "jaguaren") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 9`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 9`)
    }
}
function Question8 () {
    Q1 = game.askForString("Hvilket dyr i regnskoven kan hænge med hovedet nedad og sove hele dagen?", 24)
    if (Q1 == "flagermusen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 8`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 8`)
    }
}
function Question7 () {
    Q1 = game.askForString("Dyr der snakker som menneske?", 24)
    if (Q1 == "papegøjen") {
        game.splash("Tillykke! Du har fået et point...")
        info.changeScoreBy(1)
        tiles.setCurrentTilemap(tilemap`Tilemap 7`)
    } else {
        game.splash("Øv! Forkert svar")
        info.changeLifeBy(-1)
        tiles.setCurrentTilemap(tilemap`Tilemap 7`)
    }
}
let Q1 = ""
let questionNumber = 0
game.showLongText("Velkommen til Jungle Quiz! Du er en eventyrer der er faret vild i junglen - find vej ud af junglen ved at teste din viden.        Du har 3 liv og får point for hvert korrekte svar - Held og lykke!", DialogLayout.Center)
game.showLongText("Skriv dine svar med småt i bestemt form. Eks. \"junglen\"", DialogLayout.Bottom)
let mySprite = sprites.create(assets.image`jungleman`, SpriteKind.Player)
mySprite.setPosition(12, 19)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`Grundlæggende tilemap`)
scene.cameraFollowSprite(mySprite)
info.setScore(0)
info.setLife(3)
questionNumber = 0
