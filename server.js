const ReactDOMServer = require('react-dom/server')
const App = require('./app')

module.exports = function server(request, response) {
    const html = ReactDOMServer.renderToString(React.createElement(App, {url: request.url}))
    response.set('Content-type', 'text/html')
    response.send(html)
}