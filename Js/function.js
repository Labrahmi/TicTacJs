const inside = document.getElementsByClassName('box-inside')
const box = document.getElementsByClassName('box')
const overlay = document.getElementsByClassName('overlay')
const replay = document.querySelector('button')
//win_h_
const win_h_0 = document.getElementById('win_h_0')
const win_h_1 = document.getElementById('win_h_1')
const win_h_2 = document.getElementById('win_h_2')
//win_v_
const win_v_0 = document.getElementById('win_v_0')
const win_v_1 = document.getElementById('win_v_1')
const win_v_2 = document.getElementById('win_v_2')
//
const win_d_0 = document.getElementById('win_d_0')
const win_d_1 = document.getElementById('win_d_1')


function endGame(){
    box[0].classList.add('blure')
    overlay[0].classList.replace('sHiden','sVisible');
}

var turn = 1;
var oneTime = [0,0,0,0,0,0,0,0,0]

var moves = [
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

const arrayColumn = (arr, n) => arr.map(x => x[n]);
const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const oWinsVal = [0,0,0]
const xWinsVal = [1,1,1]


var line1 = moves[0]
var line2 = moves[1]
var line3 = moves[2]

var colm1;
var colm2;
var colm3;

var diago1;
var diago2;








for(let i=0 ;i<inside.length; i++){
    inside[i].onclick = function(){
        var thiTurn = turn%2
        if(oneTime[i] != 1){
            inside[i].children[thiTurn].classList.replace('sHiden','sVisible')
            turn++
            oneTime[i] = 1
            switch (i) {
                case 0:
                    moves[0][0]=thiTurn
                    break;
                    case 1:
                    moves[0][1]=thiTurn
                    break;
                    case 2:
                    moves[0][2]=thiTurn
                    break;
                    case 3:
                    moves[1][0]=thiTurn
                    break;
                    case 4:
                    moves[1][1]=thiTurn
                    break;
                    case 5:
                    moves[1][2]=thiTurn
                    break;
                    case 6:
                    moves[2][0]=thiTurn
                    break;
                    case 7:
                    moves[2][1]=thiTurn
                    break;
                    case 8:
                    moves[2][2]=thiTurn
                    break;
                default:
                    break;
            }
    }

    colm1 = arrayColumn(moves, 0)
    colm2 = arrayColumn(moves, 1)
    colm3 = arrayColumn(moves, 2)
    diago1 = [moves[0][0],moves[1][1],moves[2][2]];
    diago2 = [moves[0][2],moves[1][1],moves[2][0]];

    if(turn == 10){ endGame() }

        if(equals(line1, oWinsVal) || equals(line1, xWinsVal)){
            win_h_0.classList.replace('sHiden','sVisible');
            endGame()
        }
        if(equals(line2, oWinsVal) || equals(line2, xWinsVal)){
            win_h_1.classList.replace('sHiden','sVisible');
            endGame()
        }
        if(equals(line3, oWinsVal) || equals(line3, xWinsVal)){
            win_h_2.classList.replace('sHiden','sVisible');
            endGame()
        }
        //win_v_0
        if(equals(colm1, oWinsVal) || equals(colm1, xWinsVal)){
            win_v_2.classList.replace('sHiden','sVisible');
            endGame()
        }
        if(equals(colm2, oWinsVal) || equals(colm2, xWinsVal)){
            win_v_1.classList.replace('sHiden','sVisible');
            endGame()
        }
        if(equals(colm3, oWinsVal) || equals(colm3, xWinsVal)){
            win_v_0.classList.replace('sHiden','sVisible');
            endGame()
        }
        //win_d_0
        if(equals(diago1, oWinsVal) || equals(diago1, xWinsVal)){
            win_d_1.classList.replace('sHiden','sVisible');
            endGame()
        }
        if(equals(diago2, oWinsVal) || equals(diago2, xWinsVal)){
            win_d_0.classList.replace('sHiden','sVisible');
            endGame()
        }



    }
}
replay.onclick = function(){
    location.href = "./";
}
