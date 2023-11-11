export async function getProductInfo(cart_id) {
  const baseUrl = 'http://localhost:3000'; // NestJS 서버의 URL과 포트 번호
  return fetch(`${baseUrl}/cart-items/cart_id/${cart_id}`, {
    method: 'GET',
  })
    .then((res) => res.json())

    .then((data) => {
      console.log(data);

      return data;
    });
}
