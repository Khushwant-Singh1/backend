import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

app.get('/api/jokes', (req,res)=>{
    const jokes = [
        {
            id: 1,
            title: "Why did the scarecrow win an award?",
            content: "Because he was outstanding in his field!"
        },
        {
            id: 2,
            title: "What do you call fake spaghetti?",
            content: "An impasta!"
        },
        {
            id: 3,
            title: "Why don’t scientists trust atoms?",
            content: "Because they make up everything!"
        },
        {
            id: 4,
            title: "What do you call cheese that isn't yours?",
            content: "Nacho cheese!"
        },
        {
            id: 5,
            title: "Why did the bicycle fall over?",
            content: "Because it was two-tired!"
        }
    ];
    res.send(jokes)
})


const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost${port}`);
});
