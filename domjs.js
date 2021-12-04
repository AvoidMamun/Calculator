function f1(){
   document.formone.answer.value+='1';
   
}

function f2(){
    document.formone.answer.value+='2';
    
 }
 function f3(){
    document.formone.answer.value+='3';
    
 }

 function fplus(){
    
    if(document.formone.answer.value.slice(-1)!="-" && document.formone.answer.value.slice(-1)!="+" && 
    document.formone.answer.value.slice(-1)!="*" && document.formone.answer.value.slice(-1)!="/"){
        document.formone.answer.value+='+';
   }  
 }

 function f4(){
    document.formone.answer.value+='4';
    
 }
 
 function f5(){
     document.formone.answer.value+='5';
     
  }
  function f6(){
     document.formone.answer.value+='6';
     
  }
 
  function fminus(){
    if(document.formone.answer.value.slice(-1)!="-" && document.formone.answer.value.slice(-1)!="+" && 
    document.formone.answer.value.slice(-1)!="*" && document.formone.answer.value.slice(-1)!="/"){
        document.formone.answer.value+='-';
   }  
         
     
  }

  function f7(){
    document.formone.answer.value+='7';
    
 }
 
 function f8(){
     document.formone.answer.value+='8';
     
  }
  function f9(){
     document.formone.answer.value+='9';
     
  }
 


  function fmult(){
    
    if(document.formone.answer.value.slice(-1)!="-" && document.formone.answer.value.slice(-1)!="+" && 
    document.formone.answer.value.slice(-1)!="*" && document.formone.answer.value.slice(-1)!="/"){
        document.formone.answer.value+='*';
   console.log(document.formone.answer.value.slice(-1));

        
   }  
     
  }

  function fdv(){
    if(document.formone.answer.value.slice(-1)!="-" && document.formone.answer.value.slice(-1)!="+" && 
    document.formone.answer.value.slice(-1)!="*" && document.formone.answer.value.slice(-1)!="/"){

        document.formone.answer.value+="/";
    }

  }
 function f0(){
     document.formone.answer.value+='0';
     
  }
 

  function clr(){
    document.formone.answer.value=' ';
    
 }

 function undo(){
    document.formone.answer.value=document.formone.answer.value.slice(0,-1);
    
 }

 function result(){
    if(document.formone.answer.value.slice(-1)=="-" || document.formone.answer.value.slice(-1)=="+" || 
    document.formone.answer.value.slice(-1)=="*" || document.formone.answer.value.slice(-1)=="/"){
        undo();
         } 
        
         document.formone.answer.value=eval(document.formone.answer.value);
         
 }
 
