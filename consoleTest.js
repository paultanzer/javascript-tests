function runConsoleTest() {
    let gt = new GeneratorTest();
    console.dir(gt);
    console.dir(console);

    console.log("Log");
    console.warn("WARN");
    console.error("Error");

    console.table(gt);

    console.group(gt);
}
