const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person) => {
        const oldestAge = (oldestPerson.yearOfDeath || getYear()) - oldestPerson.yearOfBirth
        const age = (person.yearOfDeath || getYear()) - person.yearOfBirth
        if(age>oldestAge){
            return person;
        }
        return oldestPerson;
    }, people[0]);
};

function getYear(){
    return new Date().getFullYear();
}

// Do not edit below this line
module.exports = findTheOldest;
