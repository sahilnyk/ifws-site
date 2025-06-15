<template>
    <div id="particles-js" class="particles-background"></div>
</template>

<script>
export default {
    name: 'Particle',
    mounted() {
        if (window.particlesJS) {
            window.particlesJS('particles-js', {
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            value_area: 800
                        }
                    },
                    color: {
                        value: '#2e7d32' // darker green for contrast
                    },
                    shape: {
                        type: 'polygon',
                        polygon: {
                            nb_sides: 5
                        }
                    },
                    opacity: {
                        value: 0.9,
                        anim: {
                            enable: true,
                            speed: 1,
                            opacity_min: 0.5,
                            sync: false
                        }
                    },
                    size: {
                        value: 4,
                        random: true
                    },
                    line_linked: {
                        enable: true,
                        distance: 130,
                        color: '#66bb6a', // lighter green
                        opacity: 0.6,
                        width: 1.2
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: 'none',
                        random: false,
                        straight: false,
                        out_mode: 'out',
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: 'canvas',
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'grab'
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse'
                        }
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            line_linked: {
                                opacity: 1
                            }
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4
                        }
                    }
                },
                retina_detect: true
            });
        } else {
            console.error('particles.js not found on window object.');
        }
    }
};
</script>

<style scoped>
.particles-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: radial-gradient(#e0e0e0, #ffffff);
    /* subtle green glow */
}
</style>