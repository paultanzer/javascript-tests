class SpreadTest {
    constructor(data) {
        this.data = data;
        console.log(data);
    }

}

function runSpreadOperator() {
    let data = [
        { name:"Automatix", age:20},
        { name:"Asterix", age:20},
        { name:"Methusalix", age:102},
        { name:"Obelix", age:18},
        { name:"Majestix", age:40},
        { name:"Miraculix", age:71},
    ];
    let st = new SpreadTest(data);
}

