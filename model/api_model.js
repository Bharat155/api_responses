const mongoose = require("mongoose");

const apiSchema = mongoose.Schema({
    type:{
        type: String,
        enum: ["get", "put", "post", "delete"],
        required: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
    },
    endpoint: {
        type: String,
        required: true,
        trim: true,
    },
    one: {
        type: String,
        required: true,
        trim: true,
    },
    status:[{
        code: {
            type: Number,
            required: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    }],
    summary:{
        type: String,
        required: true,
        trim: true,
    },
    request:{
        type: String,
    },
    response:{
        type: String,
    }
});

const ApiResponse = mongoose.model("ApiResponse", apiSchema);

module.exports = ApiResponse;
