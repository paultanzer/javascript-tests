async function runFetch() {
    let response = await fetch('https://www.openligadb.de/api/getmatchdata/bl1/2016/8');
    let json = await response.json();
    console.table(json);
}