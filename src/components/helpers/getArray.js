const getArray = (arrayProductos) => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => {
            resolve(arrayProductos)
        }, 2000);
    })
}

export default getArray