import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import styles from './accordion.module.css';

function Accordion(props) { 
    const [active, setActive] = useState(0);  
    const accordionArray =  props.data.map((data, index) => {
        return (
            <AccardionSingleItem 
                key={index} 
                {...data} 
                active={active === index} 
                onToggle={()=>setActive((active)=>(active === index? "" : index))}
            />
        )
    });    

    return(
            <div className='container'>
                <div className='columns is-mobile mt-4'>
                    <div className='column is-10 is-offset-1'>
                        { accordionArray }
                    </div>
                </div>
            </div>
        )
}

const AccardionSingleItem = ({title, description, active, onToggle}) => {
    const togglevisability = () =>{
        onToggle();
    }

    return (
        <div 
        className=" mb-3">
            <div className="has-background-white-ter p-4 is-flex is-justify-content-space-between is-align-items-center">
                <p>{title}</p>
                <button 
                    className={`${active? styles.btnStyleColse: styles.btnStyleOpen} delete is-pulled-right is-rounded has-background-white-ter`}
                    onClick={togglevisability}
                    >
                </button> 
            </div>
            <div
            className={`${active? styles.accordionOpen : styles.accordionClose} has-background-white-bis`}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Accordion;
