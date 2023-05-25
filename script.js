//your JS code here. If required.
const submit= document.getElementById("getname");
const p1name=document.getElementById("p1name");
const p2name=document.getElementById("p2name");
let player1="";
let player2="";
let chance =0;
function change(){
    player1=p1name.value;
    player2=p2name.value;
    displayCurrentplayer();
    console.log("entered");
    document.getElementById("user-input").style.display="none";
    document.getElementById("baad").style.display="block";
}
function displayCurrentplayer(){
    if(chance%2==0){
        document.getElementById("message").innerHTML=`${player1}, you're up`;
    }
    else{
        document.getElementById("message").innerHTML=`${player2}, you're up`;
    }

}

submit.addEventListener("click", change);

//logic for tic tac toe game
function update(event){
    if(chance%2==0){
        event.target.innerHTML="x";
    }
    else{
        event.target.innerHTML="o";
    }
   let ans=updatemat(event.target.id);
    chance++;
    if(ans!=true){
    displayCurrentplayer();
}
}

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  box.addEventListener('click', update,{ once: true });
});
function updatemat(pos){
    let row=0;
    if(pos>=1 && pos<=3){
        row=0;
    }
    else if(pos>=4 && pos<=6){
        row=1;
    }
    else{
        row=2;
    }
    let col=0;
    if(pos%3==0){
        col=2
    }
    else{
        col=pos%3-1;
    }
    if(chance%2==0) {
        mat[row][col]=-1;
        
    }
    else {
        mat[row][col]=0;
        
    }
    return checkResult();
    
}

let mat=[[1,2,3],[4,5,6],[7,8,9]];


function checkResult(){
    console.log("checking");
    let checker=-1;
    if(chance%2!=0){
        checker=0;
    }
    //check rows
    for(let a =0 ;a<3;a++){
        let result=true;
        for(let b=0;b<3;b++){
            if(mat[a][b]!=checker){
                result=false;
                break;
            }
           
        }
        if(result){
            if(chance%2==0){
                document.getElementById("message").innerHTML=`${player1}, won`;
            }
            else{
                document.getElementById("message").innerHTML=`${player2}, won`;
            }
            console.log("winner");
            return true;
        }
    }

    //check columns
    for(let a =0 ;a<3;a++){
        let result=true;
        for(let b=0;b<3;b++){
            if(mat[b][a]!=checker){
                result=false;
                break;
            }
            
        }
        if(result){
            console.log("winner");
            if(chance%2==0){
                document.getElementById("message").innerHTML=`${player1}, won`;
            }
            else{
                document.getElementById("message").innerHTML=`${player2}, won`;
            }
            return true;
        }
    }
    
    if(mat[0][0]===mat[1][1] && mat[0][0]===mat[2][2]){
        if(chance%2==0){
            document.getElementById("message").innerHTML=`${player1}, won`;
        }
        else{
            document.getElementById("message").innerHTML=`${player2}, won`;
        }
        return true;
    }

    if(mat[0][2]===mat[1][1] && mat[0][2]==mat[2][0]){
        if(chance%2==0){
            document.getElementById("message").innerHTML=`${player1}, won`;
        }
        else{
            document.getElementById("message").innerHTML=`${player2}, won`;
        }
        return true;
    }
    

}


