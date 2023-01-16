

// API.getData().then((data) => {
//     console.log(data);
// })


async function info() {
    let data = await API.getData()  //stop
    return data;
}

info().then(res => console.log(res))