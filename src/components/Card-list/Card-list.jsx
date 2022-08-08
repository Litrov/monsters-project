import React from "react";
import "./Card-list.styles.css"
import Card from "../Card/Card";

const CardList = (props) => {
    return (
        <div className='card-list'>
            {props.monsters.map((monster) => {
                return <Card monster={monster} key={monster.id}/>
            })}
        </div>
    )
}

export default CardList;