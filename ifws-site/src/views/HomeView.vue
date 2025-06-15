<template>
    <div id="home-content">
        <div id="nameplate">
            <img src="/NamePlate.png" alt="Company Nameplate" />
        </div>

        <!-- COMPANY PROFILE (Styled) -->
        <section id="company-profile">
            <h2>Company Profile</h2>
            <p><strong>Infoware Services</strong> is an emerging IT solution provider delivering scalable, customized
                systems across various domains. We specialize in full-cycle software development, ERP implementations,
                system integrations, IT infrastructure, AI, and security solutions. Backed by a dedicated team, our goal
                is to help organizations streamline operations through smart technology adoption and consulting.</p>
            <ul>
                <li>Customized ERP and software development for industries</li>
                <li>Network setup, IT support, and infrastructure planning</li>
                <li>AI-based automation and analytics solutions</li>
                <li>Security compliance and system auditing</li>
                <li>Trusted by MSMEs and Enterprises across India</li>
            </ul>
        </section>


        <!-- FLOWCHARTS -->
        <div class="flowcharts">
            <pre class="flowchart-box">
  ┌─────────────┐
  │   CLIENT    │
  └─────┬───────┘
        │
  ┌─────▼───────┐
  │  CONSULTING │
  └─────┬───────┘
        │
  ┌─────▼───────┐
  │ DEVELOPMENT │
  └─────┬───────┘
        │
  ┌─────▼───────┐
  │  DELIVERY   │
  └─────┬───────┘
        │
  ┌─────▼───────┐
  │  SUPPORT    │
  └─────────────┘
        </pre>

            <pre class="flowchart-box">
  ┌────────────────────┐
  │ IT CONSULTATION    │
  └─────┬───────┬──────┘
        │       │
  ┌─────▼───┐ ┌─▼──────┐
  │DEVELOP- │ │SUPPORT│
  │ MENT    │ │ TEAM  │
  │ TEAM    │ └───────┘
  └─────┬───┘
        │
  ┌─────▼──────────┐
  │ INSTALLATION   │
  │ TEAM           │
  └────────────────┘
        </pre>
        </div>

        <!-- COMPLIANCE + SERVICES -->
        <div class="compliance-services">
            <!-- COMPLIANCE -->
            <div id="certificates">
                <h3>Compliance & Trust</h3>
                <ul>
                    <li>Registered under MSME: UDYAM-BR-XXXXXXXX</li>
                    <li>GST Registered</li>
                    <li>PAN, Aadhar Verified</li>
                    <li>Digital Signature Certificate Available</li>
                    <li>ISO 27001-Aligned Internal Practices</li>
                    <li>In-house legacy support: PHP, Apache, MySQL</li>
                    <li>We build scalable, customized software using the latest technologies</li>
                </ul>
            </div>

            <!-- SERVICES -->
            <div class="services-box inline-service">
                <h2>Our Services</h2>
                <ul class="custom-list">
                    <li>ERP Implementation & Consulting</li>
                    <li>Software Development</li>
                    <li>Network & IT Infrastructure</li>
                    <li>AI & Automation</li>
                    <li>SAP Services</li>
                    <li>Database Management</li>
                    <li>Security Solutions</li>
                    <li>IT Auditing</li>
                </ul>
            </div>
        </div>

        <!-- REACH OUT -->
        <div class="home-columns">
            <div class="main-section">
                <form @submit.prevent="sendEmail" ref="form">
                    <h3>Reach Out</h3>
                    <input type="text" name="from_name" placeholder="Your Name" required />
                    <input type="email" name="from_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>

        <!-- GLOBAL SUCCESS ALERT -->
        <div v-if="submitted" class="global-alert">
            <div class="alert-content">
                <span>Thanks for your message. We will get back to you soon!</span>
                <button @click="submitted = false">Okay</button>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
    name: "HomeView",
    data() {
        return {
            submitted: false,
        };
    },
    methods: {
        sendEmail() {
            emailjs
                .sendForm("service_frgx24z", "template_v7bvd98", this.$refs.form, "dbYEiNrZVqz7jpBms")
                .then(() => {
                    this.submitted = true;
                    this.$refs.form.reset();
                    setTimeout(() => (this.submitted = false), 5000);
                })
                .catch((error) => {
                    alert("Failed to send message. Please try again.");
                    console.error(error);
                });
        },
    },
};
</script>

