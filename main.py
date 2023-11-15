def on_received_number(receivedNumber):
    global dice
    basic.show_number(receivedNumber)
    basic.pause(200)
    if receivedNumber < dice:
        basic.show_icon(IconNames.HAPPY)
    elif receivedNumber > dice:
        basic.show_icon(IconNames.SAD)
    dice = receivedNumber
    basic.show_number(dice)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_string("KOHLRABI")
    basic.show_string("SENT")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)
radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global numero
    numero = randint(1, 6)
    radio.send_number(numero)
    basic.show_number(numero)
input.on_button_pressed(Button.B, on_button_pressed_b)

numero = 0
dice = 0
radio.set_group(1)