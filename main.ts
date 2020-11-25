enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Left,
    Right,
    Up,
    Down
}
namespace SpriteKind {
    export const Wall = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    tiles.placeOnTile(User, tiles.getTileLocation(3, 3))
    info.startCountdown(60)
    tiles.setTilemap(tiles.createTilemap(hex`20001000060404040404040404040404040404040404040404040404040404040404040806010101050c0c0c0c050101010101050101010101010101010101010101010706010201050c0c0c0c050101010101050101010101010101010101010301010706010101050c0c0c0c050101010101050101010505050505050101010101010706010105050505050505010101010105010101050101010105010101010101070601010101010105010101050505050501010105010101010505010101010107060101010101010501010105010101010101010501010101010501010101010706050505010101010101010501010101010101050101050101050101010101070601010501010505050505050101010105010105010105010105010101010107060101050101050c0c0c0c05010101010501010501010505050505050505050706010105010105050505050505050505050101050101010101010101010101070601010501010101010101010101010101010105010101010101010101010107060101050101050505050505050505010101010501010505050505050505050706010101010105010101010101010501010505050101050c0c0c0c0c0c0c0c0706010101010105010101010101010101010101010101050c0c0c0c0c0c0c0c070b0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a0a09`, img`
        22222222222222222222222222222222
        2...222222.....2...............2
        2...222222.....2...............2
        2...222222.....2...222222......2
        2..2222222.....2...2....2......2
        2......2...22222...2....22.....2
        2......2...2.......2.....2.....2
        2222.......2.......2..2..2.....2
        2..2..222222....2..2..2..2.....2
        2..2..222222....2..2..2222222222
        2..2..22222222222..2...........2
        2..2...............2...........2
        2..2..222222222....2..2222222222
        2.....2.......2..222..2222222222
        2.....2...............2222222222
        22222222222222222222222222222222
        `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.chestClosed,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.floorDark5], TileScale.Sixteen))
    music.playTone(370, music.beat(BeatFraction.Half))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(info.life() ** 2 * 4 / 2)
    game.over(true, effects.bubbles)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.placeOnTile(User, tiles.getTileLocation(3, 3))
    info.startCountdown(60)
    tiles.setTilemap(tiles.createTilemap(hex`20001000070505050505050504040504040504040404040404040404040404040404040308010101010b0b0b0b0b0b0b0b0b0b0b0b0b0b0b0d0d0b01010101010101010208010e01010b0101010101010101010101010b0b0d0d0b01010101010101010208010101010b0101010b0b0b0b0b0b010101010b0d0d0b0b0b0b0b0b0b01010208010101010b0101010b010101010b0b0101010b0d0d0d0d0d0d0d0d0b01010208010b0b0b0b0101010b01010101010b0101010b0d0d0d0d0d0d0d0b0b0101020801010b01010101010b01010b01010b0101010b0b0b0b0b0b0b0b0b0b0101020801010b01010b0b0b0b01010b0b0b0b010101010101010101010101010101020801010b0101010101010101010101010101010101010101010b0b0b0b0b0b020801010b010b0b0101010101010101010101010b0b0b0b010101010101010b020801010b01010b01010b0b0b0b0b0b0b0b01010b0d0d0d0b0101010101010b020801010b01010b01010b0101010101010b01010b0d0d0d0b0101010c01010b020801010b0b0b0b01010b01010b0b0b0b0b01010b0d0d0d0b0101010101010b020801010101010101010b0101010101010101010b0d0d0d0b0101010101010b020801010101010101010b0101010101010101010b0d0d0d0b0b0b0b0b0b0b0b02060909090909090909090909090909090909090909090909090909090909090a`, img`
        22222222222222222222222222222222
        2....222222222222222222........2
        2....2............22222........2
        2....2...222222....2222222222..2
        2....2...2....22...2222222222..2
        2.2222...2.....2...2222222222..2
        2..2.....2..2..2...2222222222..2
        2..2..2222..2222...............2
        2..2.....................2222222
        2..2.22............2222.......22
        2..2..2..22222222..2...2......22
        2..2..2..2......2..2...2......22
        2..2222..2..22222..2...2......22
        2........2.........2...2......22
        2........2.........2...222222222
        22222222222222222222222222222222
        `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.floorLight2,sprites.dungeon.stairNorth,sprites.dungeon.floorLight5,sprites.dungeon.collectibleInsignia], TileScale.Sixteen))
    music.playTone(370, music.beat(BeatFraction.Half))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    while (User.overlapsWith(Enemy1)) {
        info.changeLifeBy(-1)
        pause(1000)
    }
    if (info.life() == 0) {
        game.over(false)
    }
})
let Enemy1: Sprite = null
let User: Sprite = null
game.showLongText("Welcome to Microbit Maze ", DialogLayout.Full)
music.playMelody("C5 B E C5 B F C D ", 200)
music.playMelody("C5 B A G A G A G ", 200)
for (let index = 0; index < 2; index++) {
    music.playMelody("C D C D C E F C ", 200)
}
music.playMelody("E G F A B A G B ", 200)
music.playMelody("B C5 B G C D D D ", 200)
game.showLongText("Pick a difficulty by typing a number. Hard=1-2  Medium=3-4 Easy=5-8 Testing=9", DialogLayout.Center)
if (game.askForNumber("", 1) >= 0 && game.askForNumber("", 1) <= 2) {
    info.setLife(2)
} else if (game.askForNumber("", 1) >= 3 && game.askForNumber("", 1) <= 4) {
    info.setLife(4)
} else if (game.askForNumber("", 1) >= 5 && game.askForNumber("", 1) <= 8) {
    info.setLife(8)
} else {
    info.setLife(20)
}
info.setScore(0)
music.stopAllSounds()
info.startCountdown(randint(40, 60))
User = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
let Idle = animation.createAnimation(ActionKind.Idle, 100)
animation.attachAnimation(User, Idle)
Idle.addAnimationFrame(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
Idle.addAnimationFrame(img`
    ........................
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff..........
    .ffefbf44fbfeff.........
    .fee41fddf14eef.........
    fdfeeddddd4eff..........
    fbffee444edd4e..........
    fbf4f2222edde...........
    fcf.f22cccee............
    .ff.f44cdc4f............
    ....fffddcff............
    .....fddcff.............
    ....cddc................
    ....cdc.................
    ....cc..................
    ........................
    ........................
    ........................
    ........................
    `)
Idle.addAnimationFrame(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `)
animation.setAction(User, ActionKind.Idle)
let Left = animation.createAnimation(ActionKind.Left, 200)
animation.attachAnimation(User, Left)
Left.addAnimationFrame(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `)
Left.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d e e e e e f . . . 
    . . . f e 4 e d d 4 f . . . . . 
    . . . f 2 2 e d d e f . . . . . 
    . . f f 5 5 f e e f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f . . . f f . . . . . 
    `)
Left.addAnimationFrame(img`
    . . . . f f f f f f . . . . . . 
    . . . f 2 f e e e e f f . . . . 
    . . f 2 2 2 f e e e e f f . . . 
    . . f e e e e f f e e e f . . . 
    . f e 2 2 2 2 e e f f f f . . . 
    . f 2 e f f f f 2 2 2 e f . . . 
    . f f f e e e f f f f f f f . . 
    . f e e 4 4 f b e 4 4 e f f . . 
    . . f e d d f 1 4 d 4 e e f . . 
    . . . f d d d d 4 e e e f . . . 
    . . . f e 4 4 4 e e f f . . . . 
    . . . f 2 2 2 e d d 4 . . . . . 
    . . . f 2 2 2 e d d e . . . . . 
    . . . f 5 5 4 f e e f . . . . . 
    . . . . f f f f f f . . . . . . 
    . . . . . . f f f . . . . . . . 
    `)
let Right = animation.createAnimation(ActionKind.Right, 200)
animation.attachAnimation(User, Right)
Right.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . 4 d d e 4 4 4 e f . . . 
    . . . . e d d e 2 2 2 2 f . . . 
    . . . . f e e f 4 4 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `)
