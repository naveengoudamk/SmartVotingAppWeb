# How to Deploy Smart Voting Web App

## 1. Upload to GitHub
Since you have already initialized the repository and committed the files, follow these steps to upload it to GitHub:

1. Go to [GitHub - Create a new repository](https://github.com/new).
2. Name your repository (e.g., `smart-voting-web`).
3. Click **Create repository**.
4. Copy the commands from the section **"…or push an existing repository from the command line"**.
5. Run those commands in your terminal. They will look like this:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/smart-voting-web.git
   git branch -M main
   git push -u origin main
   ```

## 2. Make it Live (Deploy)
The easiest way to go live with a Vite/React app is using **Vercel** or **Netlify**.

### Option A: Vercel (Recommended)
1. Go to [Vercel](https://vercel.com) and sign up/login with GitHub.
2. Click **"Add New..."** -> **"Project"**.
3. Import your `smart-voting-web` repository from the list.
4. Click **Deploy**.
5. Vercel will automatically detect it's a Vite app and build it.
6. Once done, you will get a live URL (e.g., `https://smart-voting-web.vercel.app`).

### Option B: GitHub Pages
If you prefer to use GitHub Pages:
1. In your `vite.config.js`, add `base: '/REPO_NAME/',` (replace REPO_NAME with your actual repo name).
2. Install `gh-pages`: `npm install gh-pages --save-dev`.
3. Add these scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.
