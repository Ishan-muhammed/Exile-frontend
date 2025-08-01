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
        'PMS Integration': true,
        'Voice Cloning': false,
        '2+ Languages': false,
        '2+ Numbers': false,
        '2+ Facilitators': false,
        '1+ Abilities': false,
        'Call Analytics': true,
        'CRM Integration': false,
      }
    },
    {
      title: 'Aliyah v2',
      isBestSeller: true,
      buttonText: 'Unlock',
      features: {
        'SMS Capabilities': true,
        'Email Integration': true,
        'PMS Integration': true,
        'Voice Cloning': false,
        '2+ Languages': true,
        '2+ Numbers': false,
        '2+ Facilitators': true,
        '1+ Abilities': true,
        'Call Analytics': true,
        'CRM Integration': true,
      }
    },
    {
      title: 'Aliyah v3',
      isBestSeller: false,
      buttonText: 'Unlock',
      features: {
        'SMS Capabilities': true,
        'Email Integration': true,
        'PMS Integration': true,
        'Voice Cloning': true,
        '2+ Languages': true,
        '2+ Numbers': true,
        '2+ Facilitators': true,
        '1+ Abilities': true,
        'Call Analytics': true,
        'CRM Integration': true,
      }
    }
  ];

  const allFeatures = [
    'SMS Capabilities',
    'Email Integration',
    'PMS Integration',
    'Voice Cloning',
    '2+ Languages',
    '2+ Numbers',
    '2+ Facilitators',
    '1+ Abilities',
    'Call Analytics',
    'CRM Integration',
  ];

  const scrollToContactForm = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pricing-section" id="pricing">
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
                <button
                  className={`unlock-button ${plan.isBestSeller ? 'hero-button' : ''}`}
                  onClick={scrollToContactForm}
                >
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
