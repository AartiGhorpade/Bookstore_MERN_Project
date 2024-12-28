import User from '../modules/UserModule.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req, resp) => {
    const { email, name, password } = req.body
    const emailExists = await User.findOne({ email })

    if (emailExists) {
        return resp.status(409).json({ message: "User already exists" })
    }

    const hashedPassword = await bcryptjs.hash(password, 10)

    const userCreation = new User({
        name: name,
        email: email,
        password: hashedPassword
    })

    await userCreation.save()
    resp.status(201).json({ message: 'User created successfully' })
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const emailExists = await User.findOne({ email }); // Your MongoDB query to find the user by email

        if (!emailExists) {
            return res.status(400).json({ message: 'Email not found, Please signup' });
        }

        // Compare the password with the stored hash
        const isMatch = await bcryptjs.compare(password, emailExists.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // If login is successful, return a response with userInfo and a message
        return res.status(200).json({
            message: 'Login successful',
            userInfo: {
                email: emailExists.email
            }
        });

    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Server error' });
    }
};