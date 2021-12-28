const Person = function(firstAndLast) {
  let total = firstAndLast

  this.getFirstName = function () {
    let first = total.split(' ')
    return first[0]
  };
  this.getLastName = function () {
    let second = total.split(' ')
    return second[1]
  };
    this.getFullName = function() {
    return total
  };
  this.setFirstName = function (name) {
    total = name + ' ' + total.split(' ')[1]
  };
  this.setLastName= function (last) {
    total = total.split(' ')[0] + ' ' + last
  };
  this.setFullName = function (name) {
    total = name
  };

  return firstAndLast;
};

const bob = new Person('Bob Ross');
bob.getFullName();