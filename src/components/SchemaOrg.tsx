import { seoConfig } from "@/lib/config";

const SchemaOrg = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": seoConfig.businessName,
    "telephone": seoConfig.phone,
    "email": seoConfig.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": seoConfig.address.street,
      "addressLocality": seoConfig.address.city,
      "addressRegion": seoConfig.address.state,
      "postalCode": seoConfig.address.zip,
    },
    "areaServed": seoConfig.serviceArea,
    "foundingDate": seoConfig.yearEstablished,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": seoConfig.stats.reviewRating,
      "reviewCount": seoConfig.stats.reviewCount.replace("+", ""),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaOrg;
