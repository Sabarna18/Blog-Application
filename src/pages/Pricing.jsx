import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown, Rocket, Users, BarChart3, Shield, Headphones, Globe, Sparkles } from 'lucide-react';

const PricingPage = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    const plans = [
        {
            name: "Starter",
            icon: <Rocket className="w-8 h-8" />,
            description: "Perfect for getting started",
            monthlyPrice: 0,
            annualPrice: 0,
            popular: false,
            features: [
                { name: "Up to 5 articles per month", included: true },
                { name: "Basic editor features", included: true },
                { name: "Community support", included: true },
                { name: "Basic analytics", included: true },
                { name: "SSL security", included: true },
                { name: "Custom domain", included: false },
                { name: "Priority support", included: false },
                { name: "Advanced SEO tools", included: false },
                { name: "Team collaboration", included: false },
                { name: "White-label options", included: false }
            ],
            buttonText: "Get Started Free",
            buttonStyle: "bg-gray-800 hover:bg-gray-700 text-white border border-gray-600"
        },
        {
            name: "Professional",
            icon: <Crown className="w-8 h-8" />,
            description: "For serious content creators",
            monthlyPrice: 19,
            annualPrice: 15,
            popular: true,
            features: [
                { name: "Unlimited articles", included: true },
                { name: "Advanced editor with AI", included: true },
                { name: "Priority support", included: true },
                { name: "Advanced analytics", included: true },
                { name: "Custom domain", included: true },
                { name: "SEO optimization tools", included: true },
                { name: "Social media integration", included: true },
                { name: "Email newsletters", included: true },
                { name: "Team collaboration", included: false },
                { name: "White-label options", included: false }
            ],
            buttonText: "Start Free Trial",
            buttonStyle: "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/25"
        },
        {
            name: "Enterprise",
            icon: <Sparkles className="w-8 h-8" />,
            description: "For teams and organizations",
            monthlyPrice: 49,
            annualPrice: 39,
            popular: false,
            features: [
                { name: "Everything in Professional", included: true },
                { name: "Unlimited team members", included: true },
                { name: "Advanced collaboration", included: true },
                { name: "Custom integrations", included: true },
                { name: "White-label solution", included: true },
                { name: "Dedicated account manager", included: true },
                { name: "SLA guarantee", included: true },
                { name: "Advanced security", included: true },
                { name: "API access", included: true },
                { name: "Custom training", included: true }
            ],
            buttonText: "Contact Sales",
            buttonStyle: "bg-gray-700 hover:bg-gray-600 text-white border border-gray-500"
        }
    ];

    const features = [
        {
            icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
            title: "Advanced Analytics",
            description: "Track your content performance with detailed insights"
        },
        {
            icon: <Shield className="w-6 h-6 text-cyan-400" />,
            title: "Enterprise Security",
            description: "Bank-level security with SSL and data encryption"
        },
        {
            icon: <Users className="w-6 h-6 text-blue-500" />,
            title: "Team Collaboration",
            description: "Work together seamlessly with your team"
        },
        {
            icon: <Globe className="w-6 h-6 text-indigo-400" />,
            title: "Global CDN",
            description: "Lightning-fast loading times worldwide"
        },
        {
            icon: <Headphones className="w-6 h-6 text-slate-400" />,
            title: "24/7 Support",
            description: "Get help whenever you need it"
        },
        {
            icon: <Zap className="w-6 h-6 text-blue-300" />,
            title: "AI-Powered Editor",
            description: "Write better content with AI assistance"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black">

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/30 to-black/50"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative">
                    <div className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-gray-700">
                        <Sparkles className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-medium text-gray-300">Simple, Transparent Pricing</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-gray-300 bg-clip-text text-transparent">
                        Choose Your Plan
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12">
                        Start free, scale as you grow. Join thousands of creators who trust The CORE for their content journey.
                    </p>

                    {/* Billing Toggle */}
                    <div className="flex items-center justify-center space-x-6 mb-16">
                        <span className={`font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500'}`}>
                            Monthly
                        </span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={isAnnual}
                                onChange={(e) => setIsAnnual(e.target.checked)}
                            />
                            <div className="w-16 h-8 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-8 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-blue-500"></div>
                        </label>
                        <div className="flex items-center space-x-2">
                            <span className={`font-medium transition-colors ${isAnnual ? 'text-white' : 'text-gray-500'}`}>
                                Annual
                            </span>
                            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                                Save 20%
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="pb-20 -mt-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {plans.map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-gray-900/90 backdrop-blur-sm rounded-3xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-2 border ${plan.popular
                                    ? 'border-blue-500 bg-gray-900 shadow-blue-500/20'
                                    : 'border-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-blue-500/30">
                                            Most Popular
                                        </div>
                                    </div>
                                )}

                                <div className="p-8">
                                    {/* Plan Header */}
                                    <div className="text-center mb-8">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${plan.popular
                                            ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-gray-800 text-gray-300'
                                            }`}>
                                            {plan.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                                        <p className="text-gray-400 mb-6">{plan.description}</p>

                                        <div className="mb-6">
                                            <span className="text-5xl font-bold text-white">
                                                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                                            </span>
                                            <span className="text-gray-400 ml-1">/month</span>
                                            {isAnnual && plan.monthlyPrice > 0 && (
                                                <div className="text-sm text-blue-400 font-medium mt-1">
                                                    Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                                                </div>
                                            )}
                                        </div>

                                        <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${plan.buttonStyle}`}>
                                            {plan.buttonText}
                                        </button>
                                    </div>

                                    {/* Features List */}
                                    <div className="space-y-4">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-3">
                                                {feature.included ? (
                                                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-3 h-3 text-white" />
                                                    </div>
                                                ) : (
                                                    <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                                                        <X className="w-3 h-3 text-gray-500" />
                                                    </div>
                                                )}
                                                <span className={feature.included ? 'text-gray-300' : 'text-gray-500'}>
                                                    {feature.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Everything You Need
                        </h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                            Powerful features designed to help you create, manage, and grow your content with ease
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 hover:border-gray-600"
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
                                </div>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-white">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-400">Get answers to common questions about our pricing</p>
                    </div>

                    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                question: "Can I change plans anytime?",
                                answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately."
                            },
                            {
                                question: "Is there a free trial?",
                                answer: "Absolutely! We offer a 14-day free trial for all paid plans with full access to features."
                            },
                            {
                                question: "What payment methods do you accept?",
                                answer: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans."
                            },
                            {
                                question: "Can I cancel anytime?",
                                answer: "Yes, you can cancel your subscription at any time. No long-term contracts or cancellation fees."
                            }
                        ].map((faq, index) => (
                            <div key={index} className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-700">
                                <h3 className="text-lg font-semibold mb-3 text-white">{faq.question}</h3>
                                <p className="text-gray-400">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-slate-900/30"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-10 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-6 text-center relative">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            Ready to Transform Your Content?
                        </h2>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            Join thousands of creators who have already discovered the power of The CORE. Start your journey today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50">
                                Schedule Demo
                            </button>
                        </div>

                        <p className="text-sm text-gray-500 mt-4">
                            No credit card required • 14-day free trial • Cancel anytime
                        </p>
                    </div>
                </div>
            </section>

         
        </div>
    );
};

export default PricingPage;