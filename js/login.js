let loginbtn = document.querySelector("form");
let loginemail = document.querySelector(".email-input");
let loginpass = document.querySelector(".pass-input");

loginbtn.addEventListener("submit", (evt) => {
  evt.preventDefault();

  fetch(`https://reqres.in/api/LOGIN`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      email: loginemail.value,
      password: loginpass.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.token) {
        localStorage.setItem("token", data.token);
        window.location.replace("./pages/pages.html");
      }
    })
    .catch((err) => console.log(err));
  {
    alert("Password or email error");
  }
});

let forbtn = document.querySelector(".for");

forbtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  alert("Sizning emailingiz: eve.holt@reqres.in  ");
});
