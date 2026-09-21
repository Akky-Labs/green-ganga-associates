import React from 'react';

export default function GoogleLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingService", "ProfessionalService"],
    "@id": "https://www.greengangaassociates.com/#localbusiness",
    "name": "Green Ganga Associates",
    "alternateName": ["Green Ganga Landscaping", "Green Ganga Gardening Services"],
    "description": "Green Ganga Associates — India's premier professional landscaping & gardening firm. Specializing in luxury garden design, maintenance, vertical green walls, terrace gardens, farmhouse & resort landscaping, commercial landscaping, and smart drip irrigation across Lucknow, Uttar Pradesh, Delhi NCR, and 8+ states nationwide.",
    "url": "https://www.greengangaassociates.com",
    "logo": "https://www.greengangaassociates.com/favicon.png",
    "image": [
      "https://www.greengangaassociates.com/images/pan-india-expansion-banner.jpg",
      "https://www.greengangaassociates.com/hero.png"
    ],
    "telephone": "+91-9129177119",
    "hasMap": "https://www.google.com/maps/place/GREEN+GANGA+ASSOCIATES/@21.0680074,82.7525294,5z/data=!3m1!4b1!4m6!3m5!1s0x295298ceaf5f0b1:0xb0319c9793397e68!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11z4016ymb",
    "knowsAbout": [
      "Landscape Architecture & Planning",
      "Garden Design & Development",
      "Horticulture Consultancy",
      "Vertical Green Wall Installation",
      "Terrace & Rooftop Garden Design",
      "Smart Drip & Sprinkler Irrigation",
      "Lawn Turf & Grass Installation",
      "Farmhouse & Resort Landscaping",
      "Industrial & Commercial Greening",
      "Plantation according to Vastu",
      "Organic Kitchen Gardening"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9129177119",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vrindavan Yojana, Sector 5B",
      "addressLocality": "Lucknow",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "226029",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.7865,
      "longitude": 80.9632
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/189Q8grrjY/?mibextid=wwXIfr",
      "https://www.instagram.com/green_ganga_associates",
      "https://youtube.com/@greengangaassociates?si=HAQsb45Ml8rhfNuD"
    ],
    "areaServed": [
      { "@type": "State", "name": "Uttar Pradesh" },
      { "@type": "State", "name": "Delhi NCR" },
      { "@type": "State", "name": "Rajasthan" },
      { "@type": "State", "name": "Gujarat" },
      { "@type": "State", "name": "Maharashtra" },
      { "@type": "State", "name": "Goa" },
      { "@type": "State", "name": "Karnataka" },
      { "@type": "State", "name": "Tamil Nadu" },
      { "@type": "State", "name": "Bihar" },
      { "@type": "State", "name": "Jharkhand" },
      { "@type": "State", "name": "Odisha" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Prayagraj" },
      { "@type": "City", "name": "Kanpur" },
      { "@type": "City", "name": "Varanasi" }
    ],
    "priceRange": "₹₹ - ₹₹₹₹"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
