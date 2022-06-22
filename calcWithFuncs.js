const zero = (operator, num=0)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 0;
const one = (operator, num=1)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 1;
const two = (operator, num=2)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 2;
const three = (operator, num=3)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 3;
const four = (operator, num=4)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 4;
const five = (operator, num=5)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 5;
const six = (operator, num=6)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 6;
const seven = (operator, num=7)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 7;
const eight = (operator, num=8)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 8;
const nine = (operator, num=9)  => operator ? Math.floor(eval(`${num}  ${operator}`)) : 9;

const plus = num => `+ ${num}`;
const minus = num => `- ${num}`;
const times = num => `* ${num}`;
const dividedBy = num => `/${num}`;