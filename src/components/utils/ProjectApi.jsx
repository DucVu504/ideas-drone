const API_BASE_URL = process.env.NEXT_PUBLIC_API_PROJECT_DATA_URL;

/**
 * Utility function for GET requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} [options={}] - Optional fetch options
 * @returns {Promise<any>} - The response data
 */
async function getData(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`GET request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Utility function for PUT requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the body of the request
 * @param {object} [options={}] - Optional fetch options
 * @returns {Promise<any>} - The response data
 */
async function putData(endpoint, data, options = {}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`PUT request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Utility function for POST requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} data - The data to send in the body of the request
 * @param {object} [options={}] - Optional fetch options
 * @returns {Promise<any>} - The response data
 */
async function postData(endpoint, data, options = {}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(data),
    ...options,
  });

  if (!response.ok) {
    throw new Error(`POST request failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Utility function for DELETE requests
 * @param {string} endpoint - The API endpoint to call
 * @param {object} [options={}] - Optional fetch options
 * @returns {Promise<any>} - The response data
 */
async function deleteData(endpoint, options = {}) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`DELETE request failed: ${response.statusText}`);
  }

  return response.json();
}

export { getData, putData, postData, deleteData };
