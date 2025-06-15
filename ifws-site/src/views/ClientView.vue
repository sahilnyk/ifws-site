<template>
    <div class="client-view">
        <h1 class="main-heading">Our Clients by Sector</h1>

        <!-- Sectors -->
        <div class="sectors-container">
            <div class="sector-box" v-for="sector in sectors" :key="sector.name">
                <h2>{{ sector.name }}</h2>
                <div class="points">
                    <p v-for="point in sector.points" :key="point">› {{ point }}</p>
                </div>
                <h3>Our Approach</h3>
                <div class="flowchart">
                    <template v-for="(step, index) in sector.flow" :key="step">
                        <div class="node">{{ step }}</div>
                        <div v-if="index !== sector.flow.length - 1" class="arrow">↓</div>
                    </template>
                </div>
            </div>
        </div>

        <!-- Counter Box -->
        <div class="counter-box">
            <div class="counters">
                <div class="counter-item">
                    <p class="label">Clients</p>
                    <p class="value">{{ counters.clients }}</p>
                </div>
                <div class="counter-item">
                    <p class="label">Projects</p>
                    <p class="value">{{ counters.projects }}</p>
                </div>
                <div class="counter-item">
                    <p class="label">Orders</p>
                    <p class="value">{{ counters.orders }}</p>
                </div>
            </div>
            <p class="note">
                We have some ongoing projects under development, soon to be completed.
            </p>
        </div>
    </div>
</template>

<script setup>
const sectors = [
    {
        name: 'Manufacturing',
        points: [
            'Automation systems for production tracking',
            'Inventory & logistics optimization',
            'ERP integration tailored to factory workflows'
        ],
        flow: [
            'Requirement Gathering',
            'On-Site Assessment',
            'Solution Design',
            'Integration & Testing',
            'Training & Support'
        ]
    },
    {
        name: 'Restaurants',
        points: [
            'POS system setup and customization',
            'Billing, order tracking, and analytics',
            'Cloud-based kitchen coordination'
        ],
        flow: [
            'Initial Discussion',
            'Workflow Mapping',
            'POS Implementation',
            'Feedback & Tweaks',
            'Live Support'
        ]
    },
    {
        name: 'Hospitals',
        points: [
            'Patient records digitization',
            'Infrastructure setup & security',
            'Inventory management of medicines'
        ],
        flow: [
            'Data Study',
            'Compliance Planning',
            'Custom Module Setup',
            'Trial Deployment',
            'Ongoing Monitoring'
        ]
    },
    {
        name: 'Schools & Institutions',
        points: [
            'Attendance & results management',
            'Fee and finance automation',
            'Online class & resource management'
        ],
        flow: [
            'Demo Presentation',
            'Admin Workflow Planning',
            'Portal Setup',
            'Training Sessions',
            'Go Live'
        ]
    }
];

const counters = {
    clients: 2,
    projects: 3,
    orders: 4
};
</script>

<style scoped>
.client-view {
    padding: 40px 20px;
    max-width: 1200px;
    margin: auto;
    font-family: 'Segoe UI', sans-serif;
    color: #003b2f;
}

.main-heading {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
    color: #004d33;
}

.sectors-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.sector-box {
    background-color: #e8f6ef;
    border: 2px solid #007d5c;
    padding: 20px;
    width: 280px;
    box-sizing: border-box;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.06);
}

.sector-box h2 {
    font-size: 18px;
    margin-bottom: 12px;
    color: #003e2f;
}

.points p {
    margin: 6px 0;
    font-size: 14px;
}

.sector-box h3 {
    margin-top: 20px;
    font-size: 15px;
    color: #004f3f;
}

.flowchart {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12px;
}

.node {
    background-color: #ffffff;
    padding: 8px 12px;
    border: 2px solid #007d5c;
    font-size: 13px;
    width: 100%;
    text-align: center;
    margin-bottom: 0px;
}

.arrow {
    font-size: 20px;
    color: #007d5c;
    margin: 6px 0;
}

.counter-box {
    margin-top: 50px;
    background-color: #e0f4ec;
    border: 2px solid #007d5c;
    padding: 25px;
    text-align: center;
}

.counters {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-bottom: 15px;
}

.counter-item .label {
    font-size: 16px;
    color: #004d3d;
}

.counter-item .value {
    font-size: 26px;
    font-weight: bold;
    color: #003826;
}

.note {
    font-size: 13px;
    color: #444;
    max-width: 700px;
    margin: 0 auto;
}
</style>