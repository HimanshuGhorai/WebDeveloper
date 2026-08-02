let IsDobOpen = false;
let DateofBirth;
const IconSattingEL = document.getElementById("iconSetting");
const SettingContentEL = document.getElementById("setting_content");
const incitialTextEL = document.getElementById("incitialText");
const afterDOBbuttonEL = document.getElementById("afterDOBbutton");
const DOBButtonEL = document.getElementById("DOBButton");
const useclass = document.querySelectorAll("DOBButton");
const yearEl = document.querySelectorAll(".years");
const monthEl = document.querySelectorAll(".month");
const dayEl = document.querySelectorAll(".day");
const hoursEl = document.querySelectorAll(".hours");
const minutesEl = document.querySelectorAll(".minutes");
const secondsEl = document.querySelectorAll(".seconds");

const toggleDateOfBirthSelector = () => {
  if (IsDobOpen) {
    SettingContentEL.classList.add("hide");
  } else {
    SettingContentEL.classList.remove("hide");
  }
  IsDobOpen = !IsDobOpen;
  // console.log("toggle", IsDobOpen);
};

const setDobhendler = () => {
  DateofBirth = DOB.value;
  if (DateofBirth) {
    incitialTextEL.classList.add("hide");
    afterDOBbuttonEL.classList.remove("hide");
  } else {
    afterDOBbuttonEL.classList.add("hide");
    incitialTextEL.classList.remove("hide");
  }
};

const UpdateAge = () => {
  const currentDate = new Date();
  console.log({ currentDate });
};

UpdateAge();

setDobhendler();
IconSattingEL.addEventListener("click", toggleDateOfBirthSelector);
DOBButtonEL.addEventListener("click", setDobhendler);
