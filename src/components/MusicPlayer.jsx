// src/components/MusicPlayer.jsx

import React, { useState } from 'react';
import './MusicPlayer.css'; // Import the CSS

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      {/* Album Art */}
      <div className="album-cover">
        <img src="/assets/album-art.png" alt="Album Art" />
      </div>

      {/* Song Info */}
      <div className="song-info">
        <h2>Song Title</h2>
        <p>Artist Name</p>
      </div>

      {/* Player Controls */}
      <div className="controls">
        <button className="prev-btn">⏮</button>
        <button className="play-pause-btn" onClick={togglePlayPause}>
          {isPlaying ? '⏸' : '▶️'}
        </button>
        <button className="next-btn">⏭</button>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <input type="range" min="0" max="100" />
      </div>

      {/* Volume Control */}
      <div className="volume-control">
        <label>🔊</label>
        <input type="range" min="0" max="100" />
      </div>
    </div>
  );
};

export default MusicPlayer;
