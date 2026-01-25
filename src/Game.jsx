import { useState } from 'react';
import './Game.css'

export default function Game({ class1 }) {
    let [won,setwon] = useState(false);

    function run(){
        if(won) setwon(false);
        let childs = document.getElementById('lottery').childNodes;
        let a = gen();
        let b = gen();
        let c = gen();
        childs[0].textContent = a;
        childs[1].textContent = b;
        childs[2].textContent = c;
        if(a+b+c === 9) setwon(true);
    }

    function gen(){
        return Math.floor(Math.random()*10);
    }
    
    return (
        <div className={(class1 || "") + " game-container"}>
            <div className={"game-top" + (won?" hidden":"")}>
                <h1>Check Your Luck</h1>
                <div className="boxes-area" id='lottery'>
                    <div className='gen'>-</div>
                    <div className='gen'>-</div>
                    <div className='gen'>-</div>
                </div>
            </div>
            <h1 className={won?"":"hidden"}>Congratulations on Winning!</h1>
            <button className="check-btn" onClick={run}>{won?'Re-Start?' : 'Run'}</button>
        </div>
    );
}