import React from "react";

export default function PartnerMarque() {
  const partners = [
    {
      id: 1,
      file: "682dba4d03ef42874808a8ce_Ne2rdtIGoVhpCM9pl8f9hqWAFc.webp",
      path: "/colab/682dba4d03ef42874808a8ce_Ne2rdtIGoVhpCM9pl8f9hqWAFc.webp",
    },
    {
      id: 2,
      file: "Federal_Bank_Logo.png",
      path: "/colab/Federal_Bank_Logo.png",
    },
    {
      id: 3,
      file: "hdfc-bank-logo-hd (1).png",
      path: "/colab/hdfc-bank-logo-hd (1).png",
    },
    {
      id: 4,
      file: "images (1).png",
      path: "/colab/images (1).png",
    },
    {
      id: 5,
      file: "images (3).png",
      path: "/colab/images (3).png",
    },
    {
      id: 6,
      file: "images (5).png",
      path: "/colab/images (5).png",
    },
    {
      id: 7,
      file: "images (6).jpeg.jpg",
      path: "/colab/images (6).jpeg.jpg",
    },
    {
      id: 8,
      file: "images (6).png",
      path: "/colab/images (6).png",
    },
    {
      id: 9,
      file: "images (8).jpeg.jpg",
      path: "/colab/images (8).jpeg.jpg",
    },
    {
      id: 10,
      file: "images (9).jpeg.jpg",
      path: "/colab/images (9).jpeg.jpg",
    },
    {
      id: 11,
      file: "images (9).png",
      path: "/colab/images (9).png",
    },
    {
      id: 12,
      file: "images (10).jpeg.jpg",
      path: "/colab/images (10).jpeg.jpg",
    },
    {
      id: 13,
      file: "images (10).png",
      path: "/colab/images (10).png",
    },
    {
      id: 14,
      file: "images (11).png",
      path: "/colab/images (11).png",
    },
    {
      id: 15,
      file: "images (12).png",
      path: "/colab/images (12).png",
    },
    {
      id: 16,
      file: "images (14).jpeg.jpg",
      path: "/colab/images (14).jpeg.jpg",
    },
    {
      id: 17,
      file: "ku96kl4c2jqert8mr5iqq58lej.png",
      path: "/colab/ku96kl4c2jqert8mr5iqq58lej.png",
    },
    {
      id: 18,
      file: "NicePng_bank-of-america-logo_2674561.png",
      path: "/colab/NicePng_bank-of-america-logo_2674561.png",
    },
    {
      id: 19,
      file: "sbi.jpg",
      path: "/colab/sbi.jpg",
    },
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap bg-white">
      <div className="animate-marquee flex items-center gap-12">
        {partners.map((partner) => (
          <img
            key={partner.id}
            src={partner.path}
            alt={partner.file}
            className="h-16 w-auto object-contain"
          />
        ))}

        {/* Duplicate for infinite loop */}
        {partners.map((partner) => (
          <img
            key={`duplicate-${partner.id}`}
            src={partner.path}
            alt={partner.file}
            className="h-16 w-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
}
