input.onButtonPressed(Button.A, function () {
    toogle = toogle * -1
    Count += toogle
})
input.onButtonPressed(Button.B, function () {
    if (Dir == 30) {
        Dir = 80
    } else {
        Dir = 30
    }
})
let Count = 0
let toogle = 0
let Dir = 0
pins.digitalWritePin(DigitalPin.P0, 1)
Dir = 30
toogle = 2
loops.everyInterval(0.1, function () {
    Count += 1
    if (Count <= 58) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        control.waitMicros(Dir)
        pins.digitalWritePin(DigitalPin.P0, 1)
    } else if (Count >= 60) {
        Count = 0
    }
})
