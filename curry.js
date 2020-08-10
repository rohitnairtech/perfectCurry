"use strict";

//Sample batch size of 20
const A = [],
    curryStr = ['P', 'Q', 'R']; 

for(let x = 0; x < 6; x++){
    let num = Math.floor(Math.random()*99) + 1;
    num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
    A.push(num);
}

const makeCurry = (intList) => {
    
    const arrayLen = intList.length,
        curryIngredient = [];

    const weights = {'P':0, 'Q':0, 'R':0};

    for(let i = 0; i < arrayLen; i++){
        const randCurryStr = curryStr[Math.floor(Math.random() * curryStr.length)];
        curryIngredient.push(randCurryStr);
    }
    //made curry ingredient with P Q R
    
    for(let x = 0; x < arrayLen; x++){
        weights[curryIngredient[x]] += intList[x];
    }
    const {P, Q, R} = weights;
    if(P === Q === R){
        return curryIngredient.join();
    }
    else{
        return "noLuck";
    }

}

console.log(makeCurry(A));


