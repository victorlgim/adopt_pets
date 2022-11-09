const baseURL = "https://m2-api-adot-pet.herokuapp.com"

export async function getApiUserInformations() {
  const token = localStorage.getItem("user-login")

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/users/profile`, options)
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}

export async function getApiUserPets() {
  const token = localStorage.getItem("user-login")

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }
  try {
    const responseJson = await fetch(`${baseURL}/pets/my_pets`, options)
    if (!responseJson.ok) {
      console.log(responseJson.message)
    } else {
      return await responseJson.json()
    }
  } catch (err) {
    console.log(err)
  }
}
