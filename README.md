# nunocgoncalves.com

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: Postgres
- **Styling**: [Tailwind CSS](https://tailwindcss.com)

## Running Locally

This application requires Node.js v18.17+.

```bash
git clone https://github.com/nunocgoncalves/nunocgoncalves.com.git
cd nunocgoncalves.com
bun install
bun dev
```

Create a `.env.local` from [`.env.example`](https://github.com/nunocgoncalves/nunocgoncalves.com/blob/main/.env.example).

## Database Schema

```sql
CREATE TABLE redirects (
  id SERIAL PRIMARY KEY,
  source VARCHAR(255) NOT NULL,
  destination VARCHAR(255) NOT NULL,
  permanent BOOLEAN NOT NULL
);

CREATE TABLE views (
  slug VARCHAR(255) PRIMARY KEY,
  count INT NOT NULL
);
```
