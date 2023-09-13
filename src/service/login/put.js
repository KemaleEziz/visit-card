
// let user = {
//     id: 18,
//     firstName: "String",
//     lastName: "Qasimov",
//     middleName: "asadeeefff",
//     companyName: "string",
//     slogan: "Bu slogandir",
//     description: "Buda aciqlamadir",
//     address: "Samaxi",
//     phoneNumber: "0556543221",
//     email: "testSecond@gmail.com",
//     website: "agile.az",
//     title: "bu title-dir"
// }




export async function updateData (data){
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const response = await fetch('http://card.somee.com/api/card', requestOptions);
    const res = await response.json();
    console.log("Update Apiden gelen data: ", res);
   
}

// updateData(user)


