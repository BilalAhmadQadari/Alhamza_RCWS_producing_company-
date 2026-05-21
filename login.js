function loginUser() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("user")) || [];

  let newUser={
    email: email,
    password: password
  };
  users.push(newUser);

  localStorage.setItem("user", JSON.stringify(users));
  alert(`User ${newUser.email} was registered`);
}


window.onload = function () {
    let users = JSON.parse(localStorage.getItem("user")) || [];


  if (users.lenght>0) {
    document.getElementById("email").value = users[0].email;
    document.getElementById("password").value = users[0].password;
  }
};
