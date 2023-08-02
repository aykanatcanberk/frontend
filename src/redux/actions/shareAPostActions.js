import * as actionTypes from "./actionType";

export function getProductsSuccess(products) {
  return { type: actionTypes.ShareAPostAciton, payload: products };
}

export function changeCategory(category) {
  return { type: actionTypes.ShareAPostAciton, payload: category };
}

export function updateProductSuccess(product) {
  return { type: actionTypes.ShareAPostAciton, payload: product };
}


export function createProductSuccess(product) {
  return { type: actionTypes.ShareAPostAciton, payload: product };
}

export function savePostApi(post) {
  return fetch("http://localhost:3000/products/" + (post.id || ""), {
    method: post.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(post)
  })
    .then(handleResponse)
    .catch(handleError);
}


export function savePost(post) {
  return function(dispatch) {
    return savePostApi(post)
      .then(savedPost => {
        post.id
          ? dispatch(updateProductSuccess(savedPost))
          : dispatch(createProductSuccess(savedPost));
      })
      .catch(error => {
        throw error;
      });
  };
}

export async function handleResponse(response){
  if(response.ok){
    return response.json()
  }

  const error = await response.text()
  throw new Error(error)
}

export function handleError(error){
  console.error("Bir hata oluştu")
  throw error;
}

export function getCategories(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}

export function getProducts(categoryId) {
  return function(dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url = url + "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductsSuccess(result)));
  };
}
