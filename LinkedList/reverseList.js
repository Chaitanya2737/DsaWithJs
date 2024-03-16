class Node {
    constructor(data){
        this.data= data;
        this.next = null
    }
}

class Likedlist {
    constructor(){
        this.head=  null
    }

    addAtFist(data){
        let newNode =  new Node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    reverse(){
        let prev=  null
        let current = this.head

        while(current !==null){
            const next =  current.next
            current.next = prev;
            prev = current;
            current =  next
        }
        return prev
    }

    show(){
        let current = this.head;
        while (current !==null) {
            console.log(current.data)
            current =  current.next
        }
    }
}

let list = new Likedlist()

list.addAtFist(10)
list.addAtFist(11)
list.addAtFist(12)
list.addAtFist(13)
list.addAtFist(14)

console.log(list.reverse())