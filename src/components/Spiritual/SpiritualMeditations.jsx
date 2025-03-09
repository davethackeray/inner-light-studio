import React from 'react';
import './SpiritualMeditations.scss';
import { ArtyButton } from '../Common/ArtyButton';

export const SpiritualMeditations = ({
  meditations = [],
  onMeditationSelect,
  className = ''
}) => {
  return (
    <div className={`spiritual-meditations ${className}`}>
      {meditations.map((meditation) => (
        <div 
          key={meditation.id}
          className={`spiritual-meditations__card ${meditation.featured ? 'spiritual-meditations__card--featured' : ''}`}
        >
          <div className="spiritual-meditations__symbol">
            <span className="spiritual-meditations__icon">
              {meditation.symbol || '✨'}
            </span>
          </div>

          <div className="spiritual-meditations__content">
            <h3 className="spiritual-meditations__title">
              {meditation.title}
            </h3>

            {meditation.quote && (
              <blockquote className="spiritual-meditations__quote">
                "{meditation.quote}"
              </blockquote>
            )}

            <p className="spiritual-meditations__description">
              {meditation.description}
            </p>

            <div className="spiritual-meditations__details">
              <span className="spiritual-meditations__duration">
                {meditation.duration}
              </span>
              {meditation.type && (
                <span className="spiritual-meditations__type">
                  {meditation.type}
                </span>
              )}
            </div>

            <div className="spiritual-meditations__actions">
              <ArtyButton
                variant="spiritual"
                size="medium"
                onClick={() => onMeditationSelect?.(meditation)}
              >
                Begin Journey
              </ArtyButton>
              {meditation.facilitator && (
                <span className="spiritual-meditations__facilitator">
                  with {meditation.facilitator}
                </span>
              )}
            </div>

            {meditation.tags && (
              <div className="spiritual-meditations__tags">
                {meditation.tags.map((tag) => (
                  <span key={tag} className="spiritual-meditations__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="spiritual-meditations__decoration">
            <div className="spiritual-meditations__circle"></div>
            <div className="spiritual-meditations__line"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

SpiritualMeditations.displayName = 'SpiritualMeditations';

export default SpiritualMeditations;
