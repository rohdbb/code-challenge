var url = "https://jsonplaceholder.typicode.com/users";
var data = {
    nombre: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento
};


fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-Type": "application/json",
    } 
})
  .then(function (response) {
    if (response.ok) {
   console.log("Success:", response)
    } else {
      console.log("Error:", response);
    }
  })
  .catch(function (error) {
    console.log("Hubo un problema con la petición Fetch:" + error.message);
  });