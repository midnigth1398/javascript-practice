let enemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;
let upgradeCost = 10;
let isBoss = false;

let player = {
    name: "Hero",
    health: 100,
    maxHealth: 100
};

let gameLoop;
let speed = 2000;

// 🔄 UI
function updateUI() {
    let maxHealth = 10 + (level * 2);
    let healthPercent = (enemyHealth / maxHealth) * 100;

    document.getElementById("healthBar").style.width = healthPercent + "%";

    let playerPercent = (player.health / player.maxHealth) * 100;
    document.getElementById("playerBar").style.width = playerPercent + "%";

    document.getElementById("enemy").textContent = "Vida del enemigo: " + enemyHealth;
    document.getElementById("money").textContent = "Dinero: " + money;
    document.getElementById("level").textContent = "Nivel: " + level;
    document.getElementById("damage").textContent = "Daño: " + damage;
    document.getElementById("cost").textContent = "Costo mejora: " + upgradeCost;
}

// 🗡️ ATAQUE
function attack() {
    enemyHealth -= damage;

    // animación
    let img = document.getElementById("enemyImg");
    img.style.transform = "scale(1.2)";
    setTimeout(() => img.style.transform = "scale(1)", 100);

    // cooldown botón
    let btn = document.getElementById("attackBtn");
    btn.disabled = true;
    setTimeout(() => btn.disabled = false, 300);

    updateUI();

    if (enemyHealth <= 0) {
        if (isBoss) {
            money += 50;
            player.health += 30;
        } else {
            money += 5;
            player.health += 10;
        }

        // límite de vida
        if (player.health > player.maxHealth) {
            player.health = player.maxHealth;
        }

        nextEnemy();
    }
}

// 🤖 AUTO ATAQUE
function enemyAttack() {
    enemyHealth -= 1;
    player.health -= 2;

    updateUI();

    if (player.health <= 0) {
        alert("💀 Perdiste");
        clearInterval(gameLoop);
        return;
    }

    if (enemyHealth <= 0) {
        if (isBoss) {
            money += 50;
            player.health += 30;
        } else {
            money += 5;
            player.health += 10;
        }

        if (player.health > player.maxHealth) {
            player.health = player.maxHealth;
        }

        nextEnemy();
    }
}

// 👹 NUEVO ENEMIGO
function nextEnemy() {
    level++;

    isBoss = level % 10 === 0;

    let enemyImg = document.getElementById("enemyImg");

    if (isBoss) {
        enemyHealth = 50 + (level * 5);
        enemyImg.src = "./boss.png";
        console.log("👹 JEFE!");
    } else {
        enemyHealth = 10 + (level * 2);
        enemyImg.src = "./enemy.png";
    }

    updateUI();
    startGameLoop();
}

// 💪 MEJORA
function upgrade() {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        damage++;

        upgradeCost = Math.floor(upgradeCost * 1.5);

        updateUI();
    } else {
        console.log("❌ No tienes suficiente dinero");
    }
}

// 🔁 LOOP
function startGameLoop() {
    clearInterval(gameLoop);
    speed = Math.max(500, 2000 - (level * 150));
    gameLoop = setInterval(enemyAttack, speed);
}

// iniciar juego
startGameLoop();