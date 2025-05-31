# License Key Email Backend

## 🚀 Setup Instructions

1. Install dependencies:

```bash
npm install
```

2. Create `.env` file with the following:

```env
SUPABASE_URL=...
SUPABASE_KEY=...
GMAIL_USER=your_email@gmail.com
GMAIL_PASS=your_app_password
ADMIN_EMAIL=your_email@gmail.com
```

3. Run the server:

```bash
npm start
```

4. Send a license key email with:

```bash
POST /send-license
{
  "email": "user@example.com"
}
```
