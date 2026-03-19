let enemyHealth = 10;
let money = 0;
let damage = 1;
let level = 1;

function updateUI() {
    let maxHealth = 10 + (level * 2);
    let healthPercent = (enemyHealth / maxHealth) * 100;
    document.getElementById("healthBar").style.width = healthPercent + "%";
}

function attack() {
    let damage = 2;
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
let gameLopp = setInterval(enemyAttack, 2000 - (level * 100));

