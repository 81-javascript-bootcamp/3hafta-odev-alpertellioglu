const petsModule = (function () {
  const _data = [
    {
      image: "https://pet-uploads.adoptapet.com/1/6/b/406528149.jpg",
      name: "Sam",
      type: "Golden Retriever/St. Bernard Mix",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://pet-uploads.adoptapet.com/0/f/3/462356648.jpg",
      name: "Mellie",
      type: "Domestic Shorthair",
      sound: "meow",
      soundText: "Meow - type m",
    },
    {
      image: "https://www.evcilhayvanal.com/wp-content/uploads/2019/01/Beagle.jpg",
      name: "ra",
      type: "Beagle",
      sound: "bark",
      soundText: "Bark - type b",
    },
    {
      image: "https://www.evcilhayvanal.com/wp-content/uploads/2021/01/ragdoll-kedisi.jpg",
      name: "Sofia",
      type: "Ragdoll",
      sound: "meow",
      soundText: "Meow - type m",
    },
  ];
  const $tbodyEl = document.querySelector("tbody");
  const $buttons = document.querySelectorAll("button");

  const getButtons = function () {
    return document.querySelectorAll("button");
  };

  const createPetElement = function (pet) {
    return (
      "<tr><td><img class='pet-image' src='" +
      pet.image +
      "' /></td><td>" +
      pet.name +
      "</td><td>" +
      pet.type +
      "</td><td><button data-sound='" +
      pet.sound +
      "'>" +
      pet.soundText +
      "</button></td></tr>"
    );
  };

  const addToTable = function (content) {
    $tbodyEl.innerHTML += content;
  };

  const putPetsInHtml = function () {
    for (let i = 0; i < _data.length; i++) {
      addToTable(createPetElement(_data[i]));
    }
  };

  ///HOMEWORK

  const keyDownEvents = function () {
    document.addEventListener("keydown", (event) => {
      if (event.key === "b") {
        document.getElementById("bark").play();
      }
      if (event.key === "m") {
        document.getElementById("meow").play();
      }
    });
  };

  const rowClickListener = function () {
    const $rows = document.querySelectorAll("tr");
    for (let i = 0; i < $rows.length; i++) {
      $rows[i].addEventListener("click", function (event) {
        $rows.forEach((e) => {
          e.style.backgroundColor = "transparent";
        });
        this.style.backgroundColor = "red";
        const imgSource = this.children[0].children[0].src;
        document.getElementsByClassName("main-image")[0].src = imgSource;
      });
    }
  };

  /////

  const bindEvents = function () {
    const buttons = getButtons();
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function (event) {
        event.stopPropagation();
        const soundId = this.dataset.sound;
        const soundElement = document.getElementById(soundId);
        if (soundElement) {
          soundElement.play();
        }
      });
    }
  };

  const init = function () {
    putPetsInHtml();
    bindEvents();
    keyDownEvents();
    rowClickListener();
  };

  return {
    init: init,
  };
})();
