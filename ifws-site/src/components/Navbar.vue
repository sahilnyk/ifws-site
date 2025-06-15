<template>
    <div id="container">
        <div id="navbar">
            <img src="/webicon1.png" alt="Logo" class="logo" />
            <div id="navbar-links">
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/services" class="nav-link">Services</router-link>
                <router-link to="/clients" class="nav-link">Clients</router-link>
                <router-link to="/team" class="nav-link">Team</router-link>
                <router-link to="/contact" class="nav-link">Contact</router-link>
                <input type="text" placeholder="Search Service:" />
            </div>
        </div>
    </div>
</template>

<script setup>
// No script needed unless you're handling input search logic
</script>

<style scoped>
#container {
    max-width: 960px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid #999;
    box-shadow: 0 0 8px #aaa;
    position: relative;
    z-index: 1;
}

#navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #cde5cd;
    padding: 10px 20px;
    border-bottom: 1px solid #aaa;
    flex-wrap: wrap;
}

#navbar img.logo {
    width: 55px;
    height: auto;
}

#navbar-links {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}

.nav-link {
    text-decoration: none;
    color: #1a4d1a;
    font-weight: 500;
    transition: color 0.2s ease-in-out;
}

.nav-link:hover {
    text-decoration: underline;
    color: #0e380e;
}

.router-link-exact-active {
    font-weight: bold;
    text-decoration: underline;
}

#navbar-links input[type="text"] {
    padding: 4px 6px;
    border: 1px solid #888;
    font-size: 14px;
}
</style>