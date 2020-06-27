const app = require('./app')
const logger = require('./utils/logger')

const port = process.env.port || 3001
app.listen(port)

logger.info(`Server running on ${port}`)