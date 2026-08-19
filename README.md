# Marediasoft

Next.js 15 application with a Prisma + SQLite blog/admin backend.

## Development

```bash
npm install
npm run dev
```

Example local environment:

```env
DATABASE_URL="file:./dev.db"
AUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Production

The production build uses the stable Next.js compiler and generates the Prisma client before building:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

The server binds to `0.0.0.0`, which is suitable for VPS deployments behind Nginx.

## VPS Deploy

1. Install Node.js 20+ and npm.
2. Upload or clone this project onto the VPS.
3. Create `.env.production` from `.env.production.example`.
4. Install dependencies with `npm ci`.
5. Run `npm run db:migrate`.
6. Run `npm run build`.
7. Run `npm run start`.

You can also use:

```bash
npm run deploy:vps
```

If you want a process manager:

```bash
pm2 start ecosystem.config.cjs
pm2 save
```

## Production Notes

- Keep `prisma/*.db` on persistent disk if you continue using SQLite.
- Keep `public/uploads` on persistent disk because uploaded images are stored there.
- Set `NEXTAUTH_URL` to your real HTTPS domain.
- Set a strong production `AUTH_SECRET`.
- Put Nginx or another reverse proxy in front of `127.0.0.1:3000`.
