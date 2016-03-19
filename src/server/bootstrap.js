import express from 'express';
import hbs from 'express-handlebars';

// Create Node Global
GLOBAL.app = {};

app.server = {};
app.server.hostname = 'localhost';
app.server.port = 2000;

// Create express server instance
// -> Set the folder for html views & disable powered-by header
app.server.instance = express();
app.server.instance.engine('html', hbs({ extname: 'html' }));
app.server.instance.set('views', process.cwd() + '/src/server/views');
app.server.instance.set('view engine', 'html');
app.server.instance.locals.settings['x-powered-by'] = false;
app.server.instance.disable('x-powered-by');

/*eslint-disable no-console */
// Create application logging functionality.
// A neat console wrapper that keeps the correct line number.
// http://stackoverflow.com/questions/13815640/a-proper-wrapper-for-console-log-with-correct-line-number
app.log = function() {
  return console.log.bind(console);
}();
/*eslint-enable no-console */
