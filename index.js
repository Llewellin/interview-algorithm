
// bubble sort
const bubbleSort = (arr) => {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; i < i; j++){
            if(arr[j] > arr[j+1]){
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }

}


// merge sort
const mergeSort = (arr) => {
    if(arr.length < 2) return arr

    const middleIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

// merge two sorted array
const merge = (arr1, arr2) => {
    let result = []
    while(arr1.length && arr2.length){
        let minElement
        if(arr1[0] < arr2[0]) minElement = arr1.shift()
        else minElement = arr2.shift()

        result.push(minElement)
    }

    if(arr1.length) result = result.concat(arr1)
    else result = result.concat(arr2)

    return result
}
 
const m = mergeSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);

const quickSort = (arr) => {
    if(arr.length <= 1) return arr
    const pivit = arr[arr.length - 1]
    
    const leftArr = [];
    const rightArr = [];

    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] < pivit) leftArr.push(arr[i])
        else rightArr.push(arr[i])
    }

    return [...quickSort(leftArr), pivit , ...quickSort(rightArr)]
}

const q = quickSort([6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]);
// console.log('q = ', q)

const binarySearch = (arr, key) => {
    const middleIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middleIndex)
    const rightArr = arr.slice(middleIndex)

    if(arr[middleIndex] === key)
        return true
    else if(key < arr[middleIndex] && arr.length > 2){
        return binarySearch(leftArr, key)
    }else if(key > arr[middleIndex] && arr.length > 2){
        return binarySearch(rightArr, key)
    }else{
        return false
    }
}

const b = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
console.log('b = ', b)

const fibonacci = (num) => {
    if(num < 3) return 1
    return fibonacci(num - 1) + fibonacci(num - 2)
}
   
const f = fibonacci(7);
console.log('f = ', f)

const eratosthenes = (num) => {
    const primes = new Array(num)
    for(let i = 0; i < primes.length; i++)
        primes[i] = true

    primes[0] = false
    primes[1] = false
    for(let i = 2; i < Math.sqrt(num); i++){
        for(let j = 2; j * i < num; j++)
            primes[j * i] = false
    }

    let result = []
    primes.forEach((item, index) => {
        if(item === true) result.push(index)
    })

    return result
}

const e = eratosthenes(20)
console.log('e = ', e)



class BST {
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.value) {
            if (!this.left) this.left = new BST(value);
            else this.left.insert(value);
          }
        else if (value > this.value) {
            if (!this.right) this.right = new BST(value);
            else this.right.insert(value);
        }
    }

    contains(value){
        if (this.value === value) return true;
        if (value < this.value) {
            if (!this.left) return false;
            else return this.left.contains(value);
        }
        else if (value > this.value) {
            if (!this.right) return false;
            else return this.right.contains(value);
        }
    }

    DFT_inOrder() {
        if(this.left) this.left.DFT(func)
        console.log(this.value)
        if(this.right) this.right.DFT(func)
    }

    DFT_preOrder(func) {
        console.log(this.value)
        if(this.left) this.left.DFT(func)
        if(this.right) this.right.DFT(func)
    }

    DFT_postOrder(func) {
        if(this.left) this.left.DFT(func)
        if(this.right) this.right.DFT(func)
        console.log(this.value)
    }

    BFT() {
        const queue = [this.node]
        while(queue.length){
            const treeNode = queue.shift()
            console.log(this.node)
            if(!treeNode.left) queue.push(treeNode.left)
            if(!treeNode.right) queue.push(treeNode.right)
        }
    }
}

var bst = new BST(50);
 
bst.insert(30);
bst.insert(70);
bst.insert(100);
bst.insert(60);
bst.insert(59);
bst.insert(20);
bst.insert(45);
bst.insert(35);
bst.insert(85);
bst.insert(105);
bst.insert(10);

const sss = bst.contains(47897489)
console.log('sss = ', sss)

class HashNode {
    constructor(key, value, next){
        this.key = key;
        this.value = value;
        this.next = next | null;
    }
}

class HashTable {
    constructor(size) {
        this.buckets = new Array(size)
        this.numBuckets = this.buckets.length;
    }

    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++){
            total += key.charCodeAt(i)
        }

        return total % this.numBuckets
    }

    insert(key, value){
        const index = this.hash(key)
        if(!this.buckets[index])
            this.buckets[index] = new HashNode(key, value)
        else {
            let currentNode = this.buckets[index]
            while(currentNode.next){
                currentNode = currentNode.next;
            }

            currentNode = new HashNode(key, value)
        }
    }

    get(key) {
        const index = this.hash(key)
        if(!this.buckets[index]) return false
        else{
            const currentNode = this.buckets[index];
            while(currentNode){
                if(currentNode.key === key) return currentNode.value
                else currentNode = currentNode.next
            }
            return false
        }
    }
}


class Node {
    constructor(value, next, prev){
        this.value = value;
        this.next = next | null
        this.prev = prev | null
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    add(value) {
        const newNode = new Node(value)
        
        if(!this.head) this.head = newNode
        else {
            const currentNode = this.head
            while(currentNode.next){
                currentNode = currentNode.next
            }

            currentNode.next = newNode
        } 
    }

    get(index) {
        // ensure `index` is a positive value
        if (index > -1) {

            // the pointer to use for traversal
            let currentNode = this.head;

            // used to keep track of where in the list you are
            let i = 0;

            // traverse the list until you reach either the end or the index
            while (currentNode && (i < index)) {
                currentNode = currentNode.next;
                i++;          
            }
        
            // return the data if `current` isn't null
            return currentNode !== null ? currentNode.value : undefined;
        } else {
            return undefined;
        }
    }
}