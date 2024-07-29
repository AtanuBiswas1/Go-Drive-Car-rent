const AllVehicals = [
  {
    id: 1,
    type: "car",
    model: "Hyundai Creta 2017",
    location: "Medinipore",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 1.4,
    imageUrl: "image/car1.jpg  ",
    raiting: 4.3,
    review: 441,
    passanger: 4,
    style: "Auto",
  },
  {
    id: 2,
    type: "car",
    model: "Hyundai I20 2022",
    location: "Medinipore",
    availableDates: ["2024-05-03", "2025-05-15"],
    description: "Manual-petrol-5 seats",
    price: 1.2,
    imageUrl: "image/car2.jpg",
    raiting: 4.6,
    review: 1123,
    passanger: 4,
    style: "Auto",
  },
  {
    id: 3,
    type: "car",
    model: "Renault Triber 2022",
    location: "Kolkata",
    availableDates: ["2024-05-10", "2025-05-30"],
    description: "Automatic-petrol-7 seats",
    price: 2,
    imageUrl: "image/car3.jpg",
    raiting: 4.6,
    review: 720,
    passanger: 4,
    style: "Manual",
  },
  {
    id: 4,
    type: "car",
    model: "Hyundai ",
    location: "Medinipore",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 1.9,
    imageUrl: "image/car1.jpg",
    raiting: 4.1,
    review: 560,
    passanger: 4,
    style: "Auto",
  },
  {
    id: 5,
    type: "car",
    model: "Hyundai Creta 2017",
    location: "Medinipore",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 1.4,
    imageUrl: "image/car1.jpg",
    raiting: 3.9,
    review: 230,
    passanger: 4,
    style: "Auto",
  },
  {
    id: 6,
    type: "car",
    model: "Hyundai Creta 2017",
    location: "Medinipore",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 1.4,
    imageUrl: "image/car1.jpg",
    raiting: 4.3,
    review: 890,
    passanger: 4,
    style: "Manual",
  },
  {
    id: 7,
    type: "car",
    model: "Hyundai Creta 2024",
    location: "Kolkata",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 4,
    imageUrl: "image/car1.jpg",
    raiting: 4.2,
    review: 500,
    passanger: 6,
    style: "Auto",
  },
  {
    id: 8,
    type: "car",
    model: "Hyundai Creta 2017",
    location: "Kolkata",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 2.5,
    imageUrl: "image/car1.jpg",
    raiting: 4.7,
    review: 369,
    passanger: 6,
    style: "Manual",
  },
  {
    id: 9,
    type: "car",
    model: "Hyundai Creta 2017",
    location: "Medinipore",
    availableDates: ["2024-05-01", "2025-05-15"],
    description: "Comfortable compact sedan, great for city driving.",
    price: 2,
    imageUrl: "image/car1.jpg",
    raiting: 4.5,
    review: 250,
    passanger: 4,
    style: "Auto",
  },
];

const customerReviews = [
  {
    star: 4.2,
    image: "image/car1.jpg",
    text: "Lorem ipsum dolor sit amet.",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.1,
    image: "image/car1.jpg",
    text: "Lorem, ipsum dolor.",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.6,
    image: "image/car1.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, magni.",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.2,
    image: "image/car1.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolorum voluptates, enim odit ipsum placeat doloribus cumque quidem voluptas quo!",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.1,
    image: "image/car1.jpg",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui, asperiores distinctio eos aspernatur illum voluptates alias corporis velit eum excepturi!",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.6,
    image: "image/car1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. At reprehenderit deleniti et. Labore autem unde nesciunt.",
    userName: "someone",
    Adress: "india some city",
  },
  {
    star: 4.4,
    image: "image/car1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet corrupti consectetur.",
    userName: "someone",
    Adress: "india some city",
  },
];

const confirmationpopup = document.querySelector(".confirmation-popup");

//========================Login Section ======================

