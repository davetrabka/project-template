'use strict'
const { db } = require('./server/db')
const app = require('./server')

const PORT = 3000
const serverMessage = `
====================================================
================== SERVER RUNNING ================== 
============== http://localhost:${PORT} ===============
==================================================== 
`

db.sync().then(() => {
  console.log('db synced')
  app.listen(PORT, () => {
    console.log(serverMessage)
  })
})
