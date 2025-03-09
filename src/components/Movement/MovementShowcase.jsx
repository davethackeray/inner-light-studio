import React from 'react';
import './MovementShowcase.scss';
import { ArtyButton } from '../Common/ArtyButton';

export const MovementShowcase = ({
  workshops = [],
  onJoinClass,
  className = ''
}) => {
  return (
    <div className={`movement-showcase ${className}`}>
      {workshops.map((workshop) => (
        <div 
          key={workshop.id}
          className="movement-showcase__item"
        >
          <div className="movement-showcase__media">
            {workshop.videoUrl ? (
              <video 
                className="movement-showcase__video"
                poster={workshop.thumbnail}
                muted
                loop
                onMouseEnter={(e) => e.target.play()}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0;
                }}
              >
                <source src={workshop.videoUrl} type="video/mp4" />
              </video>
            ) : (
              <img 
                src={workshop.thumbnail} 
                alt={workshop.title}
                className="movement-showcase__image"
              />
            )}
          </div>

          <div className="movement-showcase__content">
            <div className="movement-showcase__info">
              <h3 className="movement-showcase__title">{workshop.title}</h3>
              <div className="movement-showcase__meta">
                <span className="movement-showcase__date">
                  {workshop.date}
                </span>
                <span className="movement-showcase__duration">
                  {workshop.duration}
                </span>
              </div>
              <p className="movement-showcase__description">
                {workshop.description}
              </p>
              <div className="movement-showcase__tags">
                {workshop.tags.map((tag) => (
                  <span key={tag} className="movement-showcase__tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="movement-showcase__actions">
              <ArtyButton 
                variant="movement"
                size="medium"
                onClick={() => onJoinClass?.(workshop)}
              >
                {workshop.isLive ? 'Join Live Class' : 'Book Workshop'}
              </ArtyButton>
              {workshop.price && (
                <span className="movement-showcase__price">
                  {workshop.price}
                </span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

MovementShowcase.displayName = 'MovementShowcase';

export default MovementShowcase;
