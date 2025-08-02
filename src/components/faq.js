import React, { useState } from "react";

const faqData = [
  {
    question: "Do I need a portfolio?",
    answer:
      "Yes, it's crucial. A portfolio showcases your range and professionalism—think of it as your visual resume.",
  },
  {
    question: "How many and what type of pictures will I get?",
    answer:
      "You'll receive 12 edited photos: 3 fashion looks, 1 simple look, including portraits and full-length shots.",
  },
  {
    question: "Do I have to bring my own outfits and makeup?",
    answer:
      "No. Our grooming team will take care of everything. Just bring your confidence.",
  },
  {
    question: "Is this course suitable for beginners?",
    answer:
      "Absolutely. It's designed for both beginners and experienced individuals looking to enhance their skills.",
  },
  {
    question: "What areas does the course focus on?",
    answer:
      "We cover ramp walk, posing, communication, grooming, confidence, and industry insights.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 my-20 max-w-3xl">
      <h2 className="text-3xl font-bold mb-8 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left px-6 py-4 font-semibold text-gray-800 flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-base">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
