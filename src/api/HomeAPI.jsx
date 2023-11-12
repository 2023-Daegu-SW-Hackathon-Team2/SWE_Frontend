export async function getBannerImg(id) {
  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/homepages/id/${id}`, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
export async function postNewBest(Lists) {
  const baseUrl = 'http://localhost:8000';
  // const formData = new FormData();
  // formData.append('new_item', newList);
  // console.log(newList);
  // formData.append('best_item', bestList);
  console.log(Lists[0]);
  return fetch(`${baseUrl}/homepages/id/6`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Lists[0]),
  })
    .then((res) => res.json())
    .then((data) => {
      //updateBanner(data)
    });
}
export async function postBanner(files) {
  console.log(files);
  const formData = new FormData();
  files.forEach((file) => {
    console.log(file);
    formData.append('files', file);
  });

  const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/homepages/upload/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      //updateBanner(data)
    });
}
