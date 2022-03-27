import React from "react";

export default function ShowData(props){
    const choice = props.dataChoice
    if(!choice || choice === "null"){
        return <p>No year selected</p>
    }
    else{
        const arr = props.data[choice];
        let showList = arr.map(function(item,i){
            return <li key={i}>{item}</li>
        })
        return<>
        <p>Selected year-{choice}</p>
        <ul>{showList}</ul>
        </>
    }
}