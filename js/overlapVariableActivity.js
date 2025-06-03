const s1 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2;
    let currentSprite = null;
    let userAnswer;

    p.preload = () => {
        shipYellowimg = p.loadImage("/assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("/assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("/assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("/assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("/assets/alienYellow_front.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;
    
        let correctUFO = document.getElementById('callUFO');
        let UFOButton = document.getElementById('submitUFOName');
        let alienButton = document.getElementById('submitAlien');
        let userAnswer = '';  
    
        alienButton.disabled = true;
    
        let currentSprite; 
        let currentAlienSprite;
    
        UFOButton.addEventListener("click", () => {
            userAnswer = document.getElementById('inputUFO').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');
    
            if (currentSprite) {
                currentSprite.remove();
                correctUFO.innerHTML = "";
                alienValue.innerHTML = "";
                alienValue.classList.remove("correctReminder");
            }
    
            if (userAnswer === 'letufo;') {
                currentSprite = new p.Sprite(100, 270);
                currentSprite.img = shipYellowimg;
                currentSprite.image.scale = 2.5;
                currentSprite.width = 100;
                currentSprite.height = 20;
                currentSprite.collider = 'static';
                correctUFO.innerHTML = "Variable 'ufo' is created!";
                correctUFO.classList.add("correctReminder");
    
                alienButton.disabled = false; 
            } else {
                correctUFO.classList.remove("correctReminder");
                alienButton.disabled = true;
                correctUFO.innerHTML = "";
                alienValue.innerHTML = "Opps! Something went wrong. Try again!";
                alienValue.classList.add("correctReminder");
            }
        });
    
        let alienValue = document.getElementById('callAlien');
        
        alienButton.addEventListener("click", () => {
            let answer = document.getElementById('inputAlien').value.trim();
            answer = answer.replace(/\s+/g, '');
    
            if (userAnswer === 'letufo;') {
                if (currentAlienSprite) {
                    currentAlienSprite.remove(); // Remove the previous sprite if it exists
                    alienValue.innerHTML = "";
                    alienValue.classList.remove("correctReminder");
                }
    
                // Check if the answer is valid, otherwise do nothing and return early
                if (answer === "ufo='alien_Biege';" || answer === 'ufo="alien_Biege";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.img = alienBiegeimg;
                    alienValue.innerHTML = "Value 'alien_Biege' is added! <br> Value of the ufo is alien_Biege!";
                    alienValue.classList.add("correctReminder");
                } else if (answer === "ufo='alien_Yellow';" || answer === 'ufo="alien_Yellow";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.img = alienYellowimg;
                    alienValue.innerHTML = "Value 'alien_Yellow' is added! <br> Value of the ufo is alien_Yellow!";
                    alienValue.classList.add("correctReminder");
                } else if (answer === "ufo='alien_Green';" || answer === 'ufo="alien_Green";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.img = alienGreenimg;
                    alienValue.innerHTML = "Value 'alien_Green' is added! <br> Value of the ufo is alien_Green!";
                    alienValue.classList.add("correctReminder");
                } else {
                    // If the answer is incorrect, do not create currentAlienSprite+remove all words
                    alienValue.classList.add("correctReminder");
                    alienValue.innerHTML = "Opps! Something went wrong. Try again!";
                    correctUFO.innerHTML = "";
                    correctUFO.classList.remove("correctReminder");
                    return; // Stop the execution
                }
    
                // If the answer is correct, update the alien sprite properties
                currentAlienSprite.image.scale = 1.5;
                currentAlienSprite.width = 100;
                currentAlienSprite.height = 140;
                currentAlienSprite.collider = 'dynamic';
            }
        });
    };
    
    
    

    p.draw = () => {
        p.background("white");
    };

};

document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('overlapVariableDeclaration');
    if (element) {
        new p5(s1, 'overlapVariableDeclaration');
        console.log('1Canvas created successfully');
    } else {
        console.error('Element not found');
    }
});


