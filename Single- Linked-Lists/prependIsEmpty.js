/*Here we have a class for the creation of a Node and a Linked List as well as a method that returns if the list is empty and a method that adds a 
Node to the beginning of the list*/
class Node{
//The constructor are the attributes that each Node get upon creation. Each Node will get a value or "val" and the value next to it will be null
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

/*The class LinkedList has a constructor that upon creation, each LinkedList will have a pointer at the first Node in the list, or a "head" set to null 
and the size of the LinkedList will be set to 0*/
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

//The "isEmpty" method returns the "size" attribute of the given instance of the LinkedList class
    isEmpty(){
        return this.size;
    }

/*The "prepend" method takes in a value, creates a Node object, determines if the "LinkedList" is empty and if so, adds the Node to the list by simply 
making the head equal to the new Node*/ 
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
/*If the "LinkedList" isn't empty, then the new Node is added by making the "next" value of the new Node equal to the "head" of the list, then making the
"head" equal to the new Node */
        }else{
            node.next = this.head;
            this.head = node;
        }
//After the "if else statement" has been ran, the "size" attribute for the given LinkedList increments by one 
        this.size++
    }
}

l1 = new LinkedList();
l1.prepend(1);
l1.prepend(2);
l1.prepend(3);
console.log(l1.size);
