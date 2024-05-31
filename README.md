## EasyHeader

A work-in-progress browser extension. This README documentation **will change** significantly as the development of this project kicks off.

---

## Running the project locally

In the project directory, you can run:

### Install dependencies
```bash
# Can also use pnpm install, yarn install, etc.
npm install
```

### `npm run dev`

Runs the app in the development mode.

Upon running the dev script, the application should automatically open a browser window at [http://localhost:5173](http://localhost:5173).

### `npm run build`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Additionally, a `postbuild` script will run, modifying the `dist/manifest.json` file in-place by removing the `$schema` key, which Chrome does _not_ consider a valid manifest key when loading the extension.

---

## Deployment

Learn more about deploying your application with the [documentations](https://vitejs.dev/guide/static-deploy.html)
