const Users = require('../models/user');

const userControl = {

    register: async (req, res) => {


        try {

            const { name, email, password } = req.body;

            if (!name || !email || !password) {
                return res.status(400).json({ msg: "Please fill all the feilds" });
            }

            if (!validateEmail(email)) {
                return res.status(400).json({ msg: "Invalid email!!!" })
            }

            const user = await Users.findOne({ email });

            if (user) {
                return res.status(400).json({ msg: "User Already exist" });
            }

            if (password.length < 6) {
                return res.status(400).json({ msg: "Password must have atleast 6 charcters" });
            }

            const check = await Users.findOne({ email })

            if (check) return res.status(400).json({ msg: "This email is already exists,  Please login to continue" })

            const newUser = new Users({
                name, email, password
            })

            await newUser.save()

            return res.status(200).json({ msg: "User has been registered, Please login to continue." })

        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },

    login: async (req, res) => {


        try {
            const { email, password } = req.body;
            const user = await Users.findOne({ email })
            if (!user)
                return res.status(400).json({ msg: "This user is not registered" })

            if (password !== user.password)
                return res.status(400).json({ msg: "Please enter the right password" })

            return res.status(200).json({ msg: "Login Success!!!", user: { ...user } })
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    }
}


const validateEmail = (email) => {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

module.exports = userControl;