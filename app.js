
//calling API in quotes through Pomise
const api = "https://api.quotable.io/random";

const quote1 = document.getElementById("quote1");
const author1 = document.getElementById("author1");
const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote1.innerHTML = `"${data.content}"`;
      author1.innerHTML = `- ${data.author}`;
    });
}
const quote2 = document.getElementById("quote2");
const author2 = document.getElementById("author2");
const btn2 = document.getElementById("btn2");


btn2.addEventListener("click", getQuote2);

function getQuote2() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote2.innerHTML = `"${data.content}"`;
      author2.innerHTML = `- ${data.author}`;
    });
}
const quote3 = document.getElementById("quote3");
const author3 = document.getElementById("author3");
const btn3 = document.getElementById("btn3");

btn3.addEventListener("click", getQuote3);

function getQuote3() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote3.innerHTML = `"${data.content}"`;
      author3.innerHTML = `- ${data.author}`;
    });
}


//async , await , Promise and callbacks
var a=document.getElementById("submit_div")
function greeting(name) {

  }
function submitingToAPI(){
  return new Promise((res)=>{
    setTimeout(res,3000);
  });
}

function load(){
    var a=document.getElementById("submit_div")
    var submit_btn=document.createElement("button")
    submit_btn.innerText="Submit"
    submit_btn.setAttribute("id", "submit")
    submit_btn.addEventListener("click",async function(){ //callback
        await submitingToAPI()
        submit_btn.innerText="Submitted"//clouser
    } )
    a.appendChild(submit_btn)
}
load();

//Prototyping
function Arsh(){
    this.firstname="Arsh";
    this.lastname="Bandlish";

}
const person1=new Arsh();

Arsh.prototype.age=":21 years";
Arsh.prototype.location=":chandigarh";
Arsh.prototype.phno=":+917009235245";
Arsh.prototype.mail=":arshbandlish@gmail.com"


document.getElementById("age").innerHTML=person1.age;
document.getElementById("location").innerHTML=person1.location;
document.getElementById("phno").innerHTML=person1.phno;
document.getElementById("mail").innerHTML=person1.mail;


//currying and clousures
document.getElementById("connect1").innerHTML = getuserCurry("Click")("below to")("connect");
           
           
    function getuserCurry(first) {
            return function(second) {
              return function(third) {
                
    
                return  first + " " + second +" " + third;
                
              }
            }
          }
  

  









//Modal Form Validation
var val=false;
document.getElementById("final").style.color="green";
document.getElementById("user1").style.color="red";
document.getElementById("pass1").style.color="red";
document.getElementById("confirm1").style.color="red";
document.getElementById("mob1").style.color="red";
document.getElementById("email1").style.color="red";

function validatepass()
{
    

var pass=document.getElementById("pass").value;
var ABC=false;
var abc=false;

for(let x=0;x<pass.length;x++)
{
    if(pass.charAt(x)>='A' && pass.charAt(x)<='Z')
    ABC=true;
    if(pass.charAt(x)>='a' && pass.charAt(x)<='z')
    abc=true;
}

if(pass.length<8 || pass.length>15)
{
    document.getElementById("pass1").innerHTML="*Length of Password should be minimum 8 and maximum 15 ";
    val=true;
    
}

else if(ABC==false)
{
    document.getElementById("pass1").innerHTML="*Password not in right format";
    val=true;
}
else if(abc==false)
{
    document.getElementById("pass1").innerHTML="*Password not in right format";
    val=true;
}
else
{
    document.getElementById("pass1").innerHTML="";
    val=false;
}
if(pass=="")
{
    document.getElementById("pass1").innerHTML="*Password Cannot Be Empty";
    val=true;
    
}



}
function validateconf()
{
    


var confirm=document.getElementById("confirm").value;
var pass2=document.getElementById("pass").value;


if(confirm=="")
{
    document.getElementById("confirm1").innerHTML="**Confirm Password Cannot Be Empty";
    val=true;
   
}

else if(pass2!=confirm)
{
    document.getElementById("confirm1").innerHTML="*Password and Confirm Password should be same";
    val=true;
}
else{
    document.getElementById("confirm1").innerHTML="";
    val=false;

}

}

function validateuser()
{
    var user=document.getElementById("user").value;

    if(user=="")
    {
        document.getElementById("user1").innerHTML="**Username cannot be Empty";
        val=true;
    }
    else if(!isNaN(user))
   {
    document.getElementById("user1").innerHTML="*Username cannot be only numbers ";
    val=true;
    
    }
else{
    document.getElementById("user1").innerHTML="";
    val=false;

}

}
function validatemob()
{
    var mob=document.getElementById("mob").value;
    

    
     if(isNaN(mob))
    {
     document.getElementById("mob1").innerHTML="**Mobile number is incorrect ";
     val=true;
     
     }
 
     if((mob.charAt(0)!="9")&&(mob.charAt(0)!="8"))
   {
      
    document.getElementById("mob1").innerHTML="**Mobile number is incorrect";
    val=true;

    }
    

 

    else  if(mob.length!=10)
    {
    document.getElementById("mob1").innerHTML="**Length of mobile number should be 10";
    val=true;
    }
    else{
        document.getElementById("mob1").innerHTML="";
        val=false;

    }
    if(mob=="")
    {
        document.getElementById("mob1").innerHTML="**Mobile number cannot be Empty";
        val=true;
    }


}
function validateemail(){
    var email=document.getElementById("email").value;
    
    if(email.lastIndexOf("@")<=0)
    {
        document.getElementById("email1").innerHTML="Email not in right format";
        val=true;
    }
    if(email.lastIndexOf(".")-email.lastIndexOf("@")<2)
    {
        document.getElementById("email1").innerHTML="Email not in right format";
        val=true;
    }
   
    
    else{
        document.getElementById("email1").innerHTML="";
        val=false;

    }
    if(email=="")
    {
        document.getElementById("email1").innerHTML="Email cannot be empty";
        val=true;
    }
    
}
function validate(){
    if(val==false)
    {
        document.getElementById("final").innerHTML="Form Submitted";
    }
}


