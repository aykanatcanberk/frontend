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

export const getSelfExperiences = async (userId) => {
  const filtered = getAllExperienceReviews()
    .then((reviews) => {
      return reviews.filter((review) => review.userId === userId);
    })
    .catch((err) => {
      console.error("Coulnt fetch the all posts data due to :" + err.message);
    });
  return filtered;

  // try {
  //   const response = await axios.get(
  //     process.env.REACT_APP_BACKEND_URL + "expReview"
  //   );
  //   return response.data; // Assuming you want to return the data array from the response
  // } catch (err) {
  //   return {}; // Return an empty object in case of an error
  // }
};
