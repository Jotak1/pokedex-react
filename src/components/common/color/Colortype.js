
import { Component } from 'react';
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
        let BackStyle =  `backgroundColor: "linear-gradient(180deg, ${color1} 34%, ${color2} 100%)"`;
        return BackStyle;
        
    }
    else{
        let color1 = getTypeColor(props.Pokedetail.types[0].type.name);
        
        let BackStyle =  `backgroundColor: "${color1}"`;
        
        return BackStyle;

    } 

}