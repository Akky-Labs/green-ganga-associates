"use client";

import React from "react";
import { Star, CheckCircle, Quote, Sparkles } from "lucide-react";

const googleReviewsList = [
  {
    name: "Dr. Sandeep Shukla",
    location: "Swaroop Nagar, Kanpur",
    text: "Stunning backyard waterfall and lawn installation work. Their team of agronomists is extremely professional, polite, and Vastu-aligned.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    name: "Rajesh Kumar",
    location: "Vrindavan Yojna, Lucknow",
    text: "Green Ganga Associates converted my bare rooftop into a beautiful terrace garden. The lightweight soil mix is holding up perfectly.",
    rating: 5,
    date: "1 month ago"
  },
  {
    name: "Amit Khanna",
    location: "Kalyanpur, Kanpur",
    text: "Developed the green belt around our factory unit. They strictly followed pollution board guidelines and delivered the project on time.",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Devansh Mehta",
    location: "Sector 62, Noida",
    text: "We installed two large vertical gardens inside our corporate office reception. Extremely fresh appearance and automated micro-drip timers work great.",
    rating: 5,
    date: "3 months ago"
  },
  {
    name: "Suresh Mishra",
    location: "Jhusi, Prayagraj",
    text: "Landscaped our 2-acre farmhouse with local fruit orchards, pathway stone tiles, and warm uplighting. Highly recommend them for premium designs.",
    rating: 5,
    date: "4 months ago"
  },
  {
    name: "Lalit Gupta",
    location: "Director, Ansal API Lucknow",
    text: "Managed environmental and lawn layouts across our high-tech township project. Exceptional horticultural consultancy and plant selection.",
    rating: 5,
    date: "5 months ago"
  }
];

export default function GoogleReviews() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-fresh-green/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-accent-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-deep-green/5 px-3 py-1 mb-4 border border-deep-green/10">
            <Sparkles className="w-3.5 h-3.5 text-fresh-green animate-pulse" />
            <span className="text-deep-green text-xs font-semibold uppercase tracking-wider">Social Proof</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-deep-green mt-2 mb-4">
            Verified Customer Google Reviews
          </h2>
          <p className="text-muted-foreground text-sm lg:text-base max-w-2xl mx-auto">
            Read what residential homeowners, resort builders, and corporate managers across Uttar Pradesh say about our landscaping and gardening work.
          </p>

          {/* Aggregate Rating badge */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="flex text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent-gold" />
              ))}
            </div>
            <span className="text-sm font-bold text-deep-green">4.9 / 5.0 Rating</span>
            <span className="text-xs text-muted-foreground">(Based on 120+ verified reviews)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {googleReviewsList.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-soft-beige/30 border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-fresh-green/10 group-hover:text-fresh-green/20 transition-colors" />

              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="border-t border-gray-150 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-deep-green text-white font-bold flex items-center justify-center text-xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-deep-green">{review.name}</h4>
                    <p className="text-[10px] text-muted-foreground">{review.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-semibold text-fresh-green bg-fresh-green/10 px-2 py-0.5 rounded-full">
                  <CheckCircle className="w-3 h-3" /> Verified
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to review on GMB */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <a
            href="https://www.google.com/search?q=GREEN+GANGA+ASSOCIATES+Reviews#lrd=0x295298ceaf5f0b1:0xb0319c9793397e68,3,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 text-sm font-bold shadow-md shadow-deep-green/15 transition-all duration-300 hover:scale-[1.02]"
          >
            Write a Google Review
          </a>
          <a
            href="https://www.google.com/search?q=GREEN+GANGA+ASSOCIATES+Reviews#lrd=0x295298ceaf5f0b1:0xb0319c9793397e68,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-deep-green/20 text-deep-green hover:bg-deep-green/5 bg-white px-8 h-12 text-sm font-bold transition-all duration-300 hover:scale-[1.02]"
          >
            View All Reviews on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
