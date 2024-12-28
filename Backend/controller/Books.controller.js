import books from '../modules/Books.js'

export const getBookData = async (req, resp) => {
    try {
        const book = await books.find()
        resp.status(200).json(book)
    } catch (e) {
        resp.status(500).json(e)
        console.log(e);
    }
}