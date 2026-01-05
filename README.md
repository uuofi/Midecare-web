
  # Medical Software Website UI

  This is a code bundle for Medical Software Website UI. The original project is available at https://www.figma.com/design/ROXspD7kU870dmjlJVcUgl/Medical-Software-Website-UI.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

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
  