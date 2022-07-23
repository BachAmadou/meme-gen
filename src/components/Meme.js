import React from "react";
import memeData from "../memeData";

export default function Meme() {
    const [memes, setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = React.useState(memeData)

    function getMemeImage(){
        console.log("click")
        const imageArray = allMemes.data.memes;
        const randNumber = Math.floor(Math.random() * imageArray.length);
        const url = imageArray[randNumber].url;
        setMemes(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setMemes(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main className="main--content">
           <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input" 
                    name="top--text"
                    value={memes.topText}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input" 
                    name="bottom--text"
                    value={memes.bottomText}
                    onChange={handleChange}
                />  

                <button className="form--button" 
                        onClick={getMemeImage}>
                    Get a meme image
                </button>
                <img className="name--image" src={memes.randomImage} />
                <h2 className="top--text">{memes.topText}</h2>
                <h2 className="bottom--text">{memes.bottomText}</h2>
           </div>
        </main>
    )
}