const draggable_list = document.getElementById('draggable-list');
const checkButton = document.getElementById('check');
const resetButton = document.getElementById('reset');

const ifFunction = [

  'let alien, crateimg, slabimg, doorimg, doorimg2;',
'let floor1, floor2, crate1, crate2, crate3;',
'let door;',
'let platform1Created = false;',
'let platform2Created = false;',
'let platform3Created = false;',
'let platform4Created = false;',
'let platform5Created = false;',
'function preload(){',
'crateimg = loadImage("/assets/crate_E.png");',
'slabimg = loadImage("/assets/slabAngle_N.png");',
'doorimg = loadImage("/assets/doorCLosed_S.png");',
'doorimg2 = loadImage("/assets/doorOpen_S.png");',
'}',
'function setup(){',
'new Canvas(865, 750);',
'world.gravity.y = 10;',
'floor1 = new Sprite(200, 650, 50, 1, "static");',
'floor1.scale = 2;',
'floor1.img = slabimg;',
'door = new Sprite(150, 115, 25, 60, "static");',
'door.img = doorimg;',
'door.layer = 3;',
'door.scale.x = -1.5;',
'door.scale.y = 1.5;',
'alien = new Sprite(200, 600, 50, 80, "dynamic");',
'alien.addAni("walk", ["/assets/alienYellow_walk1.png", "/assets/alienYellow_walk2.png"], 2);',
'alien.addAni("stand", ["/assets/alienYellow_front.png"], 1);',
'alien.scale = 1;',
'alien.layer = 10;',
'alien.frameDelay = 20;',
'alien.rotationLock = true;',
'}',
'function draw(){',
'background("#dbb691ff");',
'if (alien.collides(floor1) && !platform1Created) {',
'floor1 = createSlab(450, 620);',
'platform1Created = true;',
'}',
'if (floor1 && alien.collides(floor1) && !platform2Created) {',
'crate1 = createCrate(650, 500);',
'platform2Created = true;',
'}',
'if (crate1 && alien.collides(crate1) && !platform3Created) {',
'crate2 = createCrate(450, 400);',
'platform3Created = true;',
'}',
'if (crate2 && alien.collides(crate2) && !platform4Created) {',
'crate3 = createCrate(300, 300);',
'platform4Created = true;',
'}',
'if (crate3 && alien.collides(crate3) && !platform5Created) {',
'floor2 = createSlab(200, 200);',
'platform5Created = true;',
'}',
'if (floor2 && alien.collides(door)) {',
'door.img = doorimg2;',
'}',
'}',
'function update(){',
'alienMovement();',
'}',
'function alienMovement(){',
'if (kb.pressing("left")) {',
'alien.vel.x = -2;',
'alien.changeAni("walk");',
'alien.scale.x = -1;',
'} else if (kb.pressing("right")) {',
'alien.vel.x = 2;',
'alien.changeAni("walk");',
'alien.scale.x = 1;',
'} else {',
'alien.vel.x = 0;',
'alien.changeAni("stand");',
'}',
'if (kb.presses("up")) {',
'alien.vel.y = -5;',
'}',
'}',
'function createSlab(x, y) {',
'let platform = new Sprite(x, y, 50, 1, "static");',
'platform.scale = 2;',
'platform.layer = 2;',
'platform.img = slabimg;',
'return platform;',
'}',
'function createCrate(x, y) {',
'let platform = new Sprite(x, y, 50, 1, "static");',
'platform.removeColliders();',
'platform.addCollider(0, -15, 60, 1);',
'platform.img = crateimg;',
'platform.scale = 2;',
'platform.layer = 2;',
'return platform;',
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
