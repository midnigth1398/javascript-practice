let enemyHealth = 10;
let money = 0;
let damage = 1;

function updateUI() {
    document.getElementById("enemy").textContent =
            "vida del enemigo: " + enemyHealth;
    
            document.getElementById("money").textContent =
            "Dinero: " + money;
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
    enemyHealth = 10;
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
let gameLopp = setInterval(enemyAttack, 2000);

