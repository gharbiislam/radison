import React, { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import 'aos/dist/aos.css'
const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What are AI development services?",
      answer:
        "At their core, Artificial Intelligence (AI) development services revolve around designing and tailoring artificial intelligence solutions to meet specific business needs. It's akin to architects and builders coming together; while the fundamental principles remain consistent, the final outcome is custom-built to fit an individual's requirements. So, when we discuss AI development, we're delving into specialized domains—like machine learning, natural language processing, or computer vision—each designed to address unique challenges in analytics, communication, or data interpretation.",
    },
    {
      question: "What types of processes can be automated using AI?",
      answer:
        "AI can automate a wide range of tasks, from data entry and customer support to decision-making and workflow optimization. We tailor solutions based on your business needs, whether it's automating routine operations or more complex tasks.",
    },
    {
      question: "How long does it take to implement AI automation?",
      answer:
        "The timeline varies depending on the complexity of your business needs. On average, it takes a few weeks for smaller projects, while more complex implementations can take several months. We’ll provide a detailed timeline during our consultation.",
    },
    {
      question: "Will AI automation disrupt my current operations?",
      answer:
        "We aim to minimize any disruption to your business. Our team works closely with you to ensure the integration is seamless, and we handle the entire process, including testing and troubleshooting, to avoid downtime.",
    },
    {
      question: "How much does AI automation cost?",
      answer:
        "The cost depends on the complexity of the solution and the scope of automation required. We offer flexible pricing options tailored to your business needs, which will be discussed during the initial consultation.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index); 
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center ">
      <div data-aos='fade-up'> 

      <span className="badge">FAQs</span>

      <div className="py-8">
        <h2 className="text-h2 lg:text-h2-lg">We’re here to help</h2>
        <p className="subtitle"> FAQs designed to provide the information you need. </p>
      </div>

    </div>
    <section className="md:w-3/5 relative " data-aos='fade-up'>
      <span className="shade"></span>

        {faqs.map((faq, index) => (
          <div key={index} className="mt-3 faqs_card">
            <button onClick={() => toggleFaq(index)}  className="faqs_title " >
              <span>{faq.question}</span>
              <HiChevronDown
                className={`w-5 h-5 transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            {openIndex === index && (
              <p className="mt-4 card_content">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Faqs;
