
const points_value = document.querySelector("#points")
const calculate_btn = document.querySelector(".calculate_btn")
const location_select = document.querySelector("#dropdown")
const single_trips_display = document.querySelector("#number_single_trips")
const price_per_single_trip_display = document.querySelector("#price_per_single_trip")
const checkbox = document.querySelector('input[name="return"]');

const bus_instance = bus_travel_factory()

function bus_travel() {
    const points_input_value = points_value.value
    const selected_time = document.querySelector('input[name="time"]:checked').value;
    bus_instance.peak_times(selected_time)
    bus_instance.points_input(points_input_value)
    bus_instance.bus_location(location_select.value)
    single_trips_display.innerHTML = bus_instance.number_trips()
    price_per_single_trip_display.innerHTML = bus_instance.price_per_single_trip()
    console.log(checkbox.checked)
}
function bus_location() {
    const selected_value = this.value
 
    bus_instance.bus_location(selected_value)
 
}

location_select.addEventListener("change", bus_location)


calculate_btn.addEventListener("click", bus_travel)