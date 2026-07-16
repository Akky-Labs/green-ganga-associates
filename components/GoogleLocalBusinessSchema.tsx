import React from 'react';

export default function GoogleLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LandscapingService"],
    "@id": "https://greengangaassociates.com/#localbusiness",
    "name": "Green Ganga Associates",
    "description": "Green Ganga Associates — India's leading professional landscaping & gardening company. Specialized in garden design, maintenance, vertical gardens, terrace gardens, farmhouse & resort landscaping, and smart irrigation. Best gardening experts in Lucknow, Prayagraj, Noida, and across Uttar Pradesh.",
    "url": "https://greengangaassociates.com",
    "logo": "https://greengangaassociates.com/favicon.png",
    "image": "https://greengangaassociates.com/hero.png",
    "telephone": "+91-9999177119",
    "hasMap": "https://www.google.com/maps/place/GREEN+GANGA+ASSOCIATES/@21.0680074,82.7525294,5z/data=!3m1!4b1!4m6!3m5!1s0x295298ceaf5f0b1:0xb0319c9793397e68!8m2!3d21.0680074!4d82.7525294!16s%2Fg%2F11z4016ymb",
    "knowsAbout": [
      "Landscaping",
      "Garden Design",
      "Horticulture Consultancy",
      "Vertical Gardens",
      "Terrace Gardening",
      "Smart Irrigation",
      "Lawn Maintenance",
      "Farmhouse Landscaping"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9999177119",
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
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.facebook.com/share/189Q8grrjY/?mibextid=wwXIfr",
      "https://www.instagram.com/green_ganga_associates",
      "https://youtube.com/@greengangaassociates?si=HAQsb45Ml8rhfNuD"
    ],
    "areaServed": [
      {
        "@type": "State",
        "name": "Uttar Pradesh"
      },
      {
        "@type": "City",
        "name": "Lucknow"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "City",
        "name": "Prayagraj"
      }
    ],
    "priceRange": "₹₹"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
