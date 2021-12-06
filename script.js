const numberOfSubsections=5;
const numberOfQuestions=10;
const numberOfPoints=5;
var blockedRadio=[];

function done2()
{

    value_select_1_1 = parseInt(document.getElementById("select_1_1").value)
    value_select_1_2 = parseInt(document.getElementById("select_1_2").value)
    value_select_1_3 = parseInt(document.getElementById("select_1_3").value)
    value_select_1_4 = parseInt(document.getElementById("select_1_4").value)
    value_select_1_5 = parseInt(document.getElementById("select_1_5").value)
    value_select_1_6 = parseInt(document.getElementById("select_1_6").value)
    value_select_1_7 = parseInt(document.getElementById("select_1_7").value)
    value_select_1_8 = parseInt(document.getElementById("select_1_8").value)

    value_select_2_1 = parseInt(document.getElementById("select_2_1").value)
    value_select_2_2 = parseInt(document.getElementById("select_2_2").value)
    value_select_2_3 = parseInt(document.getElementById("select_2_3").value)
    value_select_2_4 = parseInt(document.getElementById("select_2_4").value)
    value_select_2_5 = parseInt(document.getElementById("select_2_5").value)
    value_select_2_6 = parseInt(document.getElementById("select_2_6").value)
    value_select_2_7 = parseInt(document.getElementById("select_2_7").value)
    value_select_2_8 = parseInt(document.getElementById("select_2_8").value)

    value_select_3_1 = parseInt(document.getElementById("select_3_1").value)
    value_select_3_2 = parseInt(document.getElementById("select_3_2").value)
    value_select_3_3 = parseInt(document.getElementById("select_3_3").value)
    value_select_3_4 = parseInt(document.getElementById("select_3_4").value)
    value_select_3_5 = parseInt(document.getElementById("select_3_5").value)
    value_select_3_6 = parseInt(document.getElementById("select_3_6").value)
    value_select_3_7 = parseInt(document.getElementById("select_3_7").value)
    value_select_3_8 = parseInt(document.getElementById("select_3_8").value)

    value_select_4_1 = parseInt(document.getElementById("select_4_1").value)
    value_select_4_2 = parseInt(document.getElementById("select_4_2").value)
    value_select_4_3 = parseInt(document.getElementById("select_4_3").value)
    value_select_4_4 = parseInt(document.getElementById("select_4_4").value)
    value_select_4_5 = parseInt(document.getElementById("select_4_5").value)
    value_select_4_6 = parseInt(document.getElementById("select_4_6").value)
    value_select_4_7 = parseInt(document.getElementById("select_4_7").value)
    value_select_4_8 = parseInt(document.getElementById("select_4_8").value)

    value_select_5_1 = parseInt(document.getElementById("select_5_1").value)
    value_select_5_2 = parseInt(document.getElementById("select_5_2").value)
    value_select_5_3 = parseInt(document.getElementById("select_5_3").value)
    value_select_5_4 = parseInt(document.getElementById("select_5_4").value)
    value_select_5_5 = parseInt(document.getElementById("select_5_5").value)
    value_select_5_6 = parseInt(document.getElementById("select_5_6").value)
    value_select_5_7 = parseInt(document.getElementById("select_5_7").value)
    value_select_5_8 = parseInt(document.getElementById("select_5_8").value)

    value_select_6_1 = parseInt(document.getElementById("select_6_1").value)
    value_select_6_2 = parseInt(document.getElementById("select_6_2").value)
    value_select_6_3 = parseInt(document.getElementById("select_6_3").value)
    value_select_6_4 = parseInt(document.getElementById("select_6_4").value)
    value_select_6_5 = parseInt(document.getElementById("select_6_5").value)
    value_select_6_6 = parseInt(document.getElementById("select_6_6").value)
    value_select_6_7 = parseInt(document.getElementById("select_6_7").value)
    value_select_6_8 = parseInt(document.getElementById("select_6_8").value)

    value_select_7_1 = parseInt(document.getElementById("select_7_1").value)
    value_select_7_2 = parseInt(document.getElementById("select_7_2").value)
    value_select_7_3 = parseInt(document.getElementById("select_7_3").value)
    value_select_7_4 = parseInt(document.getElementById("select_7_4").value)
    value_select_7_5 = parseInt(document.getElementById("select_7_5").value)
    value_select_7_6 = parseInt(document.getElementById("select_7_6").value)
    value_select_7_7 = parseInt(document.getElementById("select_7_7").value)
    value_select_7_8 = parseInt(document.getElementById("select_7_8").value)

    if(value_select_1_1+value_select_1_2+value_select_1_3+value_select_1_4+
      value_select_1_5+value_select_1_6+value_select_1_7+value_select_1_8 != 10)
    {
        alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.1")
    }
    else if(value_select_2_1+value_select_2_2+value_select_2_3+value_select_2_4+
      value_select_2_5+value_select_2_6+value_select_2_7+value_select_2_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.2")
    }
    else if(value_select_3_1+value_select_3_2+value_select_3_3+value_select_3_4+
      value_select_3_5+value_select_3_6+value_select_3_7+value_select_3_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.3")
    }
    else if(value_select_4_1+value_select_4_2+value_select_4_3+value_select_4_4+
      value_select_4_5+value_select_4_6+value_select_4_7+value_select_4_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.4")
    }
    else if(value_select_5_1+value_select_5_2+value_select_5_3+value_select_5_4+
      value_select_5_5+value_select_5_6+value_select_5_7+value_select_5_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.5")
    }
    else if(value_select_6_1+value_select_6_2+value_select_6_3+value_select_6_4+
      value_select_6_5+value_select_6_6+value_select_6_7+value_select_6_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.6")
    }
    else if(value_select_7_1+value_select_7_2+value_select_7_3+value_select_7_4+
      value_select_7_5+value_select_7_6+value_select_7_7+value_select_7_8 != 10)
    {
      alert("Punkty muszą byc rozdzielone tak aby ich suma wyniosła 10 w pytaniu nr.7")
    }
    else
    {


      var org_wynik = parseInt(document.getElementById("select_1_1").value) + parseInt(document.getElementById("select_2_1").value) 
      + parseInt(document.getElementById("select_3_1").value) + parseInt(document.getElementById("select_4_1").value) 
      + parseInt(document.getElementById("select_5_1").value) + parseInt(document.getElementById("select_6_1").value) + parseInt(document.getElementById("select_7_1").value) 
    
    
      var nl_wynik = parseInt(document.getElementById("select_1_2").value) + parseInt(document.getElementById("select_2_2").value) 
      + parseInt(document.getElementById("select_3_2").value) + parseInt(document.getElementById("select_4_2").value) 
      + parseInt(document.getElementById("select_5_2").value) + parseInt(document.getElementById("select_6_2").value) + parseInt(document.getElementById("select_7_2").value) 
    
      var des_wynik = parseInt(document.getElementById("select_1_3").value) + parseInt(document.getElementById("select_2_3").value) 
      + parseInt(document.getElementById("select_3_3").value) + parseInt(document.getElementById("select_4_3").value) 
      + parseInt(document.getElementById("select_5_3").value) + parseInt(document.getElementById("select_6_3").value) + parseInt(document.getElementById("select_7_3").value) 
    
      var kre_wynik = parseInt(document.getElementById("select_1_4").value) + parseInt(document.getElementById("select_2_4").value) 
      + parseInt(document.getElementById("select_3_4").value) + parseInt(document.getElementById("select_4_4").value) 
      + parseInt(document.getElementById("select_5_4").value) + parseInt(document.getElementById("select_6_4").value) + parseInt(document.getElementById("select_7_4").value) 
    
      var posz_wynik = parseInt(document.getElementById("select_1_5").value) + parseInt(document.getElementById("select_2_5").value) 
      + parseInt(document.getElementById("select_3_5").value) + parseInt(document.getElementById("select_4_5").value) 
      + parseInt(document.getElementById("select_5_5").value) + parseInt(document.getElementById("select_6_5").value) + parseInt(document.getElementById("select_7_5").value) 
    
      var an_wynik = parseInt(document.getElementById("select_1_6").value) + parseInt(document.getElementById("select_2_6").value) 
      + parseInt(document.getElementById("select_3_6").value) + parseInt(document.getElementById("select_4_6").value) 
      + parseInt(document.getElementById("select_5_6").value) + parseInt(document.getElementById("select_6_6").value) + parseInt(document.getElementById("select_7_6").value) 
    
      var gg_wynik = parseInt(document.getElementById("select_1_7").value) + parseInt(document.getElementById("select_2_7").value) 
      + parseInt(document.getElementById("select_3_7").value) + parseInt(document.getElementById("select_4_7").value) 
      + parseInt(document.getElementById("select_5_7").value) + parseInt(document.getElementById("select_6_7").value) + parseInt(document.getElementById("select_7_7").value) 
    
      var per_wynik = parseInt(document.getElementById("select_1_6").value) + parseInt(document.getElementById("select_2_1").value) 
      + parseInt(document.getElementById("select_3_7").value) + parseInt(document.getElementById("select_4_4").value) 
      + parseInt(document.getElementById("select_5_2").value) + parseInt(document.getElementById("select_6_6").value) + parseInt(document.getElementById("select_7_5").value) 
    

      if(!isNaN(document.getElementById("punkty_org").innerHTML))
      {
        document.getElementById("punkty_org").innerHTML
        +=  
        + org_wynik + "<br>";

        document.getElementById("punkty_nl").innerHTML
        +=  
        + nl_wynik + "<br>";

        document.getElementById("punkty_des").innerHTML
        +=  
        + des_wynik + "<br>";

        document.getElementById("punkty_kre").innerHTML
        +=  
        + kre_wynik + "<br>";

        document.getElementById("punkty_posz").innerHTML
        +=  
        + posz_wynik + "<br>";

        document.getElementById("punkty_an").innerHTML
        +=  
        + an_wynik + "<br>";

        document.getElementById("punkty_gg").innerHTML
        +=  
        + gg_wynik + "<br>";

        document.getElementById("punkty_per").innerHTML
        +=  
        + per_wynik + "<br>";

  
      }

    }
  
}

