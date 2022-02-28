import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 
createApp(App)
    .use(router)
    .mount('#app')

function asyncFailIfMust(mustFail) {
     return new Promise(function (resolve, reject) {
         setTimeout (() => {
            if(!mustFail) {
                resolve("succes !");
            } else {
                reject('failure !');
            }
         }, 3000
         );
    })
}
console.log("asyncFailIfMust(true)");

asyncFailIfMust(true)
    .then(result => {
        console.log("asyncFailIfMust(true)", result);
    })
    .catch(failure => {
        console.error("asyncFailIfMust(true)", failure);
    })

console.log("asyncFailIfMust(false)");

asyncFailIfMust(false)
    .then(result => {
        console.log("asyncFailIfMust(false)", result);
    })
    .catch(failure => {
        console.error("asyncFailIfMust(false)", failure);
    })