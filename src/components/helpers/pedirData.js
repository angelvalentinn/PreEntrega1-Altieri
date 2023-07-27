export const pedirData = async (url) => {
    return new Promise( (res) => {
        fetch(url)
            .then(resp => resp.json())
            .then(data => res(data))
    })
}

export const  pedirDataPorId =  (data,id) => {
    const itemBuscado = data.find( item => item.id == id );
    return (itemBuscado); 
}