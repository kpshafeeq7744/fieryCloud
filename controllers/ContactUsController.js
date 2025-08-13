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
    const { vendor } = req.params;
    const page = parseInt(req.query.page) || 1; // default page 1
    const limit = 10; // 10 per page
    const skip = (page - 1) * limit;

    const [data, totalCount] = await Promise.all([
      ContactUs.find({ vendor })
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: -1 }), // newest first
      ContactUs.countDocuments({ vendor })
    ]);

    res.status(200).json({
      page,
      totalPages: Math.ceil(totalCount / limit),
      totalContacts: totalCount,
      contacts: data
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};