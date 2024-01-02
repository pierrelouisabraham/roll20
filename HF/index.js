


const nameSkill = document.querySelector('#skill_name');
const label = document.querySelector('#label');
const bonus = document.querySelector('#bonus');
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


function save() {
    const myObject = {};
    const myElement = document.getElementById("skill_name");
    const myType = document.getElementById("label");
    const myBonus = document.getElementById("bonus");
    const  myDescription = document.getElementById("Description")
    console.log("debug")
    for (var i = 1; i <= myElement.childElementCount; i++) {
        console.log(myElement.childNodes.item(i).value, myType.childNodes.item(i).value,
        myBonus.childNodes[i].value, myDescription.childNodes[i].value,i);
        myObject = 

    }
}

async function init() {
  
};

init();