/**
 * Se você estiver utilizando a micro:bit v1, você pode substituir o bloco: no logotipo... por: no botão A+B pressionado.
 * 
 * Você precisa somente de um bloco ALTERAR FALHAS por -1dentro de no logotipo pressionado para modificar o comportamento de falhas.
 */
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    falhas += -1
})
input.onButtonPressed(Button.A, function () {
    falhas = 0
    basic.showNumber(falhas)
    basic.showLeds(`
        # # # . #
        # . # . #
        # . # # #
        # . . . .
        # . . . .
        `)
    basic.pause(200)
    soundExpression.spring.playUntilDone()
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Falhas: ")
    basic.showNumber(falhas)
    basic.pause(500)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    falhas += 1
    basic.showIcon(IconNames.Skull)
    soundExpression.slide.play()
    basic.clearScreen()
})
let falhas = 0
falhas = 0
basic.showLeds(`
    # # # . #
    # . # . #
    # . # # #
    # . . . .
    # . . . .
    `)
basic.pause(200)
soundExpression.spring.playUntilDone()
basic.clearScreen()
