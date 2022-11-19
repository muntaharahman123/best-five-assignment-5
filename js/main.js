

// ------------------------------------------------------
//              calculation Part
// ------------------------------------------------------

document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPersonField = document.getElementById('per-person-field');
    const newAmountString = perPersonField.value;
    const newPerPersonAmount = parseFloat(newAmountString);

    const totalAmount = newPerPersonAmount * 5;

    const playerExpensesTotal = document.getElementById('total-player-expenses');
    playerExpensesTotal.innerText = totalAmount;

    perPersonField.value = '';
})

document.getElementById('total-amount').addEventListener('click', function () {
    const managerAmount = document.getElementById('manager-amount');
    const managerAmountString = managerAmount.value;
    const newManagerAmount = parseFloat(managerAmountString);
    managerAmount.value = '';


    const coachAmount = document.getElementById('coach-amount');
    const coachAmountString = coachAmount.value;
    const newCoachAmount = parseFloat(coachAmountString);
    coachAmount.value = '';


    const total = document.getElementById('total-player-expenses');
    const previousTotalString = total.innerText;
    const totalCost = parseFloat(previousTotalString);


    const calculateTotalAmount = newManagerAmount + newCoachAmount + totalCost;

    const totalfinalAmount = document.getElementById('final-total');

    totalfinalAmount.innerText = calculateTotalAmount;
})

// ------------------------------------------------------
//            Selection Part
// ----------------------------------------------------------
document.getElementById('all-Players').addEventListener('click', function (event) {
    const allPlayersItem = document.getElementById('selection-item');

    if (
        event.target.innerText == "Select" && allPlayersItem.children.length < 5
    ) {
        let btn = event.target;
        btn.setAttribute("disable", "");
        btn.style.backgroundColor = "gray";
        let playerName = event.target.parentElement.firstElementChild.innerText;

        let newList = document.createElement("li");
        newList.innerText = playerName;

        allPlayersItem.appendChild(newList);
    }

    else if (
        event.target.innerText == "Select" && allPlayersItem.children.length >= 5
    ) {
        alert(
            "Already your 5 Player selection complete!!! "
        )
    }



})



