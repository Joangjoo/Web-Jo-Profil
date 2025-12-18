<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const canvasRef = ref<HTMLCanvasElement | null>(null);
const score = ref(0);
const highScore = ref(parseInt(localStorage.getItem('bugHunterHighScore') || '0'));
const gameState = ref<'START' | 'PLAYING' | 'GAMEOVER'>('START');

let ctx: CanvasRenderingContext2D | null = null;
let animationFrameId: number;
let lastTime = 0;

// Game Entities
interface Entity {
    x: number;
    y: number;
    radius: number;
    color: string;
    velocity: { x: number; y: number };
}

interface Player extends Entity {
    angle: number;
}

interface Projectile extends Entity { }

interface Enemy extends Entity {
    speed: number;
}

interface Particle extends Entity {
    alpha: number;
}

// State
let player: Player = { x: 0, y: 0, radius: 10, color: '#00f0ff', velocity: { x: 0, y: 0 }, angle: 0 };
let projectiles: Projectile[] = [];
let enemies: Enemy[] = [];
let particles: Particle[] = [];
let mouse = { x: 0, y: 0 };
let spawnInterval = 1000;
let lastSpawn = 0;

// Init Game
const initGame = () => {
    if (!canvasRef.value) return;
    const canvas = canvasRef.value;
    canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
    canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;

    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
    projectiles = [];
    enemies = [];
    particles = [];
    score.value = 0;
    gameState.value = 'PLAYING';

    lastTime = performance.now();
    loop(lastTime);
};

