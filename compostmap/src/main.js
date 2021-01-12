import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
    .use(router)
    .mount('#app')

testPromise()

function asyncFailIfMust(mustFail) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (mustFail) {
                reject("Rejected")
            } else {
                resolve("Resolved");
            }
        }, 3000)
  });
}

async function testPromise() {
    try {
        console.log("asyncFailIfMust(true)")
        var result = await asyncFailIfMust(true)
        console.log("asyncFailIfMust(true) - Success ", result)
    } catch (failure) {
        console.error("asyncFailIfMust(true) - Failure :( ", failure)
    }
   
    try {
        console.log("asyncFailIfMust(false)")
        var result2 = await asyncFailIfMust(false)
        console.log("asyncFailIfMust(false) - Success ", result2)
    } catch (failure) {
        console.error("asyncFailIfMust(false) - Failure :( ", failure)
    }

    console.log("All calls done, we already waited for promises")
}
