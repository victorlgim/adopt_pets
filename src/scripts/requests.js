async function register(body) {
    try {
     const request = await fetch(`https://m2-api-adot-pet.herokuapp.com/users`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
     })
     const data = await request.json()
     console.log(data)
     return data
    } catch (err) {
        console.log(err)
    }
}

export { register }