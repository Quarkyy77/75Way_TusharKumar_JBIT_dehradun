const mongoose = require("mongoose");

let schema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    recruiterId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    status: {
      type: String,
      enum: [
        "applied", // when a applicant is applied
        "accepted", // when a applicant is accepted
        "rejected", // when a applicant is rejected
      ],
      default: "applied",
      required: true,
    },
  },
  { collation: { locale: "en" } }
);


module.exports = mongoose.model("applications", schema);