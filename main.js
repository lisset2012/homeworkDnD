let skill = document.getElementById("skill");
let name = document.getElementById("name");
let phoneNum = document.getElementById("phoneNum");

let showplayer = document.getElementById("player");
let showlinkedlist = document.getElementById("linkedList");

// let p = {
//     "name": name,
//     "phone": phoneNum,
//     "skill": skill
// };

// let player = p;

class Node {
  constructor(id, value) {
    this.id = id;
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.nid = 0;
    this.length = 0;
  }

  insert(value) {
    const node = new Node(this.nid++, value);

    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
    this.nid = 0;
  }

  remove(id) {
    let temp;

    if (!this.head && !this.tail) {
      console.log("The list is empty");
      return;
    }

    if (this.head.id === this.tail.id) {
      temp = this.head;
      this.reset();
      return temp;
    }

    if (this.head.id === id) {
      temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }

    let node = this.head;

    while (node.next) {
      if (node.next.id === id) {
        temp = node.next;
        node.next = node.next.next;

        if (temp.id === this.tail.id) {
          this.tail = node;
        }
        this.length--;
        return temp;
      }
      node = node.next;
    }

    console.log("Nothing found with id " + id);
  }

  forEach(callback = node => console.log(node)) {
    let node = this.head;

    if (node) {
      callback(node);
      while (node.next) {
        node = node.next;
        callback(node);
      }
    }
  }
}

function displaySkillLevel(linkedList) {
  const sorted = [];
  let index = 0;

  linkedList.forEach(function(node) {
    console.log(sorted)
    if (sorted.length === 0) {
      sorted.push(node.value);
    } else {
      for (let i = 0; i < sorted.length; i++) {
        if (sorted[i].skill <= node.value.skill) {
          sorted.splice(i+1, 0, node.value);
          break;
        }
      }
    }
  });
  return sorted;
}

let linkedList = new LinkedList();

localStorage.setItem('linkList', JSON.stringify(linkedList))

document.getElementById("myForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("The player was submitted");
  let player = {
    name: name.value,
    phone: phoneNum.value,
    skill: skill.value
  };
  // let linkedList = new LinkedList();

  linkedList.insert(player);

  // console.log(player);
  // console.log(linkedList);

//   showplayer.innerHTML = `
//     <p>Name: ${player.name} </p>
//     <p>Phone: ${player.phone} </p>
//     <p>Skill: ${player.skill} </p>
//     `;
  // showlinkedlist.innerHTML=linkedList;
  localStorage.setItem('linkList', JSON.stringify(linkedList));
  console.log(displaySkillLevel(linkedList));
});

//Display the top ten player by skill level
skill.addEventListener("click", function(e) {
    for
    showplayer.innerHTML = `
    <p>Name: ${player.name} </p>
    <p>Phone: ${player.phone} </p>
    <p>Skill: ${player.skill} </p>
    `;
}

//Search for a player by phone num
name.addEventListener("click", function(e) {

}

//Display all players sorted by name
phoneNum.addEventListener("click", function(e) {

}


//   showplayer.innerHTML=player;
//   showlinkedlist.innerHTML=linkedList;
