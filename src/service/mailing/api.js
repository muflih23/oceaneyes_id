import API from "../index";

export const sendMail = async(data) => {
  const username = process.env.REACT_APP_USERNAME;
  const password = process.env.REACT_APP_PASSWORD;
  try {
    const response = await API.post(
      `${process.env.REACT_APP_BASE_URL}/contact`,
      data,
      {
        auth: {
          username: username,
          password: password,
        }
      }
    )
    return response.data;
  } catch (error) {
    console.error(error);
  }
}