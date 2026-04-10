import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    // 👉 Replace with API call
    alert("Form Submitted Successfully!");

    // reset form
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="text-black max-w-7xl mx-auto py-14" id="contactus">
      <div className="flex flex-col lg:flex-row">

        {/* LEFT */}
        <div className="w-full lg:w-[50%] flex flex-col">
          
          {/* Heading */}
          <div className="flex flex-col gap-3 p-6 md:p-10 pb-0">
            <p className="uppercase text-blue-500 font-semibold">
              Contact Us
            </p>

            <h1 className="text-3xl md:text-5xl lg:text-7xl">
              Get in Touch <span className="text-blue-500">With Us</span>
            </h1>

            <p>
              Have questions about our products? Our team is ready to assist you
              with the right solutions.
            </p>
          </div>

          {/* Form */}
          <div className="p-6 md:p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">

              <input
                type="text"
                name="name"
                placeholder="Enter your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 w-full md:w-2/3 rounded bg-blue-100 outline-none"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 w-full md:w-2/3 rounded bg-blue-100 outline-none"
                required
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Comments..."
                value={formData.message}
                onChange={handleChange}
                className="p-3 w-full md:w-2/3 rounded bg-blue-100 outline-none"
                required
              />

              <button
                type="submit"
                className="px-4 py-4 bg-black font-bold text-white w-full md:w-2/3 rounded-lg 
                hover:bg-white hover:text-black hover:border border-black transition"
              >
                Submit
              </button>

            </form>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block w-full lg:w-[60%] flex justify-center items-center p-6">
          <img
            src="contactus.jpg"
            alt="contact"
            className="rounded-xl object-cover max-h-full w-full object-fit"
          />
        </div>

      </div>
    </section>
  );
};

export default ContactUs;