const logger = require('./logger')

const requestLogger = (req, res, next) => {
  logger.info('Method:', req.method)
  logger.info('Path:', req.path)
  logger.info('Body:', req.body)
  logger.info('---')
  next()
}

const unknownEndpoint = (req, res) => {
  res.status(404).json({error: 'Unknown endpoint'})
}

const errorHandler = (error, req, res) => {
  res.status(400).json({error: `There has been an error`})
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  errorHandler
}
