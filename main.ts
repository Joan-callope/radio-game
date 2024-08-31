radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 841) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber == 8) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Surprised)
    }
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(841)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(41)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    radio.sendNumber(8)
    basic.clearScreen()
})
radio.setGroup(148)
