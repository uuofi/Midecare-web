
  # Medical Software Website UI

  This is a code bundle for Medical Software Website UI. The original project is available at https://www.figma.com/design/ROXspD7kU870dmjlJVcUgl/Medical-Software-Website-UI.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploy (important for links / deep routes)

  This website uses React Router with `BrowserRouter`. That means routes like `/privacy`, `/terms`, `/about` must be handled by your server.

  If your server is not configured for SPA fallback, opening a link directly (or refreshing the page) can show **404 Not Found**.

  Pick one option:

  - **Nginx:** use the SPA fallback (see `nginx.conf.example`). Key line:
    - `try_files $uri $uri/ /index.html;`
  - **Apache:** copy `public/.htaccess` next to `index.html`.
  - **Netlify:** `public/_redirects` already includes `/* /index.html 200`.
  - **Vercel:** `vercel.json` includes a rewrite to `/index.html`.

  ### If you deploy with GitHub + PM2 (common VPS setup)

  On the server (inside the `medweb` folder):

  - Build the static site:
    - `npm ci`
    - `npm run build`

  - Serve the built `dist/` with SPA fallback (makes all routes work):
    - `pm2 delete medweb || true`
    - `pm2 serve dist 3000 --spa --name medweb`
    - `pm2 save`

  If you have Nginx in front, proxy to the PM2 port:
  - `location / { proxy_pass http://127.0.0.1:3000; }`

  ## Managing images (بدون تعديل كود)

  This web app expects “replaceable” images to be served as static files.

  - **Logo:** `public/logo.png` → served as `/logo.png`
    - On the server: replace `logo.png` next to `index.html`.
  - **Website images:** upload these paths on the server (recommended):
    - `/site/hero-doctor-tech.jpg`
    - `/site/dashboard-screen.jpg`
    - `/site/clinic-software.jpg`
    - `/site/modern-hospital.jpg`

  If you deploy by copying `dist/` into your hosting root, then you can create a `site/` folder next to `index.html` and upload the images there.
  