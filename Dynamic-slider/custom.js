let add = "";
let items = [
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
  {
    img: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
    title: "Dota 2",
    desc: "Dota 2 is a multiplayer online battle arena by Valve. The game is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
  },
];

items.map((i, index) => {
  add += `<div class="item ${
    index === 0 ? "active" : ""
  }" style="background-image: url(${i.img});">
      <div class="item-desc">
        <h3>${i.title}</h3>
        <p>${i.desc}</p>
      </div>
    </div>`;
});

document.getElementById("custom-slider").innerHTML = add;

$(".custom-carousel").owlCarousel({
  autoWidth: true,
  loop: true,
});
$(document).ready(function () {
  $(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});
