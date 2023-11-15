radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    basic.showNumber(receivedNumber)
    basic.pause(200)
    if (receivedNumber < dice) {
        basic.showIcon(IconNames.Happy)
    } else if (receivedNumber > dice) {
        basic.showIcon(IconNames.Sad)
    }
    
    dice = receivedNumber
    basic.showNumber(dice)
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("KOHLRABI")
    basic.showString("SENT")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    numero = randint(1, 6)
    radio.sendNumber(numero)
    basic.showNumber(numero)
})
let numero = 0
let dice = 0
radio.setGroup(1)
