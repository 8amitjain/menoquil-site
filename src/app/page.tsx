'use client'

const HERO_BG = "data:image/jpeg;base64,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"
const PRODUCT_BOTTLE = "data:image/jpeg;base64,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"
const DOCTOR_BADGE = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDACAWGBwYFCAcGhwkIiAmMFA0MCwsMGJGSjpQdGZ6eHJmcG6AkLicgIiuim5woNqirr7EztDOfJri8uDI8LjKzsb/2wBDASIkJDAqMF40NF7GhHCExsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsbGxsb/wAARCAA8ADwDASIAAhEBAxEB/8QAGgAAAgMBAQAAAAAAAAAAAAAABAUAAgMGAf/EAC4QAAICAQMCBAUEAgMAAAAAAAECAxEABBIhEzEFIkFRYXGBobEUMkLwUmKRkuH/xAAYAQADAQEAAAAAAAAAAAAAAAAIAgMABP/EABwRAAMBAAMBAQAAAAAAAAAAAAABAhEDITESQf/aAAwDAQACEQMRAD8A5/N9Lo5dWWEQB2izZrLaHSnVTqhDBP5MB2x+ojj06l76CAKorl/QE1+Mnd50hktBYfC9Mu8BWnDAAE+UD5HDV0gskQacErsPc8e2XOrgVFcudrX2U8Ad79qzT9VCspj3EsL7KTZq6Hua9MjtMboGfw6FtnU0iEIKHTavse+K9R4PQH6Zy5AO8P5SPpjpvEIOmH3NtN15D2Hc/L45lJNDLN09xEi9mA7cXwfl6YVVIGacrkxx4lpusrSUesgA2qOGF98T9u+XmvpCtYPvCYANItbwZj5ge1D2+fb64x1cbtp6RCxDKaHsGBzPQgFYakMgEQpiKvn/AMzAQyqsRKvZJIoHhtwq/peQ9rRvEevpp9jt0WJlWVdoI8u4gi8Ih6sM7oYiVZy+++KofexgVahFBVX3B9wHPIo/36DKFZli2VISE78+isPzWFmRdopV08QEZZhE8ZArgntkSGRdUHIJQN29B5QL/IySs8k6kKxj2bTdjuD6fQZjsYIRta+kvobv1xdYwZLxUnqp5+Xr/fhiHWwiHVOi7qHYt649iU/pSGBHDUD3rmvtgGv6ZmUvqnjOweUKTWHiePAV4NPD5d8OnkLo5KFG28Ue4H2zaeVUei8nIvhsS+D6oBG0zukanzIx77rFY4EgceZQGHDD2Oa18sC7MDqoyL3y18WyryoATukoGv3f32y0/VsdILXreZVP7L9sToc8MyC7aTj/AGy3VQesvv8Auz1Vno8L244GFBR7D/jA8RjNxUBoklhQs++KPE9S6aspHJGVVQP2g18MaTzoimQsqql7Nx4Zqzm5pDNK0jAAsbNChleKf1i0yqsVYMvBBsY40mvE+xJGInN+ahRHscTZMtUqhE8OmEvFuKH+Q5B+uWWSM/zX/sMQafWTwlArnap4U9sMj18zQI7LGWMu02vpnPXFhRUNRLHdBgx9l5P2ymonEcTPKdiLVqD5jf4xVqvEdQGmiVgqh6BUUQMAlkeaQvIxZj3Jxp4v0DoJ1+tbVOVU1Cp8i0BWB5MmXSSWImf/2Q=="

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
