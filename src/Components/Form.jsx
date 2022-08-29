import React from "react";
import memesData from "../memesData";

export default () => {
  event.preventDefault();

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",

  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function getMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    setMeme(prevMeme=>({
        ...prevMeme,
        randomImage:url,

    }));
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
      <img src={meme.randomImage} className="meme-img" />
    </main>
  );
};
