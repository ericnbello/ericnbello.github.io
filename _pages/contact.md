---
permalink: /contact/
title: "Contact"
layout: single
author_profile: true
---

If you’re looking for help with **data analysis, reporting, or dashboards**, feel free to reach out.  
I work with individuals and teams who want clear, actionable insights from their data.

<div class="page__content contact-page">
  <div class="contact-grid">

    <!-- Left: Contact Info -->
    <div class="contact-info">
      <h3>Get in touch</h3>
      <p class="contact-subtext">
        You can use the form or reach me directly:
      </p>

      <ul class="contact-list">
        <li>
          <img src="/assets/images/mail.svg" alt="" />
          <a href="mailto:contact@ericnbello.com">contact@ericnbello.com</a>
        </li>
        <li>
          <img src="/assets/images/logo-linkedin.svg" alt="" />
          <a href="https://linkedin.com/in/ericnbello" target="_blank" rel="noopener">
            ericnbello
          </a>
        </li>
        <li>
          <img src="/assets/images/logo-x.svg" alt="" />
          <a href="https://x.com/ericnbello" target="_blank" rel="noopener">
            @ericnbello
          </a>
        </li>
      </ul>
    </div>

    <!-- Right: Form -->
    <form
      action="https://formspree.io/f/xnnaaygb"
      method="POST"
      class="contact-form"
    >
      <label>
        Name
        <input type="text" name="name" required />
      </label>

      <label>
        Email
        <input type="email" name="email" required />
      </label>

      <label>
        Reason for reaching out
        <select name="reason" required>
          <option value="">Select one</option>
          <option value="data-analysis">Data analysis project</option>
          <option value="dashboard">Dashboard or reporting</option>
          <option value="contract">Contract / freelance work</option>
          <option value="general">General inquiry</option>
        </select>
      </label>

      <label>
        Message
        <textarea name="message" rows="4" required></textarea>
      </label>

      <button type="submit" class="btn btn--primary">
        Send message
      </button>
    </form>

  </div>
</div>

<style>
.contact-page {
  margin-top: 2rem;
}

.contact-grid {
  display: grid;
  gap: 3rem;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1.2fr;
    align-items: start;
  }
}

/* Left side */
.contact-info h3 {
  margin-top: 0;
}

.contact-subtext {
  color: #94a3b8;
  margin-bottom: 1.5rem;
}

.contact-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

.contact-list img {
  width: 20px;
  height: 20px;
  opacity: 0.8;
}

/* Form */
.contact-form label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.contact-form input,
.contact-form select,
.contact-form textarea {
  width: 100%;
  margin-top: 0.25rem;
  padding: 0.6rem 0.7rem;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  font-size: 1rem;
  background: #fff;
}

.contact-form input:focus,
.contact-form select:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #9ca3af;
  color: #94a3b8;
}

.contact-form button {
  margin-top: 0.5rem;
}
</style>
