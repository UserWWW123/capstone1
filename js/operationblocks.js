const draggable_list = document.getElementById('draggable-list');
    const checkButton = document.getElementById('check');
    const resetButton = document.getElementById('reset');
    let codingSectionArray = [];

    const ifFunction = [
      "0",
      '1',
      '2'
      /*
      'let',
        'password',
        ';',
        'let whisper =',
        'new Sprite()',
        ';',
        'whisper.width = 100',
        ';',
        'whisper.height = 50',
        ';',
        'whisper.x = 270',
        ';',
        'whisper.y = 350',
        ';',
        'password',
        '=',
        '"87537979"',
        ';',
        'whisper.textSize',
        '=',
        '20',
        ';',
        'whisper.text',
        '=',
        'password',
        ';', 
        */
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
