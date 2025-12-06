let IsDobOpen = false;
let DateofBirth;
const IconSattingEL = document.getElementById("iconSetting");
const SettingContentEL = document.getElementById("setting_content");
const incitialTextEL = document.getElementById("incitialText");
const afterDOBbuttonEL = document.getElementById("afterDOBbutton");
const DOBButtonEL = document.getElementById("DOBButton");

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
  console.log("tate of birth", DateofBirth);
};

IconSattingEL.addEventListener("click", toggleDateOfBirthSelector);
DOBButtonEL.addEventListener("click", toggleDateOfBirthSelector);
