let pole=document.getElementById("cellContainer");
pole.addEventListener("mousedown",clickMouse);
let turn="X";
let checkMass=["none","none","none","none","none","none","none","none","none","none"]
let info=document.getElementById("textInfo");
let Winner="none";

function clickMouse(event){
       const fill_cell=event.target;
       let numb_cel=Number(fill_cell.getAttribute("cellid"));
       //alert( numb_cel);
       if (Winner=="none"){
         if (checkMass[numb_cel]=="none"){
          checkMass[numb_cel]=turn;
          fill_cell.innerHTML=turn;
          if(turn=="X"){turn="O";}
          else{turn="X";}
          info.innerHTML="Сейчас ход: "+turn;
          checkWinner();
         }
         else{
           info.innerHTML="Ячейка занята!";
         }
        }
}
function checkWinner(){
      let testStr=""
      //1 012
      testStr=checkMass[0] +checkMass[1]+checkMass[2];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";
        Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";
        Winner="O";
      }
      //2 345
      testStr= checkMass[3] +checkMass[4]+checkMass[5];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
      //3 678
      testStr= checkMass[6] +checkMass[7]+checkMass[8];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
        //4 036
      testStr= checkMass[0] +checkMass[3]+checkMass[6];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
      //5 147
      testStr= checkMass[1] +checkMass[4]+checkMass[7];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
      //6 258
      testStr= checkMass[2] +checkMass[5]+checkMass[8];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
      //7 048
      testStr= checkMass[0] +checkMass[4]+checkMass[8];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
      //8 246
      testStr= checkMass[2] +checkMass[4]+checkMass[6];
      if (testStr=="XXX"){
        info.innerHTML="Победил X";Winner="X";
      }
      if (testStr=="OOO"){
        info.innerHTML="Победил O";Winner="O";
      }
}