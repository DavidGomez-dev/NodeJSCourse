const fn = () => {
  const time = new Date();
  const holderDiv = document.getElementById("time");
  console.log(time);
  return (holderDiv.innerHTML = time.toString());
};

const ready = (fn) => {
  if (document.readyState != "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
};
ready(fn);
