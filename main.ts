radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    let dice: number;
    basic.showNumber(receivedNumber)
    basic.pause(200)
    if (receivedNumber < dice) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    
    dice = receivedNumber
    basic.showNumber(dice)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let numero = randint(1, 6)
    radio.sendNumber(numero)
    basic.showNumber(numero)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("KOHLRABI")
    basic.showString("SENT")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
let dice = 0
radio.setGroup(1)
