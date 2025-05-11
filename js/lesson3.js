const s1 = (p) => {
    let alienBiegeimg, bg_ground, bg_wall;
    let sprites = []; // Array to store created sprites
    let userAnswer = '';

    p.preload = () => {
        bg_ground = p.loadImage('/assets/laserBeige_groundBurst.png');
        bg_wall = p.loadImage('/assets/laserBeige3.png');
        alienBiegeimg = p.loadImage('/assets/alienBiege_front.png');
    };

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("#dfe7f4"); 
        p.world.gravity.y = 10; 
        
        // Create the ground sprite
        let ground = new p.Sprite(300, 370, 600, 10);
        ground.collider = 'static';
        ground.color = "transparent";
        p.noStroke();

        // Set up the submit button event listener
        let submit1 = document.getElementById('submit1');
        submit1.addEventListener('click', () => {
            userAnswer = document.getElementById('input1').value.trim();

            // Remove old sprites
            for (let sprite of sprites) {
                sprite.remove(); 
            }
            sprites = []; 

            // Check if input is a valid number
            let numSprites = parseInt(userAnswer);
            if (!isNaN(numSprites) && numSprites > 0 && numSprites <=6) { // if input is a valid number and greater than 0
                // Create new sprites
                for (let i = 0; i < numSprites; i++) {
                    let newSprite = new p.Sprite(300, 150); 
                    newSprite.img = alienBiegeimg;
                    newSprite.image.scale = 1.5;
                    newSprite.width = 100;
                    newSprite.height = 140;
                    newSprite.collider = 'dynamic';
                    sprites.push(newSprite); // Add sprite to the array
                }
            } else {
                alert("Enter a number between 1 to 6!");
            }
        });
    };

    p.draw = () => {
        // Clear the canvas and draw the background images
        p.background("#dfe7f4");
        p.image(bg_ground, 70, 0, 500, 200);
        p.image(bg_wall, 150, 300, 300, 100);

    };
};

new p5(s1, 'cloneArea');

const s2 = (p) => {
    let a_value = '', b_value = '';
    let resultSprite;
    let resultSprites = [];
    let currentOperation = "";

    p.setup = () => {
        p.createCanvas(600, 400);
        p.background("#dfe7f4");
        p.world.gravity.y = 10;

        // Ground sprite
        let ground = new p.Sprite(300, 370, 600, 10);
        ground.collider = 'static';
        ground.color = "transparent";
        p.noStroke();
        
        let button1 = document.getElementById('remainder');
        let button2 = document.getElementById('increment');
        let button3 = document.getElementById('decrement');
        let button4 = document.getElementById('add_assignment');


        // Change operation when user clicks a button
        document.getElementById('remainder').addEventListener('click', () => {
            currentOperation = "remainder";

        if (button1.classList.contains('nobackground3')) {
            button1.classList.remove('nobackground3');
            button1.classList.add('operator');
        } else {
            button1.classList.remove('operator');
            button1.classList.add('nobackground3');
        };
        [button2, button3, button4].forEach(btn => {
            if (btn.classList.contains('nobackground3')) {
                btn.classList.add('operator');
                btn.classList.remove('nobackground3');
            }
        });
        });
        
        document.getElementById('increment').addEventListener('click', () => {
            currentOperation = "increment";
            if (button2.classList.contains('nobackground3')) {
                button2.classList.remove('nobackground3');
                button2.classList.add('operator');            
            } else {
                button2.classList.remove('operator');
                button2.classList.add('nobackground3');
            };
            [button1, button3, button4].forEach(btn => {
                if (btn.classList.contains('nobackground3')) {
                    btn.classList.add('operator');
                    btn.classList.remove('nobackground3');
                }
            });
        });

        document.getElementById('decrement').addEventListener('click', () => {
            currentOperation = "decrement";
            if (button3.classList.contains('nobackground3')) {
                button3.classList.remove('nobackground3');
                button3.classList.add('operator');
            } else {
                button3.classList.remove('operator');
                button3.classList.add('nobackground3');
            };

            [button1, button2, button4].forEach(btn => {
                if (btn.classList.contains('nobackground3')) {
                    btn.classList.add('operator');
                    btn.classList.remove('nobackground3');
                }
            });
        });

        document.getElementById('add_assignment').addEventListener('click', () => {
            currentOperation = "add_assignment";
            if (button4.classList.contains('nobackground3')) {
                button4.classList.remove('nobackground3');
                button4.classList.add('operator');
            } else {
                button4.classList.remove('operator');
                button4.classList.add('nobackground3');
            };
            [button1, button2, button3].forEach(btn => {
                if (btn.classList.contains('nobackground3')) {
                    btn.classList.add('operator');
                    btn.classList.remove('nobackground3');
                }
            });
        });
        
    
        document.getElementById('submit_c').addEventListener('click', ()=>{

            let c_value = document.getElementById('input7_c').value.trim();
            let c = parseInt(c_value);
        
            resultSprite = new p.Sprite(300, -50, 150, 150);
            resultSprite.textSize = 100;

            for (let sprite of resultSprites) {
                sprite.remove();
            }
            resultSprites = [];

            if (!isNaN(c)) {
                if (currentOperation === "increment") {
                    resultSprite.text = c + 1;
                    resultSprite.color = "white";
                }else if (currentOperation === "decrement") {
                    resultSprite.text = c -1;
                    resultSprite.color = "white";
                }else {
                    resultSprite.text = "Unknown Operator";
                    resultSprite.color = "red";
                    resultSprite.textSize = 30;
                }
            } else {
                resultSprite.text = "Oops! Invalid input";
                resultSprite.color = "red";
                resultSprite.textSize = 30;
            }
            resultSprites.push(resultSprite);
        });

        // Handle submit action
        document.getElementById('submit_all').addEventListener('click', () => {

            let b_value = document.getElementById('input7_b').value.trim();
            let a_value = document.getElementById('input7_a').value.trim();
            let a = parseInt(a_value);
            let b = parseInt(b_value);
        
            resultSprite = new p.Sprite(300, -50, 150, 150);
            resultSprite.textSize = 100;

            for (let sprite of resultSprites) {
                sprite.remove();
            }
            resultSprites = [];

            if (!isNaN(a) && !isNaN(b)) {
                if (currentOperation === "remainder") {
                    if (b !== 0) {
                        resultSprite.text = a % b;
                        resultSprite.color = "white";
                        console.log("remainder ok");
                    } else {
                        resultSprite.text = "ERROR";
                        resultSprite.color = "red";
                    }
                } else if (currentOperation === "add_assignment") {
                    resultSprite.text = a + b;
                    resultSprite.color = "white";
                } else {
                    resultSprite.text = "Unknown Operator";
                    resultSprite.color = "red";
                    resultSprite.textSize = 30;
                }
            } else {
                resultSprite.text = "Oops! Invalid inputs";
                resultSprite.color = "red";
                resultSprite.textSize = 30;
            }            
        resultSprites.push(resultSprite);
        
    });

    p.draw = () => {
        p.background("#dfe7f4");
    };
};}

