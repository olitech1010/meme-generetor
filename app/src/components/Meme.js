import React from "react";
import MemesData from "./MemesData";

export default function Meme() {
const [memeImage, setMemeImage] = React.useState("")

   function getMemeImage() {
    const memesArray = MemesData.data.memes
    const randomNumber = Math.floor(Math.random()*memesArray.length)
    setMemeImage(memesArray[randomNumber].url)
    

    }
    return (



        <main>
            <div className="form">
                <input className="form-input" placeholder="Top Tex" type="text"></input>
                <input className="form-input" placeholder="Top Tex" type="text"></input>
                <button onClick={getMemeImage} className="form-btn">Get Meme</button>
            </div>
            <img src={setMemeImage} alt="meme" />

        </main>
    )
}




