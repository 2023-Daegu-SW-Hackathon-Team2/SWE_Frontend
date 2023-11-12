export async function getCategory(id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/categories/homepage_id/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function postLogo(files) {
  const baseUrl = 'http://localhost:8000';
  let data = new FormData();
  data.append('files', files);
  return fetch(`${baseUrl}/homepages/logoupload`, {
    method: 'POST',

    body: data,
  })
    .then((res) => res.json())
    .then((data) => {});
}

export async function getGnbCategory() {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/categories`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function putGnbCategory(category) {
  const baseUrl = 'http://localhost:8000';
  console.log(category);
  const data = {
    homepage_id: category.homepage_id,
    category_name: category.category_name,
  };
  const jsonData = JSON.stringify(data);
  return fetch(`${baseUrl}/categories/${category.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((data) => {});
}

export async function deleteGnbCategory(id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/categories/${id}`, {
    method: 'DELETE',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}

export async function postGnbCategory(name) {
  const baseUrl = 'http://localhost:8000';
  console.log(name);
  const data = {
    homepage_id: 7,
    category_name: name,
  };
  const jsonData = JSON.stringify(data);
  return fetch(`${baseUrl}/categories`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonData,
  })
    .then((res) => res.json())
    .then((data) => {});
}
