const findTheOldest = function(people) {
        const getYearsLived = function(birth, death) {
          if (!death) {
            death = new Date().getFullYear();
          }
          
          return death - birth;
        }

        return people.reduce((oldest, current) => {
          let oldestAge = getYearsLived(oldest.yearOfBirth, oldest.yearOfDeath);
          let currentAge = getYearsLived(current.yearOfBirth, current.yearOfDeath);
          return oldestAge > currentAge ? oldest: current;
        });
      };

// Do not edit below this line
module.exports = findTheOldest;
