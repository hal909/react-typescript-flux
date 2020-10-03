import { Dispatcher } from 'flux'
import { EventEmitter } from 'events'
import {Action, Payload} from '../types'
import {
  ERROR,
} from '../actions'

const dispatcher = new Dispatcher<any>()
const emitter = new EventEmitter()

interface Store {
  store: any
}

class Store {
  constructor() {

    this.store = {
      item: 'item'
    }

    dispatcher.register(
      (payload: Payload) => {
        switch (payload.action) {
          case ERROR:
            this.error(payload)
            break;
        }
      }
    )
  }

  error(payload: Payload) {
    console.log('error')
  }
  
  getStore(index: string) {
    return(this.store[index]);
  }

  setStore(obj: any) {
    this.store = {...this.store, ...obj}
    console.log(this.store)
    return emitter.emit('StoreUpdated')
  }
}

var store = new Store();

export default {
  store: store,
  dispatcher: dispatcher,
  emitter: emitter
}