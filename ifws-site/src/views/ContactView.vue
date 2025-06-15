<template>
    <div class="contact-view">
        <!-- Contact Heading -->
        <section class="contact-box">
            <h2><i class="fas fa-envelope-open-text"></i> Get in Touch</h2>
            <p class="point">› We’d love to hear from you. Whether it’s a project inquiry or just a question — drop us a
                message.</p>
            <p class="point">› Our team typically replies within 24 hours.</p>
        </section>

        <!-- Contact Info -->
        <section class="info-box">
            <h3><i class="fas fa-info-circle"></i> Contact Information</h3>
            <p><strong>Email:</strong> <a href="mailto:infowaresys1979@gmail.com">infowaresys1979@gmail.com</a></p>
            <p><strong>Phone:</strong> +91-8114389888</p>
        </section>

        <!-- Contact Form -->
        <section class="form-box">
            <h3><i class="fas fa-paper-plane"></i> Send Us a Message</h3>
            <form @submit.prevent="submitForm">
                <div class="form-group">
                    <label for="name">Your Name</label>
                    <input type="text" id="name" v-model="form.name" required />
                </div>

                <div class="form-group">
                    <label for="subject">Subject</label>
                    <select id="subject" v-model="form.subject" required>
                        <option disabled value="">-- Select Subject --</option>
                        <option>General Inquiry</option>
                        <option>Project Discussion</option>
                        <option>Technical Support</option>
                        <option>Feedback</option>
                        <option>Others</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="5" v-model="form.message" required></textarea>
                </div>

                <button type="submit">Send</button>
            </form>
        </section>
    </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
    name: '',
    subject: '',
    message: ''
});

const submitForm = () => {
    alert(`Thank you ${form.name}, your message regarding "${form.subject}" has been sent.`);
    form.name = '';
    form.subject = '';
    form.message = '';
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');

.contact-view {
    font-family: 'Segoe UI', sans-serif;
    padding: 40px 20px;
    max-width: 960px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.contact-box,
.info-box,
.form-box {
    background-color: #f0fff4;
    border: 2px solid #007B5E;
    padding: 24px;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.05);
}

.contact-box h2,
.info-box h3,
.form-box h3 {
    color: #005b3f;
    font-size: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.point {
    font-size: 15px;
    margin: 5px 0;
}

.info-box p {
    font-size: 14px;
    color: #333;
    margin: 8px 0;
}

.info-box a {
    color: #005b3f;
    text-decoration: none;
}

.form-box form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

label {
    font-size: 14px;
    margin-bottom: 6px;
    color: #003d29;
}

input,
textarea,
select {
    padding: 10px;
    border: 2px solid #007B5E;
    background-color: #ffffff;
    font-size: 14px;
    color: #333;
    outline: none;
}

input:focus,
textarea:focus,
select:focus {
    border-color: #004d3c;
}

button {
    background-color: #007B5E;
    color: white;
    padding: 10px 18px;
    border: none;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    width: fit-content;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #005b3f;
}
</style>