import React from 'react';
import './PricingSection.css';

const PricingSection = () => {
  const pricingData = [
    {
      title: 'Aliyah v1',
      isBestSeller: false,
      buttonText: 'Unlock',
      features: {
        'SMS Capabilities': false,
        'Email Integration': true,
        'PMS Integratio':true,
        'Voice Cloning': false,
        '2+ Numbers': false,
        '2+ Facilitators': false,
        '1+ Abilities': false,
        'Google Calendar Integration': true,
        'Form Integration': true
      }
    },
    {
      title: 'Aliyah v2',
      isBestSeller: true,
      buttonText: 'Unlock',
      features: {
        'SMS Capabilities': true,
        'Email Integration': true,
        'PMS Integration':true,
        'Voice Cloning': false,
        '2+ Numbers': false,
        '2+ Facilitators': true,
        '1+ Abilities': true,
        'Google Calendar Integration': true,
        'Form Integration': true
      }
    },
    {
      title: 'Aliyah v3',
      isBestSeller: false,
      buttonText: 'Unlock',
      features: {
        'SMS Capabilities': true,
        'Email Integration': true,
        'CRM Integration': true,
        'Voice Cloning': true,
        '2+ Numbers': true,
        '2+ Facilitators': true,
        '1+ Abilities': true,
        'Google Calendar Integration': true,
        'Form Integration': true
      }
    }
  ];

  const allFeatures = [
    'SMS Capabilities',
    'Email Integration',
    'CRM Integration',
    'Voice Cloning',
    '2+ Numbers',
    '2+ Facilitators',
    '1+ Abilities',
    'Google Calendar Integration',
    'Form Integration'
  ];

  return (
    <div className="pricing-section">
      <div className="pricing-container">
        {/* Header Row */}
        <div className="pricing-header">
          <div className="feature-column">
            <div className="capability-title">CAPABILITY</div>
          </div>
          {pricingData.map((plan, index) => (
            <div key={index} className="plan-column">
              <div className="plan-header">
                <h2 className="plan-title">{plan.title}</h2>

                <button className={`unlock-button ${plan.isBestSeller ? 'hero-button' : ''}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features Rows */}
        <div className="features-grid">
          {allFeatures.map((feature, featureIndex) => (
            <div key={featureIndex} className="feature-row">
              <div className="feature-name">{feature}</div>
              {pricingData.map((plan, planIndex) => (
                <div key={planIndex} className="feature-cell">
                  <div className={`check-mark ${plan.features[feature] ? 'enabled' : 'disabled'}`}>
                    {plan.features[feature] ? '✓' : '✗'}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;