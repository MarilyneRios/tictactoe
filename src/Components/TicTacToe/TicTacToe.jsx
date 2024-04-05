import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/available.png';
import x_icon from '../Assets/letter-x.png';
import Message from './Message'; 
import useConfetti from "../../hooks/useConfetti"

export const TicTacToe = () => {
    let [data, setData] = useState(["","","","","","","","",""]);
    let [count,setCount]=useState(0);
    let [lock, setLock]= useState(false);
    let [message, setMessage] = useState(""); 
    const [bestTime, setBestTime] = useState(false);
    const [bestDiceRoll, setBestDiceRoll] = useState(false);
    const { confetti, newBestTime, newBestDiceRoll, newBestGame } = useConfetti({ bestTime, setBestTime, bestDiceRoll, setBestDiceRoll });

    const toggle = (e,num) => {
        if(lock){
            return 0;
        }
        if(count%2 === 0){
            e.target.innerHTML = `<img src = ${x_icon}>`;
            data[num] = "x" ;
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src = ${circle_icon}>`;
            data[num] = "o" ;
            setCount(++count);
        }
        if(count >= 4){
            if((data[0] === data[1] && data[1] === data[2] && data[0] !== "") 
                || (data[3] === data[4] && data[4] === data[5] && data[3] !== "") 
                || (data[6] === data[7] && data[7] === data[8] && data[6] !== "") 
                || (data[0] === data[3] && data[3] === data[6] && data[0] !== "") 
                || (data[1] === data[4] && data[4] === data[7] && data[1] !== "") 
                || (data[2] === data[5] && data[5] === data[8] && data[2] !== "") 
                || (data[0] === data[4] && data[4] === data[8] && data[0] !== "") 
                || (data[2] === data[4] && data[4] === data[6] && data[2] !== "")
            ){
                console.log('A player has won!'); 
                setLock(true);
                setMessage(` Player ${count%2 === 0 ? "2" : "1"}🏆 wins!`);
                confetti(); // Déclencher les confettis lorsque le joueur gagne
            } else if(count === 8){
                setLock(true);
                setMessage("It's a tie!"); 
            }
        }
    };

    const reset = () => {
        setData(["","","","","","","","",""]);
        setCount(0);
        setLock(false);
        setMessage(""); 
 
        let squares = document.getElementsByClassName('square');
        for(let i=0;i<squares.length;i++){
            squares[i].innerHTML = "";
        }
    }    

    return (
        <div className='container'>
            <h1 className='title'> Tic Tac Toe game in  <span> React</span></h1>
           
            <div className='board'>
                <div className='row1'>
                    <div className='square' onClick={(e)=>{toggle(e,0)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,1)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className='row2'>
                    <div className='square' onClick={(e)=>{toggle(e,3)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,4)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className='row3'>
                    <div className='square' onClick={(e)=>{toggle(e,6)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,7)}}></div>
                    <div className='square' onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>
            <section className="confetti">
                {!bestTime && !bestDiceRoll && <h1>Choose a React state, and click celebrate!</h1>} 
                {message && (
                    <h1>
                        <Message msg={message} />
                    </h1>
                )}
                
            </section>
            <button className='reset' onClick={reset} >Reset</button>
        </div>
    )
}
