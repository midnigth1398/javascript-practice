let enemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;

function updateUI() {
    let maxHealth = 10 + (level * 2);
    let healthPercent = (enemyHealth / maxHealth) * 100;
    document.getElementById("healthBar").style.width = healthPercent + "%";
    
    document.getElementById("money").textContent =
    "Dinero: " + money;
}
let gameLoop; 

function attack() {
    enemyHealth = enemyHealth - damage;
    updateUI();

    if (enemyHealth <= 0) {
        money += 5
        nextEnemy();
    }
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
    if (money >= 10) {
    money -= 10;
    damage++
    console.log(" Dano mejorado:", damage);
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


