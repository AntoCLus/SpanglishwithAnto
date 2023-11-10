const mongoose = require("mongoose");




const serviceSchema = new mongoose.Schema(
  {
    title:{ String,
    description: String,
    price: String,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
},
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service", serviceSchema);



module.exports = Service;
