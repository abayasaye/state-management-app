import { UP_ACTION ,DOWN_ACTION ,RESET_ACTION ,RANDOM_ACTION,UPDATE_ACTION,MATH_ACTION } from "./counter-types"
export const upAction =()=>{
    return {type : UP_ACTION }
}

export const downAction = ()=>{
    return{type: DOWN_ACTION }
}

export const resetAction = ()=>{
    return {type : RESET_ACTION}
}
export const randomAction = (reandom)=>{
    return {type : RANDOM_ACTION , payload : reandom}
}

export const updateAction = (updateNumber)=>{
    return {type :UPDATE_ACTION,payload : updateNumber}
}

export const mathAction = (mathType)=>{
    const MATH_SIGN =["+","-","*","/"]
    return {type :MATH_ACTION,payload : mathType}
}



