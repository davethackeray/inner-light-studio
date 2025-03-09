import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './MediaPlayer.scss';

export const MediaPlayer = ({ src, type, title }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener('timeupdate', () => {
        const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progress);
      });
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleProgressChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(e.target.value);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="media-player">
      <h3 className="media-player__title">{title}</h3>
      
      <audio ref={audioRef} src={src} />
      
      <div className="media-player__controls">
        <button 
          className="media-player__play-button" 
          onClick={togglePlayPause}
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '⏸' : '▶️'}
        </button>

        <div className="media-player__progress-container">
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
            className="media-player__progress-bar"
            aria-label="Progress"
          />
          <div className="media-player__time">
            <span>{formatTime(duration * (progress / 100))}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

MediaPlayer.propTypes = {
  src: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']).isRequired,
  title: PropTypes.string.isRequired,
};

MediaPlayer.defaultProps = {
  type: 'audio',
};

export default MediaPlayer;
