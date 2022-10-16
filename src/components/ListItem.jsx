import { useState } from "react";

import { BiShow } from 'react-icons/bi'
import { BiHide } from 'react-icons/bi'

function Item(props) {

  const [descOpen, setDescOpen] = useState(false);
  const descClasses = descOpen ? 'big-desc' : 'description'
  const classHandler = () => {
    setDescOpen(prev => !prev);
  }

  const numbersFiller = props.aspect === 'wealthy' ? 'trillion' : props.aspect === 'poor' ? 'billion' : props.aspect === 'at_war' || props.aspect === 'high_salary' ? 'thousands' : '';
  const dollarSign = props.aspect === 'wealthy' || props.aspect === 'poor' || props.aspect === 'high_salary' ? '$' : '';

  return (
    <div className={props.animation ? 'item-fade-in item' : 'item'}>
    <div className="flag">
    <img src={props.flag} alt="country flag"/>
    </div>
    <span className="name">{props.name}</span>
    <span>{props.continents}</span>
    <span>{Object.values(props.languages)[0].split(' ')[0]}</span>
    {<span className="numbers">{dollarSign}{props.numbers} {numbersFiller}</span>}
    <span className={props.aspect === 'at_war' ? 'small-desc' : descClasses}> {props.description} </span>
    <button className={props.aspect === 'at_war' ? 'hidden-eye' : 'more-button'} onClick={classHandler}>{descOpen ? <BiHide/> : <BiShow/>}</button>
  </div>
  )
}

export default Item;