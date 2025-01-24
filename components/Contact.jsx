import { assets } from '@/assets/assets';
import React, { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "883d35ff-fe91-4764-af7f-967da3e28ad5"); // Removed trailing space

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="contact" 
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        "Welcome to my portfolio, where creativity meets functionality. Each project showcases my commitment to delivering innovative and user-friendly designs that leave a lasting impression."
      </p>
      <form onSubmit={onSubmit} className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-6 mt-10 mb-6">
          <input 
            type="text" 
            placeholder="Enter your name"  
            name="name"
            required 
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <input 
            type="email" 
            placeholder="Enter your email"  
            name="email"
            required 
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>
        <textarea 
          rows="6" 
          placeholder="Enter your message" 
          name="message"
          required 
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
        />
        <button 
  type="submit" 
  disabled={isSubmitting}
  className={`py-3 px-9 flex items-center justify-between gap-3 rounded-full mx-auto duration-300 mt-6 
  ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-black text-white hover:bg-black/80"} 
  dark:bg-transparent dark:border-[0.5px] dark:hover:bg-white dark:hover:text-black dark:text-white`}
>
  {isSubmitting ? "Submitting..." : "Submit"}
</button>

        <p className="mt-4 text-center text-gray-600">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
