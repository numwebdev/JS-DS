const numbers = [1, 3, 8, 2, 5];
const strings = ['n', 'u', 'm'];

/**
 * Add element at the End
 */
strings.push('d');
strings.push('e');


/**
 * Remove last element
 */
strings.pop();


/**
 * Add element at the Beginning
 */
strings.unshift('D')
strings.unshift('e')


/**
 * Remove First element
 */
strings.shift();


/**
 * Add element at the Index
 */
strings.splice(4, 0, 'Num',);



console.log(strings);