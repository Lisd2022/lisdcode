enum RadioMessage {
    message1 = 49434
}
turtle.setPosition(0, 0)
for (let index = 0; index < 4; index++) {
    turtle.turnRight()
    for (let index = 0; index < 4; index++) {
        turtle.forward(1)
    }
}
for (let index = 0; index < 4; index++) {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
}
basic.forever(function () {
	
})