const SigninBtn = document.getElementsByClassName("Loginbtn")[0];
const SignupBtn = document.getElementsByClassName("Signupbtn")[0];
const SignupBox = document.querySelector(".signup-Box");
const SigninBox = document.querySelector(".Login-Box");
const LoginPopup = document.getElementsByClassName("Main-Box")[0];
LoginBtn_navbar = document.getElementById("sign_up-btn");
const CloseLoginPopup = document.getElementById("login-close-btn");

LoginBtn_navbar.addEventListener("click", () => {
  LoginPopup.style.visibility = "visible";
});
CloseLoginPopup.addEventListener("click", () => {
  LoginPopup.style.visibility = "hidden";
});

SigninBtn.addEventListener("click", (event) => {
  event.preventDefault();
  SigninBox.style.display = "flex";
  SignupBox.style.display = "none";
});

SignupBtn.addEventListener("click", (event) => {
  event.preventDefault();
  SignupBox.style.display = "flex";
  SigninBox.style.display = "none";
});

// ==================Display all Vehicals and search vehicals =================================

const vehical_list = document.querySelector(".car-card-item");
function Vehicals(item) {
  const vehical_item = document.createElement("div");
  vehical_item.classList.add("car-card");
  vehical_item.setAttribute("data-aos","zoom-in-up")

  vehical_item.innerHTML = `
  
        <div class="car-card-1">
        <img src="${item.imageUrl}" alt="" data-aos="flip-down"/> 
        </div>
        <div class="car-card-2">
          <h1 style="font-size: 20px; font-weight: bold; width: 100%">
           ${item.model}
          </h1>
          <div class="star" style="display: flex; gap: 5px; width: 100%">
           <h2 style="font-size: 18px">
            <span
             class="lnr lnr-star"
             style="
              color: rgb(58, 177, 198);
              font-size: 20px;
              padding-right: 5px;
              "
            ></span
            >${item.raiting}
           </h2>
             <h3>(${item.review} reviews)</h3>
        </div>
      <div class="car-short-details">
      <h3>
        <span class="lnr lnr-user" style="padding-right: 5px"></span>${item.passanger}
        passagers
      </h3>
      <div style="display: flex; gap: 10px; padding-right: 4px">
        <img src="image/gear-shift.png" alt="" />
        <h3>${item.style}</h3>
      </div>
    </div>
    <div
      style="
        width: 100%;
        height: 2px;
        background-color: black;
        margin: 15px 0px 5px 0px;
      "
    ></div>
    <div class="price">
      <h1 style="font-size: 18px; font-weight: 600">Price</h1>
      <h1 style="font-size: 18px; font-weight: 600">
        $${item.price}
        <span style="font-size: 15px; font-weight: 400">/hour</span>
      </h1>
    </div>
    <button class="rent-now-btn" onclick="detailscarshow(${item.id},${item.price})">
      Rent Now
      <span class="lnr lnr-arrow-right" style="color: black"></span>
    </button>
  </div>

  `;
  vehical_list.append(vehical_item);
  
}

AllVehicals.forEach((item) => {
  Vehicals(item);
});

//=================search vehicals=======================
const BookingPopup = document.querySelector(".Bookingsystem-main-Box");
let locationCar;
let Vehical;
let pickupDate;
let dropoffDate;
let totalTimeForRentcar;

function searchCars() {
  locationCar = document.getElementById("pic-up").value;
  Vehical = document.getElementById("Vehicle").value;
  pickupDate = document.getElementById("picupdate").value;
  dropoffDate = document.getElementById("dropofdate").value;
  totalTimeForRentcar =
    (new Date(dropoffDate) - new Date(pickupDate)) / 3600000;

  const results = AllVehicals.filter(
    (_item) =>
      _item.type.toLowerCase() === Vehical.toLowerCase() &&
      _item.location.toLowerCase() === locationCar.toLowerCase() &&
      new Date(_item.availableDates[0]) <= new Date(pickupDate) &&
      new Date(_item.availableDates[1]) >= new Date(dropoffDate)
  );

  vehical_list.innerHTML = "";
  if (results.length === 0) {
    const vehicalSection = document.getElementById("vehicalSection");
    vehicalSection.innerHTML = "<li>No cars available for your dates.</li>";
  } else {
    results.forEach((item) => {
      vehicalSection.innerHTML = "";
      vehicalSection.append(vehical_list);
      Vehicals(item);
    });
  }
}

