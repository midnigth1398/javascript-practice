let enemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;
let upgradeCost = 10;
let isBoss = false;

function updateUI() {
    let maxHealth = 10 + (level * 2);
    let healthPercent = (enemyHealth / maxHealth) * 100;
    document.getElementById("healthBar").style.width = healthPercent + "%";

    document.getElementById("money").textContent =
    "Dinero: " + money;

    document.getElementById("level").textContent = "Nivel: " + level;
    document.getElementById("damage").textContent = "Dano: " + damage;
    document.getElementById("cost").textContent = "Costo mejora: " + upgradeCost;
    document.getElementById("playerHealth").textContent =
    "Tu vida: " + player.health;
}
let gameLoop; 

function attack() {
    enemyHealth = enemyHealth - damage;
    updateUI();

  if (enemyHealth <= 0) { 
        if (isBoss) {
            money += 50;
        } else {
        money += 5;
        }
         nextEnemy();
    }
       

    let enemyText =
    document.getElementById("enemy");

    enemyText.style.transform = "scale(1.2)";
    setTimeout(() => {
        enemyText.style.transform = "scale(1)";
    }, 100);    
    let btn = document.getElementById("attackBtn");
    btn.disabled = true;
    setTimeout(() => {btn.disabled = false;
    }, 500); 
}

function enemyAttack() {
    enemyHealth--;
    player.health -= 2;

        updateUI();

        if (player.health <= 0) {
            alert("💀 Perdiste");
            clearInterval(gameLoop);
        }

    if (enemyHealth <= 0) { 
        if (isBoss) {
            money += 50;
        } else {
        money += 5;
        }
         nextEnemy();
    }
}

function nextEnemy() {
    level++;

    isBoss = level % 10 === 0;

    if (isBoss) {
        enemyHealth = 50 + (level * 5);
        console.log("👹 JEFE!")
    } else {
        enemyHealth = 10 + (level * 2);
    }
     
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
let player = {
    name: "Hero",
    health: 100,
    maxHealth: 100
};

let speed = 2000;
function startGameLoop() { 
    clearInterval(gameLoop); 
    speed = Math.max(500, 2000 - (level * 150));
    gameLoop = setInterval(enemyAttack, speed);
}
startGameLoop();


