"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contactcomp = () => {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string>("");

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");

    const currentForm = form.current;
    if (!currentForm) {
      setStatus("Form error occurred");
      toast.error("Form error occurred");
      return;
    }

    // Basic validation
    const formData = new FormData(currentForm);
    const name = formData.get("name")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !email || !phone || !message) {
      setStatus("All fields are required");
      toast.error("All fields are required");
      return;
    }

    const SERVICE_ID = "service_nledl9m"; // Update if new service created
    const TEMPLATE_ID = "template_isfu0nd";
    const PUBLIC_KEY = "HPyyU3CRSHn21NIUq";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, currentForm, PUBLIC_KEY).then(
      (result) => {
        console.log("Success:", result.text);
        setStatus("Message sent successfully!");
        toast.success("Message sent successfully!");
        currentForm.reset();
        setTimeout(() => setStatus(""), 3000);
      },
      (error) => {
        console.error("Error:", error.text);
        setStatus(`Failed to send message: ${error.text}`);
        toast.error(`Failed to send message: ${error.text}`);
      }
    );
  };

  return (
    <div className="rainbow-blog-area rainbow-section-gap">
      <div className="container">
        <div className="consulting-services-area rainbow-section-gapBottom"></div>
        <div className="automation-services-area rainbow-section-gapBottom">
          <div className="wrapper">
            <div className="automation-services clltoaction-style-default style-5">
              <div className="container">
                <div className="row row--0 align-items-center content-wrapper theme-shape">
                  <div className="col-lg-12">
                    <div className="inner">
                      <div className="content text-center">
                        <h2 className="title">Contact Us</h2>
                      </div>
                      <div
                        className="content"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "2rem",
                        }}
                      >
                        <div
                          className="form-container"
                          style={{
                            flex: 1,
                            marginRight: "2rem",
                            padding: "3rem",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                          }}
                        >
                          <form ref={form} onSubmit={sendEmail}>
                            <div style={{ marginBottom: "1rem" }}>
                              <label htmlFor="name">Name:</label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                style={{
                                  width: "100%",
                                  padding: "0.5rem",
                                  borderRadius: "4px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </div>
                            <div style={{ marginBottom: "1rem" }}>
                              <label htmlFor="email">Email:</label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                style={{
                                  width: "100%",
                                  padding: "0.5rem",
                                  borderRadius: "4px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </div>
                            <div style={{ marginBottom: "1rem" }}>
                              <label htmlFor="phone">Phone:</label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                style={{
                                  width: "100%",
                                  padding: "0.5rem",
                                  borderRadius: "4px",
                                  border: "1px solid #ccc",
                                }}
                              />
                            </div>
                            <div style={{ marginBottom: "1rem" }}>
                              <label htmlFor="message">Message:</label>
                              <textarea
                                id="message"
                                name="message"
                                required
                                style={{
                                  width: "100%",
                                  padding: "0.5rem",
                                  borderRadius: "4px",
                                  border: "1px solid #ccc",
                                  minHeight: "100px",
                                }}
                              />
                            </div>
                            <div>
                              <button
                                type="submit"
                                style={{
                                  padding: "0.5rem 1rem",
                                  borderRadius: "4px",
                                  border: "none",
                                  backgroundColor: "#007bff",
                                  color: "#fff",
                                  cursor: "pointer",
                                }}
                              >
                                Send
                              </button>
                            </div>
                            {status && (
                              <p
                                style={{
                                  marginTop: "1rem",
                                  color: status.includes("Failed")
                                    ? "red"
                                    : "green",
                                }}
                              >
                                {status}
                              </p>
                            )}
                          </form>
                        </div>
                        <div
                          className="contact-info"
                          style={{
                            flex: 1,
                            padding: "3rem",
                            border: "1px solid #ccc",
                            borderRadius: "8px",
                          }}
                        >
                          <p>📍 Oitlo Solutions</p>
                          <p>📧 Email: admin@oitlosolutions.com</p>
                          <p>📞 Phone: +1 4692143636</p>
                          <p>🌐 Website: www.oitlosolutions.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Contactcomp;