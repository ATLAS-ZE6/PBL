
// AUTOMATIC IMAGE SLIDESHOW

var slideshows = document.querySelectorAll(".slideshow");

slideshows.forEach(function(slideshow) {

    var slides = slideshow.querySelectorAll(".slide");

    var currentSlide = 0;

    setInterval(function() {

        slides[currentSlide].classList.remove("active");

        currentSlide = (currentSlide + 1) % slides.length;

        slides[currentSlide].classList.add("active");

    }, 5000);

});


// FLIGHT BOOKING FUNCTIONALITY

var form = document.getElementById("flightForm");

var results = document.getElementById("flightResults");


if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        var from = document.getElementById("from").value;

        var to = document.getElementById("to").value;

        var date = document.getElementById("date").value;

        var passengers = document.getElementById("passengers").value;


        var flights = [

            { name: "AirHorizon Express", time: "08:00 AM", price: 4500 },

            { name: "AirHorizon Connect", time: "01:30 PM", price: 5200 },

            { name: "AirHorizon Premium", time: "07:00 PM", price: 6500 }

        ];


        results.innerHTML = "";

        var heading = document.createElement("h3");

        heading.textContent = "Available Flights";

        results.appendChild(heading);


        var route = document.createElement("p");

        route.textContent = from + " to " + to + " | " + date;

        results.appendChild(route);


        flights.forEach(function(flight) {

            var total = flight.price * passengers;

            var flightBox = document.createElement("div");

            var details = document.createElement("p");

            details.textContent =
                flight.name + " | " +
                flight.time + " | ₹" + flight.price;

            flightBox.appendChild(details);


            var fare = document.createElement("p");

            fare.textContent = "Total Fare: ₹" + total;

            flightBox.appendChild(fare);


            var button = document.createElement("button");

            button.textContent = "Select Flight";

            button.addEventListener("click", function() {

                alert(
                    "Flight Selected: " + flight.name +
                    "\n" + from + " to " + to +
                    "\nTotal Fare: ₹" + total
                );

            });

            flightBox.appendChild(button);

            results.appendChild(flightBox);

        });

    });

}
