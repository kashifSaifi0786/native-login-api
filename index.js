const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/userRoute");

const app = express();

const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server running on PORT:${PORT}`);
});
