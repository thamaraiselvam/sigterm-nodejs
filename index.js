const app = require("express")();
const axios = require('axios')

app.get("/", (req, res) => {
    res.json(200);
})

app.listen(3000, () => {
    console.log("app listining on 3000")
})

async function makeRequest() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
    console.log(response.data);
}

process.on('SIGTERM', async function (code) {
    console.log(`*********SIGTERM received...${code}*******`);
    await makeRequest();
    process.exit()
});

process.on('SIGINT', async function (code) {
    console.log(`*********SIGINT received...${code}*******`);
    await makeRequest();
    process.exit()
});

process.on('exit', async function (code) {
    console.log(`*********exit received...${code}*******`);
    await makeRequest();
    process.exit()
});