

const unstablePromise = new Promise((resolve, reject)=>{
    const result = true;
    if(result){
        resolve("success")
    } else {
        reject("failed")
    }
})

function retry(fn, num){
    
    fn
    .then((res) => {
         console.log(res + " the api ✅")
    })
    .catch((err) => {
        if (num > 0){
            retry(fn, num-1)
        }
        console.log(err + " the api ❌")
    })
}

retry(unstablePromise, 5)