function show_table()
{
  
  if (document.getElementById("result_table").style.display == "none")
        document.getElementById("result_table").style.display="block";
    else if(document.getElementById("result_table").style.display="block")
        document.getElementById("result_table").style.display="none";

  // if (document.getElementById("tabela_role").style.display == "none")
  //       document.getElementById("tabela_role").style.display="block";
  //   else if(document.getElementById("tabela_role").style.display="block")
  //       document.getElementById("tabela_role").style.display="none";

  
}


function done(){
  var mentor=0;
  var coach=0;
  var doradca=0;
  var ele = document.getElementsByTagName('input');
    

       


        document.getElementById("disp").innerHTML = "";
        var ele = document.getElementsByTagName('input');
        var d=[];
        for(i = 0; i < ele.length; i++) {
            if(ele[i].type="radio") {
              
                if(ele[i].checked)
                {

                  if(ele[i].value!=null)d+= ele[i].value ;
                 
                }
                    

            }
        


          }


  var p=Array.from(d);
 
  
coach=parseInt(p[2])+parseInt(p[4])+parseInt(p[7])+parseInt(p[9])+parseInt(p[14])+parseInt(p[15])+parseInt(p[18])+parseInt(p[22])+parseInt(p[25])+parseInt(p[28]);
mentor=parseInt(p[0])+parseInt(p[5])+parseInt(p[6])+parseInt(p[11])+parseInt(p[12])+parseInt(p[17])+parseInt(p[20])+parseInt(p[23])+parseInt(p[24])+parseInt(p[29]);
doradca=parseInt(p[1])+parseInt(p[3])+parseInt(p[8])+parseInt(p[10])+parseInt(p[13])+parseInt(p[16])+parseInt(p[19])+parseInt(p[21])+parseInt(p[26])+parseInt(p[27]);
console.log(mentor)

if(isNaN(coach) || isNaN(mentor) || isNaN(doradca))
{
  alert ("Wszystkie pola muszą być uzupełnione!");
}
else
{
  document.getElementById("disp").innerHTML
  +=  " Coach: "
  + coach + "<br>"
  
    + " Mentor: "
  + mentor + "<br>"
  
   + " Doradca: "
  + doradca + "<br>";
}



}


