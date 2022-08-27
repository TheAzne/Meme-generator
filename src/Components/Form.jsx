import React from "react";
import memesData from "../memesData";

export default () => {
    event.preventDefault();

    const [memeImage, setMemeImage] = React.useState("");




  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button onClick={getMemeImg} className="form-button">
          Get a new meme image
        </button>
      </form>
      <img src={memeImage} />
    </main>
  );
};
