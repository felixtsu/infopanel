/**
* A info panel controller
*/
//% weight=100 color=#6699CC icon="\uf140"
//% groups='["Actions"]'
namespace cubicbird {

    //%block
    export function showNumber(no: number) {
        screen.fillRect(0, 120 - (image.font8.charHeight + 2), image.font8.charWidth + 2 + 10, image.font8.charHeight + 2, 3)
        screen.fillRect(0, 120 - (image.font8.charHeight + 1), image.font8.charWidth + 1 + 10, image.font8.charHeight + 1, 10)
        screen.print(no.toString(), 0, 120 - (image.font8.charHeight + 1))
    }

} 