const s2 = (p) => {
    let boximg, woodbimg, woodwimg, woodgimg;
    let currentSprite = null;
    let box = null;

    p.preload = () => {
        boximg = p.loadImage("/assets/box.png");
        woodbimg = p.loadImage("/assets/wood-brown.png");
        woodwimg = p.loadImage("/assets/wood-white.png");
        woodgimg = p.loadImage("/assets/wood-green.png");    
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;

        let correctBox = document.getElementById('callBox');
        let variableButton = document.getElementById('submitBoxName');

        variableButton.addEventListener("click", () =>{
            let userAnswer = document.getElementById('inputBox').value.trim(); 
        userAnswer = userAnswer.replace(/\s+/g, '');
        if (box) {
            box.remove();
            correctBox.innerHTML = "";
        }

        if (userAnswer === 'letbox;') {
            box = new p.Sprite(100,270,100,100);
            box.img = boximg;
            box.image.scale = 2.5;
            box.width = 100;
            box.height = 20;
            box.collider = 'static';
            box.layer = 1;
            correctBox.innerHTML = "Variable 'box' is created!"
            correctBox.classList.add("correctReminder");
        } else{
            correctBox.classList.remove("correctReminder");
        }
        })

        let brownValue = document.getElementById('callValue');
        let boxButton = document.getElementById('submitVariableName');
        
        boxButton.addEventListener("click", () => {
            let answer = document.getElementById('inputVariable').value.trim(); 
            answer = answer.replace(/\s+/g,'');
        if (currentSprite) {
            currentSprite.remove();
            brownValue.innerHTML = "";
        }

        if (answer === "box='wood_brown';" || answer === 'box="wood_brown";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodbimg;
            brownValue.innerHTML = "Value 'wood_brown' is added!<br>Value of the Box is wood_brown!";
            brownValue.classList.add("correctReminder");
            currentSprite.layer = 2;
        } else if (answer === "box='wood_white';" || answer === 'box="wood_white";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodwimg;
            brownValue.innerHTML = "Value 'wood_white' is added! <br>Value of the Box is wood_white!";
            brownValue.classList.add("correctReminder");
        } else if (answer === "box='wood_green';" || answer === 'box="wood_green";') {
            currentSprite = new p.Sprite(100, 70, 100, 100);
            currentSprite.img = woodgimg;
            brownValue.innerHTML = "Value 'wood_green' is added! <br>Value of the Box is wood_green!";
            brownValue.classList.add("correctReminder");
        } else{
            brownValue.classList.remove("correctReminder");
        }

        if (currentSprite) {
            currentSprite.image.scale = 1.5;
            currentSprite.width = 100;
            currentSprite.height = 100;
            currentSprite.collider = 'dynamic';
        }
        })


    };

    p.draw = () => {
        p.background("white");
    };
};
document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('box');
    if (element) {
        new p5(s2, 'box'); 
        console.log('2Canvas created successfully');
    } else {
        console.error('Element not found');
    }
});

