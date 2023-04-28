import React from "react";
import "./Card-list.styles.css"
import Card from "../Card/Card";
import {Monster} from "../../App";

type CardListProps = {
    monster: Monster
}

const CardList = ({monsters}: CardListProps) => {
    return (
        <div className='card-list'>
            {monsters.map((monster) => {
                return <Card monster={monster} key={monster.id}/>
            })}
        </div>
    )
}

export default CardList;