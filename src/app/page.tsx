'use client';

import { useState } from 'react';
import { Phone, Check, X, Cloud, Moon, Brain, Heart, Zap, TrendingUp, Thermometer, Star, ChevronDown } from 'lucide-react';

// Header Component
function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Georgia, serif' }}>
              MENOQUIL
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('symptoms')}
              className="text-foreground hover:text-primary transition"
            >
              Symptoms
            </button>
            <button
              onClick={() => scrollToSection('ingredients')}
              className="text-foreground hover:text-primary transition"
            >
              Ingredients
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-foreground hover:text-primary transition"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-foreground hover:text-primary transition"
            >
              FAQ
            </button>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:1-888-211-8468"
              className="hidden sm:flex items-center gap-2 text-foreground hover:text-primary transition"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Need Help?</span>
            </a>
            <button className="bg-primary hover:bg-primary-accent text-white px-6 py-2 rounded-full text-sm font-semibold transition">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// ScrollingBanner Component
function ScrollingBanner() {
  const message = 'ð HOLIDAY SALE â UP TO $150 OFF';

  return (
    <div className="bg-teal-500 text-white py-3 overflow-hidden mt-16">
      <div className="marquee">
        <div className="marquee-content">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="whitespace-nowrap px-8 text-lg font-semibold">
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Hero Component
function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&h=800&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6 text-white">
              <span className="text-sm font-semibold">Non-Hormonal â¢ Clinically Studied Ingredients</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Get Back to Feeling Balanced â{' '}
              <span className="text-teal-400 italic">Without Hormones.</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-100 mb-8 leading-relaxed">
              97% of women report significant relief from hot flashes, night sweats, and mood changes within 30 days. Science-backed. Doctor-recommended.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-white">
                <Check size={24} className="text-teal-400 flex-shrink-0" />
                <span>Reduces hot flashes & night sweats</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check size={24} className="text-teal-400 flex-shrink-0" />
                <span>Supports restful, uninterrupted sleep</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <Check size={24} className="text-teal-400 flex-shrink-0" />
                <span>Eases mood swings & irritability</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button className="bg-primary hover:bg-primary-accent text-white px-8 py-3 rounded-full font-semibold transition">
                Try Risk-Free for 60 Days
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition">
                See How It Works
              </button>
            </div>

            {/* Stats */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4">
              <p className="text-white font-semibold">
                â­ 97% of Menoquil users would recommend it to a friend!
              </p>
            </div>
          </div>

          {/* Right side - Product image */}
          <div className="hidden md:flex justify-end relative h-96">
            <div className="relative">
              <div
                className="w-48 h-72 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center relative"
              >
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">M</div>
                  <p className="text-sm text-gray-600">MENOQUIL</p>
                  <p className="text-xs text-gray-500 mt-2">Premium Formula</p>
                </div>
              </div>
              {/* Gold badge */}
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-white rounded-full px-4 py-2 text-xs font-bold shadow-lg">
                DOCTOR FORMULATED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Comparison Component
function Comparison() {
  const features = [
    '100% hormone-free formula',
    'No prescription required',
    'Safe with most medications',
    'No increased cancer risk',
    'Plant-based ingredients',
    'No blood clot concerns',
  ];

  const hrtFeatures = [
    'Contains estrogen/progesterone',
    'Requires prescription & monitoring',
    'Drug interactions possible',
    'Increased risk concerns for some',
    'Synthetic hormones',
    'Blood clot risk for some women',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            The #1 Question We Get
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Is This Basically Hormones?
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Menoquil is completely hormone-free. We use plant-based, clinically studied ingredients to support your body's natural systemsâwithout adding synthetic hormones.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Menoquil Card */}
          <div className="border-2 border-teal-500 rounded-2xl p-8 bg-teal-50/50">
            <h4 className="text-2xl font-bold text-teal-600 mb-6">MENOQUIL</h4>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={24} className="text-teal-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HRT Card */}
          <div className="border-2 border-gray-300 rounded-2xl p-8 bg-gray-50/50">
            <h4 className="text-2xl font-bold text-gray-600 mb-6">Hormone Therapy (HRT)</h4>
            <ul className="space-y-4">
              {hrtFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X size={24} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Symptoms Component
function Symptoms() {
  const symptoms = [
    {
      icon: Cloud,
      title: 'Hot Flash Relief',
      description: 'Feel cool and comfortable again with fewer, milder episodes',
      timeline: 'Relief in 2-3 weeks',
    },
    {
      icon: Moon,
      title: 'Restful Nights',
      description: 'Wake up dry and refreshed, not drenched and exhausted',
      timeline: 'Improvement by week 2',
    },
    {
      icon: Brain,
      title: 'Mental Clarity',
      description: 'Think sharply and stay focused throughout your day',
      timeline: 'Clarity by week 3-4',
    },
    {
      icon: Heart,
      title: 'Emotional Balance',
      description: 'Feel like yourself again with steady, stable moods',
      timeline: 'Balance in 2-4 weeks',
    },
    {
      icon: Zap,
      title: 'Natural Energy',
      description: 'Reclaim your vitality without caffeine or stimulants',
      timeline: 'Energy boost week 1-2',
    },
    {
      icon: TrendingUp,
      title: 'Metabolism Support',
      description: 'Maintain a healthy weight during hormonal transitions',
      timeline: 'Support over 4-8 weeks',
    },
  ];

  return (
    <section id="symptoms" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Targeted Relief
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Real Relief for Real Symptoms
          </h3>
        </div>

        {/* Symptoms Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {symptoms.map((symptom, index) => {
            const Icon = symptom.icon;
            return (
              <div
                key={index}
                className="bg-cream-card border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon size={32} className="text-primary" />
                  <span className="text-xs font-bold bg-teal-100 text-teal-700 px-3 py-1 rounded-full">
                    {symptom.timeline}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {symptom.title}
                </h4>
                <p className="text-gray-600">
                  {symptom.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="bg-primary hover:bg-primary-accent text-white px-8 py-3 rounded-full font-semibold transition mb-4">
            Start Feeling Better Today
          </button>
          <p className="text-sm text-gray-600">
            ð° 60-Day Money-Back Guarantee
          </p>
        </div>
      </div>
    </section>
  );
}

// Science Component
function Science() {
  const mechanisms = [
    {
      icon: Thermometer,
      title: 'Temperature Regulation',
      description: 'Our formula targets the hypothalamus to help maintain stable body temperature throughout the day and night.',
    },
    {
      icon: Moon,
      title: 'Sleep Architecture',
      description: 'Plant-based ingredients support deeper, more restorative sleep cycles, helping you wake refreshed.',
    },
    {
      icon: Brain,
      title: 'Mood Regulation',
      description: 'Natural compounds support neurotransmitter balance for improved emotional stability and mental clarity.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            The Science
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Why Menoquil Works With Your Body
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            During menopause, hormonal fluctuations affect multiple systems in your body. Menoquil's scientifically-formulated blend addresses the root causes, not just the symptoms.
          </p>
        </div>

        {/* Mechanism Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {mechanisms.map((mechanism, index) => {
            const Icon = mechanism.icon;
            return (
              <div
                key={index}
                className="bg-cream-card border border-gray-200 rounded-2xl p-8 text-center hover:shadow-lg transition"
              >
                <div className="flex justify-center mb-4">
                  <Icon size={48} className="text-primary" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">
                  {mechanism.title}
                </h4>
                <p className="text-gray-600">
                  {mechanism.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Ingredients Component
function Ingredients() {
  const ingredients = [
    {
      name: 'Black Cohosh Extract',
      dosage: '40mg per serving',
      benefit: 'Reduces hot flashes and night sweats by up to 60%',
    },
    {
      name: 'Red Clover Isoflavones',
      dosage: '50mg per serving',
      benefit: 'Plant-based compounds that support hormonal balance',
    },
    {
      name: 'Dong Quai Root',
      dosage: '30mg per serving',
      benefit: 'Traditional herb supporting mood and emotional well-being',
    },
    {
      name: 'Ashwagandha',
      dosage: '100mg per serving',
      benefit: 'Adaptagenic herb reducing stress and anxiety',
    },
    {
      name: 'Calcium',
      dosage: '200mg per serving',
      benefit: 'Supports bone health during hormonal transitions',
    },
    {
      name: 'Vitamin D3',
      dosage: '1000 IU per serving',
      benefit: 'Enhances calcium absorption and mood support',
    },
  ];

  return (
    <section id="ingredients" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Full Ingredient Transparency
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            No Proprietary Blends. Every Dose Disclosed.
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in complete transparency. Here's exactly what's in every serving of Menoquil.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h4 className="text-lg font-bold text-foreground mb-2">
                {ingredient.name}
              </h4>
              <p className="text-sm text-primary font-semibold mb-3">
                {ingredient.dosage}
              </p>
              <p className="text-gray-600 text-sm">
                {ingredient.benefit}
              </p>
            </div>
          ))}
        </div>

        {/* Research Bar */}
        <div className="mt-16 bg-white rounded-2xl p-8 text-center">
          <p className="text-sm font-semibold text-gray-600 mb-6">
            Research Backed Ingredients Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Journal of Women\'s Health', 'Clinical Nutrition Studies', 'Menopause Today', 'Health Science Review'].map(
              (pub, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-700 font-medium"
                >
                  {pub}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Timeline Component
function Timeline() {
  const timeline = [
    { week: 'Week 1', title: 'Restful Nights Return', description: 'Many users report better sleep quality and less night sweating' },
    { week: 'Week 2', title: 'Daytime Energy Surges', description: 'Feel more energized and focused during your daily activities' },
    { week: 'Week 3', title: 'Temperature Regulation Improves', description: 'Hot flashes decrease in frequency and intensity' },
    { week: 'Week 4', title: 'Mood & Emotional Balance', description: 'Experience improved mood stability and mental clarity' },
    { week: 'Week 5', title: 'Metabolism Support Kicks In', description: 'Notice improved energy and metabolic support' },
    { week: 'Week 6+', title: 'Full-Body Renewal', description: 'Comprehensive relief and restored quality of life' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Your Journey
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Your Journey to Relief
          </h3>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6 mb-8">
              {/* Timeline marker */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                {index < timeline.length - 1 && (
                  <div className="w-1 bg-primary/30 flex-grow my-4" style={{ minHeight: '80px' }} />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <p className="text-sm font-bold text-primary mb-1">{item.week}</p>
                <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-accent text-white px-8 py-3 rounded-full font-semibold transition">
            Start Your Transformation Today
          </button>
        </div>
      </div>
    </section>
  );
}

// Reviews Component
function Reviews() {
  const reviews = [
    {
      name: 'Margaret T.',
      age: 54,
      location: 'Austin, TX',
      title: 'Night Sweats Gone!',
      text: 'I was waking up completely drenched every night. Within 3 weeks of taking Menoquil, the night sweats stopped. I finally feel like myself again.',
      rating: 5,
    },
    {
      name: 'Jennifer L.',
      age: 51,
      location: 'Denver, CO',
      title: 'Hot Flashes Disappeared',
      text: 'My hot flashes were ruining my workday. By week 4, they were gone. This is a game-changer. I recommend it to everyone.',
      rating: 5,
    },
    {
      name: 'Patricia K.',
      age: 58,
      location: 'Seattle, WA',
      title: 'Complete Relief',
      text: 'I was dealing with everything - hot flashes, mood swings, insomnia. After 5 weeks on Menoquil, all my symptoms have improved dramatically.',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Real Women. Real Relief. Real Results.
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            What Our Users Say
          </h3>
        </div>

        {/* Featured Review */}
        <div className="bg-white border-2 border-primary rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
          <h4 className="text-2xl font-bold text-foreground mb-4">
            "It Changed My Life"
          </h4>
          <p className="text-gray-600 mb-4 italic">
            "I was skeptical at first, but I've never felt better. My family has noticed the difference too. Menoquil gave me my life back."
          </p>
          <p className="font-semibold text-foreground">Sarah M., 52, Los Angeles</p>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Title */}
              <h4 className="font-bold text-foreground mb-2">{review.title}</h4>

              {/* Text */}
              <p className="text-gray-600 text-sm mb-4">"{review.text}"</p>

              {/* Author */}
              <p className="text-sm font-semibold text-foreground">
                {review.name}, {review.age}
              </p>
              <p className="text-xs text-gray-500">{review.location}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          <div className="bg-white rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">97%</p>
            <p className="text-sm text-gray-600">Report Symptom Relief</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">14 Days</p>
            <p className="text-sm text-gray-600">Average Time to First Results</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">50K+</p>
            <p className="text-sm text-gray-600">Women Helped</p>
          </div>
          <div className="bg-white rounded-lg p-6">
            <p className="text-3xl font-bold text-primary mb-2">4.8/5</p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Guarantee Component
function Guarantee() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-sm mb-6">
          60 DAY GUARANTEE
        </div>

        {/* Heading */}
        <h2 className="text-4xl font-bold text-foreground mb-6">
          100% Money-Back Guarantee
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Try Menoquil for 60 days. If you don't experience noticeable relief from your symptoms, simply contact us for a full refund â no questions asked.
        </p>

        {/* Details */}
        <div className="bg-cream rounded-xl p-8 border border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            We're so confident that Menoquil will transform your life that we put our money where our mouth is. If our formula doesn't deliver real, noticeable relief, every penny comes back.
          </p>
          <p className="text-sm text-gray-600">
            This guarantee is a testament to our confidence in our product and our commitment to your satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}

// Pricing Component
function Pricing() {
  const tiers = [
    {
      bottles: 1,
      price: 59,
      perBottle: 59,
      popular: false,
      savings: null,
    },
    {
      bottles: 3,
      price: 129,
      perBottle: 43,
      popular: true,
      savings: 48,
    },
    {
      bottles: 6,
      price: 198,
      perBottle: 33,
      popular: false,
      savings: 156,
    },
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Limited Time Offer
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Start Your Relief Today
          </h3>
          <p className="text-lg text-gray-600">
            60-day Money Back Guarantee and Free shipping on orders over $60
          </p>
        </div>

        {/* Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 flex flex-col transition ${
                tier.popular
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-foreground px-4 py-1 rounded-full text-sm font-bold">
                  POPULAR
                </div>
              )}

              {/* Bottles */}
              <h3 className={`text-2xl font-bold mb-2 ${tier.popular ? 'text-white' : 'text-foreground'}`}>
                {tier.bottles} Bottle{tier.bottles > 1 ? 's' : ''}
              </h3>

              {/* Price */}
              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">
                  ${tier.price}
                </div>
                <p className={`text-sm ${tier.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  ${tier.perBottle}/bottle
                </p>
                {tier.savings && (
                  <p className={`text-sm font-semibold mt-2 ${tier.popular ? 'text-yellow-200' : 'text-primary'}`}>
                    Save ${tier.savings}
                  </p>
                )}
              </div>

              {/* Button */}
              <button
                className={`w-full py-3 rounded-full font-semibold mb-6 transition ${
                  tier.popular
                    ? 'bg-yellow-400 text-foreground hover:bg-yellow-500'
                    : 'bg-primary text-white hover:bg-primary-accent'
                }`}
              >
                Order Now
              </button>

              {/* Features */}
              <div className="space-y-3 flex-grow">
                <div className="flex items-center gap-2">
                  <Check size={20} className={tier.popular ? 'text-yellow-200' : 'text-teal-500'} />
                  <span className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-600'}`}>
                    Free shipping
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className={tier.popular ? 'text-yellow-200' : 'text-teal-500'} />
                  <span className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-600'}`}>
                    60-day guarantee
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={20} className={tier.popular ? 'text-yellow-200' : 'text-teal-500'} />
                  <span className={`text-sm ${tier.popular ? 'text-white' : 'text-gray-600'}`}>
                    Discreet packaging
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-4">We accept:</p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['AMEX', 'Apple Pay', 'PayPal', 'Google Pay', 'VISA'].map((method, idx) => (
              <span key={idx} className="text-xs font-semibold text-gray-700 bg-white px-3 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Component
function FAQ() {
  const [expanded, setExpanded] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Is it safe to take with other medications?',
      answer:
        'Menoquil uses natural plant-based ingredients that are generally well-tolerated. However, if you\'re taking prescription medications, we recommend consulting with your healthcare provider before starting any new supplement.',
    },
    {
      question: 'How long until I see results?',
      answer:
        'Most women report noticing improvements within 2-3 weeks, with more significant relief by week 4. Some experience benefits within the first week. Results vary by individual, which is why we offer a 60-day money-back guarantee.',
    },
    {
      question: 'Does this contain hormones or estrogen?',
      answer:
        'No. Menoquil is 100% hormone-free and contains no estrogen, progesterone, or synthetic hormones. We use plant-based compounds that support your body\'s natural systems without adding external hormones.',
    },
    {
      question: 'Is it safe if I have a history of breast cancer?',
      answer:
        'Many women with breast cancer history use Menoquil successfully. However, this is an important health decision. Please consult with your oncologist or healthcare provider before starting any new supplement.',
    },
    {
      question: 'What if it doesn\'t work for me?',
      answer:
        'We offer a 100% money-back guarantee for 60 days. If you don\'t experience noticeable relief, contact our customer service team for a full refundâno questions asked.',
    },
    {
      question: 'How do I take it?',
      answer:
        'Take 2 capsules daily with water, preferably with a meal. The recommended dosage is consistent for all women. Many find taking them in the morning works best.',
    },
    {
      question: 'Why is this better than taking individual herbs?',
      answer:
        'Menoquil combines scientifically-studied ingredients in precise ratios designed to work synergistically. The formula is optimized for menopause symptom relief and more effective than taking individual herbs separately.',
    },
    {
      question: 'Do I need a subscription?',
      answer:
        'No subscription is required. You can purchase one-time orders at any time. Many customers choose to reorder their preferred package, but there\'s no automatic enrollment.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
            Common Questions
          </h2>
          <h3 className="text-4xl font-bold text-foreground mb-4">
            Questions Women Actually Ask
          </h3>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-cream transition bg-white"
              >
                <h4 className="text-lg font-semibold text-foreground text-left">
                  {faq.question}
                </h4>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-primary transition-transform ${
                    expanded === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {expanded === index && (
                <div className="px-6 py-4 bg-cream border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center bg-cream rounded-lg p-8">
          <p className="text-gray-600 mb-4">
            Can't find the answer you're looking for?
          </p>
          <a
            href="mailto:support@menoquil.com"
            className="text-primary hover:text-primary-accent font-semibold transition"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
}

// EmailSignup Component
function EmailSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Want 20% Off Your First Order?
        </h2>
        <p className="text-lg mb-8 text-pink-100">
          Join thousands of women experiencing real relief
        </p>

        {submitted ? (
          <div className="bg-white/20 backdrop-blur px-6 py-4 rounded-full inline-block">
            <p className="font-semibold">
              â Check your email for your 20% discount code!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-full bg-white text-foreground placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-foreground px-6 py-3 rounded-full font-bold transition"
            >
              Get My 20% Off
            </button>
          </form>
        )}

        <p className="text-sm text-pink-100 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

// FinalCTA Component
function FinalCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Ready to Feel Like Yourself Again?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join 50,000+ women who have found real relief with Menoquil.
        </p>
        <button className="bg-primary hover:bg-primary-accent text-white px-8 py-4 rounded-full text-lg font-bold transition">
          Start My Risk-Free Trial
        </button>
        <p className="text-sm text-gray-600 mt-6">
          60-day money-back guarantee â¢ Free shipping â¢ Discreet packaging
        </p>
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-foreground text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              MENOQUIL
            </h3>
            <p className="text-gray-300 text-sm">
              Science-backed menopause relief without hormones.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Need Help?</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a
                  href="mailto:support@menoquil.com"
                  className="hover:text-primary transition block"
                >
                  support@menoquil.com
                </a>
              </li>
              <li>
                <a
                  href="tel:1-888-211-8468"
                  className="hover:text-primary transition block"
                >
                  1-888-211-8468
                </a>
              </li>
              <li className="text-xs text-gray-500">
                Mon-Fri, 9am-6pm EST
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-400">
            Â© 2026 Pharmaxa Labs. All rights reserved.
          </p>

          {/* Payment Icons */}
          <div className="flex gap-3 flex-wrap justify-center">
            {['AMEX', 'Apple Pay', 'PayPal', 'G Pay', 'VISA'].map((icon, idx) => (
              <span key={idx} className="text-xs font-semibold text-gray-400">
                {icon}
              </span>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center md:text-right">
            FDA Disclaimer: These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <main className="bg-cream">
      <Header />
      <ScrollingBanner />
      <Hero />
      <Comparison />
      <Symptoms />
      <Science />
      <Ingredients />
      <Timeline />
      <Reviews />
      <Guarantee />
      <Pricing />
      <FAQ />
      <EmailSignup />
      <FinalCTA />
      <Footer />
    </main>
  );
}

