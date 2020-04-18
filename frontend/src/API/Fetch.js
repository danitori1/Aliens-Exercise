const back_host = 'http://localhost:9000/api/alienWrappers';

export const fetchData = async (method, body, callBackFunction) => {
  let res = {};
  const requestBody = {
    method: method,
    headers: {
      'Content-Type': 'application',
    },
    body: body,
  };
  try {
    const response = await fetch(back_host, requestBody);
    const raw_res = await response.json();
    res = raw_res['_embedded']['alienWrappers'][0]['aliens'];
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  if (callBackFunction) {
    callBackFunction(res);
  } else {
    return res;
  }
};
