<template>
    <div class="service-view">
        <!-- Why Choose Us -->
        <section class="why-choose-section">
            <h1 class="main-heading">Why You Should Choose Us?</h1>
            <div class="reason-grid">
                <div class="reason-card" v-for="point in reasons" :key="point.text">
                    <i :class="point.icon"></i>
                    <span>{{ point.text }}</span>
                </div>
            </div>
        </section>

        <!-- Image -->
        <section class="image-section">
            <img src="/image1.drawio.png" alt="IT Services Illustration" />
        </section>

        <!-- Services -->
        <section class="services-section">
            <div class="service-card" v-for="service in services" :key="service.title">
                <div class="service-icon">
                    <i :class="service.icon"></i>
                </div>
                <div class="service-content">
                    <h2>{{ service.title }}</h2>
                    <p>{{ service.description }}</p>
                </div>
            </div>
        </section>

        <!-- Flowchart -->
        <section class="flowchart-section">
            <h2>Service Workflow</h2>
            <div class="flowchart">
                <div class="node">Client Inquiry</div>
                <div class="arrow">↓</div>
                <div class="node">Consultation</div>
                <div class="arrow">↓</div>
                <div class="node">Solution Proposal</div>
                <div class="arrow">↓</div>
                <div class="node">Implementation</div>
                <div class="arrow">↓</div>
                <div class="node">Maintenance & Support</div>
            </div>
        </section>

        <!-- Tech Stack -->
        <section class="tech-stack-section">
            <h2>Technologies We Use</h2>
            <p class="stack-note">Here are some of the core software tools we use regularly — and there’s more in our
                arsenal!</p>
            <div class="tech-logos">
                <img v-for="tech in techStack" :key="tech.name" :src="tech.logo" :alt="tech.name" />
            </div>
        </section>
    </div>
</template>

<script setup>
const reasons = [
    { text: 'Comprehensive IT and hardware services under one roof', icon: 'fas fa-layer-group' },
    { text: 'Affordable solutions without compromising on performance', icon: 'fas fa-hand-holding-usd' },
    { text: 'Scalable systems tailored to your business growth', icon: 'fas fa-chart-line' },
    { text: 'Timely project delivery with efficient planning', icon: 'fas fa-clock' },
    { text: 'End-to-end support — from consultation to implementation', icon: 'fas fa-hands-helping' },
    { text: 'High standards in data security and privacy', icon: 'fas fa-shield-alt' },
    { text: '24×7 customer support for uninterrupted operations', icon: 'fas fa-headset' }
];

const services = [
    {
        title: 'IT Consultancy',
        description: 'Strategic advice for IT system planning, infrastructure, and optimization.',
        icon: 'fas fa-lightbulb'
    },
    {
        title: 'Hardware Maintenance',
        description: 'Regular maintenance and repair of systems, servers, and peripherals.',
        icon: 'fas fa-tools'
    },
    {
        title: 'Software Development',
        description: 'Custom solutions using modern frameworks like Django, Spring Boot, and Vue.js.',
        icon: 'fas fa-code'
    },
    {
        title: 'Network Infrastructure',
        description: 'Design and implementation of secure, scalable network systems.',
        icon: 'fas fa-network-wired'
    },
    {
        title: 'ERP Solutions',
        description: 'Deployment and support for SAP, Tally, and other ERP platforms.',
        icon: 'fas fa-chart-line'
    },
    {
        title: 'System Integration',
        description: 'Integrating various IT systems and software for seamless operations.',
        icon: 'fas fa-project-diagram'
    },
    {
        title: 'IT Auditing',
        description: 'Evaluating IT systems and policies for compliance, security, and efficiency.',
        icon: 'fas fa-user-shield'
    },
    {
        title: 'Database Management',
        description: 'Design, implementation, and maintenance of relational and NoSQL databases.',
        icon: 'fas fa-database'
    }
];

const techStack = [
    { name: 'SAP', logo: '/sap.png' },
    { name: 'Django', logo: '/django.png' },
    { name: 'PostgreSQL', logo: '/postgresql.png' },
    { name: 'Git', logo: '/git.png' },
    { name: 'Linux', logo: '/linux.png' },
    { name: 'Vue.js', logo: '/vue-new.png' }
];
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.service-view {
    padding: 40px 20px;
    max-width: 960px;
    margin: auto;
    font-family: 'Segoe UI', sans-serif;
}

/* --- Why Choose Us --- */
.why-choose-section {
    margin-bottom: 50px;
    text-align: center;
}

.why-choose-section .main-heading {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #1e402f;
}

.reason-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 20px;
    justify-content: center;
}

.reason-card {
    background-color: #e6f4ea;
    padding: 16px 14px;
    border-left: 4px solid #228B22;
    /* border-radius: 6px; */
    display: flex;
    align-items: center;
    gap: 12px;
    color: #1e402f;
    font-size: 14px;
    text-align: left;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.reason-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 10px rgba(34, 139, 34, 0.15);
}

.reason-card i {
    font-size: 18px;
    color: #228B22;
}

/* --- Image --- */
.image-section {
    text-align: center;
    margin-bottom: 40px;
}

.image-section img {
    max-width: 100%;
    height: auto;
    border: none;
    background: none;
}

/* --- Services --- */
.services-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 50px;
}

.service-card {
    display: flex;
    align-items: center;
    background-color: #e6f4ea;
    padding: 12px 16px;
    border-left: 5px solid #228B22;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
    width: 90%;
    max-width: 600px;
    transition: background 0.3s;
}

.service-card:hover {
    background-color: #d4f2dc;
}

.service-icon {
    font-size: 22px;
    color: #228B22;
    margin-right: 15px;
    width: 35px;
    text-align: center;
}

.service-content h2 {
    margin: 0;
    font-size: 15px;
    color: #1e402f;
}

.service-content p {
    margin: 3px 0 0;
    font-size: 13px;
    color: #444;
}

/* --- Flowchart --- */
.flowchart-section {
    margin: 60px 0;
    text-align: center;
}

.flowchart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    font-weight: 600;
}

.node {
    background-color: #f0fff0;
    padding: 10px 16px;
    border: 2px solid #228B22;
    font-size: 14px;
}

.arrow {
    font-size: 22px;
    color: #228B22;
}

/* --- Tech Stack --- */
.tech-stack-section {
    margin-top: 50px;
    text-align: center;
}

.tech-stack-section h2 {
    font-size: 20px;
    color: #1c3b2b;
    margin-bottom: 8px;
}

.stack-note {
    font-size: 14px;
    color: #444;
    margin-bottom: 20px;
}

.tech-logos {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 25px;
}

.tech-logos img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    transition: transform 0.3s;
    filter: grayscale(100%);
}

.tech-logos img:hover {
    transform: scale(1.1);
    filter: grayscale(0%);
}
</style>