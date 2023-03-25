const textInputs = document.querySelectorAll('.form form input[type="text"]');
const [firstName, lastName, email] = textInputs;
const password = document.querySelector('.form form input[type="password"]');
const form = document.querySelector(".form form");

const fnErrorP = document.querySelector("p.error-p.fn");
const lnErrorP = document.querySelector("p.error-p.ln");
const eErrorP = document.querySelector("p.error-p.em");
const pErrorP = document.querySelector("p.error-p.pass");

form.onsubmit = () => {
  if (!/^[a-zA-Z]+$/.test(firstName.value)) {
    if (firstName.value === "") {
      firstName.setAttribute("class", "error");
      fnErrorP.style.display = "block";
      fnErrorP.innerHTML = "First Name cannot be empty";
    } else {
      firstName.setAttribute("class", "error");
      fnErrorP.style.display = "block";
      fnErrorP.innerHTML = "First Name is not valid";
    }
  } else {
    if (firstName.hasAttribute("class")) {
      firstName.removeAttribute("class");
      fnErrorP.style.display = "none";
    }
  }

  if (!/^[a-zA-Z]+$/.test(lastName.value)) {
    if (lastName.value === "") {
      lastName.setAttribute("class", "error");
      lnErrorP.style.display = "block";
      lnErrorP.innerHTML = "Last Name cannot be empty";
    } else {
      lastName.setAttribute("class", "error");
      lnErrorP.style.display = "block";
      lnErrorP.innerHTML = "Last Name is not valid";
    }
  } else {
    if (lastName.hasAttribute("class")) {
      lastName.removeAttribute("class");
      lnErrorP.style.display = "none";
    }
  }

  if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    if (email.value === "") {
      email.setAttribute("class", "error");
      eErrorP.style.display = "block";
      eErrorP.innerHTML = "Please enter your email";
    } else {
      email.setAttribute("class", "error");
      eErrorP.style.display = "block";
      eErrorP.innerHTML = "Looks like this is not an email";
    }
  } else {
    if (email.hasAttribute("class")) {
      email.removeAttribute("class");
      eErrorP.style.display = "none";
    }
  }

  if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)) {
    password.setAttribute("class", "error");
    pErrorP.style.display = "block";
    pErrorP.innerHTML =
      "Password must be at least 8 characters, containing one letter and one number";
  } else {
    if (password.hasAttribute("class")) {
      password.removeAttribute("class");
      pErrorP.style.display = "none";
    }
  }

  if (
    /^[a-zA-Z]+$/.test(firstName.value) &&
    /^[a-zA-Z]+$/.test(lastName.value) &&
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    ) &&
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password.value)
  ) {
    return true;
  } else {
    return false;
  }
};
