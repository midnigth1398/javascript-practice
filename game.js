let enemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;
let upgradeCost = 10;

function updateUI() {
    let maxHealth = 10 + (level * 2);
    let healthPercent = (enemyHealth / maxHealth) * 100;
    document.getElementById("healthBar").style.width = healthPercent + "%";

    document.getElementById("money").textContent =
    "Dinero: " + money;

    document.getElementById("level").textContent = "Nivel: " + level;
    document.getElementById("damage").textContent = "Dano: " + damage;
    document.getElementById("cost").textContent = "Costo mejora: " + upgradeCost;
}
let gameLoop; 

function attack() {
    enemyHealth = enemyHealth - damage;
    updateUI();

    if (enemyHealth <= 0) {
        money += 5
        nextEnemy();
    }
    let enemyText =
    document.getElementById("enemy");

    enemyText.style.transform = "scale(1.2)";
    setTimeout(() => {
        enemyText.style.transform = "scale(1)";
    }, 100)
}

function enemyAttack() {
    enemyHealth--;
    updateUI();

    if (enemyHealth <= 0) {
        money += 5;
        nextEnemy();
    }
}

function nextEnemy() {
    level++;
    enemyHealth = 10 + (level * 2);

    updateUI();

    startGameLoop();
}

function upgrade() {
    if (money >= upgradeCost) {
        money -= upgradeCost;
        damage++;

        upgradeCost = Math.floor(upgradeCost * 1.5); 
    console.log(" Dano:", damage, "Costo:", upgradeCost);
    updateUI();
    } else {
    console.log("✖️ No tienes suficiente dinero");
}
}

let speed = 2000;
function startGameLoop() { 
    clearInterval(gameLoop); 
    speed = Math.max(500, 2000 - (level * 150));
    gameLoop = setInterval(enemyAttack, speed);
}


