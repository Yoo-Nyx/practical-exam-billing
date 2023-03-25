const express = require("express");
const cors = require("cors");
const StaffRoutes = require("./controllers/staff.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1/staff", StaffRoutes);

app.listen(8080, () => {
  console.log(`Billing-Project Server Satrted on Port 8080...`);
});
