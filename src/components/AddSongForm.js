import React, { useState } from 'react';


function AddSongForm( { newSong }) {

    // const initialState = {title:"", artist:"", genre:"",image:"", songURL:""}
    const initialState = {title:"Out of Time", artist:"The Weeknd", genre:"party" , image:"https://iscale.iheart.com/v3/surl/aHR0cDovL2ltYWdlLmloZWFydC5jb20vaW1hZ2VzL292ZXJyaWRlLzc0NDg4MF9lNDljMDliYy0xNjgyLTRhNzUtOTFlZC02MWM0MDIxYjc1ODAuanBn?sn=eGtleWJhc2UyMDIxMTExMDqaOO9ti14qRrQG45vxsvuH2jxhSVf7zBuevlgExvt0uA%3D%3D&surrogate=1cOXl179JY-syhxYSCX6Q1a_Mcu6UO8d-F4oJzpZf1hcUbJr4aIiwNUBGUf7jx4DdNBxDnMO3tLCBCByBjOEKPobikss7KWv_EUeUYZfzwS9fMwoDFojXoy14LYqtRhlVvpqbz17-WxlkViE3RbqmIFOtuVTSUhxiWZlFevgue9pGyvTsqeB9NuFLcku7jgWw2b9QeITcSFUWmLWbS74JEUl0FR5FHSPNtzpMyyTSc3XUZ1Y3T1HrpACG3vezN_v10E%3D", songURL:"https://www.youtube.com/embed/kxgj5af8zg4"}
    const [songData, setSongData] = useState (initialState)

function handleChange(e) {
    const key = e.target.name
    const value = e.target.value
    setSongData({...songData, [key]: value})
    console.log(e.target.value)
}

function handlePost(e) {
    e.preventDefault()
    fetch("http://localhost:3000/songs", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(songData)
    })
    .then(res => res.json())
    .then(data => newSong(data))
    .then(setSongData(initialState))
    .catch(err=> console.log(err))
    }


    return (
            <div className="ui segment">Add Song Form
              <form onSubmit={handlePost} className="ui form">
                <div className="inline fields">
                  <input  onChange={handleChange} value={songData.title} type="text" name="title" placeholder="song title"/>
                  <input  onChange={handleChange} value={songData.artist} type="text" name="artist" placeholder="artist" />
                  <input  onChange={handleChange} value={songData.image} type="text" name="image" placeholder="image" />
                  <input  onChange={handleChange} value={songData.songURL} type="text" name="songURL" placeholder="video URL" />
                  <input  onChange={handleChange} value={songData.genre} type="text" name="genre" placeholder="study or party" />
                </div>
                <button style={{color:'black'}}  className="ui button" type="submit">
                  Add Song
                </button>
              </form>
            </div>
          );
}
export default AddSongForm