import React, { useState } from 'react';
import './TimeRangeSlider.css';

const TimeRangeSlider = () => {
  const [currentTime, setCurrentTime] = useState(720); // 初始值12:00，以秒为单位
  const maxTime = 2011; // 33:11 转换为秒

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (e) => {
    setCurrentTime(parseInt(e.target.value));
  };

  return (
    <div className="time-range-slider">
      <div className="slider-header">
        <span className="title">处理范围：长短会影响积分的消耗程度</span>
        <span className="points">消耗 20 积分</span>
      </div>
      
      <div className="slider-container">
        <span className="time-label">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="720"
          max={maxTime}
          value={currentTime}
          onChange={handleSliderChange}
          className="slider"
        />
        <span className="time-label">{formatTime(maxTime)}</span>
      </div>
    </div>
  );
};

export default TimeRangeSlider; 