export function uploadImage(file) {
  // so uri, type, name are required properties
  const formData = new FormData();
  formData.append('image', file);
  let headers = {
    'Content-Type': 'multipart/form-data', // this is a imp line
    Accept: 'application/json',
  };
  return fetch(`http://192.168.1.8:3000/upload`, {
    // give something like https://xx.yy.zz/upload/whatever
    method: 'POST',
    headers: headers,
    body: formData,
  })
    .then(response => response.json())
    .then(data => ({
      uri: data.uri,
      filename: data.filename,
    }))
    .catch(error => console.log('uploadImage error:', error));
}
