import { ColorVar } from './colorVar';

export default function getTypeColor(type) {
    if (type) {
        const Color = ColorVar;
        return '#' + Color[type];
    }
}
export function getBackcolor(props) {
          if(props.Pokedetail.types[1]){
        let color1  = getTypeColor(props.Pokedetail.types[0].type.name);
        let color2 = getTypeColor(props.Pokedetail.types[1].type.name); 
        let BackStyle =  `linear-gradient(90deg, ${color1} 50%, ${color2} 50%)`;
        return BackStyle;   
    }
    else{
        let BackStyle =  getTypeColor(props.Pokedetail.types[0].type.name);
        return BackStyle;
    } 
}