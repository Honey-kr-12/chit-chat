const User = require("../models/user.model");

exports.getUsersForSidebar = async (req, res) => {
    try {

        const loggedInUser = req.user._id;

        const filteredUser = await User.find({ _id: { $ne: loggedInUser }}).select("-password");

        res.status(200).json(filteredUser);

    } catch (error) {
        console.log("error in getUsersForSidebar controller ", error.message );
        res.status(500).json({error: "internal server error"})
    }
}