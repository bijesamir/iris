export const pxToem = (num:number)=>{
    return num/16+"em";
}
export const pxToRem = (num:number)=>{
    
    let cal = num*0.0625;
    console.log(num +  + cal)
    return cal+"rem";
}