const s3 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2, ufoYellowImg;
    let shipYellow = null;
    let correctUFO;

    p.preload = () => {
        shipYellowimg = p.loadImage("/assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("/assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("/assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("/assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("/assets/alienYellow_front.png");
        ufoYellowImg = p.loadImage("/assets/ufoYellow.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;

        let UFOButton = document.getElementById('submitUFOName2');
        correctUFO = document.getElementById('callUFO2');

        UFOButton.addEventListener("click", () => {
            let userAnswer = document.getElementById('inputUFO2').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');

            if (shipYellow) {
                shipYellow.remove();
                shipYellow = null; 
                correctUFO.innerHTML = "Oops! Something went wrong. Try again!";
                correctUFO.classList.remove("correctReminder");
            }

            const validAnswers = {
                "constufo='alien_Biege';": alienBiegeimg,
                'constufo="alien_Biege";': alienBiegeimg,
                "constufo='alien_Yellow';": alienYellowimg,
                'constufo="alien_Yellow";': alienYellowimg,
                "constufo='alien_Green';": alienGreenimg,
                'constufo="alien_Green";': alienGreenimg
            };

            if (validAnswers[userAnswer]) {
                let ufo = new p.Sprite(100, 270); 
                ufo.img = ufoYellowImg; // Default ufo image
                ufo.image.scale = 2.5;
                ufo.width = 100;
                ufo.height = 20;
                ufo.collider = 'static';

                shipYellow = new p.Sprite(100, 70);
                shipYellow.img = validAnswers[userAnswer];
                shipYellow.image.scale = 1.5;
                shipYellow.width = 100;
                shipYellow.height = 140;
                shipYellow.collider = 'dynamic';

                let alienType = userAnswer.includes("alien_Biege") ? "alien_Biege" : 
                                userAnswer.includes("alien_Yellow") ? "alien_Yellow" : 
                                "alien_Green";

                correctUFO.innerHTML = `Variable 'ufo' is created! <br> Value of ufo is '${alienType}'.`;
                correctUFO.classList.add("correctReminder");
            } else {
                if (shipYellow) {
                    shipYellow.img = shipYellowimg2; // Change image to damaged one
                    shipYellow.image.scale = 1.5;  // Ensure the scale remains the same
                }
                correctUFO.innerHTML = "Invalid input! Try again.";
                correctUFO.classList.add("correctReminder");
            }
        });
    };

    p.draw = () => {
        p.background("white");
        // Your drawing logic here (like updating sprites if needed)
    };
};

document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('overlapVariableDeclaration2');
    if (element) {
        new p5(s3, 'overlapVariableDeclaration2'); 
        console.log('3Canvas created successfully');
    } else {
        console.error('Element not found');
    }
});

