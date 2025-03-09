import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './RelatedContent.scss';

const RelatedContent = ({ relationships, className }) => {
  const [activeSection, setActiveSection] = useState(null);

  const relationshipTypes = {
    thematic: {
      label: 'Thematic Connections',
      color: 'var(--color-primary)',
      description: 'Content sharing similar themes and motifs'
    },
    inspirational: {
      label: 'Inspirational Links',
      color: 'var(--color-accent)',
      description: 'Works that inspired or complement each other'
    },
    complementary: {
      label: 'Complementary Experiences',
      color: 'var(--color-secondary)',
      description: 'Pieces that enhance each other'
    },
    sequential: {
      label: 'Journey Progression',
      color: 'var(--color-tertiary)',
      description: 'Next steps in your artistic and spiritual journey'
    }
  };

  const getItemIcon = (type) => {
    switch (type) {
      case 'artwork':
        return '🎨';
      case 'meditation':
        return '🧘';
      case 'workshop':
        return '💃';
      default:
        return '✨';
    }
  };

  const getRelationshipStrength = (strength) => {
    return strength >= 0.8 ? 'strong' : strength >= 0.5 ? 'medium' : 'light';
  };

  return (
    <div className={`related-content ${className || ''}`}>
      {Object.entries(relationships || {}).map(([type, items]) => (
        items && items.length > 0 && (
          <div
            key={type}
            className={`related-content__section ${activeSection === type ? 'is-active' : ''}`}
            onMouseEnter={() => setActiveSection(type)}
            onMouseLeave={() => setActiveSection(null)}
          >
            <div className="related-content__section-header">
              <h3 className="related-content__title">
                {relationshipTypes[type]?.label || type}
              </h3>
              <p className="related-content__description">
                {relationshipTypes[type]?.description}
              </p>
              <div
                className="related-content__indicator"
                style={{ backgroundColor: relationshipTypes[type]?.color }}
              />
            </div>
            <div className="related-content__items">
              {items.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  className={`related-content__item relationship-strength--${getRelationshipStrength(item.strength)}`}
                  title={item.reason}
                >
                  <span className="related-content__item-icon">
                    {getItemIcon(item.type)}
                  </span>
                  <div className="related-content__item-info">
                    <h4 className="related-content__item-title">
                      {item.title}
                    </h4>
                    <p className="related-content__item-reason">
                      {item.reason}
                    </p>
                    {item.sharedTags && item.sharedTags.length > 0 && (
                      <div className="related-content__item-tags">
                        {item.sharedTags.map((tag, i) => (
                          <span key={i} className="related-content__tag">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  {item.strength && (
                    <div
                      className="related-content__strength-indicator"
                      style={{
                        opacity: item.strength,
                        backgroundColor: relationshipTypes[type]?.color
                      }}
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

RelatedContent.propTypes = {
  relationships: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        reason: PropTypes.string.isRequired,
        strength: PropTypes.number,
        sharedTags: PropTypes.arrayOf(PropTypes.string)
      })
    )
  ),
  className: PropTypes.string
};

export default RelatedContent;