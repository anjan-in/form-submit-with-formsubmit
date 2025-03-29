# Form Submit with FormSubmit

This repository demonstrates how to create a simple contact form using [FormSubmit](https://formsubmit.co/) for handling form submissions without the need for a backend. Learn how to capture form data and receive submissions directly to your email.

## 🚀 Features
- No backend required
- Secure form submission
- Custom redirect to a thank-you page
- Easy email integration

---

## 🛠️ Getting Started

Follow these steps to set up your contact form using FormSubmit:

### 1. **Sign Up on FormSubmit**
- Visit [FormSubmit Signup Page](https://formsubmit.co/).
- Enter your email address.
- Verify your email to start using the service.

### 2. **Create Your Form**
Here is a sample HTML form using FormSubmit:

```html
<form action="https://formsubmit.co/YOUR_EMAIL" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>

  <label for="message">Message:</label>
  <textarea id="message" name="message" required></textarea>

  <!-- Optional: Custom Thank You Page -->
  <input type="hidden" name="_next" value="./thank-you.html">

  <!-- Optional: Disable Captcha -->
  <input type="hidden" name="_captcha" value="false">

  <button type="submit">Send Message</button>
</form>
```

### 3. **Create a Thank You Page**
Make a simple `thank-you.html` page to show after form submission:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Thank You!</title>
</head>
<body>
  <h1>Thank You for Your Message!</h1>
  <p>We will get back to you soon.</p>
</body>
</html>
```

---

## 📌 Additional Options

- **Disable Captcha**: Prevent FormSubmit's captcha by adding:
  ```html
  <input type="hidden" name="_captcha" value="false" />
  ```
- **Custom Redirect**: Redirect users to your own thank you page:
  ```html
  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you.html" />
  ```
- **Custom Subject**: Set a custom email subject:
  ```html
  <input type="hidden" name="_subject" value="New Contact Form Submission" />
  ```

---

## 📧 Troubleshooting
- Ensure your form uses `method="POST"`.
- Double-check your FormSubmit email and verify it.
- Ensure the `_next` URL is correctly specified and exists.

---

## 🎉 Conclusion
That's it! You've successfully created a working contact form using FormSubmit. If you have any issues or suggestions, feel free to open an issue or contribute to this repository.

Happy Coding! 🚀

