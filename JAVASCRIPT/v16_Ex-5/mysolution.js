function createCard() {
  // Finish this function

  //   target container
  let container = document.querySelector(".container");

  // create img div
  let imageDiv = document.createElement("div");
  imageDiv.classList.add("img");

  // create img tag
  let image = document.createElement("img");
  image.src = "./thumnail.webp";

  // create a span tag
  let imageDivSpan = document.createElement("span");
  imageDivSpan.innerText = "30:40";

  // Append the img and span elements to the imgDiv
  imageDiv.appendChild(image);
  imageDiv.appendChild(imageDivSpan);

  //   create a div with class name content

  let ContentDiv = document.createElement("div");
  ContentDiv.classList.add("content");

  // create a h2 with classname title
  let Title = document.createElement("h3");
  Title.classList.add("title");
  Title.innerHTML = `Dom | Sigma Web Development Course - Tutorial #60`;

  // create a span with classname ChannelName
  let ChannelName = document.createElement("span");
  ChannelName.classList.add("title");
  ChannelName.innerHTML = `CodeWithHarry . `;

  // create a span tag with class Name view
  let viewSpan = document.createElement("span");
  viewSpan.classList.add("views");
  viewSpan.innerHTML = `727k Views . `;

  // create a span tag with class Name month
  let month = document.createElement("span");
  month.classList.add("month");
  month.innerHTML = `2 Month ago `;

  // Append the img and span elements to the imgDiv
  ContentDiv.appendChild(Title);
  ContentDiv.appendChild(ChannelName);
  ContentDiv.appendChild(viewSpan);
  ContentDiv.appendChild(month);

  // Append the imgDiv to the container div
  container.appendChild(imageDiv);
  container.appendChild(ContentDiv);
}

createCard();
