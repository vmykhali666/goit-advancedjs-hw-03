import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_eYmGlwPg4DflDjAiWzOtGpnDD6HzE87EAiIKqzxar0VvCvikiUN37dJCMs5As8ja";

export async function fetchBreeds() {
    return await axios.get("https://api.thecatapi.com/v1/breeds");
}

export async function fetchCatByBreed(breedId) {
    return await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
}