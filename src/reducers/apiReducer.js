export const types = {
  API_REQUEST: 'API_REQUEST'
}

export const actions = {

  apiRequest: ({body, method, url, successAction}) => {
    return {
      type: types.API_REQUEST,
      meta: {
        body,
        url,
        successAction,
        method
      }
    }
  }

}
