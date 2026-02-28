const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
   image: "images/creature.jpg",
    
    attacked: function() {
        if (this.health > 0) {
            this.health -= 20; 
            
            if (this.health <= 0) {
                this.health = 0; 
                alert(`${this.name} has died! Game Over.`);
            }
            updateDisplay(); 
        }
    },

    levelUp: function() {
        if (this.health > 0) {
            this.level += 1; 
            updateDisplay(); 
        }
    }
};

function updateDisplay() {
    document.getElementById("charImage").src = character.image;
    document.getElementById("charName").textContent = character.name;
    document.getElementById("charClass").textContent = `Class: ${character.class}`;
    document.getElementById("charLevel").textContent = `Level: ${character.level}`;
    document.getElementById("charHealth").textContent = `Health: ${character.health}`;
}

document.getElementById("attackBtn").addEventListener("click", () => {
    character.attacked();
});

document.getElementById("levelBtn").addEventListener("click", () => {
    character.levelUp();
});

updateDisplay();