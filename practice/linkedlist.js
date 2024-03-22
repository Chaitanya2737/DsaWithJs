class Node {
    constructor(data){
        this.data=  data;
        this.next = null
    }
}

class Linkedlist{
    constructor(){
        this.head = null;
    }

    add(data){
        let newNode = new Node(data);
        newNode.next = this.head
        this.head=  newNode
    }

    addAtlast(data){
        let newNode = new Node(data);
        let current = this.head
        while (current.next !== null) {
            current = current.next
        }
        current.next =  newNode
    }

    remove(){
        this.head = this.head.next
    }

    removeAtLast(){
        let current = this.head
        while (current.next.next) {
            current = current.next
        }
        current.next = null
    }


    show(){
        let current = this.head 
        while(current !==null){
            console.log(current.data)
            console.log("↓")
            current = current.next
        }
        console.log(null)
    }
}

const list = new Linkedlist();
list.add(10)
list.addAtlast(11)
list.addAtlast(12)


list.removeAtLast()
list.show()


// 10-> 11 -> 12