import { useState } from "react";

import { motion } from "framer-motion";
import { fadeUp } from "../Animations/variant.js";


const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.target);
      formData.append("access_key", "424ce2a8-d37d-40de-87dd-6037ec6cfba6");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!data?.success) {
        throw new Error("Submission failed");
      }

      alert("Message sent!");
      e.target.reset();
    } catch {
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      id="contact"
      className="mx-auto w-full max-w-7xl px-6 xl:px-0 pb-6 md:pt-28"
    >
      <div className="rounded-3xl border border-(--border) bg-(--bg-secondary) p-6 md:p-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm uppercase tracking-widest text-(--text-secondary)">
            Contact
          </span>

          <h2 className="mt-2 text-4xl font-bold text-(--text) md:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="mt-4 max-w-xl leading-relaxed text-(--text-secondary)">
            Feel free to reach out for projects, collaboration, or ideas.
          </p>

          <div className="mt-5 h-1 w-16 rounded-full bg-(--primary)" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full rounded-xl border border-(--glass-border) bg-(--glass) px-4 py-3 text-(--text) backdrop-blur-xl placeholder:text-(--text-secondary) focus:border-(--primary) focus:outline-none"
            />

            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full rounded-xl border border-(--glass-border) bg-(--glass) px-4 py-3 text-(--text) backdrop-blur-xl placeholder:text-(--text-secondary) focus:border-(--primary) focus:outline-none"
            />
          </div>

          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            name="message"
            placeholder="Your Message"
            required
            rows={8}
            className="w-full resize-none rounded-xl border border-(--glass-border) bg-(--glass) px-4 py-3 text-(--text) backdrop-blur-xl placeholder:text-(--text-secondary) focus:border-(--primary) focus:outline-none"
          />

          <div className="flex justify-end">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;