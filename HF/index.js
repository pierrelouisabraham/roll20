


const nameSkill = document.querySelector('#skill_name');
const label = document.querySelector('#label');
const bonus = document.querySelector('#Bonus');
const description = document.querySelector('#Description');



function addRow() {
    var sets = ['Force', 'Agilité', 'Endurance', 'Charisme', 'Perception', 'Sagesse', 'Volonté', 'Magie']
    var inputName = document.createElement('input');
    inputName.setAttribute('class', 'skill');
    var inputLabel = document.createElement('select');
    inputLabel.setAttribute('id', 'skill_label');

    while (sets.length){
        var option = new Option(sets.pop());
        inputLabel.options[inputLabel.options.length] = option;
    }
    


    var inputBonus = document.createElement('input');
    inputBonus.setAttribute('class', 'skill');
    var inputDescription = document.createElement('input');
    inputDescription.setAttribute('class', 'skill');
    nameSkill.appendChild(inputName)
    label.appendChild(inputLabel);
    bonus.appendChild(inputBonus);
    description.appendChild(inputDescription);
}




async function init() {
  
};

init();