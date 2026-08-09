import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Calendar, Clock, Leaf, ArrowLeft, Phone, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

interface BlogPost {
  title: string;
  desc: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  category: string;
  contentHtml: string;
  highlights: string[];
}

const blogPostsData: Record<string, BlogPost> = {
  "best-plants-lucknow": {
    title: "Best Plants for Lucknow Climate: A Complete Botanical Selection Guide",
    desc: "Discover which trees, flowering shrubs, and grass types survive best in Lucknow's extreme summer heat and cold winters.",
    date: "July 01, 2026",
    author: "Dr. Ajay Sharma (Ph.D. Agriculture)",
    readTime: "6 min read",
    image: "/client/farmhouse-vrindavan-yojna.jpeg",
    category: "Plant Selection",
    highlights: [
      "Choosing trees that endure 45°C dry heat waves",
      "Vastu Shastra recommended plants for Uttar Pradesh homes",
      "Low-water grass options to preserve Lucknow ground levels"
    ],
    contentHtml: `
      <h2>Introduction to Lucknow's Extreme Microclimate</h2>
      <p>Lucknow, Uttar Pradesh features a subtropical climate characterized by scorching summers (reaching up to 45°C to 47°C in May-June) and chilly dry winters where temperatures can drop down to 5°C. To build a garden that looks lush year-round, you must avoid delicate alpine or temperate species and focus on tough, acclimatized flora. Selecting the wrong plant variety will lead to high mortality rates and increased water bills.</p>

      <h2>1. Top Canopy Trees for Lucknow</h2>
      <p>Canopy trees provide vital shade that protects smaller undergrowth plants from sunburn. For farmhouses and large villa yards in Gomti Nagar and Vrindavan Yojana, we recommend:</p>
      <ul>
        <li><strong>Amaltas (Golden Shower Tree):</strong> Features beautiful hanging yellow flowers that bloom during mid-summer. Highly drought-tolerant once established.</li>
        <li><strong>Kachnar (Bauhinia):</strong> Offers orchid-like purple or white blossoms and survives on minimal winter watering.</li>
        <li><strong>Neem & Peepal:</strong> Excellent air purifiers suitable for large residential gates and industrial boundary walls.</li>
      </ul>

      <h2>2. Flowering Shrubs that Bloom Year-Round</h2>
      <p>To keep your garden colorful, mix evergreen shrubs that withstand hot winds (Loo) and cold breezes:</p>
      <ul>
        <li><strong>Bougainvillea:</strong> The ultimate survivor. It thrives in full sunlight and blooms in vivid shades of pink, orange, and white. Over-watering actually reduces its blooms.</li>
        <li><strong>Parijat (Nyctanthes arbor-tristis):</strong> Night-blooming jasmine with sacred value. Very hardy and suits the local soil profile.</li>
        <li><strong>Champa (Plumeria):</strong> Rich fragrant blooms with thick succulent stems that store water, making it extremely drought resistant.</li>
      </ul>

      <h2>3. Vastu Shastra Recommendations for UP Gardens</h2>
      <p>According to Vastu principles, placing specific plants in certain directions brings peace and prosperity to the household:</p>
      <ul>
        <li><strong>Tulsi (Holy Basil):</strong> Keep in the East or Northeast to invite positive energy. Protect it from frost in December.</li>
        <li><strong>Bel Patra & Shami:</strong> Highly auspicious trees that should be placed near the entrance or in the Northeast corner.</li>
        <li><strong>Avoid Thorny Plants:</strong> Vastu advises against planting cacti or thorny shrubs directly near the main entry doors, as they represent harsh energy.</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Before purchasing plants from roadside nurseries, always consult with a certified horticulturist to analyze your soil's pH level and sun orientation. At Green Ganga Associates, our nurseries are stocked with acclimatized species ready to grow in local UP soil.</p>
    `
  },
  "garden-maintenance-tips": {
    title: "10 Essential Garden Maintenance Tips for Uttar Pradesh Summers",
    desc: "Expert tips on watering cycles, soil enrichment, aeration, and organic pest control to keep your garden lush during hot dry months.",
    date: "June 25, 2026",
    author: "Aditya Sharma (Horticulture Lead) ",
    readTime: "5 min read",
    image: "/client/GS infra.jpeg",
    category: "Maintenance",
    highlights: [
      "Best watering times to prevent root boil",
      "Organic mulching techniques to lock soil moisture",
      "Neem oil spray schedules to fight local pests"
    ],
    contentHtml: `
      <h2>Why Summer Care in UP is Different</h2>
      <p>Summer in Lucknow and surrounding cities like Kanpur and Varanasi brings dry, hot winds (Loo) that can dehydrate a garden in hours. Standard watering routines are not enough; you need structural adjustments to prevent soil baking and leaf burn.</p>

      <h2>1. The Golden Hour of Watering</h2>
      <p>Never water your plants during midday. The water droplets on leaves act as tiny magnifying glasses, magnifying the sun's rays and causing leaf scorch. Additionally, water in hot soil can boil, damaging fragile roots. Always water **before 7:00 AM** or **after 6:30 PM**.</p>

      <h2>2. Mulching is Non-Negotiable</h2>
      <p>Mulching is the process of covering the topsoil with a 2-inch layer of organic matter, such as dried leaves, wood bark, or coco-peat. Mulch acts as a thermal shield, keeping root zones cool and reducing soil evaporation by up to 50%.</p>

      <h2>3. Lawn Aeration & Mowing Heights</h2>
      <p>Compact soil prevents water from reaching grass roots. Run a lawn aerator (or manually poke holes with a garden fork) before the monsoon. When mowing, raise your mower blades. Taller grass (2.5 to 3 inches) shades its own roots, reducing turf moisture loss.</p>

      <h2>4. Organic Pest Management</h2>
      <p>Aphids and spider mites multiply rapidly in dry heat. Avoid chemical pesticides that kill beneficial earthworms. Instead, spray a mixture of **Neem Oil (5ml) and liquid dish soap (2ml) in 1 Liter of warm water** every fortnight after sunset.</p>
    `
  },
  "terrace-garden-ideas": {
    title: "Stunning Terrace Garden Ideas for Urban Homes in UP",
    desc: "How to set up lightweight rooftop gardens, container organic vegetables, and waterproof balcony structures in high-rises.",
    date: "June 10, 2026",
    author: "Mrs. Seema Sharma (Landscape Designer)",
    readTime: "5 min read",
    image: "/gallery/blog-roof-top.jpeg",
    category: "Rooftop Gardens",
    highlights: [
      "Balancing structural weight limits on concrete roofs",
      "Using drainage cells to prevent water leakage",
      "Setting up organic container farms for home vegetables"
    ],
    contentHtml: `
      <h2>Urban Roofs as Private Green Getaways</h2>
      <p>With shrinking ground space in cities like Noida, Lucknow, and Kanpur, rooftops offer the perfect canvas for a private garden. A terrace garden not only cools your building but also provides a quiet space to connect with nature.</p>

      <h2>1. Weight Safety First</h2>
      <p>Before placing large heavy pots, understand your roof's weight limits. Never use heavy farm clay. Instead, formulate a **Lightweight Growing Medium** consisting of **50% Coco-peat, 30% Vermicompost, and 20% Perlite**. This mix holds water efficiently while remaining extremely light.</p>

      <h2>2. Structural Leak Protection</h2>
      <p>To avoid damp ceilings (Ceelan), follow our multi-layered layout:</p>
      <ul>
        <li><strong>Base Waterproofing:</strong> High-grade polyurethane coatings on concrete.</li>
        <li><strong>Drainage Cells:</strong> Plastic interlocking grids that allow excess water to flow freely.</li>
        <li><strong>Geotextile Filter Fabric:</strong> A layer that holds soil in place while letting clear water drain out.</li>
      </ul>

      <h2>3. Organic Vegetable Container Gardening</h2>
      <p>Grow pesticide-free organic vegetables on your terrace using grow bags or clay planters. Beginners can start with direct sun-loving plants: Tomatoes, Green Chilies, Coriander, Lemon, and Mint. Combine these with automatic drip lines so your plants stay watered even when you travel.</p>
    `
  },
  "vertical-garden-guide": {
    title: "Ultimate Guide to Vertical Garden Installation & Maintenance",
    desc: "Step-by-step breakdown of panel frames, automatic drip timers, and best low-light foliage plants for green walls.",
    date: "June 02, 2026",
    author: "Aditya Sharma (Horticulture Lead)",
    readTime: "7 min read",
    image: "/gallery/blog-vertical-garden.jpeg",
    category: "Vertical Gardens",
    highlights: [
      "Waterproofing walls before vertical panel setup",
      "Best plants for low-light indoor vertical walls",
      "Configuring smart timers for automated irrigation"
    ],
    contentHtml: `
      <h2>The Rise of Vertical Green Walls</h2>
      <p>Vertical gardens bring lush botanical designs onto bare walls, making them highly popular for restaurant lobbies, hotel exteriors, and compact residential balconies.</p>

      <h2>1. The Structural Frame Layout</h2>
      <p>Never mount plants directly to a wall. We install an anti-corrosive metal grid frame with a 1-inch air gap between the frame and your wall. This ensures zero moisture transfers to your indoor masonry, preventing dampness or mold.</p>

      <h2>2. Selecting the Best Foliage Species</h2>
      <p>Plants in a vertical garden live in felt pockets and require specific growth habits. We select species with compact roots and trailing foliage:</p>
      <ul>
        <li><strong>Indoor/Semi-shade:</strong> Philodendrons, Money Plants (Scindapsus), Xanadu, Boston Ferns, and Syngoniums.</li>
        <li><strong>Outdoor/Full Sun:</strong> Asparagus Ferns, Portulaca, Alternanthera, and dwarf schefflera.</li>
      </ul>

      <h2>3. Smart Drip Irrigation Timer Config</h2>
      <p>Vertical walls have limited soil volume and dry out quickly. We install a digital watering timer connected to a micro-drip tube network. We typically configure the timer to run for **1 to 2 minutes, twice a day** (morning and evening), depending on seasonal heat. For detailed installation guidance, check our <a href="/services/vertical-garden" class="text-fresh-green underline font-bold">Vertical Garden Services</a> and <a href="/cities/noida" class="text-fresh-green underline font-bold">Noida Landscape Solutions</a>.</p>
    `
  },
  "terrace-garden-cost-lucknow": {
    title: "Cost of Setting Up a Terrace Garden in Lucknow: 2026 Price & Layout Guide",
    desc: "Detailed pricing breakdown for setting up rooftop gardens in Lucknow, covering lightweight soil mixes, waterproofing, drip irrigation, and plant selections.",
    date: "August 05, 2026",
    author: "Mrs. Seema Sharma (Landscape Designer)",
    readTime: "6 min read",
    image: "/project-terrace.png",
    category: "Rooftop Gardens",
    highlights: [
      "Itemized cost breakdown per sq ft for terrace garden setup in Lucknow",
      "Structural waterproofing & drainage cell installation costs",
      "Selecting low-maintenance plants suitable for Gomti Nagar, Indira Nagar & Aliganj roofs"
    ],
    contentHtml: `
      <h2>Terrace Garden Cost Breakdown in Lucknow (2026)</h2>
      <p>Setting up a rooftop garden in Lucknow transforms unused concrete space into a cooler, greener sanctuary. The overall cost depends on whether you opt for a simple container garden or a luxury built-in terrace landscape with synthetic grass, pergolas, and automated drip irrigation systems.</p>

      <h2>1. Basic Cost Elements per Square Foot</h2>
      <p>In Lucknow residential areas like <strong>Gomti Nagar, Hazratganj, and Vrindavan Yojana</strong>, typical terrace garden development costs range from <strong>₹150 to ₹450 per sq. ft.</strong> based on specifications:</p>
      <ul>
        <li><strong>Polyurethane Base Waterproofing:</strong> ₹35 – ₹60 per sq. ft.</li>
        <li><strong>Drainage Mat & Geotextile Layer:</strong> ₹40 – ₹70 per sq. ft.</li>
        <li><strong>Lightweight Soil Mixture (Coco-peat + Vermicompost):</strong> ₹30 – ₹50 per sq. ft.</li>
        <li><strong>Automatic Drip Irrigation Setup:</strong> ₹8,000 – ₹18,000 (flat project rate depending on zone count).</li>
      </ul>

      <h2>2. Plant Selection for Lucknow Rooftops</h2>
      <p>Rooftops receive intense direct sun during May-June (up to 45°C). We recommend hardy species like Bougainvillea, Plumeria, Adenium, Ficus microcarpa, and Dwarf Palms. Learn more about plant compatibility in our guide on <a href="/blog/best-plants-lucknow" class="text-fresh-green underline font-bold">Best Plants for Lucknow Climate</a>.</p>

      <h2>3. Water Leakage Prevention & Safety</h2>
      <p>Never lay regular field soil directly on your roof slab. We install heavy-duty plastic drainage cells with filter membrane fabrics. Explore our dedicated <a href="/services/terrace-garden" class="text-fresh-green underline font-bold">Terrace Garden Design Services in Lucknow</a> or contact our team for a free on-site estimate at <a href="/contact" class="text-fresh-green underline font-bold">Green Ganga Contact Page</a>.</p>
    `
  },
  "low-maintenance-balcony-plants-noida": {
    title: "Best Low-Maintenance Plants for Noida High-Rise Balconies",
    desc: "Top wind-tolerant and resilient plant species ideal for high-rise apartment balconies in Noida Sectors 62, 137, and 150.",
    date: "August 02, 2026",
    author: "Aditya Sharma (Horticulture Lead)",
    readTime: "5 min read",
    image: "/project-residential.png",
    category: "Plant Selection",
    highlights: [
      "Choosing wind-resistant plants for 15th+ floor apartment balconies",
      "Low-maintenance indoor & outdoor foliage for Noida apartments",
      "Automatic balcony watering setup for busy working professionals"
    ],
    contentHtml: `
      <h2>High-Rise Gardening in Noida's Modern Apartments</h2>
      <p>Apartments in high-rise societies across <strong>Noida Sector 62, Sector 137, and Greater Noida West</strong> face unique microclimatic challenges: strong high-altitude wind gusts, fast moisture evaporation, and variable sunlight exposure depending on balcony orientation.</p>

      <h2>1. Top Wind & Heat Resistant Balcony Plants</h2>
      <ul>
        <li><strong>Snake Plant (Sansevieria):</strong> Virtually indestructible. Tolerates direct sun, deep shade, and infrequent watering.</li>
        <li><strong>Jade Plant (Crassula ovata):</strong> Thick succulent leaves that store moisture, making it ideal for sunny south-facing balconies.</li>
        <li><strong>Areca Palm & Song of India:</strong> Excellent air-purifying foliage that flexes naturally with high winds without breaking stems.</li>
        <li><strong>ZZ Plant (Zamioculcas):</strong> Perfect for shaded or North-facing high-rise balconies.</li>
      </ul>

      <h2>2. Space-Saving Balcony Layouts & Vertical Green Walls</h2>
      <p>To maximize seating area in compact balconies, install vertical wall pots or railing planters. Learn more about wall garden installation in our <a href="/blog/vertical-garden-guide" class="text-fresh-green underline font-bold">Vertical Garden Installation Guide</a> and explore our specialized <a href="/cities/noida" class="text-fresh-green underline font-bold">Noida Landscaping Services</a>.</p>

      <h2>3. Automated Drip Lines for Working Professionals</h2>
      <p>Noida IT professionals often travel for work. Installing a compact battery-operated automatic tap timer keeps your balcony greenery thriving effortlessly. Visit our <a href="/services/irrigation" class="text-fresh-green underline font-bold">Smart Drip Irrigation Page</a> for full details.</p>
    `
  },
  "lawn-watering-guide-uttar-pradesh": {
    title: "How Often Should You Water Your Lawn in Uttar Pradesh? (Summer vs Winter)",
    desc: "Complete seasonal lawn irrigation schedule, soil absorption advice, and smart sprinkler tips for Lucknow, Kanpur, and UP climates.",
    date: "July 28, 2026",
    author: "Dr. Ajay Sharma (Ph.D. Agriculture)",
    readTime: "6 min read",
    image: "/project-commercial.png",
    category: "Maintenance",
    highlights: [
      "Summer vs Winter lawn watering frequency in UP",
      "Preventing fungal lawn diseases caused by over-watering in monsoons",
      "Saving 40% water with automatic popup sprinklers"
    ],
    contentHtml: `
      <h2>Mastering Turf Irrigation in North India</h2>
      <p>A thick green lawn enhances villa landscapes and commercial resorts across <strong>Lucknow, Kanpur, Prayagraj, and Varanasi</strong>. However, over-watering or under-watering is the #1 reason for yellowing grass patches and weed infestation.</p>

      <h2>1. Seasonal Watering Schedule</h2>
      <ul>
        <li><strong>Summer (April – June):</strong> Water deeply 4 to 5 times a week early in the morning before 7:30 AM. Deep watering encourages roots to grow downwards into cooler soil layers.</li>
        <li><strong>Monsoon (July – September):</strong> Water only when rain skips for more than 4 days. Ensure drainage channels are clear to avoid root rot.</li>
        <li><strong>Winter (November – February):</strong> Reduce watering to once every 4 to 6 days. Dew collection provides natural moisture.</li>
      </ul>

      <h2>2. Selection of Drought-Tolerant Turf Grass</h2>
      <p>Bermuda Selection-1 (Doob grass) and Mexican Carpet Grass are best suited for UP heat. Explore our <a href="/services/lawn-maintenance" class="text-fresh-green underline font-bold">Professional Lawn Maintenance Services</a> for turf restoration.</p>

      <h2>3. Popup Sprinkler Systems</h2>
      <p>Hand hose watering leads to uneven water distribution. Automated underground popup sprinklers save up to 40% water. Discover our solutions on <a href="/services/irrigation" class="text-fresh-green underline font-bold">Smart Irrigation Systems</a> or consult our experts in <a href="/cities/kanpur" class="text-fresh-green underline font-bold">Kanpur Landscaping Page</a>.</p>
    `
  },
  "resort-landscape-ideas-north-india": {
    title: "Top 10 Resort & Farmhouse Landscape Ideas in North India",
    desc: "Inspiring outdoor design trends for commercial resorts, farmhouses, and event venues in Lucknow, Prayagraj, and Varanasi.",
    date: "July 20, 2026",
    author: "Mrs. Seema Sharma (Landscape Designer)",
    readTime: "8 min read",
    image: "/indian-resort.png",
    category: "Commercial Landscaping",
    highlights: [
      "Combining tropical palms with classical Indian fountains",
      "Designing outdoor wedding event lawns with heavy foot-traffic turf",
      "Illuminating resort gardens with warm ambient LED landscape lighting"
    ],
    contentHtml: `
      <h2>Creating Unforgettable Destination Spaces</h2>
      <p>Luxury farmhouses and commercial event resorts in <strong>Lucknow, Prayagraj, Noida, and Ayodhya</strong> rely on immersive green landscapes to create unforgettable guest experiences and wedding venues.</p>

      <h2>1. Grand Royal Entrance Avenues</h2>
      <p>Line long entry driveways with tall Royal Palms (Roystonea regia) or Foxtail Palms interplanted with glowing warm outdoor spotlights to create an immediate regal ambiance upon entry.</p>

      <h2>2. Heavy Foot-Traffic Wedding Lawns</h2>
      <p>Wedding lawns require reinforced turf root zones mixed with coarse sand to prevent mud creation during large gatherings. Pair this with decorative gazebo features and natural stone pathways. View real project examples on our <a href="/projects" class="text-fresh-green underline font-bold">Projects Gallery Page</a>.</p>

      <h2>3. Architectural Water Fountains & Ambient Lighting</h2>
      <p>Tiered marble fountains and koi ponds act as natural cooling zones while adding gentle running water sounds. For commercial inquiries, visit our <a href="/services/commercial-landscaping" class="text-fresh-green underline font-bold">Commercial & Resort Landscaping Services</a> or see our work in <a href="/cities/prayagraj" class="text-fresh-green underline font-bold">Prayagraj Landscaping Solutions</a>.</p>
    `
  },
  "best-lawn-grass-lucknow-climate": {
    title: "Which Lawn Grass Type is Best for Lucknow Climate? (Mexican Carpet vs Bermuda)",
    desc: "Detailed botanical evaluation of turf grass varieties for Lucknow gardens. Compare Selection-1 Doob grass vs Mexican Carpet vs Nilgiri grass.",
    date: "August 09, 2026",
    author: "Dr. Ajay Sharma (Ph.D. Agriculture)",
    readTime: "6 min read",
    image: "/hero.png",
    category: "Lawn Care",
    highlights: [
      "Comparison of Selection-1 Bermuda Doob grass vs Mexican Carpet Grass",
      "Which grass species survives 45°C summer heat in Lucknow without turning yellow",
      "Best grass choices for shaded tree canopy areas vs full sunlight lawns"
    ],
    contentHtml: `
      <h2>Selecting the Right Lawn Turf Grass in Lucknow</h2>
      <p>A pristine green lawn is the centerpiece of residential villas and resort grounds across <strong>Lucknow, Kanpur, and Barabanki</strong>. However, choosing the wrong grass variety leads to high water bills, weed invasion, and brown patchy lawns during extreme 45°C UP summers.</p>

      <h2>1. Selection-1 Bermuda Grass (Doob Grass) — Best for Full Sun</h2>
      <p>Selection-1 Bermuda is the #1 recommended turf grass for North Indian outdoor lawns. It has deep root systems that penetrate up to 12 inches, making it extremely heat-tolerant and resilient against heavy foot traffic. Explore our <a href="/services/lawn-maintenance" class="text-fresh-green underline font-bold">Lawn Maintenance Services</a> for professional lawn laying.</p>

      <h2>2. Mexican Carpet Grass — Best for Aesthetic Shade Lawns</h2>
      <p>Mexican Carpet grass features wide, lush green leaves that form a soft velvety carpet. It thrives in partial shade under tree canopies where Bermuda grass thins out. Learn more about plant and turf selection in our guide on <a href="/blog/best-plants-lucknow" class="text-fresh-green underline font-bold">Best Plants for Lucknow Climate</a>.</p>

      <h2>3. Irrigation & Aeration Requirements</h2>
      <p>Pair your grass installation with underground popup sprinklers to ensure even coverage. Check out our <a href="/services/irrigation" class="text-fresh-green underline font-bold">Smart Sprinkler Systems</a> or contact our team via <a href="/contact" class="text-fresh-green underline font-bold">Green Ganga Contact Page</a>.</p>
    `
  },
  "organic-pest-control-gardens-up": {
    title: "5 Effective Organic Pest Control Methods for Home Gardens in UP",
    desc: "Learn natural neem oil sprays, bio-fungicides, and soil solarization methods to protect your plants from termites, mealybugs, and aphids.",
    date: "August 08, 2026",
    author: "Aditya Sharma (Horticulture Lead)",
    readTime: "5 min read",
    image: "/indian-farmhouse.png",
    category: "Plant Health",
    highlights: [
      "Homemade eco-friendly Neem Oil & soap emulsion spray recipe",
      "Controlling whiteflies and mealybugs naturally during monsoon humidity",
      "Protecting wooden plant roots from sub-surface termites"
    ],
    contentHtml: `
      <h2>Protecting Home Gardens in Uttar Pradesh Naturally</h2>
      <p>Chemical pesticides harm earthworms and pollute local soil profiles in <strong>Lucknow, Noida, and Prayagraj</strong>. Adopting organic plant protection methods maintains healthy soil microbial life while keeping common UP garden pests at bay.</p>

      <h2>1. Concentrated Neem Oil & Organic Soap Emulsion</h2>
      <p>Neem oil acts as a natural antifeedant and insect growth regulator. Mix <strong>5ml cold-pressed Neem Oil with 2ml organic liquid soap in 1 Liter warm water</strong>. Spray thoroughly under leaves every 10 days after sunset.</p>

      <h2>2. Bio-Fungicide Trichoderma Viride for Root Rot</h2>
      <p>During UP monsoons, high soil humidity causes fungal root rot. Drench soil with Trichoderma viride bio-fungicide to naturally suppress harmful soil pathogens. Learn more seasonal maintenance in our <a href="/blog/garden-maintenance-tips" class="text-fresh-green underline font-bold">Garden Maintenance Guide</a>.</p>

      <h2>3. Organic Soil Solarization for Termites</h2>
      <p>Before planting new beds in Gomti Nagar or Aliganj, cover moist topsoil with clear plastic sheets during June heat for 2 weeks. Solar heat kills termite larvae and weed seeds naturally. Consult our plant doctors at <a href="/cities/lucknow" class="text-fresh-green underline font-bold">Green Ganga Lucknow Office</a>.</p>
    `
  }
};

