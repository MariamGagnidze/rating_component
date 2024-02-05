const button = document.getElementById("button");


button.addEventListener("click", () => {
  const container = document.getElementsByClassName("container")[0];
  const result = document.getElementsByClassName("result")[0];
  container.style.display = "none";
  result.style.display = "flex";
});


const numberss = document.querySelectorAll(".rating_numbers");

for (let i = 0; i < numberss.length; i++) {
  numberss[i].addEventListener("click", (event) => {
    for (let i = 0; i < numberss.length; i++) {
      numberss[i].style.color = "";
      numberss[i].style.background = "";
    }

    const selectedNumber = event.currentTarget;
    selectedNumber.style.color = "#FFFFFF";
    selectedNumber.style.background = "#FC7614";
    rate(selectedNumber.dataset.value);
  });
}

let current_rate = 0;

function rate(selectedRate) {
  current_rate = Number(selectedRate);
  result_rate();
  rate_text();
}

function result_rate() {
    for (let i = 0; i < numberss.length; i++) {
      numberss[i].classList.remove("active");
  
      if (i + 1 <= current_rate) {
        numberss[i].classList.add("active");
      }
    }
  }
  
const rate_text = () => {
  const rating = document.getElementById("rating");
  if (current_rate === 0) {
    rating.textContent = "Error";
  } else {
    rating.textContent = `You selected ${current_rate} out of 5`;
  }
};

rate(0);