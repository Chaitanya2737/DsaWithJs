class Node{
    constructor(data){
        this.data= data
        this.next = null
    }
}
 class Linkedlist{
    constructor(){
        this.head = null
    }

    unshift(data){
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head=  newNode
    }

    push(data){
        let current = this.head;
        let newNode=  new Node(data)
        while (current.next !== null) {
            current= current.next
        }
        current.next=  newNode
    }

    shift(){
        this.head = this.head.next
    }

    pop(){
        let current = this.head
        while (current.next.next) {
            current=  current.next
        }
        current.next = null
    }

    display(){
       let current = this.head;
       while (current) {
         console.log(current.data)
         console.log("↓")
         current =  current.next
       }
       console.log(null)
    }
 }

 const list = new Linkedlist();

list.unshift(12)
list.unshift(11)
list.unshift(10)
list.unshift(9)

 list.push(100)
 list.push(102)
list.shift()
 list.pop()


 list.display()