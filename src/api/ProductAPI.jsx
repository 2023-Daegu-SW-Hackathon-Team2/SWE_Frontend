export async function getProductInfo(cart_id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/products/${cart_id}`, {
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
