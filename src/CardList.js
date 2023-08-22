import React from "react";
import Card from "./Card";
const CardList =({robots})=>{
    return (
        robots.map((user)=>{
            return (<Card key={user.id} id={user.id} 
                    email={user.email} 
                    name={user.name} 
                    />)
        })
    );
};
export default CardList;