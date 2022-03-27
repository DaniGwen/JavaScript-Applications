const baseUrl = 'http://localhost:3030';

async function request(method, url, data) {
  const options = {
    method,
    headers: {}
  }

  const token = getAccessToken();
  if (token) {
    options.headers['X-Authorization'] = token;
  }

  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }

  try {

    const response = await fetch(`${baseUrl}${url}`, options);

    if (response.ok != true) {
      if (response.status == 403) {
        clearUserData();
      }
      let err = await response.json();
      throw new Error(err.message);
    }

    if (response.status == 204) {
      return response;
    } else {
      return response.json();
    }
  } catch (error) {
    alert(error.message);
    throw error;
  }
}

export async function get(url) {
  return await request('get', url);
}

export async function post(url, data) {
  return await request('post', url, data);
}

export async function put(url, data) {
  return await request('put', url, data);
}

export async function del(url) {
  return await request('delete', url);
}



export async function login(email, password) {
  const result = await post('/users/login', { email, password });
  setUserData(result);
  return result;
}

export async function register(email, password) {
  const result = await post('/users/register', { email, password });
  setUserData(result);
  return result;
}

export async function logout() {
  const result = await get('/users/logout');
  clearUserData();
  return result;
}



export function getUserData() {
  let result = localStorage.getItem('user');
  if (result) {
    let user = JSON.parse(result);
    return user;
  }
}

export function getAccessToken() {
  const user = getUserData();
  if (user) {
    return user.accessToken;
  } else {
    return null;
  }
}

export function clearUserData() {
  localStorage.removeItem('user');
}

export function setUserData(data) {
  localStorage.setItem('user', JSON.stringify(data));
}