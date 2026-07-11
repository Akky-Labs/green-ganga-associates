import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Leaf, CheckCircle2, ArrowRight, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

// List of all 13 services
const servicesDetails: Record<string, {
  title: string;
  description: string;
  longDesc: string;
  image: string;
  features: string[];
  faqs: { question: string; answer: string }[];
}> = {
  "landscaping": {
    title: "Landscaping Services",
    description: "Professional landscape design, development, and environmental enhancement services in Lucknow, Noida, and across UP.",
    longDesc: "Transform your outdoor property into an inspiring natural retreat. Green Ganga Associates has over 25 years of experience in grading, turf installation, plantation layout, masonry, and architectural garden features. We combine soil science, botany, and creative design to construct sustainable, low-maintenance landscapes that grow in value year after year.",
    image: "/gallery/design-development.jpeg",
    features: [
      "Custom 2D/3D landscape planning and site analysis",
      "Soil grading, site clearance, and organic fertilization",
      "Lawn turfing, flower bed preparation, and evergreen shrub planting",
      "Hardscape integration (walkways, stone walls, and gravel pathways)"
    ],
    faqs: [
      { question: "How is the landscaping design finalized?", answer: "We visit the site, measure the layout, test the soil, and discuss your ideas. Our consultants then present a detailed layout plan before execution." },
      { question: "Does landscaping require constant irrigation?", answer: "Not necessarily. We select local drought-resistant plants and install smart watering systems to keep water usage highly efficient." }
    ]
  },
  "garden-design": {
    title: "Garden Design",
    description: "Creative botanical layout design and landscape architecture tailored for Lucknow residences, cafes, and hotels.",
    longDesc: "A great garden starts with an outstanding layout plan. We design custom gardens that balance colors, heights, and plant varieties. Whether you prefer a Japanese Zen garden, a traditional English rose garden, or a modern minimalist patio garden, our qualified horticulturists select the perfect plant species based on soil type, sunlight orientation, and seasonal bloom cycles.",
    image: "/gallery/design-development.jpeg",
    features: [
      "Sunlight and shade mapping for optimal plant placement",
      "Symmetrical flower bed layouts and ornamental shrub arrangements",
      "Selection of aromatic, flowering, and butterfly-attracting species",
      "Integration of central seating areas, arches, and decorative borders"
    ],
    faqs: [
      { question: "Can you design a low-maintenance garden?", answer: "Yes, we specialize in low-maintenance garden designs utilizing evergreen shrubs, mulch beds, and automated watering." },
      { question: "Do you design according to Vastu?", answer: "Yes, we specialize in Vastu Shastra plantation layout planning, placing plants in their ideal directional coordinates for positive energy." }
    ]
  },
  "garden-maintenance": {
    title: "Garden Maintenance",
    description: "Regular horticulture care, pruning, pest control, and seasonal weeding services across Uttar Pradesh.",
    longDesc: "To maintain its original lush appearance, a garden requires regular, expert attention. Green Ganga Associates provides periodic maintenance packages, including professional pruning, organic weeding, lawn trimming, pest prevention, and root soil treatments. Our certified field associates ensure your plants stay healthy, hydrated, and vibrant in every season.",
    image: "/gallery/maintain-care.jpeg",
    features: [
      "Weekly or bi-weekly scheduled visits by certified field staff",
      "Seasonal flower replacement and regular lawn mowing",
      "Organic pest control and plant health monitoring",
      "Soil aeration, mulching, and eco-friendly compost application"
    ],
    faqs: [
      { question: "Do you offer customizable maintenance packages?", answer: "Yes, we offer weekly, bi-weekly, and monthly care schedules customized to your garden's size and plant variety." },
      { question: "Is pest control safe for domestic pets?", answer: "Absolutely. We prioritize organic neem-based pest control methods and eco-safe solutions that pose zero threat to pets or family members." }
    ]
  },
  "lawn-maintenance": {
    title: "Lawn Maintenance & Turfing",
    description: "Premium lawn grass turfing, regular mowing, chemical-free weeding, and aeration services in UP.",
    longDesc: "A lush, velvety green lawn is the centerpiece of a premium landscape. We provide professional turf installation (Selection No. 1, Mexican Grass, Bermuda Grass) and regular upkeep. Our services include dethatching, core aeration to prevent soil compaction, fertilizer application, and systematic weed control, keeping your lawn healthy and weed-free.",
    image: "/gallery/maintain-care.jpeg",
    features: [
      "Fresh turf selection and precise roller grass laying",
      "Regular precision mowing and edge definition",
      "Dethatching and core soil aeration for oxygen flow",
      "Selective weed eradication and customized turf fertilization"
    ],
    faqs: [
      { question: "Which grass variety is best for Lucknow?", answer: "Selection No. 1 and Bermuda Grass are excellent for Lucknow due to their high heat tolerance and durability." },
      { question: "How often should a lawn be mowed?", answer: "During active growing seasons (monsoon/summer), we recommend precision mowing every 7 to 10 days." }
    ]
  },
  "terrace-garden": {
    title: "Terrace Garden Setup",
    description: "Transform your rooftop or balcony into a green oasis with modern lightweight pots, planters, and organic soil mixes.",
    longDesc: "Maximize your urban living space by building a beautiful garden on your rooftop. Green Ganga Associates designs lightweight terrace gardens that protect your building structure. We use premium waterproofing layers, lightweight organic coco-peat mixes, and durable planters. Grow fresh organic vegetables, herbs, and decorative flowers right on your roof.",
    image: "/gallery/Vertical-Terrace .jpeg",
    features: [
      "Waterproofing check and drainage cell layer installation",
      "Use of lightweight organic coco-peat soil mixes to reduce roof load",
      "Vertical wall planting and hanging planter arrangements",
      "Drip irrigation integration for effortless daily watering"
    ],
    faqs: [
      { question: "Will a terrace garden cause dampness on my roof?", answer: "No. We lay a professional multi-layered waterproofing membrane and drainage cells to ensure water flows safely into the drain pipes." },
      { question: "Can we grow fruits and vegetables on the terrace?", answer: "Yes, utilizing deep root containers, you can easily grow organic lemons, guavas, tomatoes, green chilies, and leafy vegetables." }
    ]
  },
  "vertical-garden": {
    title: "Vertical Garden Design",
    description: "Modern vertical green wall installations for homes, hotels, and cafes in Lucknow and Noida.",
    longDesc: "Vertical gardens, or green walls, are the perfect solution to introduce nature into compact urban spaces. We install high-quality vertical panel structures with automatic drip lines. Our team selects durable indoor or outdoor plant varieties (like Syngonium, Ferns, Philodendrons) that thrive vertically, improving indoor air quality and creating a stunning design feature.",
    image: "/gallery/Vertical-Terrace .jpeg",
    features: [
      "Sturdy anti-corrosive panel framing and secure wall mounting",
      "Automatic drip irrigation piping with digital cycle timers",
      "Carefully chosen indoor/outdoor green wall foliage plant species",
      "Regular replacement and panel maintenance schedules"
    ],
    faqs: [
      { question: "How do vertical gardens receive water?", answer: "We install a micro-drip tube network behind the panels connected to an automatic timer that waters the plants daily." },
      { question: "Do green walls attract insects?", answer: "With systematic pruning, organic pest control, and proper moisture drainage, insects are kept to a minimum." }
    ]
  },
  "commercial-landscaping": {
    title: "Commercial Landscaping",
    description: "Large-scale landscape architecture and green belt management for hotels, offices, and institutions.",
    longDesc: "Enhance your company's branding and environment with corporate landscaping. We design and manage large-scale green projects for corporate offices, resort campuses, universities, and industrial factories. Our designs focus on durability, safety standards, and sustainable greenery that reduces urban heat and improves team productivity.",
    image: "/project-industrial.png",
    features: [
      "Institutional green belt planning and factory site landscaping",
      "Low-maintenance corporate layouts and aesthetic entrance designs",
      "Compliance with government pollution control green standards",
      "Full-scale commercial garden maintenance and labor management"
    ],
    faqs: [
      { question: "Do you supply project reports for government compliance?", answer: "Yes, our Ph.D. consultants provide comprehensive environmental project reports and layout designs for factory pollution board clearances." },
      { question: "Can you manage landscapes across multiple corporate sites?", answer: "Yes, we handle site maintenance and landscaping across multiple cities in Northern India." }
    ]
  },
  "residential-landscaping": {
    title: "Residential Landscaping",
    description: "Premium villa garden designs, lawn developments, and farmhouse landscape setups in UP.",
    longDesc: "Make your home garden your favorite room in the house. We design premium residential landscapes that combine family-friendly lawns, elegant flower borders, private gazebos, and relaxing water features. Our team works closely with home developers and architects to build gardens that perfectly match your villa's architectural design.",
    image: "/project-residential.png",
    features: [
      "Private home garden layouts and kid-friendly lawn spaces",
      "Vastu-based plant placement for positive home energy",
      "Integration of natural stone paths, patios, and border tiles",
      "Residential drip irrigation and landscape lighting"
    ],
    faqs: [
      { question: "How long does a residential garden setup take?", answer: "Depending on the complexity and size, typical residential setups are completed within 2 to 3 weeks." },
      { question: "Do you assist in choosing pots and outdoor furniture?", answer: "Yes, we consult on the selection of durable outdoor planters, stone benches, arches, and garden decor." }
    ]
  },
  "plant-supply": {
    title: "Plant Supply & Nursery",
    description: "Wholesale supply of healthy ornamental plants, palm trees, lawn grass, and organic compost in UP.",
    longDesc: "Get premium quality plants directly from our nursery. Green Ganga Associates supplies wholesale plants, mature palm trees, seasonal flowers, and grass turf for large-scale landscaping. All our plants are acclimatized to the Uttar Pradesh climate, ensuring high survival rates upon replanting.",
    image: "/hero.png",
    features: [
      "Wide selection of ornamental, indoor, and outdoor plants",
      "Mature tree transplanting and site supply logistics",
      "Acclimatized plants to ensure high survival rates",
      "Supply of organic vermicompost, coco-peat, and topsoil"
    ],
    faqs: [
      { question: "Do you deliver plants directly to the site?", answer: "Yes, we handle safe transportation and loading of plants directly to your property in Lucknow or surrounding areas." },
      { question: "Can we visit your nursery to choose plants?", answer: "Yes, you can schedule a visit to choose specific palm trees, shrubs, or foliage for your project." }
    ]
  },
  "irrigation": {
    title: "Smart Irrigation Systems",
    description: "Eco-friendly automatic sprinklers and drip irrigation setups for water conservation in Lucknow.",
    longDesc: "Save water and time with our automated smart watering systems. We install premium drip networks for vertical/terrace gardens and automatic pop-up sprinklers for large lawns. Our systems use digital timers to water your garden at optimal times, ensuring plants stay healthy while cutting water wastage by up to 50%.",
    image: "/gallery/water-management.jpeg",
    features: [
      "Automatic pop-up sprinklers for complete lawn coverage",
      "Micro-drip lines for targeted root watering and minimal waste",
      "Digital watering timers and automatic solenoid valves",
      "Eco-friendly rain sensors to halt watering during rain"
    ],
    faqs: [
      { question: "How much water does a drip system save?", answer: "A well-designed drip irrigation system reduces water usage by 40% to 60% compared to traditional hose watering." },
      { question: "What happens to the system during power cuts?", answer: "We install battery-backed digital controller timers that maintain their schedule and run independently of power grid cuts." }
    ]
  },
  "artificial-grass": {
    title: "Artificial Grass Installation",
    description: "Premium evergreen synthetic turf setups for balconies, terraces, and commercial play areas.",
    longDesc: "Enjoy a bright green lawn year-round without watering, mowing, or fertilizing. Green Ganga Associates installs premium, UV-resistant artificial grass turf. Perfect for compact apartment balconies, rooftops, cafes, and indoor play zones. Our synthetic grass has excellent drainage, feels natural, and lasts for years under high foot traffic.",
    image: "/gallery/WhatsApp Image 2026-03-27 at 11.57.51 AM (1).jpeg",
    features: [
      "High-density, UV-stabilized synthetic fibers that won't fade",
      "Safe and non-toxic materials, perfect for children and pets",
      "Perforated backing for quick rain and washing drainage",
      "Professional base preparation to prevent surface wrinkles"
    ],
    faqs: [
      { question: "Does artificial grass get hot in Lucknow summers?", answer: "Synthetic turf can absorb heat in direct noon sunlight, but it cools down quickly when lightly sprinkled with water." },
      { question: "How is artificial grass cleaned?", answer: "Cleaning is easy. You can simply sweep away dry debris or wash it with water and mild detergent for dust." }
    ]
  },
  "water-features": {
    title: "Garden Water Features",
    description: "Elegant outdoor fountains, natural stone waterfalls, and fish ponds for landscape decoration.",
    longDesc: "Introduce the soothing sound of flowing water into your garden. We build custom water features, including natural stone waterfalls, modern glass sheet fountains, and koi fish ponds. Our installations utilize energy-efficient recirculating water pumps, advanced filtration systems, and underwater LED lights to create a peaceful evening atmosphere.",
    image: "/gallery/maintain-care.jpeg",
    features: [
      "Natural rock waterfalls and modern bubble sheet fountains",
      "Koi ponds with mechanical and biological bio-filters",
      "Underwater low-voltage LED color-changing lighting",
      "Recirculating water pump setups with low power consumption"
    ],
    faqs: [
      { question: "Do water features require daily water refilling?", answer: "No. Our systems use recirculating pumps. You only need to top up water lost due to natural evaporation occasionally." },
      { question: "How do you prevent mosquito breeding in ponds?", answer: "We install biological bio-filters that keep the water moving continuously and stock ponds with mosquito-eating fish like Gambusia or Guppies." }
    ]
  },
  "garden-lighting": {
    title: "Landscape Lighting Design",
    description: "Professional outdoor illumination, uplighting, pathway LEDs, and smart garden lights in Lucknow.",
    longDesc: "Bring your landscape to life after sunset. We design professional outdoor lighting schemes that highlight mature trees, pathways, and water features. Using weather-resistant, low-voltage LED uplights, pathway spike lights, and smart automated controllers, we ensure your garden is safe, secure, and visually stunning at night.",
    image: "/gallery/WhatsApp Image 2026-03-27 at 11.57.51 AM (1).jpeg",
    features: [
      "Warm LED uplighting for feature trees and statues",
      "Low-voltage pathway spike lights for safety and visual guidance",
      "Waterproof outdoor cabling and automated light sensors",
      "Smart phone-controlled outdoor lighting systems"
    ],
    faqs: [
      { question: "Are outdoor garden lights safe during the monsoon?", answer: "Yes, we install weather-resistant fixtures with IP65/IP67 waterproof ratings and use low-voltage transformers to ensure safety." },
      { question: "Do LED garden lights consume a lot of electricity?", answer: "No, we use low-voltage LEDs that draw minimal power, keeping your monthly electric bill low." }
    ]
  }
};