// Generates static paths for all blog posts to satisfy static export
export async function generateStaticParams() {
  return Object.keys(blogPostsData).map((slug) => ({ slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = blogPostsData[resolvedParams.slug] || blogPostsData["best-plants-lucknow"];
  const title = `${post.title} | Green Ganga Associates`;
  const description = `${post.desc.slice(0, 140)}... Expert gardening guides & landscaping advice in Lucknow & UP.`;
  return {
    title,
    description,
    alternates: {
      canonical: `https://www.greengangaassociates.com/blog/${resolvedParams.slug}`
    },
    openGraph: {
      title,
      description,
      images: [{ url: post.image }]
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = blogPostsData[resolvedParams.slug];

  if (!post) {
    notFound();
  }

  // Article JSON-LD Structured Schema with Freshness Signal
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.greengangaassociates.com/blog/${resolvedParams.slug}#article`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.greengangaassociates.com/blog/${resolvedParams.slug}`
    },
    "headline": post.title,
    "description": post.desc,
    "image": `https://www.greengangaassociates.com${post.image}`,
    "datePublished": post.date,
    "dateModified": "2026-08-09",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Green Ganga Associates",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.greengangaassociates.com/favicon.png"
      }
    }
  };

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://www.greengangaassociates.com" },
          { name: "Blog", item: "https://www.greengangaassociates.com/blog" },
          { name: post.category, item: `https://www.greengangaassociates.com/blog#${post.category.toLowerCase()}` },
          { name: post.title, item: `https://www.greengangaassociates.com/blog/${resolvedParams.slug}` }
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="pt-36 sm:pt-40 pb-20 bg-white dark:bg-background relative transition-colors duration-300">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          {/* Premium Back to Blog & Category row */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="back-to-articles-btn group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-card hover:bg-light-green/30 dark:hover:bg-white/10 transition-all duration-300 shadow-xs text-xs font-bold text-deep-green dark:text-white"
            >
              <ArrowLeft className="w-4 h-4 text-fresh-green transition-transform group-hover:-translate-x-0.5" />
              <span>Back to Articles</span>
            </Link>
            <span className="bg-fresh-green/10 text-fresh-green text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-fresh-green/10 dark:border-fresh-green/20">
              {post.category}
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-deep-green dark:text-white leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground pb-8 border-b border-gray-100 dark:border-white/10 mb-12">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-fresh-green" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-fresh-green" />
              {post.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-16/9 rounded-3xl overflow-hidden shadow-2xl mb-12 border border-gray-100 dark:border-white/5 shadow-deep-green/5">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>

          {/* Grid Layout: Content + Side CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Content */}
            <div className="lg:col-span-2 max-w-none">

              {/* Highlights callout */}
              <div className="p-6 rounded-2xl bg-soft-beige/50 dark:bg-white/5 border border-gray-100 dark:border-white/5 mb-8 animate-pulse-slow">
                <h3 className="text-sm font-bold text-deep-green dark:text-white uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-fresh-green animate-pulse" /> Key Highlights inside:
                </h3>
                <ul className="space-y-2">
                  {post.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-fresh-green shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rich Body Content */}
              <div className="article-content" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />

            </div>

            {/* Right Side Sticky Consultation Box */}
            <div className="lg:col-span-1">
              <div className="consultation-sticky-box sticky top-28 p-6 rounded-3xl border border-gray-100 dark:border-white/10 bg-soft-beige/40 dark:bg-dark-green shadow-xl shadow-deep-green/5 space-y-6">
                <div className="w-12 h-12 rounded-2xl bg-deep-green/10 dark:bg-white/10 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-deep-green dark:text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-deep-green dark:text-white">Need Expert Advice?</h3>
                  <p className="text-xs text-muted-foreground mt-1">Get an on-site horticulture soil and landscape survey.</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh-green" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Ph.D. Agronomist Review</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh-green" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Vastu Directional Advice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-fresh-green" />
                    <span className="text-xs font-bold text-gray-700 dark:text-gray-300">Water Flow Calculations</span>
                  </div>
                </div>

                <div className="space-y-2.5 pt-4">
                  <a
                    href={`https://wa.me/919129177119?text=Hi, I read your article on ${post.title}. I want to consult for my garden.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full rounded-full bg-deep-green hover:bg-dark-green text-white h-11 text-xs font-bold shadow-md shadow-deep-green/10">
                      Consult on WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+919129177119" className="block w-full">
                    <Button variant="outline" className="w-full rounded-full border-deep-green/20 dark:border-white/20 text-deep-green dark:text-white hover:bg-deep-green/5 dark:hover:bg-white/5 h-11 text-xs font-bold">
                      <Phone className="w-3.5 h-3.5 mr-2 text-fresh-green" /> Call 9129177119
                    </Button>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </article>
    </>
  );
}
