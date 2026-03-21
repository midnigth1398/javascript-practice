let enemyHealth = 30;
let maxEnemyHealth = 30;
let player = { health: 100, maxHealth: 100 };

let damage = 3;
let money = 0;
let level = 1;

let paused = false;
let lastTime = 0;

// UI
function updateUI() {
    document.getElementById("enemyText").textContent = "👹 " + enemyHealth;
    document.getElementById("enemyBar").style.width =
        (enemyHealth / maxEnemyHealth) * 100 + "%";

    document.getElementById("playerBar").style.width =
        (player.health / player.maxHealth) * 100 + "%";

    document.getElementById("money").textContent = "💰 " + money;
    document.getElementById("level").textContent = "Nivel: " + level;
}

// 💥 daño flotante
function showDamage(text, color="white") {
    let el = document.createElement("div");
    el.textContent = text;
    el.className = "damage";
    el.style.color = color;

    el.style.left = (window.innerWidth/2 + Math.random()*100 - 50) + "px";
    el.style.top = "200px";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

// animación golpe
function hit() {
    let enemy = document.getElementById("enemyImg");
    enemy.style.transform = "scale(1.2)";
    setTimeout(() => enemy.style.transform = "scale(1)", 100);
}

// ataque
function attack() {
    if (paused) return;

    let crit = Math.random() < 0.3;
    let dmg = crit ? damage * 2 : damage;

    enemyHealth -= dmg;

    showDamage("-" + dmg, crit ? "yellow" : "white");
    hit();

    if (enemyHealth <= 0) nextEnemy();

    updateUI();
}

// skill
function skill() {
    if (paused) return;

    let burst = damage * 4;
    enemyHealth -= burst;

    showDamage("-" + burst, "orange");
    hit();

    if (enemyHealth <= 0) nextEnemy();

    updateUI();
}

// heal
function heal() {
    if (paused) return;

    player.health += 20;
    if (player.health > player.maxHealth) player.health = player.maxHealth;

    showDamage("+20", "lime");
    updateUI();
}

// enemigo loop optimizado
function gameLoop(time) {
    if (!paused) {
        if (time - lastTime > 1500) {
            player.health -= 2;

            if (player.health <= 0) {
                alert("💀 Game Over");
                resetGame();
                return;
            }

            lastTime = time;
            updateUI();
        }
    }

    requestAnimationFrame(gameLoop);
}

// siguiente enemigo
function nextEnemy() {
    level++;
    maxEnemyHealth += 15;
    enemyHealth = maxEnemyHealth;
    money += 20;
}

// pausa
function togglePause() {
    paused = !paused;

    document.getElementById("pauseMenu").style.display =
        paused ? "flex" : "none";
}

// reset
function resetGame() {
    location.reload();
}

// iniciar loop
requestAnimationFrame(gameLoop);
updateUI();