const s4 = (p) => {
    let shipYellowimg, alienGreenimg, alienBiegeimg, alienYellowimg, shipYellowimg2;
    let currentSprite = null;

    p.preload = () => {
        shipYellowimg = p.loadImage("/assets/ufoYellow.png");
        shipYellowimg2 = p.loadImage("/assets/ufoYellow_damage2.png");
        alienBiegeimg = p.loadImage("/assets/alienBiege_front.png");
        alienGreenimg = p.loadImage("/assets/alienGreen_front.png");
        alienYellowimg = p.loadImage("/assets/alienYellow_front.png");
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("white");
        p.world.gravity.y = 10;
    
        let correctUFO = document.getElementById('callUFO3');
        let UFOButton = document.getElementById('submitUFOName3');
        let alienButton = document.getElementById('submitAlien3');
        let userAnswer = '';  
    
        alienButton.disabled = true;
    
        let currentSprite = null; 
    
        UFOButton.addEventListener("click", () => {
            userAnswer = document.getElementById('inputUFO3').value.trim();
            userAnswer = userAnswer.replace(/\s+/g, '');
    
            if (currentSprite) {
                currentSprite.remove();
                currentSprite = null; 
                correctUFO.innerHTML = "";
                correctUFO.classList.remove("correctReminder");
            }
    
            if (userAnswer === 'varufo;') {
                currentSprite = new p.Sprite(100, 270);
                currentSprite.img = shipYellowimg;
                currentSprite.image.scale = 2.5;
                currentSprite.layer = 1;
                currentSprite.width = 100;
                currentSprite.height = 20;
                currentSprite.collider = 'static';
                correctUFO.innerHTML = "Variable 'ufo' is created!";
                correctUFO.classList.add("correctReminder");
    
                alienButton.disabled = false; 
            } else {
                correctUFO.classList.add("correctReminder");
                alienButton.disabled = true;
                correctUFO.innerHTML = "Opps! Something went wrong. Try again!";
            }
        });
    
        let alienValue = document.getElementById('callAlien3');
        let currentAlienSprite = null;
        
        alienButton.addEventListener("click", () => {
            let answer = document.getElementById('inputAlien3').value.trim();
            answer = answer.replace(/\s+/g, '');
            if (currentAlienSprite) {
                currentAlienSprite.remove();
                alienValue.innerHTML = "";
                alienValue.classList.remove("correctReminder");
            }
    
            if (userAnswer === 'varufo;') {
    
                if (answer === "ufo='alien_Biege';" || answer === 'ufo="alien_Biege";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.width = 100;
                    currentAlienSprite.height = 140;
                    currentAlienSprite.img = alienBiegeimg;
                    currentAlienSprite.layer = 2;
                    currentAlienSprite.image.scale = 1.5;
                    currentAlienSprite.debug = true;
                    alienValue.innerHTML = "Value 'alien_Biege' is added! <br> Value of the ufo is alien_Biege!";
                    alienValue.classList.add("correctReminder");
                } else if (answer === "ufo='alien_Yellow';" || answer === 'ufo="alien_Yellow";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.width = 100;
                    currentAlienSprite.height = 140;
                    currentAlienSprite.img = alienYellowimg;
                    currentAlienSprite.image.scale = 1.5;
                    currentAlienSprite.layer = 2;
                    alienValue.innerHTML = "Value 'alien_Yellow' is added! <br> Value of the ufo is alien_Yellow!";
                    alienValue.classList.add("correctReminder");
                } else if (answer === "ufo='alien_Green';" || answer === 'ufo="alien_Green";') {
                    currentAlienSprite = new p.Sprite(100, 70);
                    currentAlienSprite.width = 100;
                    currentAlienSprite.height = 140;
                    currentAlienSprite.img = alienGreenimg;
                    currentAlienSprite.image.scale = 1.5;
                    currentAlienSprite.layer = 2;
                    alienValue.innerHTML = "Value 'alien_Green' is added! <br> Value of the ufo is alien_Green!";
                    alienValue.classList.add("correctReminder");
                } else {
                    alienValue.classList.add("correctReminder");
                    alienValue.innerHTML = "Opps! Something went wrong. Try again!";
                    correctUFO.innerHTML = "";
                    correctUFO.classList.remove("correctReminder");
                    currentAlienSprite.remove();
                };
                if (currentAlienSprite) {
                    currentAlienSprite.image.scale = 1.5;
                    currentAlienSprite.width = 100;
                    currentAlienSprite.height = 140;
                    currentAlienSprite.collider = 'dynamic';
                }
            }
        });
    };
    
    

    p.draw = () => {
        p.background("white");
    };

};
document.addEventListener('DOMContentLoaded', function () {
    let element = document.getElementById('overlapVariableDeclaration3');
    if (element) {
        new p5(s4, 'overlapVariableDeclaration3'); 
        console.log('4Canvas created successfully');
    } else {
        console.error('Element not found');
    }
});

function keyPressed() {
    if (key === ' ') {  // Example: space key
      console.log('Space pressed');
    }
  }
  
  function keyReleased() {
    console.log('Key released');
  }

  const s5 = (p) => {
    p.setup = () => {
        new p.Canvas(300,200);
    }
    p.draw = () => {
        p.background('white');
    }
  }

  new p5(s5, 'canvas'); 


  const s6 = (p) => {
    let square;
    p.setup = () => {
        new p.Canvas(300,200);
        square  = new p.Sprite();
        square.height = 100;
        square.width = 100;
        square.x = 100;
        square.y = 100;
    }
    p.draw = () => {
        p.background('white');
    }
  }

  new p5(s6, 'sprite'); 

  const s7 = (p) => {
    let square;
    p.setup = () => {
        new p.Canvas(300,200);
        square  = new p.Sprite();
        square.height = 100;
        square.width = 100;
        square.x = 100;
        square.y = 100;
    }
    p.draw = () => {
        p.background('#594157');
    }
  }

  new p5(s7, 'update1'); 