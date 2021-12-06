const numberOfSubsections=5;
const numberOfQuestions=10;
const numberOfPoints=5;
var blockedRadio=[];



function display(id) { 

   var checkRadio = document.querySelector('input[name="Question"]:checked');
   var e = document.getElementById(id);
   var strUser = e.value;
  
  if(checkRadio != null) {
      
          
          var question=id.slice(0, 1);
          var number=id.slice(2, 3);
          var point=id.slice(4, 5);
          if(id.length==6)point=10;
         
          
          
        

          blockedRadio.splice(0,blockedRadio.length)
        for(var k=1;k<numberOfSubsections;k++){  //sprawdzanie
          for(var l=1;l<numberOfPoints;l++){
           var currentPoint=document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  )
            if(currentPoint.checked == true)
            {
             
             blockedRadio.push(currentPoint.value);  
             console.log(blockedRadio)
            }
            
          }
        }
        
        //czyszczenie 
        for(var k=1;k<numberOfSubsections;k++){ 
          for(var l=1;l<numberOfPoints;l++){
            var currentPoint=document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  )
            

            for(i=0;i<blockedRadio.length;i++){//czyszczenie buttonów
              if(currentPoint.value != blockedRadio[i])
              {
                if(!currentPoint.checked == true)currentPoint.disabled = false
              
              }
            }
            
            for(i=0;i<blockedRadio.length;i++){//wyrzucanie z listy niepotrzebych el
              if(currentPoint.checked != true&&currentPoint.disabled != true)
              {
                if(!currentPoint.value== blockedRadio[i])blockedRadio.splice( i)
              
              }
            }
            
          }
        }

       

        //disabledowanie
        for(var k=1;k<numberOfSubsections;k++){ 
          for(var l=1;l<numberOfPoints;l++){
            var currentPoint=document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  )
            
            for(i=0;i<blockedRadio.length;i++){
              
              if(currentPoint.value == blockedRadio[i])
              {
                if(currentPoint.disabled == false&&currentPoint.checked == false)currentPoint.disabled = true
              
              }
            }
            
          }
        }

 
  }
  
  
}


function reset(id) {
  blockedRadio.splice(0,blockedRadio.length)
  for(var k=1;k<numberOfSubsections;k++){//resetowanie
    for(var l=1;l<numberOfPoints;l++){

      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;
      
    }
  }

} 