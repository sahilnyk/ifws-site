<template>
    <div class="team-view">
        <section class="team-box">
            <h2><i class="fas fa-users"></i> Our Team</h2>
            <p class="point">› We have a skilled and experienced team with deep industry expertise.</p>
            <p class="point">› Our team is capable of designing, developing, and supporting complex IT infrastructure
                and software solutions.</p>
            <p class="point">› Our team leads bring <strong>29 years of experience</strong> working across multiple IT
                sectors like manufacturing, healthcare, and education.</p>

            <div class="team-flowchart-title">How Our Team Works</div>
            <div class="flowchart">
                <div class="flow-box">
                    <h3><i class="fas fa-chess-king"></i> Team Lead</h3>
                    <p>29+ years of IT experience leading projects across multiple sectors with strategic planning and
                        architecture skills.</p>
                </div>
                <div class="arrow">↓</div>

                <div class="flow-box">
                    <h3><i class="fas fa-code"></i> Development Team</h3>
                    <p>Experienced developers proficient in latest technologies like Django, Spring Boot, PostgreSQL,
                        Vue.js, etc., ensuring robust solution delivery.</p>
                </div>
                <div class="arrow">↓</div>

                <div class="flow-box">
                    <h3><i class="fas fa-headset"></i> Support Team</h3>
                    <p>Handles post-deployment monitoring, performance checks, user training, and ongoing support for
                        clients to ensure smooth operations.</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// No dynamic logic needed
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.team-view {
    font-family: 'Segoe UI', sans-serif;
    padding: 40px 20px;
    max-width: 1000px;
    margin: auto;
}

.team-box {
    background-color: #f0fff4;
    border: 2px solid #007B5E;
    padding: 30px 20px;
    margin-bottom: 40px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.06);
}

.team-box h2 {
    font-size: 22px;
    color: #004d3c;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.point {
    margin: 8px 0;
    font-size: 15px;
    color: #333;
}

.team-flowchart-title {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #00664d;
    text-align: center;
    margin-bottom: 20px;
}

.flowchart {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.flow-box {
    background-color: #ffffff;
    border: 2px solid #007B5E;
    padding: 16px 20px;
    width: 90%;
    max-width: 600px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.08);
    text-align: left;
}

.flow-box h3 {
    font-size: 16px;
    color: #005b3f;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.flow-box p {
    font-size: 14px;
    color: #333;
    margin: 0;
}

.arrow {
    font-size: 22px;
    color: #007B5E;
}
</style>