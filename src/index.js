import AppService from './modules/app.service.js'
import {config} from './modules/config.js'
import './modules/header.component'

console.log('Config key: ', config.key)

const service = new AppService('Hello world!')
service.log()