import orderParticipant from "../models/OrderParticipant.js"
import CustomError from "../utils/CustomError.js";
import sendEmail from "../utils/email/emailService.js";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const teamEmails = [
  { email: "kp.shafeeqmohamed@gmail.com", name: "Shafeeq" },
  { email: "bubblycheers1127@gmail.com", name: "Bubbly" },
];

export const addParticipantService=async({name,email,vendor})=>{
    if (!emailRegex.test(email)) {
        throw new CustomError("Enter Valid email",400)
    }
const newParticipant= await   orderParticipant.create({
        name,
        email,
        vendor
    })
// user
    await sendEmail({
      toEmail: newParticipant.email,
      toName: newParticipant.name,
      subject: `Thank you for joining ${vendor}!`,
      message: `Hi ${newParticipant.name},<br /><br />Thank you for participating with us. We're excited to have you as part of ${vendor}. If you have any questions, feel free to contact us anytime.`,
      userDetails: {
        name: vendor,
        phone: "+1 (437) 313-1390",
        email: "support@example.com"
      },
      vendor
    });
   
    // team members
    for (const member of teamEmails) {
      await sendEmail({
        toEmail: member.email,
        toName: member.name,
        subject: `New Participant in ${vendor}`,
        message: `A new participant joined under vendor: ${vendor}`,
        userDetails: {
          name: newParticipant.name,
          email: newParticipant.email,
        },
        vendor
      });
    }

}