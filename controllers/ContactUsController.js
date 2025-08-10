import ContactUs from "../models/ContactUs.js";

export const createContactUs = async (req, res) => {
    try {
        const { name, email, phoneNumber, message } = req.body;
        const contactUs = await ContactUs.create({ name, email, phoneNumber, message,vendor:req.params.vendor });
        res.status(201).json(contactUs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getContactUs = async (req, res) => {
    try {
        const contactUs = await ContactUs.find({vendor:req.params.vendor});
        res.status(200).json(contactUs);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
    