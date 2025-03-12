const API_URL = "http://localhost:3000/api/students";
const fetchStudents = async (url) => {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);
};

const btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click", () => {
  fetchStudents(API_URL);
});
