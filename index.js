
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let winbutton = document.querySelector(".winning");
let winid =document.querySelector("#id1");
let newgamebtn = document.querySelector(".newgame");


let turn0 = true;
let count =0;

const  winpatterns = [ 
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8],];

    boxes.forEach((box)=>{
        box.addEventListener("click",()=>{
          
          if(turn0){
            box.innerText ="O";
            turn0 = false;
          }
          else{
            box.innerText ="X";
            turn0 = true;
          }
          box.disabled =true;
          count++;

          let iswinner  =  checkwinner();
          if(count===9&&!iswinner){
            gameDraw();
          }
        });
    });

    const gameDraw = () => {
      winid.innerText = `Game was a Draw.`;
      winbutton.classList.remove("hide");
      disableBoxes();
    };
    

const checkwinner = ()=>{
    for( let pattern of winpatterns ){

       let posval1 = boxes[pattern[0]].innerText;
       let posval2 = boxes[pattern[1]].innerText;
       let posval3 = boxes[pattern[2]].innerText;

       if(posval1 !="" && posval2 !="" && posval3 !=""){
        if(posval1===posval2&&posval2===posval3){
        showwinner(posval1);
        }
        }
    }
};
 const showwinner = (winner) =>{
         winid.innerText = `Congratulations, Winner is ${winner}`;
         winbutton.classList.remove("hide");
         disableBoxes();
 };
 const resetGame = ()=>{
   turn0 = true;
   count = 0;
   enableBox();
   winbutton.classList.add("hide");
   

 };
 const disableBoxes = () =>{
  for(let box of boxes){
    box.disabled =true;
  }
 };
 const enableBox =() =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText ="";
  }
 };
 newgamebtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);