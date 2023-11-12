export async function postGpt(toShoPT) {
    const baseUrl = "http://localhost:5001";
    let data = new FormData();
    const jsonData = JSON.stringify(toShoPT);
    console.log(jsonData);

    return fetch(`${baseUrl}/shopt`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: jsonData,
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        });
}
