// Please do not change the next 3 lines
export const numberErrMsg = 'Input params need to be numbers!';
export const denominatorErrMsg = 'Denominator must not be zero!';
export const resultErrMsg = 'Result must be a whole number!';

export default function division(num1, num2) {

    if ( isNaN( num1 ) || isNaN( num2 ) ){
        throw new Error(numberErrMsg);
    }

    if (num2 === 0){
        throw new Error(denominatorErrMsg);
    }

    if ( num1 % num2 !== 0){
        throw new Error(resultErrMsg);
    }

    return ( num1 / num2 );
}