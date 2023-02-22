const mongoose = require("mongoose");

const AdminTask = mongoose.Schema({
  AdminId: { type: String },
  AdminTask: [
    {
      Subject: { type: String },
      Date: { type: String },
      Assigned: { type: String },
      Target: { type: String },
      Status: { type: Boolean },

    },
  ],
});

const ModelAdminTask = mongoose.model("AdminTask", AdminTask);

module.exports = { ModelAdminTask };
