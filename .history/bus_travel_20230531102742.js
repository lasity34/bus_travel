
const points_input = document.querySelector("#points").value
const calculate_btn = document.querySelector(".calculate_btn")


const bus_instance = bus_travel_factory()

function bus_travel() {
    console.log(points_input)
    bus_instance.points_input(points_input)
}


calculate_btn.addEventListener("click", bus_travel)