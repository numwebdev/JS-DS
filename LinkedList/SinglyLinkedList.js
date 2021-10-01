/*
 * Filename: SinglyLinkedList.js
 * Path: DS-JS\LinkedList
 * Created Date: Friday, October 1st 2021, 8:14:54 pm
 * Author: Num
 * 
 * Copyright (c) 2021 N_Ah
 */


/**
 * SinglyLinkedList Implementation
 */
class SinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.count = 1;
    }

    /**
     * Add New Data At the Beginning
     * @param {String | Number} value - Data
     * @returns New Node
     */
    prependData = (value) => {
        let newNode = {
            value: value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.count++;
        return this;
    }

    /**
     * Add New Data at the End
     * @param {String | Number} value - Data
     * @returns New Node
     */
    appendDataAtEnd = (value) => {
        let newNode = {
            value: value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.count++;
        return this;
    }
}

const singLList = new SinglyLinkedList(50);

singLList.prependData(75);
singLList.prependData(80);
singLList.prependData(60);
singLList.prependData(100);

console.log(JSON.stringify(singLList.head))

// Output
// { "value": 100, "next": { "value": 60, "next": { "value": 80, "next": { "value": 75, "next": { "value": 50, "next": null } } } } }


singLList.appendDataAtEnd(50);
singLList.appendDataAtEnd(25);

console.log(JSON.stringify(singLList.head))
// Output
// {"value":100,"next":{"value":60,"next":{"value":80,"next":{"value":75,"next":{"value":50,"next":{"value":50,"next":{"value":25,"next":null}}}}}}}  