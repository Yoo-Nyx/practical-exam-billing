const express = require("express");
const cors = require("cors");
const StaffRoutes = require("./controllers/staff.routes");
const SubjectRoutes = require("./controllers/subject.routes");
const ChargesRoutes = require("./controllers/charges.routes");
const PrepRoutes = require("./controllers/prep.routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/v1/staff", StaffRoutes);
app.use("/v1/subject", SubjectRoutes);
app.use("/v1/charges", ChargesRoutes);
app.use("/v1/preps", PrepRoutes);

app.listen(8080, () => {
  console.log(`Billing-Project Server Satrted on Port 8080...`);
});
