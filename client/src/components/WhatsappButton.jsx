import React from "react";
import { FaWhatsapp } from "react-icons/fa"; 

export default function WhatsAppButton() {
  const phone = "7276317098";
  const message = "Hello I am interested in your services";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <div style={{
      position: "fixed",
      bottom: "20px",
      right: "20px",
      zIndex: 1000, // ensures it stays on top
      cursor: "pointer",
    }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={60} color="#25D366" />
      </a>
    </div>
  );
}
