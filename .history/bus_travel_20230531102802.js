
const points_value = document.querySelector("#points").value
const calculate_btn = document.querySelector(".calculate_btn")


const bus_instance = bus_travel_factory()

function bus_travel() {
    
    bus_instance.points_input(points_value)
}


calculate_btn.addEventListener("click", bus_travel)