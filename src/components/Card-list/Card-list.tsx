import React from "react";
import "./Card-list.styles.css"
import Card from "../Card/Card";

const CardList = ({monsters}) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id}/>
            })}
        </div>
    )
}

export default CardList;