/**
* A info panel controller
*/
//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Actions"]'
namespace cubicbird {

    let infos: { [key: string]: any } = {}

    //%block
    export function showNumber(tag: string, value: any) {
        infos[tag] = value
    }

    function drawInfo() {
        infos.forEach((value: any, key: string) => {
            screen.fillRect(0, 120 - (image.font8.charHeight + 2), image.font8.charWidth + 2 + 10, image.font8.charHeight + 2, 3)
            screen.fillRect(0, 120 - (image.font8.charHeight + 1), image.font8.charWidth + 1 + 10, image.font8.charHeight + 1, 10)
            screen.print(key + ":" + value.toString(), 0, 110)
        })
    }


    game.eventContext().registerFrameHandler(scene.HUD_PRIORITY, function () {
        drawInfo()
    })

}