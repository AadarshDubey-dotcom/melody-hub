import React, { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState(0);
    const audioRef = useRef(null);

    // API se songs fetch karne ke liye
    useEffect(() => {
        fetch("https://itunes.apple.com/search?term=bollywood&entity=song&limit=6")
            .then(res => res.json())
            .then(data => {
                const formattedSongs = data.results.map((track) => ({
                    title: track.trackName,
                    artist: track.artistName,
                    src: track.previewUrl,        // 30 seconds audio preview
                    image: track.artworkUrl100      // Album image URL
                }));
                setSongs(formattedSongs);
            })
            .catch(err => console.log("Error fetching songs:", err));
    }, []);

    const playSong = (index) => {
        setCurrentSong(index);
        // Thoda delay dekar audio load aur play karenge
        setTimeout(() => {
            if (audioRef.current) {
                audioRef.current.load();
                audioRef.current.play().catch(error => {
                    console.log("Playback prevented:", error);
                });
            }
        }, 100);
    };

    if (songs.length === 0) {
        return <div className='palylist'><h2>Loading Songs from API...</h2></div>;
    }

  return (
    <div className='palylist'>
      <h2>My API Playlist</h2>

      {/* Current Playing Song Image & Info */}
      <div className="player-banner">
        <img 
            src={songs[currentSong].image} 
            alt="Album Art" 
            className="main-album-art" 
        />
        <div className="song-info">
            <h3>{songs[currentSong].title}</h3>
            <p>{songs[currentSong].artist}</p>
        </div>
      </div>

      {/* Playlist List */}
      <ul>
        {songs.map((song, index) => (
          <li key={index} className={currentSong === index ? "active-song" : ""}>
            <button onClick={() => playSong(index)}>
              <img src={song.image} alt="" className="list-thumb" />
              <div className="list-text">
                <span className="title">{song.title}</span>
                <span className="artist">{song.artist}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      {/* Audio Player (Fixed with direct src) */}
      <audio 
        ref={audioRef} 
        src={songs[currentSong].src} 
        controls 
      />
    </div>
  );
}

export default MusicPlayer;