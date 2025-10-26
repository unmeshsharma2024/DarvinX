# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use the following template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from the Helxon contact form.
```

4. Make sure to use these variable names:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{message}}` - Message content

5. In the "To Email" field, enter: `support@helxon.com`
6. **Copy the Template ID** (you'll need this later)
7. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in the sidebar
2. Find your **Public Key** (or API Key)
3. **Copy the Public Key**

## Step 5: Configure Your Application

### Option 1: Using Environment Variables (Recommended)

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add the following lines with your actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual IDs from EmailJS
4. **Important**: Add `.env` to your `.gitignore` file to keep credentials secure

### Option 2: Direct Configuration

1. Open `src/config/emailConfig.js`
2. Replace the placeholder values directly:

```javascript
export const emailConfig = {
  serviceId: 'service_abc123',  // Your Service ID
  templateId: 'template_xyz789', // Your Template ID
  publicKey: 'your_public_key_here', // Your Public Key
};
```

**Warning**: If you commit this file to a public repository, your credentials will be exposed!

## Step 6: Test the Form

1. Restart your development server (if using .env variables)
2. Navigate to the Contact Us page
3. Fill out and submit the form
4. Check your email at `support@helxon.com`

## Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email services
- 3 email templates
- Email history (30 days)

For higher limits, consider upgrading to a paid plan.

## Troubleshooting

### Error: "User ID not found"
- Make sure you've initialized EmailJS with the correct Public Key
- Check that you're using the Public Key, not the Private Key

### Error: "Template not found"
- Verify your Template ID is correct
- Make sure the template is saved in your EmailJS dashboard

### Error: "Service not configured"
- Check that your Service ID is correct
- Ensure your email service is properly connected in EmailJS

### Emails not arriving
- Check your spam folder
- Verify the "To Email" is set correctly in your template
- Check EmailJS dashboard's email history for delivery status

## Security Notes

- Never commit `.env` files to version control
- Use environment variables for production deployments
- EmailJS Public Key is safe to expose (it's meant for frontend use)
- Consider rate limiting on your contact form to prevent abuse

## Support

For more information, visit:
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS Dashboard](https://dashboard.emailjs.com/)

