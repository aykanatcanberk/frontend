import axios from "axios";

export const getAllExperienceReviews = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "expReview"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    return {}; // Return an empty object in case of an error
  }
};

export const getPrivateExperiences = async (userName) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BACKEND_URL + "expReview"
    );
    return response.data; // Assuming you want to return the data array from the response
  } catch (err) {
    return {}; // Return an empty object in case of an error
  }
};
