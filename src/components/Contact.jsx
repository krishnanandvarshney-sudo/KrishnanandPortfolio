import React, { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Linkedin,
  Instagram,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { portfolioData } from "../portfolioData";

const Contact = () => {
  const { personal } = portfolioData;

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSend = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_f8sxkfr",
        "template_3tog45v",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "ZybahouP3XawrRI9E"
      );

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      alert("Failed to send message.");
    }

    setSending(false);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto" />
          <p className="text-slate-400 mt-4 text-lg">
            Let’s build something great together
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-800/40 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-8
              shadow-lg shadow-teal-500/5
            "
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>

            <div className="space-y-5 text-slate-300">

              <Info icon={<User />} text={personal.name} />
              <Info icon={<Mail />} text={personal.email} />
              <Info icon={<Phone />} text={personal.phone || "+1 XXX XXX XXXX"} />
              <Info icon={<MapPin />} text="New York, United States" />

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-teal-400 transition-all hover:translate-x-1"
              >
                <Linkedin className="text-teal-400" />
                LinkedIn Profile
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-pink-400 transition-all hover:translate-x-1"
              >
                <Instagram className="text-pink-400" />
                Instagram
              </a>

            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.form
            onSubmit={handleSend}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              bg-slate-800/40 backdrop-blur-md
              border border-slate-700
              rounded-2xl p-8 space-y-4
              shadow-lg shadow-teal-500/5
            "
          >
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />

            <textarea
              rows={5}
              placeholder="Write your message..."
              required
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              className="
                w-full bg-slate-900/80
                border border-slate-700
                rounded-xl p-3 text-white
                focus:border-teal-400
                focus:ring-2 focus:ring-teal-500/30
                outline-none resize-none
                transition-all
              "
            />

            {/* PREMIUM BUTTON */}
         <motion.button
  whileHover={{
    scale: 1.03,
    boxShadow: "0px 0px 30px rgba(20,184,166,0.6)",
  }}
  whileTap={{ scale: 0.98 }}
  type="submit"
  disabled={sending}
  className="
    w-full
    py-3 rounded-xl
    font-semibold
    tracking-wide

    text-white
    hover:text-black !important

    bg-gradient-to-r
    from-teal-500
    via-emerald-500
    to-teal-600

    hover:from-teal-300
    hover:via-emerald-300
    hover:to-teal-400

    transition-all duration-300

    shadow-lg shadow-teal-500/30
    hover:shadow-teal-400/60

    disabled:opacity-60
  "
>
  {sending ? "Sending..." : "Send Message"}
</motion.button>

            {success && (
              <p className="text-teal-400 text-sm text-center">
                Message sent successfully ✔
              </p>
            )}
          </motion.form>

        </div>
      </div>
    </section>
  );
};

/* SMALL COMPONENTS */

const Info = ({ icon, text }) => (
  <div className="flex items-center gap-3">
    <div className="text-teal-400">{icon}</div>
    <span>{text}</span>
  </div>
);

const Input = ({ type = "text", ...props }) => (
  <input
    type={type}
    required
    {...props}
    className="
      w-full bg-slate-900/80
      border border-slate-700
      rounded-xl p-3 text-white
      focus:border-teal-400
      focus:ring-2 focus:ring-teal-500/30
      outline-none
      transition-all
    "
  />
);

export default Contact;