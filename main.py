basic.forever(function () {
    turtle.setPosition(0, 0)
    for (let index = 0; index < 4; index++) {
        turtle.turnRight()
        for (let index = 0; index < 4; index++) {
            turtle.forward(1)
        }
    }
})
