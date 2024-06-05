//if (index < 0 || index >= buckets.length) {
//    throw new Error("Trying to access index out of bound");
//  }


class HashMap {
    constructor(buckets = []){
        this.buckets = buckets
    }
    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
          console.log(hashCode % 16)
          hashCode = hashCode % 16
        }
        return hashCode;
    }
    set(key, value){
        this.buckets[this.hash(key)] = {Node: value, key}
        console.log(this.buckets)
        
    }
    get(key){

    }
    has(key){

    }
    remove(key){

    }
    length(){

    }
    clear(){

    }
    keys(){

    }
    values(){

    }
    entries(){

    }
}

const hashMap = new HashMap;
hashMap.set("Carlos", "Testing work plz")
hashMap.set("Carla", "ISA WORKIN")