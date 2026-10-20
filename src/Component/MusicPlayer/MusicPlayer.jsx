import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
    const songs = [
        { id: 1, title: "Song 1", artist: "Artist 1", src: "path/to/song1.mp3" },
        { id: 2, title: "Song 2", artist: "Artist 2", src: "path/to/song2.mp3" },
        { id: 3, title: "Song 3", artist: "Artist 3", src: "path/to/song3.mp3" },
        { id: 4, title: "Song 4", artist: "Artist 4", src: "path/to/song4.mp3" },
        { id: 5, title: "Song 5", artist: "Artist 5", src: "path/to/song5.mp3" },
        { id: 6, title: "Song 6", artist: "Artist 6", src: "path/to/song6.mp3" },
    ];  

    const [currentSong, setCurrentSong] = useState(0);
    const audioRef = useRef(null);

    const playSong = (index) => {
        setCurrentSong(index);
        audioRef.current.load(index);
        audioRef.current.play();
    };

  return (
    <>
      <div className='palylist'>
        <h2>My Playlist</h2>
        <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <button onClick={() => playSong(index)}>
              ▶ {song.title}
            </button>
          </li>
        ))}
      </ul>

      <audio ref={audioRef} controls autoPlay>
        <source src={songs[currentSong].src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      </div>
    </>
  )
}

export default MusicPlayer
