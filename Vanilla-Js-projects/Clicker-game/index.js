
let state = {
    coins: 0,
    kills: 0,
    enemyHp: 10,
    enemyMaxHp: 10,
    clickPower: 1, 
    reward: 5,
    upgradePrice: 15
};


const savedData = localStorage.getItem('foxy_clicker_save');
if (savedData) {
    state = JSON.parse(savedData);
}

function saveGame() {
    localStorage.setItem('foxy_clicker_save', JSON.stringify(state));
}


const elCoins = document.getElementById('money_counter');
const elKills = document.getElementById('defeat_enemy_counter');
const elHp = document.getElementById('enemy_hp');
const elDrop = document.getElementById('enemy_money_drop');
const elEnemyImg = document.getElementById('enemy_img');
const elclickPower = document.getElementById('click_power'); 

const elUpgradeBtn = document.getElementById('buy-upgrade-btn');
const elUpgradePrice = document.getElementById('upgrade-price');


function updateUI() {
    elCoins.textContent = state.coins;
    elKills.textContent = state.kills;
    elHp.textContent = `${state.enemyHp} / ${state.enemyMaxHp} HP`;
    elDrop.textContent = state.reward;
    elUpgradePrice.textContent = state.upgradePrice;
    elclickPower.textContent = state.clickPower; 

    if (state.coins >= state.upgradePrice) {
        elUpgradeBtn.disabled = false;
    } else {
        elUpgradeBtn.disabled = true;
    }

    if (state.coins >= 1000) {
        setTimeout(() => {
            alert("Поздравляю! Вы отдали долг в 1000 монет!\n\nТеперь вы не должник. Теперь вы просто бездомный бомж с 0 монет. Удачи в новой жизни!");
            
            localStorage.removeItem('foxy_clicker_save');
            location.reload();
        }, 100);
    }
}


elEnemyImg.addEventListener('click', () => {
    state.enemyHp -= state.clickPower;

    if (state.enemyHp <= 0) {
        state.coins += state.reward;
        state.kills += 1;
        
        state.enemyMaxHp = Math.floor(state.enemyMaxHp * 1.5);
        state.enemyHp = state.enemyMaxHp;
        state.reward += 2; 
        
        elEnemyImg.src = `https://api.dicebear.com/7.x/bottts/svg?seed=Bot${state.kills}`;
    }

    saveGame(); 
    updateUI(); 
});

elUpgradeBtn.addEventListener('click', () => {
    if (state.coins >= state.upgradePrice) {
        state.coins -= state.upgradePrice;
        
        state.clickPower = Math.ceil(state.clickPower * 1.5);
        
        state.upgradePrice = Math.floor(state.upgradePrice * 1.8);
        
        saveGame();
        updateUI();
    }
});


elEnemyImg.src = `https://api.dicebear.com/7.x/bottts/svg?seed=Bot${state.kills}`;
updateUI();
