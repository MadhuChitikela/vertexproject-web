const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

module.exports = async (req, res) => {
    // Add CORS headers for preflight requests
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { fullName, email, phone, projectTitle, deliveryTime } = req.body;

    if (!fullName || !email) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // 1. Professional Template for Admin (You)
    const adminMailOptions = {
        from: `"Vertex Website Notification" <${process.env.GMAIL_USER}>`,
        to: 'vertexproject.in@gmail.com',
        replyTo: email,
        subject: `🚨 New Project Inquiry: ${fullName}`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eee;">
                <div style="background: linear-gradient(135deg, #00E5FF, #7C3AED); padding: 30px; text-align: center;">
                    <h1 style="margin: 0; color: white; font-size: 24px; text-transform: uppercase; letter-spacing: 2px;">New Lead Captured</h1>
                </div>
                <div style="padding: 30px; background-color: #ffffff;">
                    <p style="font-size: 16px; color: #666; margin-bottom: 25px;">A new project inquiry has been submitted through your website.</p>
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px;">
                        <table style="width: 100%;">
                            <tr><td style="padding: 8px 0; color: #888; width: 40%;">Customer Name:</td><td style="padding: 8px 0; font-weight: bold; color: #333;">${fullName}</td></tr>
                            <tr><td style="padding: 8px 0; color: #888;">Email Address:</td><td style="padding: 8px 0; font-weight: bold; color: #333;"><a href="mailto:${email}" style="color: #7C3AED; text-decoration: none;">${email}</a></td></tr>
                            <tr><td style="padding: 8px 0; color: #888;">Phone Number:</td><td style="padding: 8px 0; font-weight: bold; color: #333;">${phone}</td></tr>
                            <tr><td style="padding: 8px 0; color: #888;">Project Title:</td><td style="padding: 8px 0; font-weight: bold; color: #333;">${projectTitle || 'N/A'}</td></tr>
                            <tr><td style="padding: 8px 0; color: #888;">Required In:</td><td style="padding: 8px 0; font-weight: bold; color: #333;">${deliveryTime} Days</td></tr>
                        </table>
                    </div>
                </div>
                <div style="padding: 20px; background-color: #f1f1f1; text-align: center; font-size: 12px; color: #999;">
                    This is an automated notification from your Vertex Project CRM.
                </div>
            </div>
        `,
    };

    // 2. Professional Template for Customer (Confirmation)
    const customerMailOptions = {
        from: `"Vertex Project Team" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: `🚀 Thank you for reaching out, ${fullName}!`,
        html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border-radius: 12px; overflow: hidden; border: 1px solid #eee;">
                <div style="background: #0B0F19; padding: 40px; text-align: center;">
                    <h1 style="margin: 0; color: #00E5FF; font-size: 28px;">Vertex Project</h1>
                    <p style="color: #7C3AED; margin-top: 5px; font-weight: bold;">Innovation Meets Excellence</p>
                </div>
                <div style="padding: 40px; background-color: #ffffff; line-height: 1.6;">
                    <h2 style="color: #333;">Hi ${fullName},</h2>
                    <p style="color: #555; font-size: 16px;">Thank you for your interest in working with us! We've received your inquiry regarding <strong>"${projectTitle || 'your project'}"</strong>.</p>
                    <p style="color: #555; font-size: 16px;">Our technical team is currently reviewing your requirements. We typically respond within 12-24 hours to discuss the roadmap and next steps.</p>
                    <div style="margin: 30px 0; padding: 20px; border-left: 4px solid #00E5FF; background: #f0fbff;">
                        <p style="margin: 0; font-size: 14px; color: #666;"><strong>Delivery Timeline:</strong> Successfully noted as ${deliveryTime} days.</p>
                    </div>
                    <p style="color: #555; font-size: 16px;">If you have any urgent questions, feel free to reach us directly on WhatsApp at <strong>+91 93911 89053</strong>.</p>
                    <p style="margin-top: 40px; color: #333;">Best regards,<br><strong>Team Vertex</strong></p>
                </div>
                <div style="padding: 20px; background: #0B0F19; text-align: center; color: #ffffff; font-size: 11px; opacity: 0.7;">
                    © 2026 Vertex Project. All rights reserved. <br> Vizag, Andhra Pradesh.
                </div>
            </div>
        `,
    };

    try {
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(customerMailOptions);
        return res.status(200).json({ success: true, message: 'Emails sent successfully' });
    } catch (error) {
        console.error('SMTP Error:', error);
        return res.status(500).json({ success: false, error: 'Failed to dispatch emails' });
    }
};
