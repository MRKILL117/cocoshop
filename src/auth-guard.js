import { store } from './store/index.js'

export default (to, from, next) => {
    if (store.getters.getUserData.id) {
        console.log("si hay user")
        next ()
    } else {
        console.log("no hay user")
        next('login')
    }
}
