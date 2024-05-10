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

  vehical_item.innerHTML = `
  
        <div class="car-card-1">
        <img src="${item.imageUrl}" alt="" /> 
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
    <button class="rent-now-btn">
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

// ========================Create section of  Describe vehical details and rent ============================
function BookingSystem(item) {
  BookingPopup.innerHTML = `
  <div onclick=CloseBooking()><i class="ri-close-line close-booking-popup" ></i></div>
  <section class="Bookingsystem-Box">
    <div class="details-selected-vehical">
      <div class="selected-vehical-image">
        <img src="image/car1.jpg" alt="Abc" />
      </div>
      <div class="vehical-details">
        <h2>Vehical:</h2>
        <h2>Name:</h2>
        <h2>Location:</h2>
        <h2>Picup Date-Time:</h2>
        <h2>Dropoff Date-Time:</h2>
      </div>
      <div class="vehical-description">
        <p>
          Incidunt molestiae exercitationem inventore sunt recusandae?
          Consequatur atque nobis ab, sunt velit itaque et officiis dolores
          laudantium voluptas neque totam est voluptates eligendi natus
          impedit at aliquam consequuntur porro dolor ipsam sapiente aperiam
          quia. Praesentium a deleniti inventore similique sunt ab tempora
          magnam in itaque aperiam ea culpa temporibus, possimus dicta aut
          quod ut iusto neque tenetur officiis nihil doloremque maxime nam
          mollitia? Sit magni soluta voluptatibus.
        </p>
      </div>
      <div class="vehical-review">
        <h2>Review: 4.5</h2>
      </div>
    </div>
    <div class="other-details-bookingsystem">
      <div class="Book">
        <h1>Total Time: <span>2 hours</span></h1>
        <div id="Total-Price-section">
          <h1>Total Price</h1>
          <div id="Price-calculate">
            <h1>Basic :<span>$200</span></h1>
            <h1>Cost for Driver : <span> $2</span></h1>
            <h1>Sub Total : <span>$202</span></h1>
            <h1>Taxes : <span>$24.24</span> <span>12% GST</span></h1>
            <div></div>
            <h1>Total: <span>$226.24</span></h1>
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
        <input type="submit" value="Submit" id="personal-info-submitBtn" />
      </form>
    </div>
  </section>
  `;
}

//=================search vehicals=======================
const BookingPopup = document.querySelector(".Bookingsystem-main-Box");
function searchCars() {
  const location = document.getElementById("pic-up").value;
  const Vehical = document.getElementById("Vehicle").value;
  const pickupDate = document.getElementById("picupdate").value;
  const dropoffDate = document.getElementById("dropofdate").value;
  // console.log((new Date (dropoffDate).getTime()-new Date(pickupDate).getTime() ) /3600000);
  // console.log(new Date (dropoffDate));
  // console.log(new Date(dropoffDate).getTime()-new Date(pickupDate).getTime());
  // console.log((new Date(dropoffDate).getTime()-new Date(pickupDate).getTime())/3600000);
  const results = AllVehicals.filter(
    (_item) =>
      _item.type.toLowerCase() === Vehical.toLowerCase() &&
      _item.location.toLowerCase() === location.toLowerCase() &&
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

// ======================== Describe vehical details and rent ============================





// const CloseBookingPopup = document.querySelector(".close-booking-popup");

// CloseBookingPopup.addEventListener("click",()=>{
//   BookingPopup.style.visibility="hidden"
// })
const RentNowBtn=document.querySelectorAll(".rent-now-btn")

RentNowBtn.forEach((item)=>{
 item.addEventListener("click",(item)=>{
  BookingPopup.style.visibility="visible" 
  BookingSystem(item)
  console.log(item.target)
 })
 
})

function CloseBooking(){
  BookingPopup.style.visibility="hidden"
}