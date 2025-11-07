import React from 'react';
import { Helmet } from 'react-helmet-async';

export function SEO({ 
  title = 'Helxon - SOC-as-a-Service | 24/7 Cybersecurity Monitoring',
  description = 'Helxon provides enterprise-grade SOC-as-a-Service powered by Microsoft security stack. Get 24/7 threat monitoring, detection, and response with the VorXOC platform.',
  keywords = 'SOC-as-a-Service, cybersecurity, threat monitoring, Microsoft Sentinel, Azure security, managed SOC, threat detection, incident response, VorXOC, security operations',
  ogImage = 'https://helxon.com/images/og-image.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl
}) {
  const siteUrl = 'https://helxon.com';
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:site_name" content="Helxon" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Helxon" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Prevent duplicate content */}
      <meta name="rating" content="general" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    </Helmet>
  );
}

