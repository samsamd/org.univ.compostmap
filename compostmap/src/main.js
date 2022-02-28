import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 
createApp(App)
    .use(router)
    .mount('#app')

    someFunction(); 

function asyncFailIfMust(mustFail) {
     return new Promise(function (resolve, reject) {
         setTimeout (() => {
            if(!mustFail) {
                resolve("Resolved");
            } else {
                reject('Rejected');
            }
         }, 3000
         );
    })
}

console.log("asyncFailIfMust(true)");
console.log("asyncFailIfMust(false)");

async function someFunction() {
    try {        
        var result = await asyncFailIfMust(true);
        console.log("asyncFailIfMust(true) - succes !", result);
    } 
    catch(failure) {
        console.error("asyncFailIfMust(true) - fail !", failure);
    }
    try {       
        result = await asyncFailIfMust(false);
        console.log("asyncFailIfMust(false) - succes !", result);
    } 
    catch (failure) {
        console.error("asyncFailIfMust(false) - fail !", failure);
    }
}