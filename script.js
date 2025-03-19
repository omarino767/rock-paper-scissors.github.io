function play(user_choice){
    const choises=["rock","paper","scissors"];
    computer_choice =choises[Math.floor(Math.random()*3)]
    let result=" ";
    if (user_choice===computer_choice){
        result="It's a draw! 🤝"
    }
    else if ( user_choice==="rock" && computer_choice==="scissors" ||
             user_choice==="scissors" && computer_choice==="paper" ||
             user_choice==="paper" && computer_choice==="rock"
    ){
        result="you win 🎉"
    }
    else if ( computer_choice==="rock" && user_choice==="scissors" ||
        computer_choice==="scissors" && user_choice==="paper" ||
        computer_choice==="paper" && user_choice==="rock"
){
   result="you lose 😢";
}
document.getElementById("computer").textContent=computer_choice
document.getElementById("result").textContent=result;
}
