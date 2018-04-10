import React from 'react';
// import './main/Finish.css';

const Finish = props => (
    <div> 
        <button onClick={e => props.onFinishType(e.target.textContent)}>Matte</button>
        <button onClick={e => props.onFinishType(e.target.textContent)}>Dewy</button>
        <button onClick={() => props.changePlace('Results')}>ready</button>
    </div> 
)

export default Finish;