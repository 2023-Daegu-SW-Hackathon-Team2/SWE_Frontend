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
  