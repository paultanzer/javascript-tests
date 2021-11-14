class GeneratorTest {
  constructor(max) {
    this.max = max;
  }

  *test() {
    let i = 0;
    let sum = 0;
    while (i < this.max) {
      yield sum;
      i++;
      sum += sum + 1;
    }
  }

  *fibonacci() {
    let x = 1;
    let y = 1;
    let i = 0;
    let sum = 0;
    yield x;
    yield y;

    while (i < this.max) {
      i++;
      sum = x + y;
      yield sum;
      x = y;
      y = sum;
    }
  }
}

let runGenerators = function() {
  let gt = new GeneratorTest(100);
  let gn = gt.test();
  for (let value of gn) {
    console.log(value);
  }

  for (let v2 of gt.fibonacci()) {
    console.log(v2);
  }
}