Right.addAnimationFrame(img`
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e 4 d d d d f . . . 
    . . . . f f e e 4 4 4 e f . . . 
    . . . . . 4 d d e 2 2 2 f . . . 
    . . . . . e d d e 2 2 2 f . . . 
    . . . . . f e e f 4 5 5 f . . . 
    . . . . . . f f f f f f . . . . 
    . . . . . . . f f f . . . . . . 
    `)
Right.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f f . . . . 
    . . . . f f e e e e f 2 f . . . 
    . . . f f e e e e f 2 2 2 f . . 
    . . . f e e e f f e e e e f . . 
    . . . f f f f e e 2 2 2 2 e f . 
    . . . f e 2 2 2 f f f f e 2 f . 
    . . f f f f f f f e e e f f f . 
    . . f f e 4 4 e b f 4 4 e e f . 
    . . f e e 4 d 4 1 f d d e f . . 
    . . . f e e e e e d d d f . . . 
    . . . . . f 4 d d e 4 e f . . . 
    . . . . . f e d d e 2 2 f . . . 
    . . . . f f f e e f 5 5 f f . . 
    . . . . f f f f f f f f f f . . 
    . . . . . f f . . . f f f . . . 
    `)
let Up = animation.createAnimation(ActionKind.Up, 200)
animation.attachAnimation(User, Up)
Up.addAnimationFrame(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
Up.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . . f f f f 2 2 f f f f . . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f f 2 f e f . . 
    . . f f f 2 f e e 2 2 f f f . . 
    . . f e 2 f f e e 2 f e e f . . 
    . f f e f f e e e f e e e f f . 
    . f f e e e e e e e e e e f f . 
    . . . f e e e e e e e e f . . . 
    . . . e f f f f f f f f 4 e . . 
    . . . 4 f 2 2 2 2 2 e d d 4 . . 
    . . . e f f f f f f e e 4 . . . 
    . . . . f f f . . . . . . . . . 
    `)
