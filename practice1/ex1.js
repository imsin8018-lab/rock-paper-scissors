function playGame(userChoice)
{
    let comChoice = Math.floor(Math.random() * 3) + 1;

    const choices = ["", "✌️ 가위", "✊ 바위", "✋ 보"];

    document.getElementById("user-choice").innerText = choices[userChoice];
    document.getElementById("com-choice").innerText = choices[comChoice];

    let result = "";

    if (userChoice === comChoice)
    {
        result = "비겼습니다! 🫢";
    }
    else if (
        (userChoice === 1 && comChoice === 3) ||
        (userChoice === 2 && comChoice === 1) ||
        (userChoice === 3 && comChoice === 2)
    ){
        result = "당신이 이겼습니다! 🎉";
    }
    else {
        result = "컴퓨터가 이겼습니다... 😭";
    }

    document.getElementById("result-text").innerText = result;
}