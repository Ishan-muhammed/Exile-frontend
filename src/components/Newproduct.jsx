import React from 'react';
import './Newproduct.css';
import { Check } from 'lucide-react';

const NewProduct = () => {
  const scrollToContact = () => {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const products = [
    {
      title: 'Aliyah v1 - Your Perfect Start',
      subtitle: 'Built Custom For Your Business.',
      isPopular: false,
      specialPlan: {
        facilitators: '2',
        extraTools: '2',
        customersHandled: '500',
        customersUnit: '/Month',
        extraMinutes: '$0.9',
        minuteUnit: '/Minute',
      },
      capabilities: [
        'Full Portal Access',
        'All Integrations Compatible',
        '2 Languages',
        'All Accents',
      ],
      buttonText: 'Unlock',
      buttonStyle: 'outline',
    },
    {
      title: 'Aliyah v2 - Your Way To Scale',
      subtitle: 'Built Custom For Your Business.',
      isPopular: false,
      specialPlan: {
        facilitators: '4',
        extraTools: '4',
        customersHandled: '1,500',
        customersUnit: '/Month',
        extraMinutes: '$0.5',
        minuteUnit: '/Minute',
      },
      capabilities: [
        'Full Portal Access',
        'All Integrations Compatible',
        '4 Languages',
        'All Accents',
      ],
      buttonText: 'Unlock',
      buttonStyle: 'primary',
    },
    {
      title: 'Aliyah v3 - Enterprise Scale',
      subtitle: 'Built Custom For Your Business.',
      isPopular: false,
      specialPlan: {
        facilitators: '4+',
        extraTools: '4+',
        customersHandled: '25,000',
        customersUnit: '/Month',
        extraMinutes: '$0.3',
        minuteUnit: '/Minute',
      },
      capabilities: [
        'Special Portal Access',
        'All Integrations Compatible',
        'All Languages/Accents',
        'Voice Cloning',
      ],
      buttonText: 'Unlock',
      buttonStyle: 'outline',
    },
  ];

  return (
    <div className="newproduct-container">
      <div className="newproduct-max-width">
        <div className="newproduct-header">
          <h2 className="newproduct-title">Our Products</h2>
          <p className="newproduct-subtitle">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="newproduct-grid">
          {products.map((product, index) => (
            <div key={index} className="newproduct-card">
              {/* Header Section */}
              <div className="newproduct-card-header">
                <div className="newproduct-card-header-content">
                  <h3 className="newproduct-card-title">{product.title}</h3>
                </div>
                <p className="newproduct-card-subtitle">{product.subtitle}</p>
              </div>

              {/* Special Plan Section */}
              <div className="newproduct-plan-section">
                <h4 className="newproduct-plan-title">Special Plan</h4>

                <div className="newproduct-plan-details">
                  <div className="newproduct-plan-item">
                    <span className="newproduct-plan-label">Agent</span>
                    <span className="newproduct-plan-value">
                      {product.specialPlan.facilitators}
                    </span>
                  </div>

                  <div className="newproduct-plan-item">
                    <span className="newproduct-plan-label">Languages</span>
                    <span className="newproduct-plan-value">
                      {product.specialPlan.extraTools}
                    </span>
                  </div>

                  <div className="newproduct-plan-item">
                    <span className="newproduct-plan-label">Customers Handled</span>
                    <span className="newproduct-plan-value">
                      {product.specialPlan.customersHandled}
                      <span className="newproduct-plan-unit">
                        {product.specialPlan.customersUnit}
                      </span>
                    </span>
                  </div>

                  <div className="newproduct-plan-item">
                    <span className="newproduct-plan-label">Extra Minutes</span>
                    <span className="newproduct-plan-value">
                      {product.specialPlan.extraMinutes}
                      <span className="newproduct-plan-unit">
                        {product.specialPlan.minuteUnit}
                      </span>
                    </span>
                  </div>
                </div>

                <button
                  onClick={scrollToContact}
                  className={`newproduct-button ${
                    product.buttonStyle === 'primary'
                      ? 'newproduct-button-primary'
                      : 'newproduct-button-outline'
                  }`}
                >
                  {product.buttonText}
                </button>
              </div>

              {/* Capabilities Section */}
              <div className="newproduct-capabilities-section">
                <h4 className="newproduct-capabilities-title">Capabilities</h4>

                <div className="newproduct-capabilities-list">
                  {product.capabilities.map((capability, capIndex) => (
                    <div key={capIndex} className="newproduct-capability-item">
                      <Check className="newproduct-check-icon" />
                      <span className="newproduct-capability-text">
                        {capability}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
