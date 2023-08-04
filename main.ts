

//% color="#70796b" icon="\uf552" block="Toolbox"
namespace Animations{
    //% blockId=anim_connect
    //% block="Connect animation"
    export function connect() {
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . . . . .
        # # . . .
        . . # . .
        # . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
        # # # . .
        . . . # .
        # # . . #
        . . # . #
        # . # . #
        `)
        basic.pause(200)
    }
    
    //% blockId=anim_semd
    //% block="Send animation"
    export function send() {
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
        basic.pause(200)
    }

    //% blockId=anim_receive
    //% block="Receive animation"
    export function receive() {
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
        . . # . .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
        basic.pause(100)
        basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
        basic.pause(200)
    }
    basic.forever(function () {

    })
}
