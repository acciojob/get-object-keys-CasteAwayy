"use strict";


const objectPrototype  ={
    getKeys(){
        return Object.keys(this);
    }
}

const student = Object.create(objectPrototype);

student.name = 'abhishek';
console.log(student.getKeys());