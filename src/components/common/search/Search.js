import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



function sFunction() {
    var input, filter, myItems, cards, i, current, h5, text;
    input = document.getElementById("searchinput");
    filter = input.value.toUpperCase();
    myItems = document.getElementById("pokegallery");
    cards = myItems.getElementsByClassName("card");
    
    for (i = 0; i < cards.length; i++) {
        current = cards[i];
        h5 = current.getElementsByClassName('name')[0];
        text = h5.innerText.toUpperCase();
        if (text.indexOf(filter) > -1) {
            current.style.display = "";
        } else {
            current.style.display = "none";
        }
    }
}

export function sFunctype(tipo){
     
    console.log(tipo);   
    document.getElementById("searchinput").value= tipo;
    sFunction();
} 
class Search extends Component{

    

    render(){
        return (<TextField  type="text" id="searchinput" onKeyUp={sFunction} label="Search for names.." />
        );
    }
}
export default Search;