// ========================Create section of  Describe vehical details and rent ============================
function BookingSystem(car, pickupDate, dropoffDate, time) {
  BookingPopup.innerHTML = `
  <div onclick=CloseBooking()><i class="ri-close-line close-booking-popup" ></i></div>
  <section class="Bookingsystem-Box">
    <div class="details-selected-vehical">
      <div class="selected-vehical-image">
        <img src="${car.imageUrl}" alt="Abc" />
      </div>
      <div class="vehical-details">
        <h2>Vehical:${car.type}</h2>
        <h2>Name:${car.model}</h2>
        <h2>Location:${car.location}</h2>
        <h2>Picup Date: ${new Date(pickupDate).getDate()}</h2>
        
        <h2>Dropoff Date: ${new Date(
          dropoffDate
        ).getDate()} and Time:${new Date(dropoffDate).getTime()}</h2>
      </div>
      <div class="vehical-description">
        <p>
          ${car.description}
        </p>
      </div>
      <div class="vehical-review">
        <h2>Review:${car.raiting}<i class="ri-star-line"></i></h2>
      </div>
    </div>
    <div class="other-details-bookingsystem">
      <div class="Book">
        <h1>Total Time: <span>$ ${time} hours</span></h1>
        <div id="Total-Price-section">
          <h1>Total Price</h1>
          <div id="Price-calculate">
            <h1>Basic :<span>$${(carPrice = time * car.price)}</span></h1>
            <h1>Cost for Driver : <span>$ ${(driverRent = time * 2)}</span></h1>
            
            <h1>Sub Total : <span>$ ${(subPrice =
              carPrice + driverRent)}</span></h1>
            <h1>Taxes : <span>$ ${(gst =
              subPrice *
              0.12)}</span> <span style="color:black">12% GST</span></h1>
            <div></div>
            <h1>Total: <span>$ ${subPrice + gst}</span></h1>
          </div>
          
        </div>
        
        <input type="submit" id="Payment-process" value="Payment Process" />
      </div>

      <form action="" class="parsonal-details">
        <div>
          <label for="">Full Name : </label><br />
          <input type="text" placeholder="Enter Name" />
        </div>
        <div>
          <label for="">Gender : </label><br />
          <label for=""><input type="radio" name="gender" />Male</label>
          <label for=""><input type="radio" name="gender" />Female</label>
          <label for=""
            ><input type="radio" name="gender" />Transgender</label
          >
        </div>
        <div>
          <label for="">Phone no : </label><br />
          <input type="number" placeholder="Enter Phone no" />
        </div>
        <div>
          <label for="">Date of birth: </label><br />
          <input type="date" placeholder="Enter DOB" />
        </div>
        <div>
          <label for="">Country of residence : </label><br />
          <input type="text" placeholder="Enter your country" />
        </div>
        <div>
          <label for="">Aadhar no : </label><br />
          <input type="phone" placeholder="Enter your Aadhar no" />
        </div>
        <div>
          <label for="">Aadhar card Upload : </label><br />
          <input type="file" placeholder="Upload Aadhar Card" />
        </div>
        <div>
          <label for="">You need a driver:</label><br />
          <label for=""><input type="radio" name="driverNeed" />Yes</label>
          <label for=""><input type="radio" name="driverNeed" />No</label>
        </div>
        <div>
          <label for="">Driving Licence Upload : </label><br />
          <input type="file" placeholder="Upload driving licence" />
        </div>

        <div><label for="">Extra Price for Driver:$2/hour</label></div>
        <input type="submit" value="Submit" id="personal-info-SubmitBtn" />
      </form>
    </div>
  </section>
  `;

  document
    .getElementById("personal-info-SubmitBtn")
    .addEventListener("click", (e) => {
      e.preventDefault();
    });
}

