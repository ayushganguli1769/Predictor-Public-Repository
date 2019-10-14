function fn1()
{
    part1 = document.getElementById("part1");
    part2 = document.getElementById("part2");
    part3 = document.getElementById("part3");
    var select1 = document.getElementById("choice1");
    b1= document.getElementById("branch1");
    b1.value=  select1.options[select1.selectedIndex].value;
    var select2 = document.getElementById("choice2");
    b2= document.getElementById("branch2");
    b2.value=  select2.options[select2.selectedIndex].value;
    var select3 = document.getElementById("choice3");
    b3= document.getElementById("branch3");
    b3.value=  select3.options[select3.selectedIndex].value;
    var select4 = document.getElementById("choice4");
    b4= document.getElementById("branch4");
    b4.value=  select4.options[select4.selectedIndex].value;
    var select5 = document.getElementById("choice5");
    b5= document.getElementById("branch5");
    b5.value=  select5.options[select5.selectedIndex].value;
    var select6 = document.getElementById("choice6");
    b6= document.getElementById("branch6");
    b6.value=  select6.options[select6.selectedIndex].value;           
    var select7 = document.getElementById("choice7");
    b7= document.getElementById("branch7");
    b7.value=  select7.options[select7.selectedIndex].value;
    var select8 = document.getElementById("choice8");
    b8= document.getElementById("branch8");
    b8.value=  select8.options[select8.selectedIndex].value;
    var select9 = document.getElementById("choice9");
    b9= document.getElementById("branch9");
    b9.value=  select9.options[select9.selectedIndex].value;
    var select10 = document.getElementById("choice10");
    b10= document.getElementById("branch10");
    b10.value=  select10.options[select10.selectedIndex].value;
    var hs = document.getElementById("hs");
    home= document.getElementById("home");//home is text field given value of select options hs
    home.value=  hs.options[hs.selectedIndex].value;
   // var output= document.getElementById("output");
    //output.style.display= "initial";
    var choice_list = [b1.value, b2.value, b3.value, b4.value, b5.value , b6.value, b7.value , b8.value , b9.value, b10.value ];
    var none = 0;
    var cse = 0;
    var it = 0;
    var ee = 0;
    var ece = 0;
    var eee = 0;
    var mech = 0;
    var chem = 0;
    var civil = 0;
    var meta = 0;
    var min = 0;
    var bioen = 0;
    var other = 0;
    for( index =0;index < choice_list.length; index++)
    {
       if(choice_list[index] == "CSE")
       cse++;
       if(choice_list[index] == "IT")
       it++;
       if(choice_list[index] == "EE")
       ee++;
       if(choice_list[index] == "ECE")
       ece++;
       if(choice_list[index] == "EEE")
       eee++;
       if(choice_list[index] == "Mech")
       mech++;
       if(choice_list[index] == "Chem")
       chem++;
       if(choice_list[index] == "Civil")
       civil++;
       if(choice_list[index] == "Meta")
       meta++;
       if(choice_list[index] == "Min")
       min++;
       if(choice_list[index] == "BioEn")
       bioen++;
       if(choice_list[index] == "other")
       other++;
    }
    if ( cse <2 && it <2 && ee<2 && ece<2 && eee<2 && mech <2 && chem <2 && civil <2 && meta<2 && min <2 && bioen < 2 && other <2 )
    {
        alert("Good to proceed");//make slider slide to next
        //slider
        part1.style.display = "none";
        part2.style.display = "block" ;

    }
    else
    {
        alert("You have entered a same choice multiple times.");
    }
}
/*function fn2()
{
op_rank = document.getElementById("op_rank").value;
ad_op_rank = document.getElementById("ad_op_rank").value;
is_obc = document.getElementById("is_obc");

if( op_rank == 0 )
{
alert("Enter valid open rank");
}

else if( is_obc.checked() == True )
{
alert("testing");
}
}/*
/*function slide()//may require multi sliders
{
alert("Good to proceed");
}*/
function fn() //fn validates rank and category input
{
part1 = document.getElementById("part1");
part2 = document.getElementById("part2");
part3 = document.getElementById("part3");
op_rank = document.getElementById("op_rank").value;
is_obc = document.getElementById("is_obc");
obc_rank = document.getElementById("obc_rank").value;
is_sc = document.getElementById("is_sc");
sc_rank = document.getElementById("sc_rank").value;
is_st = document.getElementById("is_st");
st_rank = document.getElementById("st_rank").value;
is_ews = document.getElementById("is_ews");
ews_rank = document.getElementById("ews_rank").value;


if( op_rank <= 0 )
{
alert("Enter valid open rank");
return false;
}

else if( is_obc.checked == true )
{
if( obc_rank <= 0 )
{
    alert("Enter valid obc jee main rank");
    return false;
}
if( is_sc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_st.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_ews.checked == true )
{
    alert("Multiple categories selected");
    return false;
}


}
else if( is_sc.checked == true )
{
if( sc_rank <= 0 )
{
    alert("Enter valid obc jee main rank");
    return false;
}
if( is_obc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_st.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_ews.checked == true )
{
    alert("Multiple categories selected");
    return false;
}


}
else if( is_st.checked == true )
{
if( st_rank <= 0 )
{
    alert("Enter valid obc jee main rank");
    return false;
}
if( is_obc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_sc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_ews.checked == true )
{
    alert("Multiple categories selected");
    return false;
}


}
else if( is_ews.checked == true )
{
if( ews_rank <= 0 )
{
    alert("Enter valid obc jee main rank");
    return false;
}
if( is_obc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_sc.checked == true )
{
    alert("Multiple categories selected");
    return false;
}
else if( is_st.checked == true )
{
    alert("Multiple categories selected");
    return false;
}



}
else
{
alert("Good to proceed");//make slider slide to next 
part1.style.display = "none";
part2.style.display = "none";
}


//alert("Byeeeeeee");  //delete kardena
//return false;
}
function res()
{
return true;
}