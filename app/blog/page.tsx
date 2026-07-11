import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, User, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Gardening Guide & Landscaping Blogs Lucknow | Green Ganga",
  description: "Read professional gardening tips, vertical garden setup guides, terrace garden layout ideas, and landscaping cost guides in Lucknow, Noida & UP.",
  alternates: {
    canonical: "/blog"
  }
};

const blogPosts = [
  {
    slug: "best-plants-lucknow",
    title: "Best Plants for Lucknow Climate: A Complete Botanical Selection Guide",
    desc: "Discover which trees, flowering shrubs, and grass types survive best in Lucknow's extreme summer heat and cold winters.",
    date: "July 01, 2026",
    author: "Dr. Ajay Sharma (Ph.D. Agriculture)",
    readTime: "6 min read",
    image: "/client/farmhouse-vrindavan-yojna.jpeg",
    category: "Plant Selection"
  },
  {
    slug: "garden-maintenance-tips",
    title: "10 Essential Garden Maintenance Tips for Uttar Pradesh Summers",
    desc: "Expert tips on watering cycles, soil enrichment, aeration, and organic pest control to keep your garden lush during hot dry months.",
    date: "June 25, 2026",
    author: "Aditya Sharma (Horticulture Lead)",
    readTime: "5 min read",
    image: "/client/GS infra.jpeg",
    category: "Maintenance"
  },
  {
    slug: "landscaping-cost-lucknow",
    title: "Landscaping & Gardening Setup Cost Guide in Lucknow (2026)",
    desc: "A realistic budget breakdown for lawn turfing, vertical walls, drip systems, and stone pathway layouts in UP.",
    date: "June 18, 2026",
    author: "Green Ganga Research Team",
    readTime: "8 min read",
    image: "/client/ds-group.jpeg",
    category: "Pricing Guide"
  },
  {
    slug: "terrace-garden-ideas",
    title: "Stunning Terrace Garden Ideas for Urban Homes in UP",
    desc: "How to set up lightweight rooftop gardens, container organic vegetables, and waterproof balcony structures in high-rises.",
    date: "June 10, 2026",
    author: "Mrs. Seema Sharma (Landscape Designer)",
    readTime: "5 min read",
    image: "/client/farmhouse-cum-resort.jpeg",
    category: "Rooftop Gardens"
  },
  {
    slug: "vertical-garden-guide",
    title: "Ultimate Guide to Vertical Garden Installation & Maintenance",
    desc: "Step-by-step breakdown of panel frames, automatic drip timers, and best low-light foliage plants for green walls.",
    date: "June 02, 2026",
    author: "Aditya Sharma (Horticulture Lead)",
    readTime: "7 min read",
    image: "/client/grand-hotel-resort.jpeg",
    category: "Vertical Gardens"
  }
];

export default function BlogIndexPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", item: "https://greengangaassociates.com" },
          { name: "Blog", item: "https://greengangaassociates.com/blog" }
        ]}
      />

      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden rounded-b-[3rem] lg:rounded-b-[5rem] shadow-2xl">
        <div className="absolute inset-0">
          <Image
            src="/client/farmhouse-vrindavan-yojna.jpeg"
            alt="Green Ganga Associates Gardening and Landscaping blog"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 mb-6">
              <BookOpen className="w-4 h-4 text-fresh-green" />
              <span className="text-fresh-green text-xs font-bold uppercase tracking-widest">Horticulture Insights</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Our Gardening & Landscaping Blog
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Read professional guides, Vastu plant consultancy tips, and breakdown costs written by our B.Sc. and Ph.D. Agriculture experts.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BLOG GRID ─── */}
      <section className="py-20 lg:py-28 bg-soft-beige dark:bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col items-start bg-white dark:bg-card rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                {/* Image */}
                <div className="relative w-full aspect-16/10 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 bg-deep-green text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-fresh-green" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-fresh-green" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-deep-green dark:text-white leading-snug mb-3 group-hover:text-fresh-green transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className="text-muted-foreground dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.desc}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-between w-full">
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-fresh-green" />
                      By {post.author.split(" ")[0]} {post.author.split(" ")[1]}
                    </span>
                    <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-1 text-xs font-bold text-deep-green dark:text-white group-hover:text-fresh-green transition-colors">
                      Read Full <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
