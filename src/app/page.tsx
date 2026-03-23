'use client';

import { useState } from 'react';
import {
  ChevronDown,
  Flame,
  Heart,
  Moon,
  TrendingUp,
  Zap,
  CheckCircle,
  Pill,
  Star,
  Play,
  Glasses,
} from 'lucide-react';

export default function Home() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState('3');
  const [subscribeMode, setSubscribeMode] = useState(true);

  const scrollBannerText = '🎁 HOLIDAY SALE – UP TO $150 OFF';

  return (
    <div className="w-full bg-cream-bg text-dark-brown font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold text-rose-primary">MENOQUIL</div>
          <nav className="hidden md:flex gap-8 text-dark-brown">
            <a href="#symptoms" className="hover:text-rose-primary transition">Symptoms</a>
            <a href="#ingredients" className="hover:text-rose-primary transition">Ingredients</a>
            <a href="#reviews" className="hover:text-rose-primary transition">Reviews</a>
            <a href="#faq" className="hover:text-rose-primary transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 text-dark-brown">
              <Glasses size={20} />
              <span className="text-sm">Need Help?</span>
            </div>
            <button className="bg-rose-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition">
              Order Now
            </button>
          </div>
        </div>
      </header>

      {/* Scrolling Banner */}
      <div className="marquee bg-teal-accent py-3 overflow-hidden">
        <div className="marquee-content">
          <span className="marquee-item text-white font-medium text-sm">{scrollBannerText}</span>
          <span className="marquee-item text-white font-medium text-sm">{scrollBannerText}</span>
          <span className="marquee-item text-white font-medium text-sm">{scrollBannerText}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full h-screen max-h-[600px] md:h-[500px] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=600&fit=crop)',
          }}
        ></div>

        <div className="relative z-20 h-full flex items-center max-w-7xl mx-auto px-4 w-full">
          <div className="w-full md:w-1/2 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Pill size={16} className="text-teal-accent" />
              <span className="text-sm font-medium">Non-Hormonal • Clinically Studied Ingredients</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-4xl md:text-5xl font-bold italic leading-tight mb-4">
              Get Back to Feeling Balanced – Without{' '}
              <span className="text-teal-accent">Hormones.</span>
            </h1>

            {/* Subtext */}
            <p className="text-white/90 mb-6 text-lg">
              97% of women report significant relief from hot flashes, night sweats, and mood changes.
            </p>

            {/* Benefits */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-teal-accent flex-shrink-0" />
                <span className="text-white/80">Works with your body, not against it</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-teal-accent flex-shrink-0" />
                <span className="text-white/80">See results in as little as 2 weeks</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-teal-accent flex-shrink-0" />
                <span className="text-white/80">Backed by clinical research</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-rose-primary text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition">
                Try Risk-Free for 60 Days
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition">
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Side - Product Image */}
          <div className="hidden md:flex w-1/2 items-center justify-center relative">
            <div className="relative">
              <div className="w-48 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl"></div>
              <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                DOCTOR FORMULATED
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rating */}
        <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center">
          <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-full text-white text-sm font-medium">
            ⭐ 97% of Menoquil users would recommend it to a friend!
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16 bg-card-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-rose-primary/10 text-rose-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            The #1 Question We Get
          </div>
          <h2 className="font-serif text-4xl font-bold italic mb-6 text-dark-brown">
            "Is This Basically Hormones?"
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl">
            Not even close. Menoquil uses clinically-proven plant-based ingredients to support your body's natural hormone balance—without synthetic hormones, HRT, or prescription dependency.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Menoquil Card */}
            <div className="border-t-4 border-teal-accent bg-white rounded-lg p-8 shadow-sm">
              <h3 className="font-bold text-xl mb-6 text-dark-brown">MENOQUIL</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-teal-accent flex-shrink-0 mt-1" />
                  <span className="text-text-secondary">Plant-based ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-teal-accent flex-shrink-0 mt-1" />
                  <span className="text-text-secondary">No hormones or synthetics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-teal-accent flex-shrink-0 mt-1" />
                  <span className="text-text-secondary">Clinically studied ingredients</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-teal-accent flex-shrink-0 mt-1" />
                  <span className="text-text-secondary">Works with your body</span>
                </li>
              </ul>
            </div>

            {/* HRT Card */}
            <div className="border-t-4 border-gray-300 bg-gray-50 rounded-lg p-8 shadow-sm opacity-60">
              <h3 className="font-bold text-xl mb-6 text-gray-600">Hormone Therapy (HRT)</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="text-gray-400 flex-shrink-0 mt-1">✕</div>
                  <span className="text-gray-500">Synthetic hormones</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-gray-400 flex-shrink-0 mt-1">✕</div>
                  <span className="text-gray-500">Requires prescription</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-gray-400 flex-shrink-0 mt-1">✕</div>
                  <span className="text-gray-500">Potential side effects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="text-gray-400 flex-shrink-0 mt-1">✕</div>
                  <span className="text-gray-500">Ongoing medical monitoring</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-text-muted italic">
            * These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* Symptoms Section */}
      <section id="symptoms" className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-teal-accent/10 text-teal-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            Targeted Relief
          </div>
          <h2 className="font-serif text-4xl font-bold italic mb-4 text-dark-brown">
            Real Relief for Real Symptoms
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl">
            Menoquil targets the specific symptoms that impact your daily life, with ingredients clinically shown to help.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Hot Flashes */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Flame size={24} className="text-orange-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Hot Flash Relief</h3>
              <p className="text-text-muted text-sm mb-4">
                Cool down naturally with clinically-proven ingredients that support temperature regulation.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 1-2
              </span>
            </div>

            {/* Sleep */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Moon size={24} className="text-indigo-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Restful Nights</h3>
              <p className="text-text-muted text-sm mb-4">
                Wake up refreshed with support for deeper, more restful sleep without interruptions.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 2-4
              </span>
            </div>

            {/* Mental Clarity */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} className="text-blue-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Mental Clarity</h3>
              <p className="text-text-muted text-sm mb-4">
                Stay sharp and focused with stress-relieving ingredients that support cognitive function.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 2-3
              </span>
            </div>

            {/* Emotional Balance */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                <Heart size={24} className="text-pink-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Emotional Balance</h3>
              <p className="text-text-muted text-sm mb-4">
                Feel more like yourself with mood-supporting ingredients backed by clinical research.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 1-3
              </span>
            </div>

            {/* Energy */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <Zap size={24} className="text-yellow-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Natural Energy</h3>
              <p className="text-text-muted text-sm mb-4">
                Reclaim your vitality with sustained energy support throughout the day.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 2-4
              </span>
            </div>

            {/* Metabolism */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TrendingUp size={24} className="text-green-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-dark-brown">Metabolism Support</h3>
              <p className="text-text-muted text-sm mb-4">
                Support healthy metabolism and weight management during menopause transition.
              </p>
              <span className="inline-block bg-teal-accent/10 text-teal-accent px-3 py-1 rounded-full text-xs font-medium">
                Week 3-6
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <button className="bg-rose-primary text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition w-full sm:w-auto">
              Start Feeling Better Today
            </button>
            <div className="flex items-center gap-2 text-teal-accent font-medium">
              <CheckCircle size={20} />
              60-Day Money-Back Guarantee
            </div>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            The Science
          </div>
          <h2 className="font-serif text-4xl font-bold italic mb-4 text-dark-brown">
            Why Menoquil Works With Your Body
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl">
            Every ingredient in Menoquil is chosen for its clinically-proven ability to support your body's natural balance during the menopause transition.
          </p>

          <h3 className="font-bold text-2xl mb-8 text-dark-brown">How Menoquil Helps</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-dark-brown">Natural Comfort Support</h4>
              <p className="text-text-muted text-sm">
                Plant-based adaptogenic herbs help your body adjust to hormonal changes naturally.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-dark-brown">Stress & Sleep Support</h4>
              <p className="text-text-muted text-sm">
                Calming ingredients support relaxation and deeper, more restorative sleep cycles.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-dark-brown">Temperature Balance</h4>
              <p className="text-text-muted text-sm">
                Ingredients clinically shown to help regulate body temperature and reduce hot flashes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-dark-brown">What to Expect Over Time</h4>
              <div className="space-y-3 text-sm text-text-muted">
                <p><strong>Week 1-2:</strong> Initial relief from hot flashes and night sweats</p>
                <p><strong>Week 2-4:</strong> Improved sleep quality and mood stability</p>
                <p><strong>Week 4+:</strong> Enhanced energy, mental clarity, and overall wellness</p>
              </div>
            </div>
            <div className="bg-rose-primary/10 rounded-lg p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="font-serif text-5xl font-bold text-rose-primary mb-2">97%</div>
                <p className="text-dark-brown font-medium">Report Significant Relief Within 30 Days</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section id="ingredients" className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            🧪 Full Ingredient Transparency
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left Column */}
            <div>
              <h2 className="font-serif text-4xl font-bold italic mb-6 text-dark-brown">
                No Proprietary Blends.{' '}
                <span className="text-rose-primary">Every Dose Disclosed.</span>
              </h2>
              <p className="text-text-muted mb-8">
                We believe in complete transparency. You'll know exactly what you're taking and why—no hidden blends, no mystery ingredients. Every ingredient is included at clinically-studied dosages.
              </p>
              <div className="w-48 h-64 bg-gradient-to-br from-purple-300 to-pink-300 rounded-2xl"></div>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="font-bold text-2xl mb-6 text-dark-brown">What's Inside Each Capsule</h3>

              {/* Evidence Bar */}
              <div className="mb-8 space-y-2">
                <p className="text-sm text-text-muted font-medium">Evidence Ratings</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                    Clinically Proven
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    Research Backed
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    Traditional Use
                  </span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-4">
                {[
                  {
                    name: 'KSM-66 Ashwagandha',
                    dosage: '300mg',
                    badge: 'Clinically Proven',
                    desc: 'Reduces stress and supports emotional balance',
                  },
                  {
                    name: 'Black Cohosh',
                    dosage: '200mg',
                    badge: 'Clinically Proven',
                    desc: 'Targets hot flashes and night sweats',
                  },
                  {
                    name: 'Sage Leaf',
                    dosage: '200mg',
                    badge: 'Research Backed',
                    desc: 'Supports temperature regulation',
                  },
                  {
                    name: 'Grape Seed Extract',
                    dosage: '100mg',
                    badge: 'Research Backed',
                    desc: 'Antioxidant and circulation support',
                  },
                  {
                    name: 'Soy Bean Seed',
                    dosage: '100mg',
                    badge: 'Traditional Use',
                    desc: 'Natural isoflavone content',
                  },
                  {
                    name: 'Chaste Tree Fruit',
                    dosage: '40mg',
                    badge: 'Research Backed',
                    desc: 'Supports hormonal balance',
                  },
                ].map((ingredient, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 border border-gray-100">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h4 className="font-bold text-dark-brown">{ingredient.name}</h4>
                        <p className="text-rose-primary font-medium text-sm">{ingredient.dosage}</p>
                      </div>
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium flex-shrink-0">
                        {ingredient.badge}
                      </span>
                    </div>
                    <p className="text-text-muted text-sm">{ingredient.desc}</p>
                  </div>
                ))}
              </div>

              <a href="#" className="text-rose-primary font-medium text-sm hover:underline block mt-6">
                View Complete Ingredient Label →
              </a>

              {/* Research Logos */}
              <div className="mt-8 pt-8 border-t">
                <p className="text-xs text-text-muted font-medium mb-4">Research backed by:</p>
                <div className="flex flex-wrap gap-3">
                  {['NIH', 'PubMed', 'Mayo Clinic', 'Johns Hopkins', 'Cleveland Clinic', 'NAMS'].map((logo) => (
                    <div
                      key={logo}
                      className="bg-gray-100 px-3 py-2 rounded text-xs text-text-muted font-medium"
                    >
                      {logo}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            What To Expect
          </div>
          <h2 className="font-serif text-4xl font-bold italic mb-4 text-dark-brown">
            Your Journey to Relief
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl">
            Most women report noticing improvements within the first 2 weeks, with maximum benefits by week 6+. Individual results may vary.
          </p>

          <div className="relative max-w-3xl">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-rose-primary/30 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {[
                {
                  week: 'Week 1',
                  title: 'Initial Relief Begins',
                  desc: 'Many women notice fewer and less intense hot flashes. Night sweats may start improving.',
                },
                {
                  week: 'Week 2-3',
                  title: 'Sleep Improves',
                  desc: 'Better sleep quality and emotional stability. More energy during the day.',
                },
                {
                  week: 'Week 3-4',
                  title: 'Mental Clarity Returns',
                  desc: 'Brain fog lifts. Mood becomes more stable and positive. Sustained energy levels.',
                },
                {
                  week: 'Week 5-6',
                  title: 'Full Relief Achieved',
                  desc: '97% of women report feeling back to their normal selves. Maximum symptom relief.',
                },
                {
                  week: 'Week 6+',
                  title: 'Sustained Wellness',
                  desc: 'Continued support for long-term balance. Maintenance of all benefits achieved.',
                },
              ].map((item, idx) => (
                <div key={idx} className={`flex gap-4 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="relative flex-shrink-0 w-8 h-8 bg-rose-primary rounded-full border-4 border-gray-50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div className={`flex-1 mb-4 ${idx % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="inline-block bg-rose-primary/10 text-rose-primary px-3 py-1 rounded-full text-xs font-bold mb-2">
                        {item.week}
                      </div>
                      <h3 className="font-bold text-lg text-dark-brown mb-2">{item.title}</h3>
                      <p className="text-text-muted text-sm">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-rose-primary text-white px-8 py-3 rounded-full font-medium hover:bg-pink-600 transition">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-dark-brown text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold italic text-center mb-4">
            Real Women. Real Relief.{' '}
            <span className="text-rose-primary">Real Results.</span>
          </h2>
          <p className="text-white/70 text-center mb-12">Join thousands of women who've transformed their menopause experience</p>

          {/* Video Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="relative bg-gray-700 rounded-lg overflow-hidden h-64 flex items-center justify-center group cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop)`,
                  }}
                ></div>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>
                <Play size={48} className="text-white z-10" />
              </div>
            ))}
          </div>

          {/* Text Reviews */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stars: 5,
                quote:
                  '"I got my life back! No more night sweats ruining my sleep. Menoquil changed everything."',
                author: 'Sarah M.',
                details: '52, Portland, OR',
                tags: ['Hot Flashes', 'Sleep'],
              },
              {
                stars: 5,
                quote:
                  '"Finally feeling like myself again. The mental clarity is amazing and I have real energy."',
                author: 'Jennifer K.',
                details: '48, Austin, TX',
                tags: ['Mood', 'Energy'],
              },
              {
                stars: 5,
                quote:
                  '"Worth every penny. The 60-day guarantee gave me confidence to try it, and I\'m so glad I did."',
                author: 'Michelle D.',
                details: '55, Seattle, WA',
                tags: ['Sleep', 'Overall Relief'],
              },
            ].map((review, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur rounded-lg p-6">
                <div className="flex gap-1 mb-4">
                  {Array(review.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="italic text-white/90 mb-4">{review.quote}</p>
                <p className="font-medium text-white mb-1">{review.author}</p>
                <p className="text-white/70 text-sm mb-4">{review.details}</p>
                <div className="flex flex-wrap gap-2">
                  {review.tags.map((tag, i) => (
                    <span key={i} className="bg-rose-primary/30 text-rose-primary px-2 py-1 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-rose-primary mb-2">97%</div>
              <p className="text-white/70 text-sm">Report Relief</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-rose-primary mb-2">14 Days</div>
              <p className="text-white/70 text-sm">Avg. to See Results</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-rose-primary mb-2">50K+</div>
              <p className="text-white/70 text-sm">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-rose-primary mb-2">4.8/5</div>
              <p className="text-white/70 text-sm">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-cream-bg">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-block bg-rose-primary/10 text-rose-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            60 Day Guarantee
          </div>
          <h2 className="font-serif text-4xl font-bold mb-6 text-dark-brown">
            100% Money-Back Guarantee
          </h2>
          <p className="text-text-muted mb-12 max-w-2xl mx-auto">
            We're confident you'll love Menoquil. If you don't see results within 60 days, return it for a full refund—no questions asked. Your satisfaction is our priority.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '✓', label: 'GMP Certified' },
              { icon: '✓', label: 'Easy Returns' },
              { icon: '✓', label: 'Secure Payment' },
              { icon: '✓', label: 'US Support' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl text-rose-primary mb-2">{item.icon}</div>
                <p className="text-dark-brown font-medium text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-rose-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Limited Time Offer
          </div>
          <h2 className="font-serif text-4xl font-bold mb-2 text-dark-brown">
            Start Your Relief Today
          </h2>
          <p className="text-text-muted mb-8">
            60-day money-back guarantee • Free shipping on all orders
          </p>

          {/* Sale Banner */}
          <div className="bg-teal-accent text-white rounded-lg p-4 mb-8 text-center font-bold">
            SUMMER SALE – UP TO $43 OFF
          </div>

          {/* Quantity Selector */}
          <div className="bg-white rounded-lg p-8 mb-8">
            <p className="text-dark-brown font-bold mb-6">SELECT QUANTITY</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {[
                { qty: '1', label: '1 Bottle', price: '$49', subPrice: '' },
                { qty: '3', label: '3 Bottles', price: '$99', subPrice: 'POPULAR', oldPrice: '$147' },
                { qty: '6', label: '6 Bottles', price: '$159', subPrice: 'MAX SAVINGS', oldPrice: '$294' },
              ].map((option) => (
                <button
                  key={option.qty}
                  onClick={() => setSelectedQuantity(option.qty)}
                  className={`p-4 rounded-lg border-2 transition ${
                    selectedQuantity === option.qty
                      ? 'border-rose-primary bg-rose-primary/5'
                      : 'border-gray-300 hover:border-rose-primary'
                  }`}
                >
                  <p className="font-bold text-dark-brown">{option.label}</p>
                  {option.subPrice && (
                    <p className="text-xs font-medium text-rose-primary mb-2">{option.subPrice}</p>
                  )}
                  <p className="text-lg font-bold text-rose-primary">{option.price}</p>
                  {option.oldPrice && (
                    <p className="text-xs text-text-muted line-through">{option.oldPrice}</p>
                  )}
                </button>
              ))}
            </div>

            {/* Subscribe Toggle */}
            <div className="flex items-center justify-center gap-4 mb-8 p-4 bg-cream-bg rounded-lg">
              <span className={subscribeMode ? 'font-bold text-dark-brown' : 'text-text-muted'}>
                Subscribe & Save
              </span>
              <button
                onClick={() => setSubscribeMode(!subscribeMode)}
                className={`w-12 h-6 rounded-full transition ${
                  subscribeMode ? 'bg-teal-accent' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition transform ${
                    subscribeMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                ></div>
              </button>
              <span className={subscribeMode ? 'text-text-muted' : 'font-bold text-dark-brown'}>
                One-time
              </span>
            </div>

            <button className="w-full bg-rose-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-pink-600 transition mb-4">
              ADD TO CART
            </button>

            {/* Product Thumbnails */}
            <div className="flex justify-center gap-4 mb-8">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-200 rounded-lg cursor-pointer hover:ring-2 ring-rose-primary"
                ></div>
              ))}
            </div>

            {/* Accordion Details */}
            <div className="space-y-2 border-t pt-8">
              {['What to expect', 'Benefits & Ingredients', 'Shipping & Returns', 'More Info'].map((item, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    setExpandedFaq(expandedFaq === idx ? null : idx)
                  }
                  className="w-full flex justify-between items-center p-4 bg-cream-bg rounded-lg hover:bg-gray-200 transition"
                >
                  <span className="font-medium text-dark-brown">{item}</span>
                  <ChevronDown
                    size={20}
                    className={`text-rose-primary transition ${
                      expandedFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-cream-bg">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Common Questions
          </div>
          <h2 className="font-serif text-4xl font-bold italic mb-12 text-dark-brown">
            Questions Women Actually Ask
          </h2>

          <div className="space-y-3">
            {[
              {
                q: 'Is Menoquil safe to take with other supplements?',
                a: 'Menoquil is formulated with natural, well-studied ingredients. However, we recommend consulting your healthcare provider if you\'re taking other medications or supplements.',
              },
              {
                q: 'When will I start seeing results?',
                a: 'Most women report noticing improvements within 1-2 weeks. Maximum benefits are typically seen within 4-6 weeks of consistent use.',
              },
              {
                q: 'Can I take Menoquil if I\'m on HRT?',
                a: 'We recommend consulting with your healthcare provider before combining Menoquil with other treatments to ensure compatibility.',
              },
              {
                q: 'What if I don\'t see results in 60 days?',
                a: 'We offer a full 60-day money-back guarantee, no questions asked. If you\'re not completely satisfied, simply return it for a full refund.',
              },
              {
                q: 'Are there any side effects?',
                a: 'Menoquil uses natural, clinically-studied ingredients with a strong safety profile. Most users experience no side effects. Some may notice minor changes in digestion as the body adjusts.',
              },
            ].map((item, idx) => (
              <button
                key={idx}
                onClick={() =>
                  setExpandedFaq(expandedFaq === idx + 100 ? null : idx + 100)
                }
                className="w-full text-left bg-white rounded-lg p-6 hover:shadow-md transition"
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className="font-bold text-dark-brown pr-4">{item.q}</h3>
                  <ChevronDown
                    size={20}
                    className={`text-rose-primary flex-shrink-0 transition ${
                      expandedFaq === idx + 100 ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {expandedFaq === idx + 100 && (
                  <p className="text-text-muted mt-4 text-sm">{item.a}</p>
                )}
              </button>
            ))}
          </div>

          <div className="mt-12 text-center p-8 bg-card-bg rounded-lg">
            <p className="text-dark-brown mb-4 font-medium">Still Have Questions?</p>
            <a href="#" className="text-rose-primary font-bold hover:underline">
              Contact Our Support Team →
            </a>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 bg-gradient-to-r from-teal-accent to-cyan-500">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl font-bold italic mb-4 text-white">
            Want 20% Off Your First Order?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
            />
            <button className="bg-dark-brown text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition">
              Get My 20% Off
            </button>
          </div>
          <p className="text-white/80 text-xs">
            We'll never share your email. Privacy guaranteed.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-dark-brown text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-4xl font-bold italic mb-8">
            Ready to Feel Like Yourself Again?
          </h2>
          <button className="bg-rose-primary text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-pink-600 transition mb-12">
            Order Menoquil Now
          </button>

          <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-white/20">
            <div className="text-center">
              <p className="text-white/70 text-sm">✓ GMP Certified</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm">✓ Made in USA</p>
            </div>
            <div className="text-center">
              <p className="text-white/70 text-sm">✓ Third-Party Tested</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white/70">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-serif font-bold text-white mb-2">Pharmaxa Labs</p>
              <p className="text-xs">
                Dedicated to creating effective, natural solutions for women's health and wellness.
              </p>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Quick Links</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Shipping Info</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Resources</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition">Research</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">FAQs</a></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white mb-4">Need Help?</p>
              <ul className="space-y-2 text-xs">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {['Visa', 'Mastercard', 'Amex', 'PayPal'].map((method) => (
                <div key={method} className="bg-white/10 px-3 py-1 rounded text-xs">
                  {method}
                </div>
              ))}
            </div>

            <p className="text-xs text-center text-white/50 mb-4">
              These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat,
              cure, or prevent any disease.
            </p>

            <p className="text-xs text-center text-white/50">
              © 2024 Pharmaxa Labs. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
