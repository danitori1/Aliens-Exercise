const back_host = 'http://localhost:9000/api';

export const fetchData = async (method, url, body, callBackFunction) => {
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');

  body = body ? JSON.stringify(body) : null;

  let res = {};
  const requestBody = {
    method: method,
    headers: headers,
    body: body,
    redirect: 'follow',
  };
  try {
    const response = await fetch(back_host + url, requestBody);
    res = await response.json();
  } catch (err) {
    res = err;
  }
  if (callBackFunction) {
    callBackFunction(res);
  } else {
    return res;
  }
};
