import React from "react";
import memesData from "../memesData";

export default () => {


    function getMemeImg(){
       const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        
    }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button onClick={getMemeImg} className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
};
