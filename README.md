# Starter pack

## Goal 🎯

Develop a web-app, including the following features :

-   Feature description

![App screenshot]()

## Prerequisites ⚠️

-   NodeJS (v12+ should be fine)

## How to run ? ▶️

In order to run the app, please reproduce the following steps :

1. Dependencies

##### `npm install`

##### `npm install -g serve`

2. Run app

#### Production (faster speed)

##### `npm run build`

##### `npm run serve-prod`

#### Development (optional)

##### `npm run start`

3. Access app

#### Main page

Open a web browser and access http://localhost:3000/.

#### Specific pages (routing)

-   You can access ... from URL with `http://localhost:3000/...?={?}`. Example : http://localhost:3000/...

3. Run tests

##### `npm run test` (Tests)

## Structure 🧱

The sources are composed of multiple folders :

-   `__tests__` (Unit tests)
-   `app` (Root component of the app)
-   `components` (Folders of all components of the app)
-   `constants` (Constants of actions, api)
-   `redux` (Store, actions & reducers)
-   `utils` (Common functions & tools)

x main components :

-   `?` (description)

Logic is separated from view.

## Styles 👁️

Graphic elements are managed with SASS preprocessor and SCSS. It is responsive for wide & small screens. The responsive style is applied for a screen width < 800px. Global variables and mixins are defined in the App.scss file.

![Responsive](?)

## Redux ⚛️

Redux is used to manage actions & data persistency.
There are 3 main reducers :

-   ? : reducer description

![Redux tree](?)

## Routing strategy 🔀

I used [React Router](https://reactrouter.com/web/guides/quick-start). You can see below a simplified chart, including main components, actions and related urls. Urls changes during navigation are made with the <Link /> element when possible, either with history.push().
To differenciate a manual url change from an automatic change (user click), I compare the action type (push, replace or pop) of history and process my redux actions differently.

## Unit tests ✔️

Tests have been coded with Jest and are available in the `__tests__` folder.

Most of them are functional tests : dom content is analyzed after rendering components with different props and store data. 

As logic is in a 'container' component, that renders a unique display element, it it possible to test logic & view separately.

-   Logic : Test dom output using a mocked redux initial state (if needed)
-   View : Test dom output using different props value. Also, as callbacks are passed to the display element props, it is pretty easy to test if they're succesfully called after a user interaction.

Also, user actions can be simulated (e.g user click when opening a message). Some libraries/files are mocked to focus the tests on the behaviour of the component itself.

You will find also unit tests (isolated functions tests with different combinaisons of input parameters).

## Performances 📈

This project is made with webpack and babel. A web server is used for development, with hot reload and source maps.
Configuration files have been customized to optimize performances, including management of :

-   polyfills (js & jsx)
-   stylesheets, images, svg and other files loading/compression
-   minification
-   code splitting

## SEO, accessibility 🔍

I used specific html attributes and avoid to use divs as much as possible (e.g nav, section, p, button, and also rarer ones like data, time...).

I used Link components (which renders "a' elements) for routing.

Also, few attributes have been added to index.html, in order to take into account SEO.

## Good practices 📋

### Eslint

-   Rules are loaded from the .eslintrc configuration file.

### Formatting

-   Using [prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), automatically after every save (see .vscode/settings.json).

### Github

-   Auto lint fix before commit
-   Auto tests running before push (only allowed if all tests passed)
-   Common template for pull requests (.github/pull_request_template.md)
-   Commits messages standard : Using [commitizen](https://github.com/commitizen/cz-cli)

### Comments & documentation

-   JS Doc standard. Tutorials are located in the docs/tutorials folder.

### React

-   Hooks
-   Logic separated from view

## Useful tools 🔧

### Web extensions

-   [React](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
-   [Redux](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

### VS Code extensions

Please see recommanded extensions in your extensions tab, loaded from .vscode/extensions.json
