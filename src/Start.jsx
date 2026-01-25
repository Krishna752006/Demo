import Game from './Game.jsx';

export default function Start({view, setStart}){
    function setit(){
        setStart(false);
    }
    return (
        <>
            <div className = {view?"":"hidden"}>
                <h1>Press the Button to Start the Game</h1>
                <button onClick = {setit}>Start</button>
            </div>
            <Game class1 = {view?"hidden":""}/>
        </>
    );
}