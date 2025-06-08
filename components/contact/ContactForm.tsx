"use client";
import { SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { toast } from "sonner";

type FormField = "name" | "email" | "website" | "message";

const ContactForm = () => {
  const [formData, setFormData] = useState<
    Record<FormField, string>
  >({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [errors, setErrors] = useState<
    Record<FormField, string>
  >({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "Name is required";
        }
        if (value.length < 3) {
          return "Name must be at least 3 characters";
        }
        return "";
      case "email":
        if (!value || value.trim() === "") {
          return "Email is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Invalid email address";
        }
        return "";
      case "website":
        if (
          value &&
          !/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/.test(
            value
          )
        ) {
          return "Invalid website URL";
        }
        return "";
      case "message":
        if (!value || value.trim() === "") {
          return "Message is required";
        }
        if (value.length < 10) {
          return "Message must be at least 10 characters";
        }
        return "";
      default:
        return "";
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate on change
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    for (const [key, value] of Object.entries(formData) as [
      FormField,
      string
    ][]) {
      const error = validateField(key, value);
      newErrors[key] = error;
      if (error) {
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    try {
      const web3FormData = new FormData();
      web3FormData.append("name", formData.name);
      web3FormData.append("email", formData.email);
      web3FormData.append("website", formData.website);
      web3FormData.append("message", formData.message);

      web3FormData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""
      );

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: web3FormData,
        }
      );

      const data = await response.json();
      if (data.success) {
        setFormSubmitted(true);
        setFormData({
          name: "",
          email: "",
          website: "",
          message: "",
        });
        setErrors({
          name: "",
          email: "",
          website: "",
          message: "",
        });
        toast.success(
          "Thank you for your message! Will get back to you soon."
        );
      } else {
        throw new Error(
          data.message || "Something went wrong"
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error(
        "There was an error submitting the form. Please try again later."
      );
    }
  };
  return (
    <div className="py-5 w-full">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-5">
          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="input"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="input"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Your Website (if exists)"
              className="input"
            />
            {errors.website && (
              <p className="text-red-500 text-sm mt-1">
                {errors.website}
              </p>
            )}
          </div>
          <div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?*"
              className="input h-32 resize-none"
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-6">
            <button
              className="primary-button h-12 md:h-14 w-[140px] md:w-[170px] flex justify-center items-center"
              type="submit"
            >
              {isSubmitting ? (
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white rounded-full animate-bounce"></div>
                  <div
                    className="w-3 h-3 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-3 h-3 bg-white rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              ) : (
                "Get In Touch"
              )}
            </button>
            <div className="flex gap-x-6">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12  border-2 border-black bg-white text-black lg:w-14 lg:h-14 rounded-sm flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <link.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
