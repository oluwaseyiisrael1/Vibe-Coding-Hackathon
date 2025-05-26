# TrackEase

An AI-powered expense and income tracker for small traders using voice and photo input.

## Features
- 🎙️ Record transactions via voice
- 📷 Upload receipts or product photos
- 🔄 Auto-logs to Supabase database
- 📊 View all transactions in real-time

## Stack
- HTML, CSS, JavaScript
- Supabase (Auth + DB)
- Simulated AI prompt for photo/voice parsing

## Setup
1. Clone repo
2. Create Supabase project & add a table:

### Table: `transactions`
| Column      | Type      |
|-------------|-----------|
| id          | bigint (PK) |
| description | text      |
| method      | text      |
| created_at  | timestamp (default: now()) |

3. Add your Supabase URL & Key in `supabase.js`
4. Open `index.html` in browser

## License
MIT
