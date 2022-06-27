const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: (obj) => {
        obj.skills.languages = obj.skills.languages.map(item => item.toUpperCase());
        return `Мне ${obj.age} и я владею языками: ${obj.skills.languages.join(' ')} `;
    }
};

function showExperience(plan) {
    return plan.skills.exp;
}

function showProgrammingLangs(plan) {
    let sum = '';
    const obj = plan.skills.programmingLangs;
    for(let key in plan.skills.programmingLangs) {
        sum+=`Язык ${key} изучен на ${obj[key]}\n`;
    }
    return sum;
}
