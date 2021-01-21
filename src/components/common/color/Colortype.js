
import { ColorVar } from './colorVar';

let color1= 'ffffff'
let color2 = '707070'
let backgroundColor1 = color1;
let backgroundColor2 = `linear-gradient(180deg, #${color1} 34%, #${color2} 100%)`;
let contador= 0


export default function getTypeColor(type) {
    if (type) {
        const Color = ColorVar;
        // contador += 1
        // if (contador === 1) {
        // color1 = Color[type];
        // // }
        // if (contador === 2) {
        // color2 = Color[type];
        // backgroundColor1 = color1;
        // backgroundColor2 = `linear-gradient(135deg, #${color1} 20%, #${color2} 80%)`;
        // }
        return '#' + Color[type];
    }
}
