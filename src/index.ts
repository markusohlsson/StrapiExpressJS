import express from "express";
import televisionsRouter from "./routes/TelevisionsRouter";
import mobilesRouter from "./routes/mobilesRouter";
import computersRouter from "./routes/computersRouter";
import audiosRouter from "./routes/audiosRouter";

const app = express();
app.use(express.json());
// Televisions
app.use("/televisions", televisionsRouter);
app.use("/televisions/:id", televisionsRouter);
// Mobiles
app.use("/mobiles", mobilesRouter);
app.use("/mobiles/:id", mobilesRouter);
// Computers
app.use("/computers", computersRouter);
app.use("/computers/:id", computersRouter);
// Audios
app.use("/audios", audiosRouter);
app.use("/audios/:id", audiosRouter);

app.get("/", (req, res) => {
  res.send("Examinering 1");
});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
