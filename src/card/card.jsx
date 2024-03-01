import {useState} from 'react';
import './card.css';
import {Data} from '../data/data';

export const Card = () => {
    const [active, setActive] = useState(false);

    return <>
        <div className="card" style={active ? {backgroundColor: "#000"} : {}}>
            <img src={`./${Data.image}`} alt={Data.title}/>
            <div className="card-body">
                <h5 className="card-title">{Data.title}</h5>
                <p
                    className="card-text"
                    style={active ? {color: "#fff"} : {}}
                    >{Data.text}
                </p>
                <button
                    className="card-btn"
                    onClick={() => setActive(!active)}
                    >Change color</button>
            </div>
        </div>
    </>
}