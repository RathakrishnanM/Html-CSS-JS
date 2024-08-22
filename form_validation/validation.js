const form = document.querySelector("form");
const uname = document.querySelector("#uname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

const formHandling = (e) => {
  e.preventDefault();
  let submit = true;
  const unameVal = uname.value.trim();
  const emailVal = email.value.trim();
  const passVal = password.value.trim();

  if (unameVal === "") {
    setMsg(uname, "* User Name is required");
    submit = false;
  } else setMsg(uname, "");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailVal === "") {
    setMsg(email, "* Email is required");
    submit = false;
  } else if (!emailPattern.test(emailVal)) {
    setMsg(email, "* Wrong Email format");
    submit = false;
  } else setMsg(email, "");

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (passVal === "") {
    setMsg(password, "* Enter your Password");
    submit = false;
  } else if (!passwordPattern.test(passVal)) {
    setMsg(
      password,
      "* password should be contains minimum of 8 characters with [a-z][A-Z][0-9][special characters]"
    );
    submit = false;
  } else setMsg(password, "");

  if (submit) {
    alert("Form submitted successfully!!");
  }
};

form.addEventListener("submit", formHandling);

const setMsg = (element, msg) => {
  const parent = element.parentElement;
  const error = parent.querySelector("#error");
  error.innerText = msg;
};
