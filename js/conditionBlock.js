    const draggable_list = document.getElementById('draggable-list');
    const checkButton = document.getElementById('check');
    const resetButton = document.getElementById('reset');

    const ifFunction = [
      'let alien, monster, door, blockA, alienLifeS, monsterLifeS;',
'let movingRight = true;',
'let alienLife = 10;',
'let monsterLife = 10;',
'let collectBlock = false;',
'function setup(){',
'new Canvas(865, 750);',
'background("#dbb691ff");',
'world.gravity.y = 15;',
'door = new Sprite(1035,545,1,100, "static");',
'door.img = "/assets/closedDoor.png";',
'alien = new Sprite(90, 150, 0, 0, "dynamic");',
'alien.img = "/assets/alien.png";',
'alien.layer = 2;',
'alien.rotationLock = true;',
'monster = new Sprite(-50, 550, 30, 50, "dynamic");',
'monster.img = "/assets/monster.png";',
'monster.layer = 2;',
'monster.rotationLock = true;',
'blockA = new Sprite(200, 80, 50, 45);',
'blockA.layer = 1;',
'blockA.img = "assets/block.png";',
'blockA.img.scale = 0.4;',
'blockA.img.offset.y = -20;',
'blockA.collider = "dynamic";',
'alienLifeS = new Sprite(100, 30, 170, 30);',
'alienLifeS.textSize = 20;',
'alienLifeS.collider = "none";',
'alienLifeS.color = "#F5EE9E";',
'alienLifeS.stroke = "white";',
'alienLifeS.textColor = "#AB3428";',
'alienLifeS.strokeWeight = 2;',
'alienLifeS.opacity = 0.7;',
'monsterLifeS = new Sprite(100, 70, 170, 30);',
'monsterLifeS.textSize = 20;',
'monsterLifeS.collider = "none";',
'monsterLifeS.color = "#F5EE9E";',
'monsterLifeS.stroke = "white";',
'monsterLifeS.textColor = "#AB3428";',
'monsterLifeS.strokeWeight = 2;',
'monsterLifeS.opacity = 0.7;',
'}',
'function draw(){',
'background("#dbb691ff");',
'}',
'function drawFrame(){',
'camera.on();',
'camera.x = alien.x + 200;',
'camera.off();',
'alienLifeS.draw();',
'monsterLifeS.draw();',
'}',
'function update(){',
'alienLifeS.text = "Alien Life: " + alienLife;',
'monsterLifeS.text = "Monster Life: " + monsterLife;',
'if (kb.presses("up")){',
'alien.vel.y = -5;',
'}',
'if(kb.pressing("right")){',
'alien.vel.x = 2.5;',
'} else if(kb.pressing("left")){',
'alien.vel.x = -2.5;',
'}',
'if (kb.pressing("down") && alien.collides(blockA)) {',
'alien.vel.x = 0;',
'collectBlock = true;',
'} else if (kb.presses("space")) {',
'if (collectBlock === true){',
'blockA.collider = "dynamic";',
'blockA.vel.x = 5;',
'blockA.vel.y = -5;',
'blockA.rotationLock = false;',
'collectBlock = false;',
'}',
'}',
'if (collectBlock === true){',
'blockA.collider = "none";',
'blockA.x = alien.x + 50;',
'blockA.y = alien.y + 10;',
'blockA.rotationLock = true;',
'blockA.rotation = 0;',
'}',
'if (movingRight === true) {',
'monster.vel.x = 2;',
'if (monster.x >= 800) {',
'monster.vel.x = 0;',
'movingRight = false;',
'}',
'} else {',
'monster.vel.x = -2;',
'if (monster.x <= -50) {',
'monster.vel.x = 0;',
'movingRight = true;',
'}',
'}',
'if (alien.collide(monster)) {',
'alienLife -= 1;',
'}',
'if (monster.collide(blockA)) {',
'monsterLife -= 1;',
'}',
'if (alien.collides(door) && monsterLife <= 0){',
'door.img = "/assets/openedDoor.png";',
'}',
'}'

    ];
    

    // store listitems
    const listItems = [];

    let dragStartIndex;

    createList();

    // insert list items into DOM
    function createList() {
      [...ifFunction]
        .map(a => ({ value: a, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value)
        .forEach((block, index) => {
          const listItem = document.createElement('li');

          listItem.setAttribute('data-index', index);

          listItem.innerHTML = `
            <span class="number"></span>
            <div class="draggable" draggable="true">
              <p class="block-name">${block}</p>
            </div>
          `;

          listItems.push(listItem);

          draggable_list.appendChild(listItem); //push to list
        });

      addEventListeners();
    }

    function dragStart() {
      dragStartIndex = +this.closest('li').getAttribute('data-index'); //get the dragging element index
    }

    function dragEnter() {
      this.classList.add('over');
    }

    function dragLeave() {
      this.classList.remove('over');
    }

    function dragOver(e) {
      e.preventDefault();
    }

    function dragDrop(e) {
      e.preventDefault();
      const draggedItem = document.querySelector(`[data-index='${dragStartIndex}']`);
      const dropTarget = this;
    
      const isInToolB = dropTarget.closest('#draggable-list');
      const isInCodingS = dropTarget.closest('.codingSection');
    
      // Check if the dragged item is being dropped in the coding section or the list
      if (isInCodingS || isInToolB) {
        const parent = dropTarget.closest('ul') || dropTarget.closest('.codingSection');
        const children = [...parent.querySelectorAll('li')]; // Get all children of the parent list
    
        let inserted = false;
    
        for (const child of children) { // Check each child
          const bounding = child.getBoundingClientRect(); // Get the bounding of the child
          const offset = e.clientY - bounding.top; // Get the offset of the mouse position relative to the child
    
          if (offset < bounding.height / 2) { // If the mouse is in the upper half of the child
            parent.insertBefore(draggedItem, child); // Insert the dragged item before the item it was over
            inserted = true;
            break; // Exit
          }
        }
    
        if (!inserted) { // If not inserted
          parent.appendChild(draggedItem);
        }
      }
    
      dropTarget.classList.remove('over');
    
      if (dropTarget.closest('.codingSection')) {
        updateCodingSectionArray();
      }
    }

    function updateCodingSectionArray() {
      let codingSectionArray = []; //Create a empty array to store the coding section items
      const codingItems = document.querySelectorAll('.codingSection li .draggable');
      codingItems.forEach(item => { //item = codingItems[i]
        codingSectionArray.push(item.innerText.trim());
      });

      /* same as: 
      for (let i = 0; i < codingItems.length; i++) { 
      codingSectionArray.push(codingItems[i].innerText.trim());
      }*/
    }   
    
    /*//swap items
    function dropItems(fromIndex, toIndex) {
      if (fromIndex === toIndex) return;

      const itemOne = listItems[fromIndex].querySelector('.draggable');
      const itemTwo = listItems[toIndex].querySelector('.draggable');

      listItems[fromIndex].appendChild(itemTwo);
      listItems[toIndex].appendChild(itemOne);

    }*/

    function addEventListeners() {
      const draggables = document.querySelectorAll('.draggable');
      const dragListItems = document.querySelectorAll('.draggable-list li');
      
      //Make the draggable items can be dragged to the coding list
      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
      });

      //Make the draggable items can be dragged to the coding list
      dragListItems.forEach(item => {
        item.addEventListener('dragover', dragOver);
        item.addEventListener('drop', dragDrop);
        item.addEventListener('dragenter', dragEnter);
        item.addEventListener('dragleave', dragLeave);
      });
    }

    const codingSection = document.querySelector('.codingSection');
    codingSection.addEventListener('dragover', dragOver);
    codingSection.addEventListener('drop', dragDrop);
    codingSection.addEventListener('dragenter', dragEnter);
    codingSection.addEventListener('dragleave', dragLeave);

    //click checkbox to check order
    checkButton.addEventListener('click', checkOrder);