<style scoped>
#home-content {
    padding: 20px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    color: #222;
    background-color: #fff;
}

#nameplate {
    text-align: center;
    margin: 10px 0;
}

#nameplate img {
    max-width: 300px;
    height: auto;
}

/* COMPANY PROFILE */
#company-profile {
    border-left: 5px solid #3399cc;
    background-color: #f5faff;
    padding: 10px 15px;
    margin-bottom: 30px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);
}

#company-profile h2 {
    background-color: #e0f3ff;
    color: #225577;
    font-size: 18px;
    padding: 6px 10px;
    margin: -10px -15px 10px -15px;
    border-bottom: 1px solid #b5dfff;
}

#company-profile p {
    font-size: 14px;
    color: #333;
    line-height: 1.6;
    margin-bottom: 10px;
}

#company-profile ul {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

#company-profile li {
    position: relative;
    padding-left: 18px;
    margin-bottom: 6px;
    font-size: 13px;
    color: #333;
    line-height: 1.4;
}

#company-profile li::before {
    content: "›";
    position: absolute;
    left: 0;
    top: 0;
    color: #3399cc;
    font-weight: bold;
    font-size: 14px;
}

/* FLOWCHARTS */
.flowcharts {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin: 10px 0;
    flex-wrap: wrap;
}

.flowchart-box {
    font-family: monospace;
    white-space: pre;
    font-size: 13px;
    color: #222;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    line-height: 1.4;
}

/* COMPLIANCE + SERVICES layout */
.compliance-services {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
    margin-top: 30px;
    align-items: flex-start;
}

#certificates,
.inline-service {
    border-left: 5px solid #3399cc;
    background-color: #f5faff;
    padding: 10px 15px;
    margin-bottom: 20px;
    flex: 1;
    min-width: 260px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.05);
}

#certificates h3,
.inline-service h2 {
    background-color: #e0f3ff;
    color: #225577;
    font-size: 16px;
    padding: 6px 10px;
    margin: -10px -15px 10px -15px;
    border-bottom: 1px solid #b5dfff;
}

#certificates ul,
.custom-list {
    list-style: none;
    padding-left: 0;
    margin: 0;
}

#certificates li,
.custom-list li {
    margin-bottom: 6px;
    padding-left: 18px;
    position: relative;
    font-size: 13px;
    color: #333;
    line-height: 1.4;
}

#certificates li::before,
.custom-list li::before {
    content: "›";
    position: absolute;
    left: 0;
    top: 0;
    color: #3399cc;
    font-weight: bold;
    font-size: 14px;
}

/* FORM */
form {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

form h3 {
    margin-bottom: 10px;
    color: #1a4d1a;
}

form input,
form textarea {
    padding: 8px;
    font-size: 14px;
    border: 1px solid #919191;
    font-family: inherit;
}

form button {
    background-color: #4caf50;
    color: white;
    padding: 6px 12px;
    font-size: 13px;
    font-weight: bold;
    border: none;
    cursor: pointer;
    width: fit-content;
    align-self: flex-start;
    transition: background-color 0.3s;
}

form button:hover {
    background-color: #45a049;
}

/* GLOBAL ALERT */
.global-alert {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #eafbe7;
    color: #1a4d1a;
    border: 1px solid #4caf50;
    padding: 12px 18px;
    font-size: 14px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    width: auto;
    min-width: 300px;
    max-width: 90%;
    border-radius: 0;
}

.global-alert button {
    background-color: #4caf50;
    color: white;
    border: none;
    padding: 4px 10px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 20px;
    cursor: pointer;
}

.global-alert button:hover {
    background-color: #3e9142;
}
</style>
