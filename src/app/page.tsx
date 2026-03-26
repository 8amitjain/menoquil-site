'use client'

const HERO_BG = "/images/hero-bg.jpg"
const PRODUCT_BOTTLE = "/images/product-bottle.png"
const DOCTOR_BADGE = "/images/doctor-badge.png"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 py-4">
          <a href="#" className="text-rose-primary font-serif text-[28px] font-bold tracking-tight leading-none">
            MENOQUIL<sup className="text-[10px] relative -top-3">&trade;</sup>
          </a>
          <nav className="hidden md:flex items-center gap-10">
            <a href="#symptoms" className="text-dark-brown text-[15px] font-medium hover:text-rose-primary transition-colors">Symptoms</a>
            <a href="#ingredients" className="text-dark-brown text-[15px] font-medium hover:text-rose-primary transition-colors">Ingredients</a>
            <a href="#reviews" className="text-dark-brown text-[15px] font-medium hover:text-rose-primary transition-colors">Reviews</a>
            <a href="#faq" className="text-dark-brown text-[15px] font-medium hover:text-rose-primary transition-colors">FAQ</a>
          </nav>
          <div className="flex items-center gap-5">
            <a href="#" className="hidden md:flex items-center gap-2 text-dark-brown text-[15px] font-medium hover:text-rose-primary transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              Need Help?
            </a>
            <a href="#pricing" className="bg-rose-primary hover:bg-[#c4395f] text-white text-[14px] font-semibold px-6 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg">
              Order Now
            </a>
          </div>
        </div>
      </header>

      {/* Announcement Bar */}
      <div className="marquee bg-teal-accent">
        <div className="marquee-content py-[10px]">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} className="marquee-item text-white text-[13px] font-semibold tracking-wide px-8">
              🎁 HOLIDAY SALE — UP TO $150 OFF
            </span>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full min-h-[680px] overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Woman relaxing on couch" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/35 to-black/10" />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 py-16 md:py-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-16">
            <div className="flex-1 max-w-[640px]">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-7">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span className="text-white text-[13px] font-medium tracking-wide">Non-Hormonal • Clinically Studied Ingredients</span>
              </div>
              <h1 className="font-serif text-white text-[44px] md:text-[52px] leading-[1.12] font-bold mb-6">
                Get Back to Feeling <br className="hidden md:block" />
                Balanced — <span className="italic text-teal-accent">Without</span><br />
                <span className="italic text-teal-accent">Hormones.</span>
              </h1>
              <p className="text-white/80 text-[16px] md:text-[17px] leading-relaxed mb-7 max-w-[520px]">
                97% of women report significant relief from hot flashes, night sweats, and mood changes within 30 days. Science-backed. Doctor-recommended.
              </p>
              <ul className="space-y-3 mb-8">
                {["Reduces hot flashes & night sweats", "Supports restful, uninterrupted sleep", "Eases mood swings & irritability"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3FA69E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    <span className="text-white/90 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <a href="#pricing" className="bg-rose-primary hover:bg-[#c4395f] text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Try Risk-Free for 60 Days
                </a>
                <a href="#science" className="border-2 border-white/40 hover:border-white/70 text-white text-[15px] font-semibold px-8 py-3.5 rounded-full transition-all hover:bg-white/10">
                  See How It Works
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#facc15" stroke="#facc15" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  ))}
                </div>
                <span className="text-white/80 text-[13px] font-medium">97% of Menoquil users would recommend it to a friend!</span>
              </div>
            </div>
            <div className="relative flex-shrink-0 hidden lg:block">
              <div className="relative bg-white rounded-[20px] shadow-2xl p-6 w-[320px]">
                <div className="relative w-full flex justify-center">
                  <img src={PRODUCT_BOTTLE} alt="Menoquil Bottle" width={220} height={440} className="object-contain drop-shadow-lg" />
                </div>
              </div>
              <div className="absolute -top-4 -right-6 w-[120px] h-[120px]">
                <img src={DOCTOR_BADGE} alt="Doctor Formulated Badge" width={120} height={120} className="drop-shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-cream-bg py-20 md:py-28">
        <div className="max-w-[1100px] mx-auto px-8">
          <div className="text-center mb-4">
            <span className="inline-flex items-center gap-2 border border-gray-300 text-text-muted text-[13px] font-medium px-5 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              The #1 Question We Get
            </span>
          </div>
          <h2 className="font-serif text-dark-brown text-[36px] md:text-[42px] font-bold text-center mb-5 leading-tight">
            “Is This Basically Hormones?”
          </h2>
          <p className="text-text-muted text-[16px] md:text-[17px] leading-relaxed text-center max-w-[700px] mx-auto mb-14">
            No. Menoquil contains zero estrogen, progesterone, or any hormones. It’s a plant-based formula safe for women who can’t or won’t take HRT.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Menoquil Card */}
            <div className="bg-gradient-to-br from-[#e0faf5] to-[#ccf7ef] border-t-4 border-teal-accent rounded-[20px] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-teal-accent/20 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3FA69E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <h3 className="text-dark-brown text-[20px] font-bold tracking-tight">MENOQUIL<sup className="text-[9px]">&trade;</sup></h3>
              </div>
              <ul className="space-y-5">
                {["100% hormone-free formula", "No prescription required", "Safe with most medications", "No increased cancer risk", "Plant-based ingredients", "No blood clot concerns"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-teal-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3FA69E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-dark-brown text-[15px] leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* HRT Card */}
            <div className="bg-[#f5f0ed] border-t-4 border-gray-300 rounded-[20px] p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-8 h-8 rounded-full bg-gray-300/40 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                </div>
                <h3 className="text-text-muted text-[20px] font-bold tracking-tight">Hormone Therapy (HRT)</h3>
              </div>
              <ul className="space-y-5">
                {["Contains estrogen/progesterone", "Requires prescription & monitoring", "Drug interactions possible", "Increased risk concerns for some", "Synthetic hormones", "Blood clot risk for some women"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-gray-300/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    </div>
                    <span className="text-text-muted text-[15px] leading-snug font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-text-muted/70 text-[12px] leading-relaxed text-center max-w-[800px] mx-auto">
            <strong className="text-text-muted">Important:</strong> Menoquil is not a replacement for hormone therapy if prescribed by your doctor. Always consult your healthcare provider before starting any supplement, especially if you have a history of breast cancer or are taking other medications.
          </p>
        </div>
      </section>
    </main>
  )
}
