<template>
    <div id="footer">
        <div class="footer-top">
            <div class="center-links">
                <a href="#">Privacy Policy</a>
                &nbsp;|&nbsp;
                <a href="#">Terms & Conditions</a>
            </div>
            <div class="socials">
                <a href="https://linkedin.com" target="_blank" title="LinkedIn">
                    <img src="/linkedin.png" alt="LinkedIn" />
                </a>
                <a href="https://twitter.com" target="_blank" title="Twitter">
                    <img src="/Twitter.png" alt="Twitter" />
                </a>
            </div>
        </div>
        <div class="footer-bottom">
            &copy; 2003–{{ new Date().getFullYear() }} Infoware System |
            MSME UDYAM Verified | GSTIN Registered |
            Rendered by Vue.js |
            Visitor Count: {{ visitorCount }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterComponent',
    data() {
        return {
            visitorCount: 0
        };
    },
    mounted() {
        const count = localStorage.getItem('visitorCount');
        this.visitorCount = count ? parseInt(count) + 1 : 1;
        localStorage.setItem('visitorCount', this.visitorCount);
    }
};
</script>

<style scoped>
#footer {
    background-color: #e0eae0;
    text-align: center;
    padding: 10px 0;
    font-size: 12px;
    border-top: 2px solid #ccc;
    color: #222;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960px;
    margin: 0 auto 8px;
    padding: 0 10px;
    flex-wrap: wrap;
}

.center-links {
    flex: 1;
    text-align: center;
}

.center-links a {
    text-decoration: none;
    color: #1a4d1a;
    margin: 0 5px;
}

.center-links a:hover {
    text-decoration: underline;
}

.socials {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}

.socials a img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    /* Ensures the icon fits while maintaining aspect ratio */
    display: block;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: 0.3s ease;
}

.socials a img:hover {
    filter: grayscale(0%);
    opacity: 1;
}

.footer-bottom {
    border-top: 1px solid #ccc;
    padding-top: 6px;
    font-size: 11px;
}
</style>