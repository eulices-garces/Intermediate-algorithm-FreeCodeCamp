function orbitalPeriod(arr) {

  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  let final = []

  arr.forEach(elem => {
    let {name, avgAlt} = elem;
    let resultado = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius+avgAlt, 3)/GM))

final.push({name: name,
    orbitalPeriod: resultado
    })
  })
console.log(final)
return final
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}])