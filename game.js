let enemyHealth = 10;
let maxEnemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;
let isBoss = false;

let player = {
    health: 100,
    maxHealth: 100
};

let gameLoop;

// UI
function updateUI() {
    document.getElementById("enemyText").textContent =
        "👹 Vida: " + enemyHealth;

    document.getElementById("enemyBar").style.width =
        (enemyHealth / maxEnemyHealth) * 100 + "%";

    document.getElementById("playerBar").style.width =
        (player.health / player.maxHealth) * 100 + "%";

    document.getElementById("money").textContent = "💰 " + money;
    document.getElementById("level").textContent = "Nivel: " + level;
    document.getElementById("damage").textContent = "Daño: " + damage;
}

// daño flotante
function showDamage(amount) {
    let el = document.createElement("div");
    el.textContent = "-" + amount;
    el.className = "damage";

    el.style.left = Math.random() * 200 + "px";
    el.style.top = "200px";

    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1000);
}

// ataque
function attack() {
    let crit = Math.random() < 0.25;
    let finalDamage = crit ? damage * 2 : damage;

    enemyHealth -= finalDamage;
    showDamage(finalDamage);

    updateUI();

    if (enemyHealth <= 0) {
        reward();
        nextEnemy();
    }
}

// habilidad especial
function special() {
    let burst = damage * 5;

    enemyHealth -= burst;
    showDamage(burst);

    updateUI();

    if (enemyHealth <= 0) {
        reward();
        nextEnemy();
    }
}

// enemigo automático
function enemyAttack() {
    enemyHealth -= 1;
    player.health -= 3;

    updateUI();

    if (player.health <= 0) {
        alert("💀 Perdiste");
        clearInterval(gameLoop);
        return;
    }

    if (enemyHealth <= 0) {
        reward();
        nextEnemy();
    }
}

// recompensa
function reward() {
    if (isBoss) {
        money += 80;
        player.health += 30;
    } else {
        money += 10;
        player.health += 10;
    }

    if (player.health > player.maxHealth) {
        player.health = player.maxHealth;
    }
}

// siguiente enemigo
function nextEnemy() {
    level++;
    isBoss = level % 10 === 0;

    let img = document.getElementById("enemyImg");

    if (isBoss) {
        maxEnemyHealth = 100 + level * 10;
        img.src = "./boss.png";
    } else {
        maxEnemyHealth = 15 + level * 3;
        img.src = "./enemy.png";
    }

    enemyHealth = maxEnemyHealth;

    startLoop();
}

// tienda
function buyPotion() {
    if (money >= 20) {
        money -= 20;
        player.health += 30;
        if (player.health > player.maxHealth) {
            player.health = player.maxHealth;
        }
        updateUI();
    }
}

function buyPower() {
    if (money >= 30) {
        money -= 30;
        damage += 2;
        updateUI();
    }
}

// upgrade básico
function upgrade() {
    if (money >= 15) {
        money -= 15;
        damage++;
        updateUI();
    }
}

// loop
function startLoop() {
    clearInterval(gameLoop);
    let speed = Math.max(400, 2000 - level * 100);
    gameLoop = setInterval(enemyAttack, speed);
}

startLoop();