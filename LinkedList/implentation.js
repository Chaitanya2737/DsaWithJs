class Node {
     constructor(data){
        this.data =  data;
        this.next =  null;
     }
}

class LInkedList {
    constructor(){
            this.head = null;
    }
    addfirst(data){
        const newNode = new Node(data);
        newNode.next= this.head;
        this.head = newNode
    }

    addLast(data){
        const newNode = new Node(data)

        if (!this.head) {
            this.head = newNode
            return
        }


        let current = this.head;
        while (current.next) {
          current= current.next 
        }

        current.next= newNode
    }

    size(){
        let count = 0;
        let current = this.head;
        while (current.next) {
            count++
            current = current.next
        }
        return count
    }

    addAt(index,data){
        if (index < 0 || index > this.size()) {
            console.log("invalid index")
        }
        const newNode  = new Node(data)
        if (index === 0) {
            this.next = this.node;
            this.head = newNode
            return
        }
        let current = this.head 
        for (let i = 0; i < index -1; i++) {
        current=  current.next 
        }
        newNode.next = current.next;
        current.next = newNode
    }


    removeTop() {
       if (!this.head) {
        return
       } 
       this.head = this.head.next

    }


    removeLast(){

        if (!this.head) {
            this.head = newNode
            return
        }


        let current = this.head;
        while (current.next.next) {
          current= current.next 
        }

        current.next= null
    }

    removeAt(index){
        if (index < 0 || index > this.size()) {
            console.log("invalid index")
        }
        if (index === 0) {
            this.head = this.head.next
            return
        }
        let current = this.head 
        for (let i = 0; i < index -1; i++) {
        current=  current.next 
        }
       
        if (current.next) {
            current.next =  current.next.next
        }
    }

    print(){
        let current = this.head
        while(current) {
            console.log(current.data)
            current =  current.next
        }
    }

}

const list = new LInkedList();

list.addfirst(5)
list.addfirst(6)
list.addfirst(7)
list.addfirst(2)

console.log(list)

// list.removeTop()
// list.removeLast()

// list.removeAt(2)


list.print()
