"use strict";

class ArrayTest {
  setData(data) {
    this.data = data;
  }

  filter() {
    return this.data.filter((data) => data.age > 40);
  }

  filterWithParam(minAge) {
    let result = this.data.filter((data) => data.age > minAge);
    return result;
  }

  
  
  // sorts by name and age
  sort() {
    return this.data.sort((a, b) => {
      const difference = a.age - b.age;
      if (difference === 0) {
        return a.name > b.name ? 1 : -1;
      }
      return difference;
    });
  }

  /**
   * 
   * @returns the sorted array
   */
  sortName() {
    return this.data.sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  sortAge() {
    return this.data.sort((a, b) => a.age - b.age);
  }

  mapNames() {
    return this.data.map((data) => data.name);
  }

  mapCountry() {
    return this.data.map((data) => {
      let result = Object.assign({}, data);
      result.country = "Gallien";
      return result;
    });
  }

  reduceTotalAge() {
    return this.data.reduce((total, data) => total + data.age, 0);
  }

  reduceMaxAge() {
    return this.data.reduce(
      (result, data) => (result < data.age ? data.age : result),
      0
    );
  }

  reduceMinAge() {
    return this.data.reduce(
      (result, data) => (data.age < result ? data.age : result),
      10000
    );
  }

  findName(name) {
    return this.data.find((data) => data.name === name);
  }

  findOlderThan(age) {
    return this.data.find((data) => data.age > age);
  }

  printArray(arr) {
    arr.forEach((data) => console.log(data.name + ":" + data.age));
  }
  printData() {
    this.printArray(this.data);
  }

  someOlder(age) {
    return this.data.some((data) => data.age > age);
  }

  filterWithParamAndFunction(param) {
    let nameStartsWith = (letter) => (element) =>
      element.name.startsWith(letter);
    let results = this.data.filter(nameStartsWith(param));
    return results;
  }
}

function runArrayFunctions() {
  console.log("start");
  let data = [
    { name: "Automatix", age: 20 },
    { name: "Asterix", age: 20 },
    { name: "Methusalix", age: 102 },
    { name: "Obelix", age: 18 },
    { name: "Majestix", age: 40 },
    { name: "Miraculix", age: 71 },
  ];
  let test = new ArrayTest();
  test.setData(data);
  console.log("\nFiltered older than 39");
  let filtered39Data = test.filterWithParam(39);
  test.printArray(filtered39Data);

  console.log("\nsorted by age");
  let sortedByAge = test.sortAge();
  test.printArray(sortedByAge);

  console.log("\nsorted by name");
  let sortedByName = test.sortName();
  test.printArray(sortedByName);

  console.log("\nsorted by age and name");
  let sortedByAgeAndName = test.sort();
  test.printArray(sortedByAgeAndName);

  console.log("\nmapped names");
  let mappedNames = test.mapNames();
  console.log(mappedNames);

  console.log("\nmapped Countries");
  let mappedCountries = test.mapCountry();
  console.log(mappedCountries);

  console.log("\nTotal Age");
  let totalAge = test.reduceTotalAge();
  console.log(totalAge);

  console.log("\nMin, Max Age");
  let minAge = test.reduceMinAge();
  let maxAge = test.reduceMaxAge();
  console.log(minAge + " --- " + maxAge);

  console.log("\nFind Miraculix");
  let miraculixFound = test.findName("Miraculix");
  console.log("Found: " + JSON.stringify(miraculixFound));

  console.log("\nFind Older than 20");
  let olderThanFound = test.findOlderThan(50);
  console.log("Found: " + JSON.stringify(olderThanFound));

  console.log("\nhas Older than 60");
  let hasOlder = test.someOlder(60);
  console.log(hasOlder);

  console.log("\nFilter for start letter with additional function");
  let filterStartLetter = test.filterWithParamAndFunction("M");
  test.printArray(filterStartLetter);
}



