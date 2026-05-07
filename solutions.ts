// Problem - 1
const filterEvenNumbers = (numbers : number[]) : number[] => {
    return numbers.filter (num => num % 2 === 0);
};

filterEvenNumbers();


// Problem - 2 
const reverseString = (input : string) : string => {
    const reversed = [...input].reverse().join('');
    return reversed;
};

reverseString();


// Problem - 3
type StringOrNumber = string | number;

const checkType = (input : StringOrNumber) : 'String' | 'Number' => {
    if (typeof input === 'string') {
        return 'String';
    } else {
        return 'Number';
    };
};

checkType();


// Problem - 4 
const getProperty = <T, X extends keyof T> (obj : T, key : X) : T[X] => {
    return obj[key];
};

getProperty();


// Problem - 5
interface Book {
    title : string;
    author : string;
    publishedYear : number;
};

interface BooksWithReadStatus extends Book {
    isRead : boolean;
};

const toggleReadStatus = (book : Book, isRead : boolean = true) : BooksWithReadStatus => {
    return {...book, isRead};
};

toggleReadStatus();


// Problem - 6
class Person {
    protected name : string;
    protected age : number;

    constructor(name : string, age : number) {
        this.name = name;
        this.age = age;
    }
};

class Student extends Person {
    constructor (
        name : string,
        age : number,
        private grade : string
    ) {
        super (name, age);
    }

    getDetails() : string {
        return `Name : ${this.name}, Age : ${this.age}, Grade : ${this.grade}`;
    }
};

getDetails();


// Problem - 7
const getIntersection = (a : number[], b : number[]) : number[] => {
    const setB = new Set(b);
    return a.filter(num => setB.has(num));
};

getIntersection();