const spawnEnemy = (timestamp: number) => {
    if (!canvasRef.value) return;
    if (timestamp - lastSpawn < spawnInterval) return;

    const canvas = canvasRef.value;
    const radius = Math.random() * (30 - 10) + 10;
    let x, y;

    if (Math.random() < 0.5) {
        x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        y = Math.random() * canvas.height;
    } else {
        x = Math.random() * canvas.width;
        y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
    }

    const angle = Math.atan2(player.y - y, player.x - x);
    const speed = 1 + score.value * 0.005; // Difficulty scaling

    enemies.push({
        x,
        y,
        radius,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`,
        velocity: {
            x: Math.cos(angle) * speed,
            y: Math.sin(angle) * speed
        },
        speed
    });

    lastSpawn = timestamp;
    spawnInterval = Math.max(200, 1000 - score.value * 2); // Cap spawn rate
};

const createExplosion = (x: number, y: number, color: string) => {
    for (let i = 0; i < 8; i++) {
        particles.push({
            x,
            y,
            radius: Math.random() * 3,
            color,
            velocity: {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            },
            alpha: 1
        });
    }
};

const update = (timestamp: number) => {
    if (!canvasRef.value || gameState.value !== 'PLAYING') return;
    const canvas = canvasRef.value;

    // Smooth player movement towards mouse (optional, curretly fixed center or mouse follow logic)
    // Let's make player follow mouse directly but with some lag for 'weight'
    // player.x += (mouse.x - player.x) * 0.1; 
    // player.y += (mouse.y - player.y) * 0.1;
    // Actually, for this type of shooter, usually player is in center or WASD.
    // Let's stick to: Player is at mouse position exact? No, let's effectively be the cursor.
    player.x = mouse.x;
    player.y = mouse.y;

    // Projectiles
    projectiles.forEach((p, index) => {
        p.x += p.velocity.x;
        p.y += p.velocity.y;

        // Screen bounds
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
            projectiles.splice(index, 1);
        }
    });

    // Enemies
    enemies.forEach((enemy, eIndex) => {
        // Move towards player
        const angle = Math.atan2(player.y - enemy.y, player.x - enemy.x);
        enemy.velocity.x = Math.cos(angle) * enemy.speed;
        enemy.velocity.y = Math.sin(angle) * enemy.speed;

        enemy.x += enemy.velocity.x;
        enemy.y += enemy.velocity.y;

        // Collision with Player
        const dist = Math.hypot(player.x - enemy.x, player.y - enemy.y);
        if (dist - enemy.radius - player.radius < 1) {
            endGame();
        }

        // Collision with Projectiles
        projectiles.forEach((projectile, pIndex) => {
            const pDist = Math.hypot(projectile.x - enemy.x, projectile.y - enemy.y);
            if (pDist - enemy.radius - projectile.radius < 1) {
                // Hit!
                score.value += 100;
                createExplosion(enemy.x, enemy.y, enemy.color);

                // Shrink or destroy
                if (enemy.radius - 10 > 10) {
                    enemy.radius -= 10;
                    projectiles.splice(pIndex, 1);
                } else {
                    enemies.splice(eIndex, 1);
                    projectiles.splice(pIndex, 1);
                }
            }
        });
    });

    // Particles
    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.velocity.x *= 0.95; // Friction
            particle.velocity.y *= 0.95;
            particle.x += particle.velocity.x;
            particle.y += particle.velocity.y;
            particle.alpha -= 0.02;
        }
    });

    spawnEnemy(timestamp);
};

const draw = () => {
    if (!canvasRef.value || !ctx) return;
    const canvas = canvasRef.value;

    // Fade effect for trails
    ctx.fillStyle = 'rgba(10, 10, 20, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw Player
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2, false);
    ctx.fillStyle = player.color;
    ctx.fill();
    ctx.shadowBlur = 15;
    ctx.shadowColor = player.color;
    ctx.closePath();
    ctx.shadowBlur = 0; // Reset

    // Draw Projectiles
    projectiles.forEach((p) => {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2, false);
        ctx!.fillStyle = p.color;
        ctx!.fill();
    });

    // Draw Enemies
    enemies.forEach((enemy) => {
        ctx!.beginPath();
        ctx!.arc(enemy.x, enemy.y, enemy.radius, 0, Math.PI * 2, false);
        ctx!.fillStyle = enemy.color;
        ctx!.fill();
        ctx!.strokeStyle = 'white';
        ctx!.lineWidth = 1;
        ctx!.stroke();
    });

    // Draw Particles
    particles.forEach((particle) => {
        ctx!.save();
        ctx!.globalAlpha = particle.alpha;
        ctx!.beginPath();
        ctx!.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false);
        ctx!.fillStyle = particle.color;
        ctx!.fill();
        ctx!.restore();
    });
};

const loop = (timestamp: number) => {
    if (gameState.value !== 'PLAYING') return;

    update(timestamp);
    draw();
    animationFrameId = requestAnimationFrame(loop);
};

const endGame = () => {
    gameState.value = 'GAMEOVER';
    cancelAnimationFrame(animationFrameId);
    if (score.value > highScore.value) {
        highScore.value = score.value;
        localStorage.setItem('bugHunterHighScore', highScore.value.toString());
    }
};

const handleMouseMove = (e: MouseEvent) => {
    if (!canvasRef.value) return;
    const rect = canvasRef.value.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
};

const handleClick = (e: MouseEvent) => {
    if (gameState.value !== 'PLAYING') return;

    // Shoot functionality
    // Calculate angle towards... well player IS the cursor, so shoot forward?
    // Let's shoot in 4 directions or just spray?
    // Or maybe let's change: Player is center, Mouse aims.
    // BUT user asked for cool mini game in lab.
    // Let's stick with: Player follows mouse, click emits wave blast.

    // Radial Blast
    for (let i = 0; i < 8; i++) {
        const angle = (Math.PI * 2 / 8) * i;
        projectiles.push({
            x: player.x,
            y: player.y,
            radius: 4,
            color: '#fff',
            velocity: {
                x: Math.cos(angle) * 8,
                y: Math.sin(angle) * 8
            }
        });
    }
};

const handleResize = () => {
    if (canvasRef.value) {
        canvasRef.value.width = canvasRef.value.parentElement?.clientWidth || window.innerWidth;
        canvasRef.value.height = canvasRef.value.parentElement?.clientHeight || window.innerHeight;
    }
};

onMounted(() => {
    if (canvasRef.value) {
        ctx = canvasRef.value.getContext('2d');
        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove); // Track globally for smoother feel? No, relative to canvas.
    }
});

onUnmounted(() => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', handleResize);
});
</script>

<template>
    <div
        class="relative w-full h-full overflow-hidden rounded-xl border border-[#00f0ff]/20 bg-[#050510] shadow-[0_0_30px_rgba(0,240,255,0.1)] group cursor-none">
        <!-- Canvas -->
        <canvas ref="canvasRef" @mousemove="handleMouseMove" @click="handleClick" class="block w-full h-full"></canvas>

        <!-- UI Overlays -->
        <div class="absolute top-4 left-6 pointer-events-none select-none">
            <h2 class="text-[#00f0ff] font-mono text-xl font-bold">BUG HUNTER PROTOCOL</h2>
            <div class="text-[#a0a0b0] text-sm">SCORE: <span class="text-white">{{ score }}</span></div>
            <div class="text-[#a0a0b0] text-xs">HIGH SCORE: {{ highScore }}</div>
        </div>

        <!-- Start Screen -->
        <div v-if="gameState === 'START'"
            class="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm z-10">
            <h1 class="text-4xl font-bold text-white mb-4 glitch-text">SYSTEM DEFENSE</h1>
            <p class="text-[#a0a0b0] mb-8 max-w-md text-center">
                System integrity compromised. Bugs detected. <br>
                Pilot the generic-cursor-ship to purge the glitches. <br>
                <span class="text-[#00f0ff]">CLICK</span> to release energy blast.
            </p>
            <button @click="initGame"
                class="px-8 py-3 bg-[#00f0ff]/10 border border-[#00f0ff] text-[#00f0ff] hover:bg-[#00f0ff] hover:text-black transition-all duration-300 font-bold tracking-widest rounded uppercase">
                Initialize
            </button>
        </div>

        <!-- Game Over Screen -->
        <div v-if="gameState === 'GAMEOVER'"
            class="absolute inset-0 flex flex-col items-center justify-center bg-red-900/40 backdrop-blur-sm z-10">
            <h1 class="text-5xl font-bold text-red-500 mb-2 glitch-text">SYSTEM CRASHED</h1>
            <p class="text-white mb-6">FINAL SCORE: {{ score }}</p>
            <button @click="initGame"
                class="px-8 py-3 bg-red-500/10 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 font-bold tracking-widest rounded uppercase">
                Reboot System
            </button>
        </div>
    </div>
</template>

<style scoped>
.glitch-text {
    text-shadow: 2px 0 #00f0ff, -2px 0 #ff00c1;
    animation: glitch 1s infinite alternate-reverse;
}

@keyframes glitch {
    0% {
        transform: skew(0deg);
    }

    20% {
        transform: skew(-2deg);
    }

    40% {
        transform: skew(2deg);
    }

    100% {
        transform: skew(0deg);
    }
}
</style>
