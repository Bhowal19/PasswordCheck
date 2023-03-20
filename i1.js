const indicator = document.querySelector(".indicator");
const input = document.querySelector("input");
const weak = document.querySelector(".weak");
const moderate = document.querySelector(".moderate");
const good = document.querySelector(".good");
const strong = document.querySelector(".strong");
const text = document.querySelector(".text");
const showBtn = document.querySelector(".showBtn");
let regExpWeak = /[a-z]/;
//  let regExpModerate = /[a-z]+[]/;
let regExpModerate = /(?=.*?[0-9])/;;
//  let regExpGood = /\d+/;
//  let regExpGood = /^$|\s+/;
let regExpGood = /[A-Z]/;
let regExpStrong = /.[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
//  /^[a-z A-Z0-9._,-]+$/

function trigger()
{
  if(input.value != "")
  {
    indicator.style.display = "block";
    indicator.style.display = "flex";

    if(input.value.length < 7 && (input.value.match(regExpWeak) || input.value.match(regExpModerate) || input.value.match(regExpGood) || input.value.match(regExpStrong)))no=1;

    if(input.value.length < 10 && ((input.value.match(regExpWeak) && input.value.match(regExpModerate))))no=2;

    if(input.value.length <= 16 && input.value.match(regExpWeak) && input.value.match(regExpModerate) && input.value.match(regExpGood))no=3;

    if(input.value.length > 16 && input.value.match(regExpWeak) && input.value.match(regExpModerate) && input.value.match(regExpGood) && input.value.match(regExpStrong))no=4;

    if(no==1){
      weak.classList.add("active");
      text.style.display = "block";
      text.textContent = "Your password is too WEAK";
      text.classList.add("weak");
    }
    if(no==2){
      moderate.classList.add("active");
      text.textContent = "Your password is MODERATE";
      text.classList.add("moderate");
    }else{
      moderate.classList.remove("active");
      text.classList.remove("moderate");
    }
    if(no==3){
      weak.classList.add("active");
      moderate.classList.add("active");
      good.classList.add("active");
      text.textContent = "Your password is GOOD";
      text.classList.add("good");
    }else{
      good.classList.remove("active");
      text.classList.remove("good");
    }
    if(no==4){
      weak.classList.add("active");
      moderate.classList.add("active");
      good.classList.add("active");
      strong.classList.add("active");
      text.textContent = "Your password is STRONG";
      text.classList.add("strong");
    }else{
      strong.classList.remove("active");
      text.classList.remove("strong");
    }

    showBtn.style.display = "block";
    showBtn.onclick = function(){
      if(input.type == "password"){
        input.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#23ad5c";
      }else{
        input.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#000";
      }
    }
    }else{
    indicator.style.display = "none";
    text.style.display = "none";
    showBtn.style.display = "none";
  }
}
