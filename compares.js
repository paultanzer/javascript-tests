"use strict"

const values = [null, "test", undefined, 7, 0]

const runCompare = () => {
  console.log("Run Compare")
  values.forEach(v => console.log(isValue(v)))
  checkObject()
}

const isValue = (value) => {
  return value ? value : 'kein wert'
}

const checkObject = () => {
  console.log("Check Object")
  const obj = {
    name: "test",
    value: 7,
    test: {
      value: null
    }
  }
  const v = obj?.test.value ?? 'irgendwas'
  console.log(v)
}