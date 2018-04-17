import React from 'react';
// import './main/SkinType.css';

const SkinType = props => (
    <div className="skinTypeContainer">
<style>
@import url('https://fonts.googleapis.com/css?family=Pacifico');
@import url('https://fonts.googleapis.com/css?family=Cinzel');
</style>
        <span className="vert-button--btn1"> Okay, let's get started. What type of skin do you have?</span>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="vert-button--btn">oily</button>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="vert-button--btn">combo</button>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="vert-button--btn">dry</button>
        <button className="skinTypeButton" onClick={() => props.changePlace('finish')}>next!</button>
    </div>
)
export default SkinType;