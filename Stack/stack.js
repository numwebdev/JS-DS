let data = [];
let currentSize = data.length;
let maxValue = 4;

// Operations
const push = (value) => {
    if (currentSize >= maxValue) {
        console.error("Stack is Full");
        return false;
    }

    data[currentSize] = value;
    currentSize++;
    traverseData();
}

const pop = () => {
    if (currentSize > 0) {
        currentSize -= 1;
        data.length = currentSize;
        traverseData();
    } else {
        console.error("Stack is already empty");
    }
}

const traverseData = () => {
    console.log("Data: ", data);
}