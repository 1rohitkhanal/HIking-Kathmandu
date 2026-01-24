console.log("JS Connected");

const hikes = {
  nagarkot: {
    name: "Nagarkot Hike",
    difficulty: "Medium",
    duration: "1–1.5 hours",
    budget: {
      bus: 140,
      water: 30,
      snacks: 100,
      entry: 0
    },
    directions:
      "I am assuming you are a student so first of all you need to reach at kamalbinayek near Ward no 10 bhaktapur . So grab your identity card of your college/ school and reach to Kamalbinayek from your place 20 rs from your place if you got your id with you . Then go to Kamalbinayek Pond at Nagarkot Buspark then take a bus from there [ THEY MIGHT NOT ACCEPT ID CARD SO I AM TAKING RS.50 AS BUS FARE] Then reach to place Telkot and start hiking by following the other pitched way called Bastola Gau and by following the aspalt road (around 15 min of medium walk)you will find way to bridge which is right side if you started from place i told you. then after 5 min  you shall reach to the Ranijhula which is a beautifull suspension bridge. click the pics in bridge then after crossing then theres two way one is up another is right so you can choose any of them but i recommend the right hand way which will lead you to a cemented road then follow it then you will find a football ground from where you can take a look at beautifull mountains then follow a small road which will lead you to a main road then follow that main road which will lead you to nagarkot in around 1 hours but you can also take the hike trial from the jungle but it might be hard for some people and please google maps it is very useful Enjoy The hike take care .  ",
    photos: [
      "images/ranijhula.jpeg",
      "images/ranijhula2.jpeg",
      "images/ranijhula3.jpeg",
      "images/ranijhula4.jpeg",
      "images/ranijhula7.jpeg",
      "images/nagarkot.jpg",
      "images/trial1.jpeg"
    ]
  },

  taudaha: {
    name: "Taudaha Hike",
    difficulty: "Easy",
    duration: "25 minutes",
    budget: {
      bus: 25,
      water: 0,
      snacks: 100,
      entry: 0
    },
    directions:"Taudaha is a small lake located in the south of Kathmandu . First of all you need to reach to Balkhu from your place then use balkhu bus then go to bus which goes in the direction of champadevi or chovar hill. Don't forgot to take id card with you as well as you can enjoy the views of the lake and if you got time then you can give a hike to champadevi which is the same way as taudaha . Enjoy the hike take care .  ",
    photos: [
      "images/taudaha.jpeg",
      "images/taudaha1.jpg",
      "images/taudaha2.jpg"
    ]
  },

  jamacho: {
    name: "Jamacho Hike",
    difficulty: "Medium Hard",
    duration: "Around 3 hours",
    budget: {
      bus: 40,
      water: 30,
      snacks: 80,
      entry: 100
    },
    directions:"Jamacho hike is located in the south east of kathmandu valley . It is started by reaching the Macchapokhari which is just next to Gangabu Buspark . After reaching there then move to the road which will lead you to the Army bareck where you need to pay entry fee of 100 rs . Desclaimer: you are not allowed to take speakers with you and neither allowed to Throw plastic aroun there . So yo can start your hike after cutting the ticket and follow the steps through the jungle which will lead you to top of jamacho and during the journey you will find barecks and a open area from where you can see the kathmandu valley. follow the trial and reach the gumba but don't forgot to go at the backside where there's a open ground and the fun park is that you can see the national flower of nepal (LALIGURAS) . Hope you will enjoy the hike .",
    photos: [
      "images/jamacho1.jpeg",
      "images/jamacho2.jpeg",
      "images/jamacho3.jpeg",
      "images/jamacho5.jpg"
    ]
  },
  budhanilkantha: {
    name: "Budhanilkantha Hike",
    difficulty: "Medium",
    duration: "1–1.5 hours",
    budget: {
      bus: 25,
      water: 30,
      snacks: 100,
      entry: 0
    },
    directions:
      "First of all you need to reach Budhanilkantha from your place and i am assuming you can go by bus so reach to budhanilkantha by bus fare of 25-30 rs from your place .Then start your hike from budhanilkantha temple at the buttom near the last buspark . then you can reach krishna mandir and visit it which is located way towards the budhanilkantha higher secondary school. then follow the route which is pure road which will lead you to gumba located at the top . you will find a little 15 minutes hike trial which will lead you to the gumba . in the way you will find very beautiful scenary of kathmandu valley . Its not that long hike but it slope which might be hard for some people . you can go inside the gumba but put your shoes outside the gumba and you can go inside and meditate .",
    photos: [
      
      "images/budhanilkantha.jpg",
      "images/budhanilkantha2.jpg",
      "images/budhanilkantha1.jpg",
      "images/budhanilkantha3.jpeg"
    ]
  },
   champadevi: {
    name: "Champadevi Hike",
    difficulty: "Hard",
    duration: "Around 4-6 hours",
    budget: {
      bus: 60,
      water: 30,
      snacks: 100,
      entry: 0,
      TOTAL: 190
    },
    directions:"Champadevi hike is a popular route of hiking it is very beautifull and peaceful hike. first yoou need to go to bus stop called Khahare located near the paaniTyanki and Taudaha. Then after reaching there your hike starts so makesure you reach there early like before 9 am or you might be late and don't forgot to take your essential like water and food because it little hard for some people. then you can start the hike but ask the coonductor brother or any locals for the right way to the hike . you might find a pipal tree from where you should go upwards and folow the trial and in the way you will see small champadevi temple so go inside the temple and use the upper route which will lead you to the trial through the jungle . its near the jumgle called hattibun. and in 45 minutes of non stop walking you will reach the top of the jungle where there's a open trial and you will see a beautiful view of whole jungle and kathmandu valley . the follow the route then you will reach the champadevi temple which is at the top of the hill . and you can have dry picnic there . [ pooja pani garda ramro harek sanibar yeuta baje aayera pooja garaidine garxan] enjoy....",

    photos: [
      "images/champadevi.jpg",
      "images/champadevi2.jpeg",
      "images/champadevi3.jpeg",
      "images/champadevi4.webp"
    ]
  },
};

const details = document.getElementById("hike-details");
const mainContent = document.getElementById("main-content");

function openHike(key) {
  const hike = hikes[key];

  if (!hike) {
    alert("Hike not found!");
    return;
  }

  const total =
    hike.budget.bus +
    hike.budget.water +
    hike.budget.snacks +
    hike.budget.entry;

  details.innerHTML = `
    <button onclick="closeHike()">⬅ Back</button>

    <h1>${hike.name}</h1>
    <p><b>Difficulty:</b> ${hike.difficulty}</p>
    <p><b>Duration:</b> ${hike.duration}</p>

    <h3>Budget (NPR)</h3>
    <ul>
      <li>Bus: Rs. ${hike.budget.bus}</li>
      <li>Water: Rs. ${hike.budget.water}</li>
      <li>Snacks: Rs. ${hike.budget.snacks}</li>
      <li>Entry: Rs. ${hike.budget.entry}</li>
    </ul>

    <p><b>Total:</b> Rs. ${total}</p>

    <h3>Directions</h3>
    <p>${hike.directions}</p>

    <h3>My Travel Photos</h3>
    <div class="gallery">
      ${hike.photos.map(photo => `<img src="${photo}" />`).join("")}
    </div>
  `;

  mainContent.style.display = "none";
  details.style.display = "block";
}

function closeHike() {
  details.style.display = "none";
  mainContent.style.display = "block";
}
