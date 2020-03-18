# How to add extension to Google Chrome browser

1. Download extension from github and unzip it.
2. Open the Extension Management page by navigating to **chrome://extensions** in Google Chrome.
3. The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
4. Enable Developer Mode by clicking the toggle switch next to Developer mode.
5. Click the LOAD UNPACKED button and select the extension/dist directory.
![load extension](https://developer.chrome.com/static/images/get_started/load_extension.png)

# Getting Started

### Clone this repository locally :

``` bash
git clone https://github.com/easably/extension.git
```

### Move to folder:

``` bash
cd extension
```

### Install dependencies with npm :

``` bash
npm install
```

### Start dev mode:

Start on the development server (http://46.101.122.247/)

``` bash
npm start
// or
npm run start:dev

```

Or start on the production server (http://easy4learn.com/)

``` bash
npm run start:prod
```

### Create build (dist folder):

Build on the development server (http://46.101.122.247/)

``` bash
npm run build
// or
npm run build:dev
```

Or build on the production server (http://easy4learn.com/)

``` bash
npm run build:prod
```

### Create building .zip in build folder:

Create .zip on the development server (http://46.101.122.247/)

``` bash
npm run zip
// or
npm run zip:dev
```

Or create .zip on the production server (http://easy4learn.com/)

``` bash
npm run zip:prod
```
