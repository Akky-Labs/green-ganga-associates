import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.greengangaassociates.com'
  const currentDate = new Date()

  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const services = [
    "landscaping", "garden-design", "garden-maintenance", "lawn-maintenance",
    "terrace-garden", "vertical-garden", "commercial-landscaping", "residential-landscaping",
    "plant-supply", "irrigation", "artificial-grass", "water-features", "garden-lighting"
  ];

  const cities = ["lucknow", "kanpur", "noida", "prayagraj", "varanasi", "jhansi", "fatehpur"];
  
  const lucknowLocalities = [
    "gomti-nagar", "indira-nagar", "aliganj", "hazratganj", 
    "jankipuram", "alambagh", "ashiyana", "vrindavan-yojana"
  ];

  const blogSlugs = [
    "best-plants-lucknow",
    "garden-maintenance-tips",
    "terrace-garden-ideas",
    "vertical-garden-guide"
  ];

  const projectSlugs = [
    "guru-kripa-utsav",
    "subh-vilas-hotel",
    "nandi-farmhouse",
    "farmhouse-cum-resort",
    "gyan-dairy-school"
  ];

  // Append services
  services.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  // Append cities
  cities.forEach((city) => {
    routes.push({
      url: `${baseUrl}/cities/${city}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  // Append localities for Lucknow
  lucknowLocalities.forEach((loc) => {
    routes.push({
      url: `${baseUrl}/cities/lucknow/${loc}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    });
  });

  // Append blog posts
  blogSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  // Append projects
  projectSlugs.forEach((slug) => {
    routes.push({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    });
  });

  return routes;
}
