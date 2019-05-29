### `npm start`

Will start the application locally, can be hit at localhost:3000/jsonutil

### `npm run build`

Puts all necessary files for deployment into the `build` folder.

### `how to deploy`

1) From tomcat location, make a new directory in the `webapps` folder titled `jsonutil`. 
2) Copy all contents from `build` folder into the new `jsonutil` folder. 
3) Restart tomcat server
4) Page can be hit at localhost:8080/jsonutil

### `Changing url`

For domain url, change the `homepage` field in the `package.json` file.

For endpoint, change the `homepage` field as well as the `basename` attribute on the `Router` tag in `index.html`

