import React from 'react'

function defultDom(){return(<span></span>)}

export const Render = ({dom})=>{
    console.log(dom);
    if(dom == null || dom == undefined){
        return defultDom;
    }else{
        return dom;
    }
}
