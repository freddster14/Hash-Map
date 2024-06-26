import {LinkedList} from "./linked-list.js"

class HashMap {
    constructor(buckets = new Array(16)){
        this.buckets = buckets;
        this.capacity = 16;
        this.loadFactor = 0.75
    }
    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          hashCode = hashCode % this.buckets.length
        }
        if (hashCode < 0 || hashCode >= this.buckets.length) {
            throw new Error("Trying to access index out of bound");
        }
        return hashCode;
    }
    set(key, value){
        let bucket = this.buckets[this.hash(key)]
       this.growMap()
        if (bucket === undefined) {
            this.buckets[this.hash(key)] = new LinkedList()
        }
        //Adds Node to end of List
        this.buckets[this.hash(key)].append(key, value)
    }
    get(key){
        let node = this.buckets[this.hash(key)].list;
        if (node === undefined){return null} 
        return node.value;
    }
    has(key){
        let hasKey = this.buckets[this.hash(key)].contains(key)
        if(hasKey) return true;
        return false
    }
    remove(key){
        if(this.has(key)){
            //Node index in List
            let index = this.buckets[this.hash(key)].find(key)
            delete this.buckets[this.hash(key)].list[index]
            return true
        }
        return false
    }
    length(){
        let count = 0
        for(let node in this.buckets){
            count += 1
        }
        return count
    }
    clear(){
        this.buckets = []
    }
    keys(){
        let array = []
        for(let index in this.buckets){
            let listSize = this.buckets[index].size();
            let current = this.buckets[index].list
            //Goes through Linked List keys
            for(let i = 0; i < listSize; i++){
                array.push(current.key)
                current = current.nextNode
            }
        }
        return array
    }
    values(){
        let array = []
        for(let index in this.buckets){
            let listSize = this.buckets[index].size();
            let current = this.buckets[index].list
            //Goes through Linked List values
            for(let i = 0; i < listSize; i++){
                array.push(current.value)
                current = current.nextNode
            }
        }
        return array
    }
    entries(){
        let array = []
        for(let index in this.buckets){
            let listSize = this.buckets[index].size();
            let current = this.buckets[index].list
            for(let i = 0; i < listSize; i++){
                array.push([current.key, current.value])
                current = current.nextNode
            }
        }
        return array
    }
    growMap(){
        if((this.length() / this.capacity) >= this.loadFactor){
            let prevKeys = this.keys();
            let prevValues = this.values();
            let range = prevKeys.length
            this.buckets = new Array(this.buckets.length * 2);
            this.capacity *= 2            
            for(let i = 0; i < range; i++){
                this.set(prevKeys[i], prevValues[i])
            }
        }
    }
}

const hashMap = new HashMap;
hashMap.set("Test", "Testing work plz")
hashMap.set("Work", "ISA WORKIN")
hashMap.set("Date", "06-05-2024")
hashMap.set("Project", "Feel like im 1/3")
hashMap.set("Project", "Feel like im 1/3")
hashMap.set("Project", "ke im 1/3")
hashMap.set("Prsefot", "Feel like im 1/3")
hashMap.set("hsect", "Feel lik 1/3")
hashMap.set("eesgsct", "Feel like im 1/3")
hashMap.set("Pjsegsect", "Feel like im 1/3")
hashMap.set("rogsrgject", "Flike im 1/3")
hashMap.set("rhjtyojet", "Feel like im 1/3")
hashMap.set("ohnthject", "Feelke im 1/3")
hashMap.set("G fggiogbjb", "Feel like im 1/3")
hashMap.set("Projfgffect", "Feel like 1/3")
hashMap.set("Projfgffect", "Feel like 1/3")

console.log(hashMap.get("Work"))
console.log(hashMap.remove("Project"))
//console.log(hashMap.clear())
console.log(hashMap.keys())
console.log(hashMap.values())
console.log(hashMap.length())
console.log(hashMap.buckets)
console.log(hashMap.entries())