Up.addAnimationFrame(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f e e e e f f . . . . 
    . . . f e e e f f e e e f . . . 
    . . f f f f f 2 2 f f f f f . . 
    . . f f e 2 e 2 2 e 2 e f f . . 
    . . f e 2 f 2 f f 2 f 2 e f . . 
    . . f f f 2 2 e e 2 2 f f f . . 
    . f f e f 2 f e e f 2 f e f f . 
    . f e e f f e e e e f e e e f . 
    . . f e e e e e e e e e e f . . 
    . . . f e e e e e e e e f . . . 
    . . e 4 f f f f f f f f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
let Down = animation.createAnimation(ActionKind.Down, 200)
animation.attachAnimation(User, Down)
Down.addAnimationFrame(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . . f e 4 d d d d 4 e f e . . 
    . . f e f 2 2 2 2 e d d 4 e . . 
    . . e 4 f 2 2 2 2 e d d e . . . 
    . . . . f 4 4 5 5 f e e . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . f f f . . . . . . . . . 
    `)
Down.addAnimationFrame(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `)
tiles.placeOnRandomTile(Enemy1, sprites.dungeon.darkGroundSouthEast0)
Enemy1 = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Enemy)
Enemy1.follow(User, 60)
controller.moveSprite(User, 100, 100)
tiles.setTilemap(tiles.createTilemap(hex`10001000030909090909090909090909090909040b01010101010a0a0a0a0101010102080b010e0e0e0e0e0e0e010101010101080b010e010f0101010e0e0e0e0e0e0e080b010e010101010101010101010101080b010e0e0e0e0e0e0e0e0101010101080b01010101010101010e010e0e0e0e080b0e0101010e0e0e010e0101010101080b0e0e0e0e0e0d0e010e0101010101080b07070707070c0e010e0e0e0e0e01080b0e0e0e0e0e0e0e010e0101010101080b0e0a0101010101010e0101010101080b0e0101010e0e0e0e0e010e0e0e0e080b0e01010101010101010101010101080b0e0e0e0e0e0e0e010101010101100806070707070707070707070707070705`, img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 . . . . . . 2 
    2 . 2 . . . . . 2 2 2 2 2 2 2 2 
    2 . 2 . . . . . . . . . . . . 2 
    2 . 2 2 2 2 2 2 2 2 . . . . . 2 
    2 . . . . . . . . 2 . 2 2 2 2 2 
    2 2 . . . 2 2 2 . 2 . . . . . 2 
    2 2 2 2 2 2 2 2 . 2 . . . . . 2 
    2 2 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
    2 2 2 2 2 2 2 2 . 2 . . . . . 2 
    2 2 . . . . . . . 2 . . . . . 2 
    2 2 . . . 2 2 2 2 2 . 2 2 2 2 2 
    2 2 . . . . . . . . . . . . . 2 
    2 2 2 2 2 2 2 2 . . . . . . . 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterNorth0,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.floorLight0,sprites.dungeon.stairLarge,sprites.dungeon.darkGroundSouthEast0], TileScale.Sixteen))
tiles.placeOnRandomTile(User, sprites.dungeon.collectibleInsignia)
scene.cameraFollowSprite(User)
game.onUpdate(function () {
    if (User.vx > 0) {
        animation.setAction(User, ActionKind.Right)
    } else if (User.vx < 0) {
        animation.setAction(User, ActionKind.Left)
    } else if (User.vy > 0) {
        animation.setAction(User, ActionKind.Down)
    } else if (User.vy < 0) {
        animation.setAction(User, ActionKind.Up)
    } else {
        animation.setAction(User, ActionKind.Idle)
    }
})
forever(function () {
    while (info.life() < 2) {
        for (let index = 0; index < 2; index++) {
            music.playTone(262, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 2; index++) {
            music.playTone(277, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
    }
})
