import React, { useState, useEffect } from 'react';
import { 
  Star, 
  PenTool, 
  BarChart3, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Rocket,
  Eye,
  Heart,
  MessageCircle,
  Share2,
  Search,
  Calendar,
  Palette,
  Code,
  Smartphone,
  Target,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Database,
  Lock,
  Settings,
  Award,
  Headphones,
  Mail,
  FileText,
  Image,
  Play,
  Monitor,
  Layers
} from 'lucide-react';

const FeaturedPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const heroFeatures = [
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Advanced Editor",
      description: "AI-powered writing with real-time suggestions",
      color: "blue"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Deep Analytics",
      description: "Track performance with detailed insights",
      color: "cyan"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Hub",
      description: "Engage readers with interactive features",
      color: "indigo"
    }
  ];

  const mainFeatures = [
    {
      id: "editor",
      icon: <PenTool className="w-12 h-12" />,
      title: "Rich Content Editor",
      subtitle: "Create Beautiful Content",
      description: "Experience the most advanced content editor with AI assistance, markdown support, and real-time collaboration.",
      features: [
        { name: "AI Writing Assistant", icon: <Sparkles className="w-4 h-4" /> },
        { name: "Markdown Support", icon: <Code className="w-4 h-4" /> },
        { name: "Media Embedding", icon: <Image className="w-4 h-4" /> },
        { name: "Real-time Preview", icon: <Eye className="w-4 h-4" /> },
        { name: "Version Control", icon: <Database className="w-4 h-4" /> },
        { name: "Auto-save", icon: <Shield className="w-4 h-4" /> }
      ],
      gradient: "from-blue-600 via-blue-500 to-cyan-500",
      mockup: {
        type: "editor",
        content: "# AI Revolution in Content Creation\n\nThe future of writing is here with our advanced AI-powered editor that helps you create engaging, well-structured content effortlessly."
      }
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Advanced Analytics",
      subtitle: "Data-Driven Insights",
      description: "Get comprehensive analytics to understand your audience, track content performance, and optimize your strategy.",
      features: [
        { name: "Real-time Dashboard", icon: <Monitor className="w-4 h-4" /> },
        { name: "Audience Demographics", icon: <Users className="w-4 h-4" /> },
        { name: "Content Performance", icon: <TrendingUp className="w-4 h-4" /> },
        { name: "Custom Reports", icon: <FileText className="w-4 h-4" /> },
        { name: "Goal Tracking", icon: <Target className="w-4 h-4" /> },
        { name: "Export Data", icon: <Database className="w-4 h-4" /> }
      ],
      gradient: "from-purple-600 via-blue-600 to-indigo-500",
      mockup: {
        type: "analytics",
        stats: [
          { label: "Page Views", value: "124.8K", change: "+12.5%" },
          { label: "Unique Visitors", value: "89.2K", change: "+8.3%" },
          { label: "Avg. Read Time", value: "4m 32s", change: "+15.2%" },
          { label: "Engagement Rate", value: "76.4%", change: "+5.8%" }
        ]
      }
    },
    {
      id: "community",
      icon: <Users className="w-12 h-12" />,
      title: "Community Features",
      subtitle: "Build Your Audience",
      description: "Foster engagement with powerful community tools that help you build lasting relationships with your readers.",
      features: [
        { name: "Comment System", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "User Profiles", icon: <Users className="w-4 h-4" /> },
        { name: "Social Sharing", icon: <Share2 className="w-4 h-4" /> },
        { name: "Newsletter", icon: <Mail className="w-4 h-4" /> },
        { name: "Discussion Forums", icon: <MessageCircle className="w-4 h-4" /> },
        { name: "Moderation Tools", icon: <Shield className="w-4 h-4" /> }
      ],
      gradient: "from-green-600 via-blue-600 to-teal-500",
      mockup: {
        type: "community",
        comments: 847,
        subscribers: 12400,
        engagement: "94%"
      }
    }
  ];

  const additionalFeatures = [
    {
      category: "Performance & SEO",
      icon: <Rocket className="w-6 h-6 text-blue-400" />,
      features: [
        { name: "Lightning Fast Loading", desc: "Optimized for speed" },
        { name: "SEO Optimization", desc: "Built-in SEO tools" },
        { name: "Mobile Responsive", desc: "Perfect on all devices" },
        { name: "CDN Integration", desc: "Global content delivery" }
      ]
    },
    {
      category: "Security & Reliability", 
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      features: [
        { name: "SSL Encryption", desc: "Bank-level security" },
        { name: "Automated Backups", desc: "Never lose your data" },
        { name: "99.9% Uptime", desc: "Always available" },
        { name: "DDoS Protection", desc: "Advanced security" }
      ]
    },
    {
      category: "Customization",
      icon: <Palette className="w-6 h-6 text-indigo-400" />,
      features: [
        { name: "Custom Themes", desc: "Brand your blog" },
        { name: "Layout Builder", desc: "Drag & drop design" },
        { name: "Custom CSS", desc: "Full control" },
        { name: "Widget System", desc: "Extend functionality" }
      ]
    },
    {
      category: "Integrations",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      features: [
        { name: "Social Media", desc: "Auto-posting" },
        { name: "Email Services", desc: "Newsletter tools" },
        { name: "Analytics Tools", desc: "Third-party tracking" },
        { name: "Payment Gateways", desc: "Monetization" }
      ]
    }
  ];

  const tabs = [
    { id: 0, name: "Content Creation", icon: <PenTool className="w-5 h-5" /> },
    { id: 1, name: "Analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { id: 2, name: "Community", icon: <Users className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
    

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative">
          <div className="inline-flex items-center space-x-2 bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full mb-8 shadow-lg border border-gray-700">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-gray-300">Powerful Features</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-gray-300 bg-clip-text text-transparent">
            Everything You Need
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto mb-16">
            Discover the comprehensive suite of tools that make The CORE the ultimate platform for content creators and knowledge enthusiasts.
          </p>
          
          {/* Hero Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {heroFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-600 flex items-center justify-center mb-4 mx-auto`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl">
              Explore Features
            </button>
            <button className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Feature Tabs */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Core Features in Detail
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Dive deep into the powerful features that set The CORE apart from other blogging platforms
            </p>
          </div>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm p-2 rounded-2xl border border-gray-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.name}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="max-w-7xl mx-auto">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`transition-all duration-500 ${
                  activeTab === index ? 'opacity-100 block' : 'opacity-0 hidden'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* Feature Info */}
                  <div className={index % 2 === 1 ? 'order-2' : 'order-1'}>
                    <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg`}>
                      {React.cloneElement(feature.icon, { className: "w-10 h-10 text-white" })}
                    </div>
                    
                    <h3 className="text-4xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-blue-400 font-semibold mb-4">{feature.subtitle}</p>
                    <p className="text-xl text-gray-400 mb-8">{feature.description}</p>
                    
                    {/* Feature List */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                            {item.icon}
                          </div>
                          <span className="text-gray-300">{item.name}</span>
                        </div>
                      ))}
                    </div>
                    
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg">
                      Learn More <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </button>
                  </div>
                  
                  {/* Feature Demo/Mockup */}
                  <div className={index % 2 === 1 ? 'order-1' : 'order-2'}>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700 shadow-2xl">
                      {feature.mockup.type === 'editor' && (
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3 pb-4 border-b border-gray-700">
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                            </div>
                            <span className="text-sm text-gray-400">editor.md</span>
                          </div>
                          <div className="font-mono text-sm text-gray-300 leading-relaxed">
                            <div className="text-blue-400"># AI Revolution in Content Creation</div>
                            <div className="mt-2">The future of writing is here with our advanced</div>
                            <div className="text-green-400">AI-powered editor</div>
                            <div>that helps you create engaging content...</div>
                          </div>
                        </div>
                      )}
                      
                      {feature.mockup.type === 'analytics' && (
                        <div className="space-y-6">
                          <h4 className="text-xl font-semibold mb-4">Analytics Dashboard</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {feature.mockup.stats.map((stat, idx) => (
                              <div key={idx} className="bg-gray-700/50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                                <div className="text-sm text-green-400">{stat.change}</div>
                              </div>
                            ))}
                          </div>
                          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                              <span className="text-gray-300">Traffic Growth</span>
                              <TrendingUp className="w-5 h-5 text-green-400" />
                            </div>
                            <div className="mt-2 h-2 bg-gray-700 rounded-full">
                              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" style={{width: '78%'}}></div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {feature.mockup.type === 'community' && (
                        <div className="space-y-4">
                          <h4 className="text-xl font-semibold mb-4">Community Engagement</h4>
                          <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <MessageCircle className="w-5 h-5 text-blue-400" />
                                <span>Comments</span>
                              </div>
                              <span className="text-blue-400 font-semibold">{feature.mockup.comments}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-green-400" />
                                <span>Subscribers</span>
                              </div>
                              <span className="text-green-400 font-semibold">{feature.mockup.subscribers}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-gray-700/30 rounded-xl">
                              <div className="flex items-center space-x-3">
                                <Heart className="w-5 h-5 text-red-400" />
                                <span>Engagement</span>
                              </div>
                              <span className="text-red-400 font-semibold">{feature.mockup.engagement}</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              More Powerful Features
            </h2>
            <p className="text-xl text-gray-400">
              Additional tools and capabilities to supercharge your content creation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center space-x-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-200">{feature.name}</div>
                        <div className="text-sm text-gray-400">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators who have transformed their content journey with The CORE. Start exploring these powerful features today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl">
                Start Free Trial
              </button>
              <button className="border-2 border-gray-600 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50">
                View Pricing Plans
              </button>
            </div>
            
            <p className="text-sm text-gray-500 mt-6">
              No credit card required • Full access to all features • Cancel anytime
            </p>
          </div>
        </div>
      </section>

 
    </div>
  );
};

export default FeaturedPage;