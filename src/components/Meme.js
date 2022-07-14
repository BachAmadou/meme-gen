import React from "react";

export default function Meme() {
    return(
        <main className="main--content">
           <div className="form">
                <input 
                    type="text" 
                    placeholder="Top text" 
                    className="form--input" 
                />

                <input 
                    type="text" 
                    placeholder="Bottom text" 
                    className="form--input" 
                />  

                <button className="form--button">Get a meme image</button>
           </div>
        </main>
    )
}