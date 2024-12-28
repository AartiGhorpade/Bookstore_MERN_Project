import Contact from '../modules/userContact.js'
import { sendMail } from '../helpers/sendMail.cjs'
import { contactEmailHTML } from '../helpers/contactEmailHTML.cjs'


export const ContactDetails = async (req, resp) => {
    const { name, email, message } = req.body

    try {
        const contacts = new Contact({
            name: name,
            email: email,
            message: message
        })

        await contacts.save()
        resp.status(201).json({ message: 'Thank you for contacting with us' })
        sendMail(email, "Thank you", "", contactEmailHTML(name))
    } catch (e) {
        resp.status(500).json({ message: 'Internal server error' })
    }
}