// Generates static params for all 13 services to support SSG output export
export async function generateStaticParams() {
  return Object.keys(servicesDetails).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesDetails[resolvedParams.slug] || servicesDetails["landscaping"];
  const title = `Top-Rated ${service.title} in Lucknow | Green Ganga Associates`;
  const description = `Transform your space with expert ${service.title.toLowerCase()} in Lucknow & UP. Affordable custom layouts, Vastu plants & site maintenance. Book now!`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://greengangaassociates.com/services/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      images: [{ url: service.image }]
    }
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = servicesDetails[resolvedParams.slug];

  if (!service) {
    notFound();
  }

  // Schema for structured JSON-LD Service Data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://greengangaassociates.com/services/${resolvedParams.slug}#service`,
    "name": service.title,
    "serviceType": service.title,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Green Ganga Associates",
      "image": "https://greengangaassociates.com/hero.png",
      "telephone": "+91-9999177119",
      "url": "https://greengangaassociates.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Vrindavan Yojana, Sector 5B",
        "addressLocality": "Lucknow",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "226029",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "State", "name": "Uttar Pradesh" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Prayagraj" }
    ],
    "description": service.description
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Services", item: "https://greengangaassociates.com/services" },
          { name: service.title, item: `https://greengangaassociates.com/services/${resolvedParams.slug}` }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={`${service.title} by Green Ganga Associates`}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-sm font-semibold uppercase tracking-wider">Our Services</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              {service.title}
            </h1>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICE DETAILS ─── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Description and list */}
            <div>
              <div className="section-decorator">
                <span className="text-sm font-semibold text-fresh-green uppercase tracking-widest">Service Overview</span>
              </div>
              <h2 className="text-3xl font-bold text-deep-green mt-4 mb-6">
                Premium {service.title} Solutions
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.longDesc}
              </p>

              <div className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-fresh-green shrink-0 mt-0.5" />
                    <span className="text-base text-gray-800 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="rounded-full bg-deep-green hover:bg-dark-green text-white px-8 h-12 font-semibold shadow-lg shadow-deep-green/20">
                    Request Quote Today
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919999177119">
                  <Button variant="outline" className="rounded-full border-deep-green/20 text-deep-green hover:bg-deep-green/5 px-8 h-12 font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Experts
                  </Button>
                </a>
              </div>
            </div>

            {/* Visual side */}
            <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 shadow-deep-green/10">
              <Image
                src={service.image}
                alt={`${service.title} execution by Green Ganga`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-deep-green text-white rounded-2xl p-6 shadow-xl">
                <Leaf className="w-8 h-8 text-fresh-green mb-1" />
                <span className="text-white/70 text-sm block">Premium Plant Quality</span>
                <span className="text-white text-sm font-semibold">Expert Horticulturists</span>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── LOCAL SERVICE FAQS ─── */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-deep-green/5 px-3 py-1 mb-4 border border-deep-green/10">
              <Sparkles className="w-3.5 h-3.5 text-fresh-green animate-pulse" />
              <span className="text-deep-green text-xs font-semibold uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-deep-green mt-2 mb-4">
              Common Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-soft-beige/30 border border-gray-100/50">
                <h4 className="text-base font-bold text-deep-green mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground text-sm mb-4">Have more questions about our services?</p>
            <Link href="/contact">
              <Button size="sm" variant="link" className="text-fresh-green font-bold hover:text-deep-green">
                Get in Touch with our Doctor of Horticulture →
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
