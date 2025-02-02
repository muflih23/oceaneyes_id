import API from ".."

const BaseUrl = process.env.REACT_APP_BASE_URL;
const username = process.env.REACT_APP_USERNAME;
const password = process.env.REACT_APP_PASSWORD;

export const getListArticle = async(params) => {
  try {
    const response = await API.get(
      `${BaseUrl}/articles`, {
        params: params,
        auth: {
          username: username,
          password: password,
        }
      }
    )
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getSpotlightArticle = async() => {
  try {
    const response = await API.get(
      `${BaseUrl}/articles/spotlight`,
      {
        auth: {
          username: username,
          password: password,
        }
      }
    )
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export const getDetailArticle = async(id) => {
  try {
    const response = await API.get(
      `${BaseUrl}/articles/${id}`,
      {
        auth: {
          username: username,
          password: password,
        }
      }
    )
    return response.data
  } catch (error) {
    return error.response.data
  }
}