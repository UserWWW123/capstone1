const draggable_list = document.getElementById('draggable-list');
    const checkButton = document.getElementById('check');
    const resetButton = document.getElementById('reset');
    let codingSectionArray = [];

    const ifFunction = [
      'function setup(){',
'createCanvas(865, 750);',
'background(\'#dbb691ff\');',
'world.gravity.y = 15;',
'alien = new Sprite(90, 150, 0, 0, \'dynamic\');',
'alien.layer = 2;',
'alien.rotationLock = true;',
'blockA = new Sprite(200, 80, 50, 45);',
'blockA.layer = 1;',
'blockA.img = \'assets/block.png\';',
'blockA.img.scale = 0.4;',
'blockA.img.offset.y = -20;',
'blockA.collider = \'dynamic\';',
'alienLifeS = new Sprite(100, 30, 170, 30);',
'alienLifeS.textSize = 20;',
'alienLifeS.collider = \'none\';',
'alienLifeS.color = \'#F5EE9E\';',
'alienLifeS.stroke = \'white\';',
'alienLifeS.textColor = \'#AB3428\';',
'alienLifeS.strokeWeight = 2;',
'alienLifeS.opacity = 0.7;',
'};',
'function draw(){',
'background(\'#dbb691ff\');',
'};',
'function drawFrame(){',
'camera.on();',
'camera.x = alien.x + 200;',
'camera.off();',
'alienLifeS.draw();',
'};',
'function update(){',
'alienLifeS.text = \'Alien Life: \' + alienLife;',
'if (kb.presses(\'up\')){',
'alien.vel.y = -5;',
'}',
'if(kb.pressing(\'right\')){',
'alien.vel.x = 2.5;',
'} else if(kb.pressing(\'left\')){',
'alien.vel.x = -2.5;',
'}',
'if (kb.pressing(\'down\') && alien.collides(blockA)) {',
'alien.vel.x = 0;',
'collectBlock = true;',
'} else if (kb.presses(\'space\')) {',
'if (collectBlock === true){',
'blocks.collider = \'dynamic\';',
'blocks.vel.x = 5;',
'blocks.vel.y = -5;',
'blockA.rotationLock = false;',
'collectBlock = false;',
'};',
'};',
'if (collectBlock === true) {',
'blocks.collider = \'none\';',
'blockA.x = alien.x + 50;',
'blockA.y = alien.y + 10;',
'blockA.rotationLock = true;',
'blockA.rotation = 0;',
'};',
'};'
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

          draggable_list.appendChild(listItem);
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

    function dragDrop(event) {
      event.preventDefault(); 
      const draggedItem = document.querySelector(`[data-index='${dragStartIndex}']`); //get the dragged element by using data-index attribute

      if (this.classList.contains('codingSection')) { //if droped into codingSection
        this.appendChild(draggedItem); 
        codingSectionArray.push(draggedItem.querySelector('.draggable').innerText.trim()); //get text content, remove start/end spaces, add to the array
      } else {
        const dragEndIndex = +this.getAttribute('data-index'); //get the dragging element data-index
        if (!isNaN(dragEndIndex)) { //check if it is a number, if dragEndIndex is a number...
          dropItems(dragStartIndex, dragEndIndex); //chance sequence
        }
      }
      this.classList.remove('over');
    }
    //swap items
    function dropItems(fromIndex, toIndex) {
      if (fromIndex === toIndex) return;

      const itemOne = listItems[fromIndex].querySelector('.draggable');
      const itemTwo = listItems[toIndex].querySelector('.draggable');

      listItems[fromIndex].appendChild(itemTwo);
      listItems[toIndex].appendChild(itemOne);

    }


    function addEventListeners() {
      const draggables = document.querySelectorAll('.draggable');
      const dragListItems = document.querySelectorAll('.draggable-list li');
      
      draggables.forEach(draggable => {
        draggable.addEventListener('dragstart', dragStart);
      });

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
