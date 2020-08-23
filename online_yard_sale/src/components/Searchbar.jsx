import React from "react";
import search from '../img/search2.png'

function Searchbar() {
  return (
    <div className="searchbar">
        <div className="allsort">
            <select>
                <option value="All">All</option>
                <option value="Computers">Computers</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
                <option value="Kitchen">Kitchen</option>
            </select>
        </div>
        <div className="searchbox">
                <input className="textInput" style={{height:'2em', width:'20em'}} type="text" name='word'
                    placeholder="Please enter some keywords..." />
                 <input id="searchButton" type = "image" src={search} alt="nopic"></input>
        </div>
    </div>
  );
}

export default Searchbar;