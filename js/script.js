let emailInput = document.querySelector("#email");
let message = document.querySelector(".message");
let submitBtn = document.querySelector("#submit-btn");
let personalInfo = document.querySelector("#personal-info .infor-content");
let emailForm = document.querySelector(".email-input-group");
let closeBtn = document.querySelector(".close-btn");
let viewMoreBtns = document.querySelectorAll(".view-btn");
let jobContents = document.querySelectorAll(".job-content");

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const handleInputChange = (event) => {
  if (!event) return;
  let value = event.target.value;
  if (validateEmail(value)) {
    message.textContent = "";
  } else if (value.length === 0) {
    message.textContent = "Vui lòng nhập email";
    message.classList.remove("text-secondary");
    message.classList.add("text-danger");
  } else {
    message.textContent = "Sai định dạng email";
    message.classList.remove("text-secondary");
    message.classList.add("text-danger");
  }
};

const handleSubmit = () => {
  let emailValue = emailInput.value;
  // Nếu không nhập hoặc sai định dạng email thì không làm gì
  if (!emailValue | !validateEmail(emailValue)) return;
  // Nếu email hợp lệ thì ẩn form, hiện thông tin cá nhân
  personalInfo.classList.remove("hide");
  emailForm.classList.add("hide");
};

const handleClose = () => {
  emailForm.classList.remove("hide");
  personalInfo.classList.add("hide");
  emailInput.value = "";
  emailInput.focus();
};

emailInput.addEventListener("input", handleInputChange);
submitBtn.addEventListener("click", handleSubmit);
closeBtn.addEventListener("click", handleClose);

const handleShowHide = (event, index) => {
  let jobContent = jobContents[index];
  if (window.getComputedStyle(jobContent).display === "block") {
    jobContents[index].classList.add("hide");
    event.target.textContent = "View more";
  } else {
    jobContents[index].classList.remove("hide");
    event.target.textContent = "View less";
  }
};

for (let i = 0; i < viewMoreBtns.length; i++) {
  viewMoreBtns[i].addEventListener("click", (event) =>
    handleShowHide(event, i)
  );
}
