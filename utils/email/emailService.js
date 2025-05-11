import { Resend } from 'resend';
import dotenv from 'dotenv';
import generateEmailHTML from './emailTemplate.js';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ toEmail, toName, subject, message, userDetails, vendor }) => {
  const html = generateEmailHTML({ toName, message, userDetails });

  try {
    const data = await resend.emails.send({
      // from: 'MAIN KITCHEN NAME <support@bidly.store>',  // This email must be verified in Resend
      from:`${vendor} <support@bidly.store>` ,
      to: [toEmail],
      subject,
      html
    });

    console.log("✅ Email sent:", data);
    return data;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw error;
  }
};

export default sendEmail;
