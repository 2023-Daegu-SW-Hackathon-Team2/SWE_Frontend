export async function getCartInfo(cart_id) {
    const baseUrl = 'http://localhost:8000'; // NestJS 서버의 URL과 포트 번호
    return fetch(`${baseUrl}/cart-items`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });
  }

export async function postBagList(bag) {
  const baseUrl = 'http://localhost:8000';
  let data = new FormData();
  console.log(bag);
  const jsonData = JSON.stringify(bag);
  //data.append('bag', bag);
  //   data.append('product_id', bag.product_id);
  //   data.append('quantity', bag.quantity);
  //   data.append('created_user_id', bag.created_user_id);
  //   data.append('choose', bag.choose);
  //data.append('mainBanner', mainBanner);

  console.log(data);
  return fetch(`${baseUrl}/cart-items/`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: jsonData, // 데이터를 JSON 문자열로 변환하여 본문에 추가
  })
    .then((res) => res.json())
    .then((data) => {});
}
