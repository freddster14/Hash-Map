class LinkedList {
    
    constructor(list = null){
        this.list = list
    }
    append(key, value){
        if(this.list === null){
            return this.list = new Node(key, value)
        };
        this.tail().nextNode = new Node(key, value)
    }
    prepend(key, value){
        if(this.list === null){
            return this.list = new Node(key, value)
        };
        this.list = new Node(value, this.list)
    }
    size(){
        let current = this.list;
        let length = 0;
        while(current.nextNode !== null){
            current = current.nextNode;
            length += 1
        }
        return length + 1
    }
    head(){
         return this.list
    }
    tail(){
        let current = this.list;
        while(current.nextNode !== null){
            current = current.nextNode;
        }
        return current
    }
    at(index){
        let current = this.list;
        for(let i = 0; i < this.size(); i++){
            if(index === i){
                return current
            }
            current = current.nextNode;
        }
        return current
    }
    pop(){
        let current = this.list;
        for(let i = 1; i < this.size() - 1; i++){
            current = current.nextNode;
        }
         current.nextNode = null
    }
    contains(key){
        let current = this.list;
        for(let i = 0; i < this.size(); i++){

            if(current.key === key){
                return true
            }
            current = current.nextNode;
        }
        return false

    }
    find(key){
        let current = this.list;
        for(let i = 0; i < this.size(); i++){
            if(current.key === key){
                return i
            }
            current = current.nextNode;
        }
        return current

    }
    toString(){
        let current = this.list;
        let element;
        let stringList = '';
        for(let i = 0; i < this.size(); i++){
            if(current.value === null){
                return stringList += null
            }
            element = `( ${current.value} ) -> `
            stringList += element
            current = current.nextNode;
        }
        stringList += ' null'
       return stringList
    }
    insertAt(value, index){
        let element = this.at(index);
        let current = this.list;
        element = new Node(value, element);
        for(let i = 0; i < index - 1;i++){
            current = current.nextNode
        }
        current.nextNode = element;
    }
    removeAt(index){
        let nextIndex = this.at(index + 1);
        let current = this.list;
        for(let i = 0; i < index - 1; i++){
            console.log(current)
            current = current.nextNode
        }
        current.nextNode = nextIndex
    }


}

class Node{
    constructor(key = null, value = null, nextNode = null){
        this.key = key
        this.value = value;
        this.nextNode = nextNode;
    }
}

export {LinkedList, Node}