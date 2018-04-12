import React from 'react';
// import './main/SkinType.css';

const SkinType = props => (
    <div className="skinTypeContainer">
    {/* <style>
@import url('https://fonts.googleapis.com/css?family=Lobster');
</style> */}
<style>
@import url('https://fonts.googleapis.com/css?family=Cinzel');
</style>
<div className="container"> Okay, let's get started. What type of skin do you have? </div>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="oily">oily</button>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="combo">combo</button>
        <button onClick={e => props.onSkinType(e.target.textContent)} className="dry">dry</button>
        <button className="button1" onClick={() => props.changePlace('finish')} className="next">next!</button>
    </div>
)
export default SkinType;