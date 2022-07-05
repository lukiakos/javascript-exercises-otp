const findTheOldest = function(people) {
    const oldest = people.sort(function(a, b) {
        if (a.yearOfDeath && b.yearOfDeath) {
            const lastPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;
            return lastPerson > nextPerson ? -1 : 1;
        } else if (!a.yearOfDeath) {
            const lastPerson = (new Date).getFullYear() - a.yearOfBirth;
            const nextPerson = b.yearOfDeath - b.yearOfBirth;
            return lastPerson > nextPerson ? -1 : 1;
        } else if (!b.yearOfDeath) {
            const lastPerson = a.yearOfDeath - a.yearOfBirth;
            const nextPerson = (new Date).getFullYear() - b.yearOfBirth;
            return lastPerson > nextPerson ? -1 : 1;
        }
    })
    return oldest.at(0)
};

// Do not edit below this line
module.exports = findTheOldest;