new p5(s2, 'cloneArea7');

const s3 = (p) => {
    let userAnswer = '';
    let sprite;

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4"); 
        
        sprite = new p.Sprite(150,150, 150,150);
        sprite.collider = "kinetic";
        sprite.color = "orange";
        sprite.stroke = 'red';
        sprite.rotation = 45;

        // Set up the submit button event listener
        let submit1 = document.getElementById('submit13.r');
        submit1.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.r').value.trim();
            // Check if input is a valid number
            let numSprites = parseInt(userAnswer);
            if (!isNaN(numSprites)) { // if input is a valid number
                // Change rotation
                sprite.rotation = userAnswer;
            } else {
                alert("Enter a number!");
            }
        });
    };

    p.draw = () => {
        // Clear the canvas and draw the background images
        p.background("#dfe7f4");

    };
};

new p5(s3, 'rotation');

const s4 = (p) => {
    let userAnswer = '';
    let sprite;

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4"); 
        
        sprite = new p.Sprite(150,150, 150,150);
        sprite.collider = "kinetic";
        sprite.color = "white";
        sprite.stroke = '#FFD5C2';
        sprite.strokeWeight = 10;

        // Set up the submit button event listener
        let submit1 = document.getElementById('submit13.c');
        submit1.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.c').value.trim();
            userAnswer = userAnswer.replace(/^['"]|['"]$/g, "");
            sprite.color = userAnswer;
        });

        let submit2 = document.getElementById('submit13.s');
        submit2.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.s').value.trim();
            userAnswer = userAnswer.replace(/^['"]|['"]$/g, "");
            sprite.stroke = userAnswer;
        });

        let submit3 = document.getElementById('submit13.w');
        submit3.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.w').value.trim();
            userAnswer = userAnswer.replace(/^['"]|['"]$/g, "");
            sprite.strokeWeight = userAnswer;
        });
    };

    p.draw = () => {
        // Clear the canvas and draw the background images
        p.background("#dfe7f4");

    };
};

new p5(s4, 'color');

const s5 = (p) => {
    let userAnswer = '';
    let sprite;

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4"); 
        
        sprite = new p.Sprite(150,150);
        sprite.collider = "kinetic";
        sprite.color = "yellow";
        sprite.stroke = 'pink';
        sprite.d = 100;

        let submit1 = document.getElementById('submit13.d');
        submit1.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.d').value.trim();
            // Check if input is a valid number
            let numSprites = parseInt(userAnswer);
            if (!isNaN(numSprites)) { // if input is a valid number
                // Change rotation
                sprite.d = userAnswer;
            } else {
                alert("Enter a number!");
            }
        });
    };

    p.draw = () => {
        // Clear the canvas and draw the background images
        p.background("#dfe7f4");

    };
};

new p5(s5, 'diameter');

const s6 = (p) => {
    let userAnswer = '';
    let sprite;

    p.setup = () => {
        p.createCanvas(300, 300);
        p.background("#dfe7f4");

        sprite = new p.Sprite(150, 150, 200, 150);
        sprite.collider = "kinetic";
        sprite.color = "pink";
        sprite.stroke = 'purple';
        sprite.strokeWeight = 2;
        sprite.text = "Text";
        sprite.textSize = 40;  // Corrected to `textSize` from `testSize`

        let submit1 = document.getElementById('submit13.t1');
        submit1.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.t1').value.trim();
            sprite.text = userAnswer;
        });

        let submit2 = document.getElementById('submit13.t2');
        submit2.addEventListener('click', () => {
            userAnswer = document.getElementById('input13.t2').value.trim();
            let numSprites = parseInt(userAnswer);

            if (!isNaN(numSprites)) {
                sprite.textSize = numSprites;  // Corrected to `textSize`
            } else {
                alert("Enter a number!");
            }
        });
    };

    p.draw = () => {
        p.background("#dfe7f4");
    };
};

new p5(s6, 'text');
