install nodejs

npm install express

npm init

npm install morgan

npm install --save express-generator

npm install nodemon --save (To auto reload server)

Then add ""devStart": "nodemon src/app.js"" into "script" of package.json file

define morgan variable: const morgan = require('morgan')

add "app.use(morgan('combined'))"

install template engine: "npm install pug --save"

add "app.set('view engine', 'pug')"

to start server: npm start