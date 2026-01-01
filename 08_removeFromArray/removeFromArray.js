/* 
FIRST ATTEMPT - To complicated

const removeFromArray = function(array, ...items) {
    console.log(array);
    console.log(items);
    
    items.forEach(item => {
        while (array.includes(item)) {
            let index = array.indexOf(item);
            if (index !== -1) {
                array.splice(index, 1);
            }
        }
        
    });
    
    return array;
};

removeFromArray([1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4], 2, 3); // should remove 3 and return [1,2,4] 
*/

const removeFromArray = function(array, ...items) {
    let filteredArray = array.filter(element => !items.includes(element));
    return filteredArray;
};

removeFromArray([1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 4, 'hey'], 2, 'hey'); // should remove 3 and return [1,2,4]

// Do not edit below this line
module.exports = removeFromArray;
