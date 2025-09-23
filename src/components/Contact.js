import { useState } from "react";

export default function Contact({ setFormStatus }) {
  console.log("ContactForm setFormStatus:", setFormStatus);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const isFormValid =
  formData.name.trim() !== "" &&
  formData.email.trim() !== "" &&
  formData.subject.trim() !== "" &&
  formData.message.trim() !== "";

  // update state on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // async submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/mail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // send JSON
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        console.log("message sent");
        // reset form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.log("error sending message:", result.error);
      }
    } catch (err) {
      console.log("network error:", err);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          placeholder="Your name here..."
          required
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          placeholder="Your email here..."
          required
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="subject" className="form-label">Subject</label>
        <input
          type="text"
          className="form-control"
          id="subject"
          name="subject"
          placeholder="Your subject here..."
          required
          value={formData.subject}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          rows="5"
          placeholder="Your message here..."
          required
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      <button 
        type="submit" 
        className="btn btn-primary" 
        data-bs-toggle="modal" 
        data-bs-target="#successModal"
        disabled={!isFormValid}
        >
        Send Message
      </button>
    </form>
  );
}