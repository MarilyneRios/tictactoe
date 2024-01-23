import React, { useState } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/available.png';
import x_icon from '../Assets/letter-x.png';



export const TicTacToe = () => {
    let [data, setData] = useState(["","","","","","","","",""]);
    let [count,setCount]=useState(0);
    let [lock, setLock]= useState(false);


    //fct qd une case est cliqué
    const toggle = (e,num) => {
       //tjrs commencer par un vérification que le jeu NE soit PAS TERMINE
        if(lock){
            return 0;
        }
        //Si le nombre de clique est pair, place un X, sinon place un O
        if(count%2 === 0){
            e.target.innerHTML = `<img src = ${x_icon}>`;
            data[num] = "x" ;
            setCount(++count);
        } else {
            e.target.innerHTML = `<img src = ${circle_icon}>`;
            data[num] = "o" ;
            setCount(++count);
        }
        // Vérifie si le jeu est terminé (un gagnant === 3 signe identique alignés)
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
                setLock(true);
                alert(`Player ${count%2 === 0 ? "2" : "1"} wins!`);
            } else if(count === 8){
                setLock(true);
                alert("It's a tie!"); //égalité
            }
        }
    };

    const reset = () => {
        setData(["","","","","","","","",""]);
        setCount(0);
        setLock(false);
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
        <button className='reset' onClick={reset} >Reset</button>
    </div>
  )
}
