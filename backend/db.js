const mongoose = require("mongoose");
const { SignUp } = require("./models/UserInfo");
require("dotenv").config();

const { DATABASE } = process.env;

const URI = DATABASE;

const db = async () => {
    try {
        console.log(URI);
        await mongoose.connect(URI);
        console.log("connected mongodb successfully");

        const usersCount = await SignUp.countDocuments({});
        if (usersCount === 0) {
            await initializeUsers();
        }
    } catch (error) {
        console.log("Some error occured", error);
    }
};

async function initializeUsers() {
    try {
        const user = new SignUp({
            crn: "Tr101",
            email: "training101@gmail.com",
            password: "$2b$10$aMjiZo7e3QLqF8RZtlXmGeBjOdLuRKeTMhk/4b/9N7Hc5iw/itUkK",
            role: "admin",
            isVerified: true,
        });
        await user.save();
        console.log("Initialized users collection with a document");
    } catch (error) {
        console.error("Error initializing users collection:", error);
        throw error;
    }
}

module.exports = { db };
