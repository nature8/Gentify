import React from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = React.useState('monthly');

  const plans = [
    {
      name: 'Personal',
      price: billingCycle === 'monthly' ? 29 : 290,
      description: 'For individuals and small teams looking to manage their tasks',
      features: [
        'Unlimited contacts',
        'Bulk emailing',
        'AI Integration',
        'View & share up to 3 years',
        'Collaboration & permissions'
      ],
      buttonVariant: 'secondary'
    },
    {
      name: 'Pro',
      price: billingCycle === 'monthly' ? 39 : 390,
      description: 'For growing teams that need to track their projects progress and hit deadlines',
      features: [
        'Email sequences',
        'Send emails from multiple domains',
        'Connect multiple email accounts',
        'Fully adjustable sharing permissions',
        'Migration services'
      ],
      buttonVariant: 'primary'
    },
    {
      name: 'Custom Plan',
      price: 'Custom',
      description: 'For companies that need to manage a portfolio of work and goals across departments',
      features: [
        'White glove onboarding',
        'Custom billing',
        'Unlimited slack channel',
        'Dedicated point of contact',
        'Unlimited reporting'
      ],
      buttonVariant: 'secondary'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-gray-400 text-sm mb-2">Pricing</p>
            <h1 className="text-4xl font-bold">Simple and Flexible<br />Pricing</h1>
          </div>
          <div className="bg-gray-800 rounded-full p-1 flex items-center">
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                billingCycle === 'monthly' ? 'bg-white text-black' : 'text-gray-400'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm ${
                billingCycle === 'annually' ? 'bg-white text-black' : 'text-gray-400'
              }`}
              onClick={() => setBillingCycle('annually')}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ${
                plan.name === 'Pro' ? 'bg-white text-black' : 'bg-gray-900'
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">
                  {typeof plan.price === 'number' ? `$${plan.price}` : plan.price}
                </span>
                {typeof plan.price === 'number' && (
                  <span className="text-gray-500 ml-2">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-6">{plan.description}</p>
              
              <div className="space-y-4 mb-8">
                <p className="font-medium">
                  {plan.name === 'Pro' ? 'Everything in Standard, plus:' : 
                   plan.name === 'Custom Plan' ? 'Everything in Standard & Pro, plus:' : 
                   'This Plan Includes:'}
                </p>
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3 px-6 rounded-lg font-medium ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-black text-white'
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;