function reset(id) {

  for(var k=1;k<4;k++){//czyszczenie
    for(var l=1;l<4;l++){

      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;
      //document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;

      //document.getElementById("0_1_3").disabled = false;
    }
  }

} 


function done3()
{
  var org = 0;
  var nl = 0;
  var des = 0;
  var kre = 0;
  var posz = 0;
  var an = 0;
  var gg = 0;
  var per = 0;

  //org

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("0_1_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("1_1_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("2_1_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("3_1_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("4_1_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("5_1_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_1_"+i.toString()).checked == true)
    {
      org += parseInt(document.getElementById("6_1_"+i.toString()).value)
    }
  }


//nl
  
  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("0_2_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("1_2_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("2_2_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("3_2_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("4_2_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("5_2_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_2_"+i.toString()).checked == true)
    {
      nl += parseInt(document.getElementById("6_2_"+i.toString()).value)
    }
  }


  //des
  
  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("0_3_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("1_3_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("2_3_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("3_3_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("4_3_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("5_3_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_3_"+i.toString()).checked == true)
    {
      des += parseInt(document.getElementById("6_3_"+i.toString()).value)
    }
  }

  
  //kre

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("0_4_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("1_4_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("2_4_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("3_4_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("4_4_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("5_4_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_4_"+i.toString()).checked == true)
    {
      kre += parseInt(document.getElementById("6_4_"+i.toString()).value)
    }
  }


  //posz

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("0_5_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("1_5_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("2_5_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("3_5_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("4_5_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("5_5_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_5_"+i.toString()).checked == true)
    {
      posz += parseInt(document.getElementById("6_5_"+i.toString()).value)
    }
  }



  //an

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("0_6_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("1_6_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("2_6_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("3_6_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("4_6_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("5_6_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_6_"+i.toString()).checked == true)
    {
      an += parseInt(document.getElementById("6_6_"+i.toString()).value)
    }
  }
  

  //gg

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("0_7_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("1_7_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("2_7_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("3_7_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("4_7_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("5_7_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_7_"+i.toString()).checked == true)
    {
      gg += parseInt(document.getElementById("6_7_"+i.toString()).value)
    }
  }


  //per

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("0_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("0_8_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("1_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("1_8_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("2_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("2_8_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("3_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("3_8_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("4_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("4_8_"+i.toString()).value)
    }
  }

  for(var i=0; i<11; i++)
  {
    if(document.getElementById("5_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("5_8_"+i.toString()).value)
    }
  }


  for(var i=0; i<11; i++)
  {
    if(document.getElementById("6_8_"+i.toString()).checked == true)
    {
      per += parseInt(document.getElementById("6_8_"+i.toString()).value)
    }
  }
  
  


  if(!isNaN(document.getElementById("punkty_org").innerHTML)&&(org+nl+des+kre+posz+an+gg+per==70))
  {

    document.getElementById("punkty_org").innerHTML
    +=  
    + org + "<br>";

    document.getElementById("punkty_nl").innerHTML
        +=  
        + nl + "<br>";

        document.getElementById("punkty_des").innerHTML
        +=  
        + des + "<br>";

        document.getElementById("punkty_kre").innerHTML
        +=  
        + kre + "<br>";

        document.getElementById("punkty_posz").innerHTML
        +=  
        + posz + "<br>";

        document.getElementById("punkty_an").innerHTML
        +=  
        + an + "<br>";

        document.getElementById("punkty_gg").innerHTML
        +=  
        + gg + "<br>";

        document.getElementById("punkty_per").innerHTML
        +=  
        + per + "<br>";


  }
  else{
    alert("Nie wypełniłeś wszytkich pól");
  }
  
}


function display(id) { 

   var checkRadio = document.querySelector('input[name="Question"]:checked');
  var e = document.getElementById(id);
var strUser = e.value;
  
  if(checkRadio != null) {
      
          
         var question=id.slice(0, 1);
          
        
          var number=id.slice(2, 3);
          var point=id.slice(4, 5);
          if(id.length==6)point=10;
          var suma=0;
          
          
        


        for(var k=1;k<numberOfSubsections;k++){  //sprawdzanie
          for(var l=1;l<numberOfPoints;l++){
           
            if(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).checked == true)
            {
             //suma+= parseInt(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).value)
             blockedRadio.push(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).value);  
            }
            
          }
        }
        //console.log(blockedRadio)
        //czyszczenie 
        for(var k=1;k<numberOfSubsections;k++){ 
          for(var l=1;l<numberOfPoints;l++){
            
            

            for(i=0;i<blockedRadio.length;i++){//czyszczenie buttonów
              if(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).value != blockedRadio[i])
              {
                if(!document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).checked == true)document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled = false
              
              }
            }
            
            
          }
        }

       

        //disabledowanie
        for(var k=1;k<numberOfSubsections;k++){ 
          for(var l=1;l<numberOfPoints;l++){
            
            
            for(i=0;i<blockedRadio.length;i++){
              
              if(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).value == blockedRadio[i])
              {
                if(document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled == false&&document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).checked == false)document.getElementById(question + "_"+k.toString() +"_"+ l.toString()  ).disabled = true
              
              }
            }
            
          }
        }

 
  }
  
  
}


function reset(id) {

  for(var k=1;k<numberOfSubsections;k++){//resetowanie
    for(var l=1;l<numberOfPoints;l++){

      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).disabled = false;
      document.getElementById(id + "_"+k.toString() +"_"+ l.toString()  ).checked = false;
      
    }
  }

} 