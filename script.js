const calculateIntersetButton = document.getElementById("calculate_interest");
const accountHolderName = document.getElementById("account__holder__name");
const principleAmount = document.getElementById("principle__amount");
const table = document.getElementById("table");

const accountHolderData = [];

const calculateInterest = (pAmount) => {
    if (pAmount > 200000) {
        let interest = (pAmount * 10) / 100;
        let charge = (pAmount * 0.2) / 100;
        let total_amount_with_interest = pAmount + interest - charge;
        return total_amount_with_interest;
    }
    else if (pAmount <= 200000 && pAmount >= 100000) {
        let interest = (pAmount * 5) / 100;
        let charge = (pAmount * 0.05) / 100;
        let total_amount_with_interest = pAmount + interest - charge;
        return total_amount_with_interest;
    }
    else {
        let interest = (pAmount * 10) / 100;
        let total_amount_with_interest = pAmount + interest;
        return total_amount_with_interest;
    }
}

function newHolder(name, principleAmount) {
    this.name = name;
    this.principleAmount = principleAmount;
    this.amountWithInterest = calculateInterest(principleAmount);
}

calculateIntersetButton.addEventListener("click", () => {
    const account__holder__name = accountHolderName.value;
    const principle__amount = Number(principleAmount.value);

    if (account__holder__name !== '' && principleAmount !== null) {
        const newAccountHolder = new newHolder(account__holder__name, principle__amount);
        accountHolderData.push(newAccountHolder);
        accountHolderName.value = "";
        principleAmount.value = "";

        const new_account_holder_data = `
        <tr>
            <td class="text-align-center">${accountHolderData.length}</td>
            <td>${newAccountHolder.name}</td>
            <td>${newAccountHolder.principleAmount}</td>
            <td class="text-align-center">${newAccountHolder.amountWithInterest}</td>
        </tr>`;

        table.innerHTML += new_account_holder_data;
    }
});