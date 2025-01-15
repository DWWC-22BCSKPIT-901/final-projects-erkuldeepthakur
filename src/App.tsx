import React, { useState } from 'react';
import { BookOpen, Video, FileText, Users, Heart, Mail, Phone, X } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[]
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const features = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "Educational Videos",
      description: "Watch expert-led videos on various health topics"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Health Articles",
      description: "Read comprehensive articles on family health"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Resources",
      description: "Access community health resources and support"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Learning Materials",
      description: "Download educational materials for families"
    }
  ];

  const interestOptions = [
    "Healthy Living",
    "Family Nutrition",
    "Mental Wellness",
    "Child Development",
    "Senior Care"
  ];

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      phone: ''
    };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setShowForm(false);
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interests: []
        });
      }, 3000);
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleNavigation = (section: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'resources':
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Health Resources</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Downloadable Guides</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Family Nutrition Guide</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Exercise Plans</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-blue-600" />
                    <span>Mental Health Toolkit</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Health Tools</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span>BMI Calculator</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span>Meal Planner</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span>Activity Tracker</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">External Resources</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span>Support Groups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <span>Helpline Directory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <span>Newsletter Signup</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        );
      case 'articles':
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Health Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?auto=format&fit=crop&w=800&q=80" 
                  alt="Family Health" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Understanding Family Health Insurance</h3>
                  <p className="text-gray-600 mb-4">A comprehensive guide to choosing the right health insurance for your family.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read more →</a>
                </div>
              </article>
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80" 
                  alt="Healthy Food" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Nutrition Tips for Growing Children</h3>
                  <p className="text-gray-600 mb-4">Essential nutrition guidelines to support your child's growth and development.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read more →</a>
                </div>
              </article>
              <article className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80" 
                  alt="Mental Health" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Mental Health in the Digital Age</h3>
                  <p className="text-gray-600 mb-4">How to maintain mental wellness in an increasingly connected world.</p>
                  <a href="#" className="text-blue-600 hover:underline">Read more →</a>
                </div>
              </article>
            </div>
          </section>
        );
      case 'videos':
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Educational Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative pb-[56.25%] bg-gray-100">
                  <Video className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Family Exercise Routines</h3>
                  <p className="text-gray-600">Fun and effective exercises the whole family can do together.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative pb-[56.25%] bg-gray-100">
                  <Video className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Healthy Cooking Tips</h3>
                  <p className="text-gray-600">Quick and nutritious meal preparation guides.</p>
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="relative pb-[56.25%] bg-gray-100">
                  <Video className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 text-blue-600" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Stress Management</h3>
                  <p className="text-gray-600">Expert advice on managing family stress and anxiety.</p>
                </div>
              </div>
            </div>
          </section>
        );
      case 'community':
        return (
          <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-8">Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Discussion Forums</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Parenting Support</h4>
                    <p className="text-gray-600">Connect with other parents and share experiences.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Health & Wellness</h4>
                    <p className="text-gray-600">Discuss family health topics and get advice.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Recipe Exchange</h4>
                    <p className="text-gray-600">Share and discover healthy family recipes.</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Family Fitness Workshop</h4>
                    <p className="text-gray-600">Join our monthly virtual fitness sessions.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Nutrition Webinar</h4>
                    <p className="text-gray-600">Learn about balanced family nutrition.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-semibold">Support Group Meeting</h4>
                    <p className="text-gray-600">Weekly online support group sessions.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <section className="container mx-auto px-4 py-16 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Families Through Health Education
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Access expert health resources, educational videos, and community support to make informed decisions about your family's health.
              </p>
              <button 
                onClick={() => setShowForm(true)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-blue-600 mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-white py-16">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Featured Health Topics</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" 
                      alt="Healthy Living" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Healthy Living</h3>
                      <p className="text-gray-600">Learn about maintaining a healthy lifestyle for your family.</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1493770348161-369560ae357d?auto=format&fit=crop&w=800&q=80" 
                      alt="Nutrition" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Family Nutrition</h3>
                      <p className="text-gray-600">Discover healthy eating habits and meal planning tips.</p>
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <img 
                      src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80" 
                      alt="Mental Health" 
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">Mental Wellness</h3>
                      <p className="text-gray-600">Support mental health and emotional well-being.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={(e) => handleNavigation('home', e)}>
            <Heart className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">FamilyHealth</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#resources" 
              onClick={(e) => handleNavigation('resources', e)}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'resources' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Resources
            </a>
            <a 
              href="#articles" 
              onClick={(e) => handleNavigation('articles', e)}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'articles' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Articles
            </a>
            <a 
              href="#videos" 
              onClick={(e) => handleNavigation('videos', e)}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'videos' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Videos
            </a>
            <a 
              href="#community" 
              onClick={(e) => handleNavigation('community', e)}
              className={`text-gray-600 hover:text-blue-600 ${activeSection === 'community' ? 'text-blue-600 font-semibold' : ''}`}
            >
              Community
            </a>
          </nav>
        </div>
      </header>

      <main>
        {renderSection()}

        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full relative">
              <button 
                onClick={() => setShowForm(false)}
                className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-green-500 text-xl mb-4">Thank you for registering!</div>
                  <p className="text-gray-600">We'll be in touch soon with personalized health resources.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Join FamilyHealth</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone (optional)</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Areas of Interest</label>
                    <div className="flex flex-wrap gap-2">
                      {interestOptions.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-3 py-1 rounded-full text-sm ${
                            formData.interests.includes(interest)
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-6 h-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-800">FamilyHealth</span>
          </div>
          <p className="text-center text-gray-600">
            © 2024 FamilyHealth. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;