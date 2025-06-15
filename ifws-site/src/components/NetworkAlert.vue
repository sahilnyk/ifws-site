<template>
    <div v-if="showAlert" id="customAlert">
        <div id="customAlertBox">
            <canvas id="networkWorld" width="320" height="320" ref="globeCanvas"></canvas>
            <p>We provide IT Consultancy & Services all over the globe</p>
            <button @click="closeAlert">Okay</button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const showAlert = ref(true);
const globeCanvas = ref(null);

const closeAlert = () => {
    showAlert.value = false;
};

onMounted(() => {
    const canvas = globeCanvas.value;
    const ctx = canvas.getContext('2d');
    const w = canvas.width;
    const h = canvas.height;
    const radius = 100;
    const points = [];

    const latSteps = 15;
    const lonSteps = 30;

    for (let lat = -75; lat <= 75; lat += latSteps) {
        for (let lon = 0; lon < 360; lon += lonSteps) {
            const phi = (lat * Math.PI) / 180;
            const theta = (lon * Math.PI) / 180;
            const x = radius * Math.cos(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi);
            const z = radius * Math.cos(phi) * Math.sin(theta);
            points.push({ x, y, z });
        }
    }

    let angleY = 0;
    let angleX = 0;
    let lineDashOffset = 0;

    function rotate(point, angleY, angleX) {
        let { x, y, z } = point;

        const cosY = Math.cos(angleY);
        const sinY = Math.sin(angleY);
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        const cosX = Math.cos(angleX);
        const sinX = Math.sin(angleX);
        let y1 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        return { x: x1, y: y1, z: z2 };
    }

    function project(p) {
        const scale = 400 / (400 + p.z);
        return {
            x: w / 2 + p.x * scale,
            y: h / 2 + p.y * scale,
            size: scale
        };
    }

    function animate() {
        ctx.clearRect(0, 0, w, h);

        const rotated = points.map(p => rotate(p, angleY, angleX));
        const projected = rotated.map(project);

        ctx.setLineDash([6, 10]);
        ctx.lineDashOffset = -lineDashOffset;
        lineDashOffset += 1; // Controls the speed of line travel

        // Animate "traveling" network lines
        for (let i = 0; i < rotated.length; i++) {
            for (let j = i + 1; j < rotated.length; j++) {
                const dx = rotated[i].x - rotated[j].x;
                const dy = rotated[i].y - rotated[j].y;
                const dz = rotated[i].z - rotated[j].z;
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 35) {
                    ctx.beginPath();
                    ctx.strokeStyle = 'rgba(100, 180, 255, 0.35)'; // Soft blue
                    ctx.lineWidth = 1;
                    ctx.moveTo(projected[i].x, projected[i].y);
                    ctx.lineTo(projected[j].x, projected[j].y);
                    ctx.stroke();
                }
            }
        }

        ctx.setLineDash([]); // Disable dash for dots

        projected.forEach(p => {
            ctx.beginPath();
            ctx.fillStyle = `rgba(0, 255, 0, ${p.size})`; // Bright green dots
            ctx.arc(p.x, p.y, 2.4 * p.size, 0, Math.PI * 2);
            ctx.fill();
        });

        angleY += 0.005;
        angleX += 0.0025;
        requestAnimationFrame(animate);
    }

    animate();
});
</script>

<style scoped>
#customAlert {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
}

#customAlertBox {
    text-align: center;
    padding: 20px;
}

#customAlertBox canvas {
    background: transparent;
    margin-bottom: 20px;
}

#customAlertBox p {
    color: #e0ffe0;
    font-size: 16px;
}

#customAlertBox button {
    padding: 6px 14px;
    background-color: #1bd85a;
    color: rgb(255, 255, 255);
    border: none;
    /* border-radius: 4px; */
    cursor: pointer;
    /* font-weight: bold; */
    font-size: 13px;
    transition: background-color 0.3s ease;
}

#customAlertBox button:hover {
    background-color: #4a584a;
}
</style>