import {
    user
} from "../models/user.model.js";

export const register = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNo,
            password,
            role
        } = req.body;
        if (!fullName || !email || !phoneNo || !password || !role) {
            return res.status(400).json({
                massage: "something is missing",
                success: false,
            });
        }

        const user = await user.findOne({
            email
        });
        if (user) {
            return res.status(400).json({
                massage: "user all ready exist ",
                success: false
            })
        }

    } catch (error) {}
};