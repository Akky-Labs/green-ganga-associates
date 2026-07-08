import React from 'react';

export default function GoogleLocalBusinessSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LandscapingService",
    "name": "Green Ganga Associates",
    "description": "Green Ganga Associates — India's leading professional landscaping & gardening company. Specialized in garden design, maintenance, vertical gardens, terrace gardens, farmhouse & resort landscaping, and smart irrigation. Best gardening experts in Lucknow, Prayagraj, Noida, and across Uttar Pradesh.",
    "url": "https://greengangaassociates.com",
    "logo": "https://greengangaassociates.com/favicon.png",
    "image": "https://greengangaassociates.com/hero.png",
    "telephone": "+91-9999177119",
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
      "https://www.facebook.com/greenganga",
      "https://www.instagram.com/green_ganga_associates",
      "https://www.linkedin.com/company/greenganga"
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
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "100"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
