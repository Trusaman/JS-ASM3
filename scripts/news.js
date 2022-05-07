let API_KEY = "6eab18f380ef46a5a7cc50044af5f96b";

async function getData(key) {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=sg&category=business&pageSize=10&page=2&apiKey=${key}`
  );
  const data = await response.json();
  console.log(data);
}

getData(API_KEY);
