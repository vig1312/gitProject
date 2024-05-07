function newPromise() {
    return new Promise(function(resolve,reject) {
        setTimeout(function() {
            resolve("Vigen Vardanyan")
        },2000)
    })
}

newPromise().then(function(result) {
    document.querySelector(".root").innerHTML = result
})

