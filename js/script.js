const btnGo = document.querySelector('#start');
const gladiatorArray = document.querySelectorAll('.gladiator');

btnGo.onclick = function() {
    let legendarusValue = Number(document.querySelector('#spartakus-power').value);

    for (let i = 0; i < gladiatorArray.length; i++) {
        let inputArray = gladiatorArray[i].querySelectorAll('input');

        for (let j = 0; j < inputArray.length - 1; j++) {
            let dificult = Number(inputArray[0].value);
            let weapon = Number(inputArray[1].value);
            if (isNaN(dificult) || isNaN(weapon)) {
                return alert(`Значение гладиатора ${i + 1} может быть указано только в цифрах`);
            }
            else if(dificult < 0 || weapon < 0) {
                return alert(`Значение гладиатора ${i + 1} должно быть положительным`);
            }
            if (legendarusValue > dificult) {
                legendarusValue += weapon;
            }   else {
                return alert(`Легендарус проиграл`);
            }
        }
    }
    alert(`Легендарус победил, его накопленная сила ${legendarusValue}`);
}