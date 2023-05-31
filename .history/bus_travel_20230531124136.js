
const points_value = document.querySelector("#points")
const calculate_btn = document.querySelector(".calculate_btn")
const location_select = document.querySelector("#dropdown")
const single_trips_display = document.querySelector("#number_single_trips")

const bus_instance = bus_travel_factory()

function bus_travel() {
    const points_input_value = points_value.value
    bus_instance.points_input(points_input_value)
    single_trips_display.innerHTML = bus_instance.number_trips()
}

function bus_location() {
    const selected_value = this.value
    const points_input_value = points_value.value
    bus_instance.points_input(points_input_value)
    bus_instance.bus_location(selected_value)
    single_trips_display.innerHTML = bus_instance.number_trips();
}

location_select.addEventListener("change", bus_location)


calculate_btn.addEventListener("click", bus_travel)