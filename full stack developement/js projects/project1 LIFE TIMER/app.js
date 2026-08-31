let iconSetting = document.querySelector("#iconSetting");
let setting_content = document.querySelector("#setting_content");

let DOB = document.querySelector("#DOB");
let DOBButton = document.querySelector("#DOBButton");

let incitialText = document.querySelector("#incitialText");
let afterDOBbutton = document.querySelector("#afterDOBbutton");

const years = document.querySelector(".years");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

iconSetting.addEventListener("click", () => {
  setting_content.classList.toggle("hide");
});

DOBButton.addEventListener("click", () => {
  const birthDate = new Date(DOB.value);
  const currentDate = new Date();

  birthDate.getTime();
  currentDate.getTime();

  console.log(birthDate);
  console.log(currentDate);

  const difference = currentDate.getTime() - birthDate.getTime();
  console.log(difference);

  const torleseconds = Math.floor(difference / 1000);
  console.log(torleseconds);

  const totalMinutes = Math.floor(torleseconds / 60);
  console.log(totalMinutes + "totleMinutes");

  const totalhours = Math.floor(totalMinutes / 60);
  console.log("totlehours " + totalhours);

  const totalDay = Math.floor(totalhours / 24);
  console.log(totalDay + " total Day");

  function calculateAge(birthDate) {
    const now = new Date();

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();

    // console.log(`${years} years`);
    // console.log(`${month} month`);
    // console.log(`${day} day`);
    
    

  }
});


