
// import fs from 'fs';
// import path from 'path';
// import handlebars from 'handlebars';
import { sendEmail } from '@config/email';

const handler = async (req, res) => {
    const { name, email } = req.body;
    // const newslatest = fs.readFileSync(path.join('src/templates/newslatest.html'), 'utf8');
    // const template = handlebars.compile(newslatest, { strict: true })
    // const result = template({name, email})
    const object = {
        subject: 'News Latest Nannai Residence',
        to: `Contato <${process.env.USER_EMAIL}>`,
        from: `Nannai Residence | Site <${process.env.ADMIN_EMAIL}>`,
        html: `<div> News Latest <div>Nome: <strong>${name}</strong></div> <div>Email: <strong>${email}</strong></div> </div>`,
    }
    sendEmail(object).then((sucess) => {
        res.status(200).json({ message: 'send email sucess' })
    }).catch(error => {
        console.log(error)
        res.status(400).json(error)
    })
}

export default handler