import AppService from './modules/app.service.js'
import {config} from './modules/config.js'
import './modules/header.component.js'
import './scss/main.scss'

console.log('Config key: ', config.key)

const service = new AppService('Hello world!')
service.log()