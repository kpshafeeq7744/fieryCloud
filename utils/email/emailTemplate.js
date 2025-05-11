function generateEmailHTML({ toName, message, userDetails }) {
  return `
    <div style="font-family: 'Segoe UI', sans-serif; background: #f9fafb; padding: 40px;">
      <div style="
        max-width: 480px;
        margin: auto;
        background: #ffffff;
        padding: 24px;
        border-radius: 16px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
        border-left: 5px solid #b91c1c;
      ">
        <h2 style="margin: 0 0 12px; color: #b91c1c; font-size: 22px;">Update Notice</h2>
        <p style="color: #374151; font-size: 15px; line-height: 1.6; margin-bottom: 24px;">
          ${message || 'For more features and a better user experience, upgrade your app please.'}
        </p>

        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

        <div style="color: #111827; font-size: 14px; line-height: 1.5;">
          <p><strong>Name:</strong> ${userDetails?.name || 'N/A'}</p>
          ${userDetails?.email ? `<p><strong>Email:</strong> ${userDetails.email}</p>` : ''}
          ${userDetails?.phone ? `<p><strong>Phone:</strong> ${userDetails.phone}</p>` : ''}
        </div>

        <div style="margin-top: 30px;">
          ${userDetails?.phone ? `
            <a href="tel:${userDetails.phone}" style="
              display: inline-block;
              padding: 10px 20px;
              background: #b91c1c;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-size: 14px;
              margin-right: 10px;
            ">Call</a>` : ''}
          ${userDetails?.email ? `
            <a href="mailto:${userDetails.email}" style="
              display: inline-block;
              padding: 10px 20px;
              background: #b91c1c;
              color: white;
              text-decoration: none;
              border-radius: 8px;
              font-size: 14px;
            ">Email</a>` : ''}
        </div>
      </div>
    </div>
  `;
}

export default generateEmailHTML;
