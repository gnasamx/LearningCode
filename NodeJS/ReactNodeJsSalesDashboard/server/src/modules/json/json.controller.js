const Converter = require('csvtojson').Converter
const fs = require('fs')

export async function csvToJson(req, res) {
  try {
    var converter = new Converter({})
    if (fs.existsSync('data/transactions_sample.csv')) {
      console.log('File is present')
      const result = await converter.fromFile('data/transactions_sample.csv')
      res.status(200).json({
        transactions: result
      })
    } else {
      res.status(400).json({
        error: error,
        message: 'File is not found at specified path'
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error,
      message: 'Something wen wrong while your csv file'
    })
  }
}
