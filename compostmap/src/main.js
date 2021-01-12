import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

function asyncFailIfMust(mustFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (mustFail) {
                reject("Rejected")
            } else {
                resolve("Resolved");
            }
        }, 3000);
  });
}

console.log("asyncFailIfMust(true)");
asyncFailIfMust(true)
    .then(result => {
        // Ici la promesse est résolue, on a accès au résultat
        console.log("asyncFailIfMust(true) - Success ", result)
    })
    .catch(failure => {
        // Ici la promesse est rejetée, on a accès à la cause d'échec
        console.error("asyncFailIfMust(true) - Failure :( ", failure)
    })


console.log("asyncFailIfMust(false)");
asyncFailIfMust(false)
    .then(result => {
        // Ici la promesse est résolue, on a accès au résultat
        console.log("asyncFailIfMust(false) - Success ", result)
    })
    .catch(failure => {
        // Ici la promesse est rejetée, on a accès à la cause d'échec
        console.error("asyncFailIfMust(false) - Failure :( ", failure)
    })

console.log("All call dones, waiting for promises...");