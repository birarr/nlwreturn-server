import { MailAdapter, SendmailData } from '../mail-adapter'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '27ccc6e84ac66e',
    pass: '671ddc48ebaa4b',
  },
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Ubiratan Rodrigues <birarr@gmail.com',
      subject,
      html: body,
    })
  }
}
