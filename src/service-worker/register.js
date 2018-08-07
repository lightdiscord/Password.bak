/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV !== 'production') return

const ready = () => {
  console.log(
    'App is being served from cache by a service worker.\n' +
    'For more details, visit https://goo.gl/AFskqB'
  )
}

const cached = () => {
  console.log('Content has been cached for offline use.')
}

const updated = () => {
  console.log('New content is available; please refresh.')
}

const offline = () => {
  console.log('No internet connection found. App is running in offline mode.')
}

const error = (error) => {
  console.error('Error during service worker registration:', error)
}

register(`${process.env.BASE_URL}service-worker.js`, {
    ready,
    cached,
    updated,
    offline,
    error
})
