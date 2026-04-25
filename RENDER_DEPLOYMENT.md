# Deploying Zephyr Restaurant to Render

This guide walks you through deploying the Zephyr Restaurant application to Render.

## Prerequisites

- A Render account (https://render.com)
- Your code pushed to a Git repository (GitHub, GitLab, or Bitbucket)
- A PostgreSQL database (can be set up on Render or externally)

## Step-by-Step Deployment

### 1. Set Up PostgreSQL Database (if needed)

If you don't have a PostgreSQL database, create one on Render:
- Go to Dashboard → New → PostgreSQL
- Set a name, region, and tier
- Note the database connection details

### 2. Deploy the Backend

1. Go to Render Dashboard → New → Web Service
2. Connect your Git repository
3. Configure the service:
   - **Name**: `zephyr-backend` (or your preferred name)
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Root Directory**: `backend`
   - **Node Version**: 18 (or higher)

4. Add Environment Variables:
   - `NODE_ENV`: `production`
   - `DB_HOST`: Your PostgreSQL host
   - `DB_PORT`: `5432`
   - `DB_NAME`: Your database name
   - `DB_USER`: Your database user
   - `DB_PASSWORD`: Your database password
   - `JWT_SECRET`: A strong, random secret (generate one)
   - `JWT_EXPIRES_IN`: `7d`
   - `CORS_ORIGIN`: Your frontend URL (e.g., `https://zephyr-frontend.onrender.com`)
   - `PORT`: `5000` (Render will handle this, but you can set it)

5. Click "Create Web Service"

### 3. Deploy the Frontend

1. Go to Render Dashboard → New → Static Site
2. Connect your Git repository
3. Configure the service:
   - **Name**: `zephyr-frontend` (or your preferred name)
   - **Build Command**: `npm run build` (from the frontend directory)
   - **Publish Directory**: `frontend/dist`
   - **Root Directory**: `frontend`

4. Add Environment Variables:
   - `VITE_API_URL`: Your backend URL (e.g., `https://zephyr-backend.onrender.com`)

5. Click "Create Static Site"

### 4. Update Your Backend CORS Configuration

After deployment, update your `.env` file with:
```
CORS_ORIGIN=https://your-frontend-domain.onrender.com
```

And the frontend with:
```
VITE_API_URL=https://your-backend-domain.onrender.com
```

## Troubleshooting

### "Cannot find package 'express'" Error

This means dependencies weren't installed. Ensure:
- `render.yaml` is in the root directory (or at least in your backend)
- The `Build Command` is set to `npm install`
- The `Root Directory` is set to `backend`

### Database Connection Issues

Verify your database environment variables:
- `DB_HOST` should be the full hostname (e.g., `dpg-xxx.postgres.render.com`)
- `DB_PORT` should be `5432`
- Check that your Render PostgreSQL instance allows external connections

### Build Failures

- Check the build logs in Render Dashboard
- Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify there are no issues

## Environment Variables

**Do NOT commit sensitive information to git!** Use Render's environment variables:

- `DB_PASSWORD` - Keep this secret
- `JWT_SECRET` - Use a strong random string
- `API_KEY` - Any other sensitive keys

Generate a strong JWT secret:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

## Next Steps

- Set up continuous deployment (automatic deployments on git push)
- Monitor application logs in Render Dashboard
- Set up alerting for deployment failures
- Configure custom domain if needed
