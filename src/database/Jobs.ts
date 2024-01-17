const mongoose = require("mongoose");
import express from "express"

const Jobschema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    maxApplicants: {
      type: Number,
      validate: [
        {
          validator: Number.isInteger,
          msg: "maxApplicants should be an integer",
        },
        {
          validator: function (value:Number) {
            return value > 0;
          },
          msg: "maxApplicants should greater than 0",
        },
      ],
    },
    maxPositions: {
      type: Number,
      validate: [
        {
          validator: Number.isInteger,
          msg: "maxPostions should be an integer",
        },
        {
          validator: function (value:Number) {
            return value > 0;
          },
          msg: "maxPositions should greater than 0",
        },
      ],
    },
    acceptedCandidates: {
      type: Number,
      default: 0,
      validate: [
        {
          validator: Number.isInteger,
          msg: "acceptedCandidates should be an integer",
        },
        {
          validator: function (value:Number) {
            return value >= 0;
          },
          msg: "acceptedCandidates should greater than equal to 0",
        },
      ],
    },
    dateOfPosting: {
      type: Date,
      default: Date.now,
    }
})
export const JobSchema = mongoose.model("jobs", Jobschema)

export const createJob=(values:Record<string, any>)=> new JobSchema(values)
.save().then((user:any)=>user.toObject());
