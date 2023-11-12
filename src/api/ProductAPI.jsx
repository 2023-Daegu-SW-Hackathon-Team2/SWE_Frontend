export async function getProductInfo(product_id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/products/${product_id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getAllData() {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/products`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getCategoryInfo(category_id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/products/category/${category_id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function getCategoryTitle(category_id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/categories/${category_id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function deleteProduct(id){
  const baseUrl = 'http://localhost:8000';
  return fetch(`${baseUrl}/products/${id}`,{
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
}

export async function updateProduct(id,Lists){
  const baseUrl = 'http://localhost:8000';
  return fetch(`${baseUrl}/products/${id}`,{
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Lists[0]),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
}

export async function uploadImage(files) {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('files', file);
  });

  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/products/upload/`, {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      return data
    });
}
