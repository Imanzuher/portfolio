const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "the code: " + "#" + randomColor;
};

genNew.addEventListener("click", setBg);
setBg();
