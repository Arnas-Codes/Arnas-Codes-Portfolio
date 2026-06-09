const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-7xl px-6 pb-6">
      <div className="bg-(--bg-secondary) border-(--border) rounded-3xl border p-6 md:p-10">
        {/* Header */}
        <div className="mb-10">
          <span className="text-sm uppercase tracking-widest text-(--text-secondary)">
            Contact
          </span>

          <h2 className="text-(--text) mt-2 text-4xl font-bold md:text-5xl">
            Let's Build Something Amazing
          </h2>

          <p className="text-(--text-secondary) mt-4 max-w-xl leading-relaxed">
            Feel free to reach out if you have a project idea, want to
            collaborate, or simply want to say hello.
          </p>

          <div className="bg-(--primary) mt-5 h-1 w-16 rounded-full" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="bg-(--glass) border-(--glass-border) text-(--text) placeholder:text-(--text-secondary) focus:border-(--primary) focus:ring-(--primary) w-full rounded-xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:ring-1 focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="bg-(--glass) border-(--glass-border) text-(--text) placeholder:text-(--text-secondary) focus:border-(--primary) focus:ring-(--primary) w-full rounded-xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:ring-1 focus:outline-none"
            />
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            required
            rows={8}
            className="bg-(--glass) border-(--glass-border) text-(--text) placeholder:text-(--text-secondary) focus:border-(--primary) focus:ring-(--primary) w-full resize-none rounded-xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 focus:ring-1 focus:outline-none"
          />

          {/* Submit */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-(--primary) rounded-xl px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
