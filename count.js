const fs = require('fs')
const path = require('path')
const dir = path.resolve(__dirname,'./leetcode/editor/cn')
let files = fs.readdirSync(dir)
let len = files.length
console.log('一共刷了'+len+'题,加油!')
