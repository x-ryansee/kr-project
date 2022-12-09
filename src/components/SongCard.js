import React, {useState} from "react";
// import SongList from "./SongList";

function SongCard({id, title, artist, image, songURL, Link}) {

    // const [toggle, setToggle] = useState(false)
    // console.log(toggle)

    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => {
      setHidden(!hidden);
    }
  


    return (
      <li className="card">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>Artist: {artist}</p>
        <div className="sidebar">
      {hidden ? (
        <button onClick={toggleHidden} > Show Player </button>
      ) : (
        <button onClick={toggleHidden} >Hide Player</button>
      )}
        {(!hidden) ?         <div className="ratio ratio-1x1">
          <iframe width="200" height="100" src={songURL}></iframe>
        </div> : ""}
      </div>
      </li>
    );
  }
  
  export default SongCard;