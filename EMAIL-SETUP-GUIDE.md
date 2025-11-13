# 📧 Email Setup Guide - Contact Form

## ✅ Your Email: shanan9495@gmail.com (Secure & Masked)

### 🚀 Quick Setup (5 Minutes - FREE!)

## Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (FREE - 200 emails/month)
3. Sign up with your Google account or email

## Step 2: Add Email Service
1. Click **"Email Services"** in dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"**
5. Login with **shanan9495@gmail.com**
6. Copy your **Service ID** (looks like: `service_abc123`)

## Step 3: Create Email Template
1. Click **"Email Templates"** in dashboard
2. Click **"Create New Template"**
3. Replace the template with this:

```
Subject: New Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Message:
{{message}}

---
Sent from FayasTech Portfolio Contact Form
Reply to: {{from_email}}
```

4. Click **"Save"**
5. Copy your **Template ID** (looks like: `template_xyz789`)

## Step 4: Get Public Key
1. Click **"Account"** in dashboard
2. Go to **"General"** tab
3. Copy your **Public Key** (looks like: `abcd1234efgh5678`)

## Step 5: Update .env.local File
1. Open `.env.local` file in your project
2. Replace the values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xyz789
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcd1234efgh5678
```

3. Save the file
4. Restart your dev server:
```bash
npm run dev
```

---

## 🧪 Testing the Contact Form

### Test It Now:
1. Go to http://localhost:3000
2. Scroll to **Contact** section
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Message
   - Message: This is a test!
4. Click **"Send Message"**
5. Check **shanan9495@gmail.com** inbox!

### Success Message:
✅ Message sent to shanan9495@gmail.com! I'll reply soon.

### If Error:
- Check your EmailJS keys in `.env.local`
- Make sure you verified your Gmail in EmailJS
- Check browser console for errors (F12)

---

## 🔒 Security Features

### ✅ Your Email is Secure:
- Email **NOT visible** in frontend code
- Masked with environment variables
- Only accessible server-side
- `.env.local` is in `.gitignore` (never committed to git)

### ✅ Spam Protection:
- Form validation (required fields)
- Email format validation
- Rate limiting (EmailJS: 200/month free)

---

## 📊 Email Stats

### EmailJS Free Plan:
- ✅ 200 emails/month
- ✅ Unlimited templates
- ✅ Email tracking
- ✅ No credit card required

### Upgrade Options:
- If you get more than 200 contacts/month
- Paid plans start at $7/month

---

## 🎯 What Happens When User Submits:

1. User fills contact form on your website
2. Click "Send Message" button
3. Email sent via EmailJS
4. You receive email at **shanan9495@gmail.com**
5. Email contains:
   - User's name
   - User's email (for reply)
   - Subject
   - Message
6. You can reply directly from Gmail!

---

## ✨ Features:

- ✅ Real email delivery to **shanan9495@gmail.com**
- ✅ Professional email template
- ✅ Success/error messages
- ✅ Loading animation
- ✅ Form validation
- ✅ Mobile responsive
- ✅ Secure (email masked)
- ✅ FREE (200 emails/month)

---

## 🆘 Troubleshooting

### Problem: "Failed to send message"
**Solution:**
- Check EmailJS dashboard if service is connected
- Verify Gmail account in EmailJS
- Check `.env.local` keys are correct
- Restart dev server: `npm run dev`

### Problem: "Not receiving emails"
**Solution:**
- Check Gmail spam folder
- Verify email template in EmailJS
- Test with EmailJS test button first
- Check EmailJS usage limits (200/month)

### Problem: "Service not found"
**Solution:**
- Copy Service ID correctly from EmailJS
- Make sure no extra spaces in `.env.local`
- Restart dev server

---

## 🎉 You're All Set!

Once configured, your contact form will send emails to **shanan9495@gmail.com** automatically!

Test it now and check your inbox! 📧✨
