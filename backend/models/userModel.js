const mongoose = require("mongoose");




const userSchema = new mongoose.Schema(
    {
        email: String,
        password: String,
        name: String,
        lastName: String,
        userType: {type:String,enum:["admin","user"], default:"user"}
    },
    {
        timestamps: true,
    }
)

const User = mongoose.model("User", userSchema);
/*let admin = new User({email: "spanglishwithanto@gmail.com", password: "admin", name:" admin", lastName:" admin", userType: "admin"})
admin.save()*/


module.exports = User;