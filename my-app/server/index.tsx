import express from "express";
import {config} from "dotenv";

config({path: ".env"});
const app = express();
const env = process.env;
const PORT = env.PORT || 3001;

app.get("/api/recent-work", async (req, res) => {
    try {
        const result = await fetch("https://api.github.com/user/repos?sort=pushed&direction=desc&per_page=1", {
            headers: {
                Authorization: `Bearer ${env.GITHUB_PAT}`,
            }
        });

        const data = await result.json();
        res.json(data);
    } catch (err) {
        console.error(`Error while fetching recent work: ${err}`);
        res.status(500).json({ error: "Failed to fetch recent work" });
    }
});

app.listen(PORT, (err) => {
    if(err){
        console.error(`Error during server spinup: ${err}`);
    }else{
        console.log(`Server successfully started on port: ${PORT}`)
    }
})