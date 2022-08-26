import React from "react";

export default () => {
    function handleClick(){
        event.preventDefault();
        console.log("I was clicked")
        
    }

  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="form-input" />
        <input type="text" placeholder="Bottom text" className="form-input" />
        <button onClick={handleClick} className="form-button">Get a new meme image</button>
      </form>
    </main>
  );
};
