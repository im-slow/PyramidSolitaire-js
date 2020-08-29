let setStyle = function(element, style) {
    for (let property in style) { // i frame nello stack
        element.style[property] = style[property];
    }
};

let reverseString = function(str) {
    return str.substr(1) + str.substr(0, 1);
}

let getRow = function(num){
    let triangleNumber = [1, 3, 6, 10, 15, 21, 28, 40];
    for (var i = 0; i <= triangleNumber.length-1; i++) {
        if (num <= triangleNumber[i]) {
            return i+1;
        }
    }
}

let getRangeByRow = function(row){
    let triangleNumber = [1, 3, 6, 10, 15, 21, 28, 40];
    switch (row) {
        case 8: return [0, 0];
        default:
            let rangeStart = triangleNumber[row-1];
            let rangeEnd = triangleNumber[row-2]+1;
            return [rangeEnd, rangeStart];
    }
}

export { reverseString, setStyle, getRow, getRangeByRow }