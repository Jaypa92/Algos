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

//This function will return true if the size of the given list is 0 and false if the list has at least one value
    isEmpty(){
        return this.size === 0;
    }

//The "getSize" method returns the "size" attribute of the given instance of the LinkedList class
    getSize(){
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

//Here is a function that takes a value and will insert a node with the given value at the end of a given list
    append(value){
//A new node is created with the given value
        let node = new Node(value);
//If the given list is empty then the node will be inserted in the list and the head will be assigned to the node
        if(this.isEmpty()){
            this.head = node;
        }else{
//If the list isn't empty then a value will be assigned to the value of the head 
        let curr = this.head;
//A while loop is used to assign the value of "curr" to be the next value while the next value of "curr" isn't null
        while(curr.next){
            curr = curr.next;
        }
/*When the next value of "curr" is null then the end of the list has been reached and the while loop ends and adds the new node to the end of the list
by making the "next" value of "curr" equal to the new node */
        curr.next = node;
        }
//Since a new node was added the size of the list increases
        this.size++;
    }

//Here is a function that prints the values within a given list
    print(){
//If the list is empty then the function will return that the list is empty
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
//If the list isn't empty then a variable "curr" will be assigned to the head and an empty string eill be assigned to "listVals"
            let curr = this.head;
            let listVals = "";
//A while loop is used while "curr" isn't equal to null so the end of the list can be reached
            while(curr){
//While "curr" isn't equal to null the current value of "curr" is added to the string stored in "listVals" and "curr" is equal to its next value
                listVals += `${curr.val} `;
                curr = curr.next;
            }
//After going through the whole list, the variable "listVals" containing the string of all the values is returned
            console.log(listVals);
        }
    }

//Here is a function that will insert a node with a given value at a given index within a given list
    Insert(value, index){
//If the given index value is less than 0 or the index value is greater than the list size then false is returned
        if(index < 0 || index > this.size){
            return false
        }
//If the given index value is 0 then the value gets prepended to the list using the prepend function
        if(index == 0){
            this.prepend(value);
        }else{
/*If the given index isn't 0 and doesn't exceed the list size then a new node is created with the given value with a variable "prev" assigned to the
value of the head of the list */
            const node = new Node(value);
            let prev = this.head;
//A for loop is used to traverse through the list to assign "prev" to the value next to the given index in the list
            for(let i = 0; i < index-1; i++){
                prev = prev.next;
            }
/*Once "prev" has the value next to the given index in the list, the next value of the new node is equal to the next value of "prev", then the next value
of "prev" is the new node, and after the insertion of the node the size is increased by one  */
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }
}

l1 = new LinkedList();
console.log("List is empty? " + l1.isEmpty());
console.log("List size is " + l1.getSize());
l1.print();
l1.prepend(10);
l1.print();
l1.prepend(20);
l1.prepend(30);
l1.print();
l1.append(1);
l1.print()