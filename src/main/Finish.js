import React from 'react';
// import './main/Finish.css';

const Finish = props => (
    <div> 
        <style>
        @import url('https://fonts.googleapis.com/css?family=Cinzel');
</style>
        <button onClick={e => props.onFinishType(e.target.textContent)} className="vert-button--btn">Matte</button>
        <button onClick={e => props.onFinishType(e.target.textContent)} className="vert-button--btn">Dewy</button>
        <button onClick={e => props.onFinishType(e.target.textContent)} className="vert-button--btn">Radiant</button>
        <button onClick={e => props.onFinishType(e.target.textContent)} className="vert-button--btn">Smooth</button>
        <span className="vert-button--btn">Great, now what type of finish are you looking for in your foundation?</span>
        <button onClick={() => props.changePlace('Results')}>ready</button>
    </div> 
)

export default Finish;