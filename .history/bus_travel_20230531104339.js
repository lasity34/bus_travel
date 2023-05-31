
const points_value = document.querySelector("#points").value
const calculate_btn = document.querySelector(".calculate_btn")
const location_select = document.querySelector("#dropdown")

const bus_instance = bus_travel_factory()

function bus_travel() {
    
    bus_instance.points_input(points_value)
}

function bus_location() {
    const selected_value = this.value
    console.log(selected_value)
}

location_select.addEventListener("change", bus_location)


calculate_btn.addEventListener("click", bus_travel)