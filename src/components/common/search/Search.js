import React, { Component } from 'react';

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
class Search extends Component{
     
      

    render(){
        return (<input type="text" id="searchinput" onKeyUp={sFunction} placeholder="Search for names.." />
        );
    }
}
export default Search;