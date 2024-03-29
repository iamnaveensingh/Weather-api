import app from "./app.js";
import { connectDB } from "./config/conn.js";

const PORT = process.env.PORT || 5000;

const server = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
server();
