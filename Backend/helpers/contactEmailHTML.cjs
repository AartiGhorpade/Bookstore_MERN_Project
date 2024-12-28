exports.contactEmailHTML = (userName) => {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                }
                .container {
                    width: 80%;
                    margin: auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .header h1 {
                    margin: 0;
                    color: #5b9bd5;
                }
                .content {
                    text-align: left;
                }
                .footer {
                    text-align: center;
                    padding-top: 20px;
                    font-size: 0.9em;
                    color: #777;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h1>Thank You!</h1>
                </div>
                <div class="content">
                    <p>Dear ${userName},</p>
                    <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
                    <p>We appreciate your interest and look forward to assisting you.</p>
                    <p>Best regards,</p>
                </div>
                <div class="footer">
                    <p>&copy; ${new Date().getFullYear()}</p>
                </div>
            </div>
        </body>
        </html>
    `;
};
