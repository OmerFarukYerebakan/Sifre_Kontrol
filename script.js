const input = document.querySelector(".input");
const lvl1 = document.querySelector(".lvl1");
const lvl2 = document.querySelector(".lvl2");
const lvl3 = document.querySelector(".lvl3");

const alfabe = /[a-zA-Z]/;
const numara = /[0-9]/;
const karakter = /[!@#$%^&*()\-_=+<>]/;

input.addEventListener("input", () => {
  let val = input.value;

  // Tüm gifleri gizle
  lvl1.style.display = "none";
  lvl2.style.display = "none";
  lvl3.style.display = "none";

  if (val === "") return;

  if (val.match(alfabe) && val.match(numara) && val.match(karakter) && val.length >= 8) {
    lvl3.style.display = "inline";
  } else if (val.match(alfabe) && val.match(numara) && val.length >= 8) {
    lvl2.style.display = "inline";
  } else {
    lvl1.style.display = "inline";
  }
});
