let enemyHealth = 10;
function updateUI() {
    document.getElementById("enemy").textContent =
            "vida del enemigo: " + enemyHealth;
}

function attack() {
    let damage = 2;
    enemyHealth = enemyHealth - damage;

    updateUI();

    if (enemyHealth <= 0) {

        document.getElementById("enemy").textContent = "🎉 Ganaste!";
        clearInterval(gameLoop);
    }
}

function enemyAttack() {
    enemyHealth--;

    updateUI();

    if (enemyHealth <= 0) {
        document.getElementById("enemy").textContent = "🎉 Ganaste!";
        clearInterval(gameLoop);
    }
}
let gameLopp = setInterval(enemyAttack, 2000);

