let isActive = false;

// const bg = document.getElementById('img_container');

const img_before = document.getElementById('bg_before');
const img_after = document.getElementById('bg_after');

const no_button = document.getElementById('no_button');
const yes_button = document.getElementById('yes_button');



const handleClick = () => {
  isActive = !isActive;

  if (isActive) {
    img_before.style.display = "none";
    img_after.style.display = "block";

    yes_button.style.display = "none";
    no_button.style.display = "block";
  } else {
    img_before.style.display = "block";
    img_after.style.display = "none";

    yes_button.style.display = "block";
    no_button.style.display = "none";
  }

}
