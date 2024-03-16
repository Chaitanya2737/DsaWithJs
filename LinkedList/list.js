

class Node {
    constructor(data) {
        this.data = data;
        this.next =  null;
    }
}

class LinkedList{
  constructor(){
    this.head = null
  }    
  addAtFirst(data){
    const newNode =  new Node(data)
    newNode.next = this.head;
    this.head=  newNode
  }

  addAtLast(data){
    const newNode =  new Node(data)
    let current = this.head;
    while(current.next){
        current=  current.next
    }
    current.next = newNode
  }

  removeFirst(){
    this.head = this.head.next
  }

  removeLast(){
     let current = this.head
   while (current.next.next) {
    current = current.next
   }
   current.next = null
  }


  

  show(){
    let current = this.head;
    while (current !==null) {
        console.log(current.data)
        current =  current.next
    }
  }
}

let list = new LinkedList();

list.addAtFirst(10)
list.addAtFirst(11)
list.addAtFirst(12)
list.addAtFirst(13)

list.addAtLast(9)
list.removeFirst()

list.removeLast()
list.show()