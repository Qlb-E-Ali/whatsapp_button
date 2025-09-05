import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "923001234567"; // Your WhatsApp number (without +)
  const message = "Hello, I want to know more about your services!";

  const handleClick = () => {
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
    >
      WhatsApp
    </button>
  );
};

export default WhatsAppButton;
