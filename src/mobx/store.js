import { action, computed, makeObservable, observable } from 'mobx'
class Store {
  constructor() {
    makeObservable(this)
  }

  @observable count = 0
  @observable info = { name: 'cici' }

  @action.bound
  add_count() {
    this.count = this.count + 1
  }

  @action.bound
  setInfo(info) {
    this.info = info
  }

  @computed get double () {
    return this.count*2
  }
}

export default new Store()