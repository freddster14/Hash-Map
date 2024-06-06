//if (index < 0 || index >= buckets.length) {
//    throw new Error("Trying to access index out of bound");
//  }


class HashMap {
    constructor(buckets = new Array(16)){
        this.buckets = buckets;
        this.loadFactor = 0.75;
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
        if((this.length() / this.buckets.length) >= this.loadFactor){
            let prevKeys = this.keys();
            let prevValues = this.values();
            let range = this.length()
            this.buckets = new Array(this.buckets.length * 2);
           
            for(let i = 0; i < range; i++){
                this.set(prevKeys[i], prevValues[i])
            }

        }
        this.buckets[this.hash(key)] = {value, key}
        
    }
    get(key){
        let node = this.buckets[this.hash(key)];
        if (node === undefined){
            return null
        } 
        return node.value;
    }
    has(key){
        let node = this.buckets[this.hash(key)]
        if(node === undefined) return false
        if(key === node.key) return true;
        return false
    }
    remove(key){
        if(this.has(key)){
            delete this.buckets[this.hash(key)]
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
            array.push(this.buckets[index].key)
        }
        return array
    }
    values(){
        let array = []
        for(let index in this.buckets){
            array.push(this.buckets[index].value)
        }
        return array
    }
    entries(){
        let array = []
        for(let index in this.buckets){
            array.push([this.buckets[index].key, this.buckets[index].value])
        }
        return array
    }
}

const hashMap = new HashMap;
hashMap.set("Test", "Testing work plz")
hashMap.set("Work", "ISA WORKIN")
hashMap.set("Date", "06-05-2024")
hashMap.set("Project", "Feel like im 1/3")
hashMap.set("Prsefot", "Feel like im 1/3")
hashMap.set("hsect", "Feel like im 1/3")
hashMap.set("eesgsct", "Feel like im 1/3")
hashMap.set("Pjsegsect", "Feel like im 1/3")
hashMap.set("rogsrgject", "Feel like im 1/3")
hashMap.set("rhjtyojet", "Feel like im 1/3")
hashMap.set("ohnthject", "Feel like im 1/3")
hashMap.set("G fggiogbjb", "Feel like im 1/3")
hashMap.set("Projfgffect", "Feel like im 1/3")
hashMap.set("Project", "Feel like im 1/3")


console.log(hashMap.get("Work"))
console.log(hashMap.remove("Work"))
//console.log(hashMap.clear())
console.log(hashMap.keys())
console.log(hashMap.values())
console.log(hashMap.length())
console.log(hashMap.buckets)
console.log(hashMap.entries())