// ======================== Describe vehical details and rent ============================
function detailscarshow(Id) {
  if (
    locationCar === undefined &&
    Vehical === undefined &&
    pickupDate === undefined &&
    dropoffDate === undefined
  ) {
    confirmationpopup.innerHTML = `
   <div style="width:340px; background: #fff; position:absolute;top:20%;
   left: 40%;">
    <p id="confirm-para-first">Please select vehical and Location and Time</p>

      <button id="confirmation-btn">ok</button>
   </div>
  `;
    confirmationpopup.style.visibility = "visible";
    document
      .querySelector("#confirmation-btn")
      .addEventListener("click", () => {
        confirmationpopup.style.visibility = "hidden";
      });
  } else {
    if (Id) {
      const selectedCar = AllVehicals.find((car) => car.id === Id);

      BookingPopup.style.visibility = "visible";
      //console.log(locationCar);
      BookingSystem(selectedCar, pickupDate, dropoffDate, totalTimeForRentcar);
    }
  }
}

function CloseBooking() {
  BookingPopup.style.visibility = "hidden";
}

//===================Confirmation popup for Login/signup / Booking =================
const SignupSubmitBtn = document.querySelector("#Signup-submit-btn");

SignupSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  confirmationpopup.innerHTML = `
  <div style="width:340px; background: #fff; position:absolute;top:20%;
   left: 40%;">
    <p id="confirm-para-first">Thanks! your account has been successfully created.</p>
     <p>
       Please check your inbox, a code is sent on your email as well as on
       your registered phone no. which will be required when you will reach
       to the venue and to login your account .
      </p>
      <button id="confirmation-btn">ok</button>
   </div>
  `;

  confirmationpopup.style.visibility = "visible";

  document.querySelector("#confirmation-btn").addEventListener("click", () => {
    confirmationpopup.style.visibility = "hidden";
  });
});

//=========================customerReviews=============================

function customerReview(Alldata) {
  const customerReviewSection = document.querySelector("#review");
  let i = 0;

  if (Alldata) {
    const reviewCard = document.createElement("div");
    function reviewCardshow(data) {
      reviewCard.innerHTML = `
      <div
      style="
        display: flex;
        width: 100%;
        min-height: 20px;
        align-items: center;
        justify-content: center;
      "
    >
      <button id="backwordArrow" style="border:2px solid black;"><i class="ri-arrow-left-s-line"></i></button>
      <div
        style="
          width: 60%;
          margin: 20px;
          /* min-height: 20px; */
          display: flex;
          border-radius: 15px;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
            rgba(0, 0, 0, 0.22) 0px 10px 10px;
        "
      >
        <div class="left-review-section" style="width:40%">
          <img
            data-aos="flip-down"
            src="${data.image}"
            alt=""
            style="border-radius: 15px; width: 100%; height: 100%"
          />
        </div>
        <div class="right-review-section">
          <h1>
            ${data.star}
            <span style="font-size: 30px; color: gold"
              ><i class="ri-star-line"></i
            ></span>
          </h1>

          <p>
            ${data.text}
          </p>
          <h2>${data.userName}</h2>
          <h3>From ${data.Adress}</h3>
        </div>
      </div>
      <button id="forworddArrow " style="border:2px solid black;  "><i class="ri-arrow-right-s-line" ></i></i></button>
      
    </div>

      `;
      i++;
    }
    reviewCardshow(Alldata[i]);
    customerReviewSection.append(reviewCard);
  }

  const backwardArrow = document.querySelector("#backwordArrow");
  const forwardArrow = document.querySelector("#forworddArrow");
  console.log(backwardArrow);
  console.log(forwardArrow);
  console.log(i);
  if (i <= 0) {
    console.log(i);
    backwardArrow.ariaDisabled = true;
  }
  // if (i > 0) {
  //   backwardArrow.addEventListener("click", () => {});
  // }
}

customerReview(customerReviews);
