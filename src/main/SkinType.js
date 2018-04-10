import React from 'react';
// import './main/SkinType.css';

const SkinType = props => (
    <div className="skinTypeContainer">
        <h1> rad </h1>
        <button onClick={e => props.onSkinType(e.target.textContent)}>oily</button>
        <button onClick={e => props.onSkinType(e.target.textContent)}>combo</button>
        <button onClick={e => props.onSkinType(e.target.textContent)}>dry</button>
        <button className="button1" onClick={() => props.changePlace('finish')}>next!</button>
    </div>
)
export default SkinType;