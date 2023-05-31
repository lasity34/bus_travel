// Create references
// Create function fir the bus travel
// in bus travel Create instance for points input
// place instance for buslocation, returnchecked, peak times in bus travel function
// Create check condition to either show single or returned trips
// Create function for bus to change location values
// Create event listeners for calculate btn and for locations that are changing


const points_value = document.querySelector("#points")
const calculate_btn = document.querySelector(".calculate_btn")
const location_select = document.querySelector("#dropdown")
const single_trips_display = document.querySelector("#number_single_trips")
const price_per_single_trip_display = document.querySelector("#price_per_single_trip")
const price_per_return_trip_display = document.querySelector("#price_per_return")
const return_trips_display = document.querySelector("#number_return_trips")
const checkbox = document.querySelector('input[name="return"]');
const bus_instance = bus_travel_factory()

function bus_travel() {
    const points_input_value = points_value.value
    const selected_time = document.querySelector('input[name="time"]:checked').value;
    bus_instance.peak_times(selected_time)
    bus_instance.points_input(points_input_value)
    bus_instance.returned_checked(checkbox.checked)
    bus_instance.bus_location(location_select.value)

    if (checkbox.checked) {
        price_per_single_trip_display.style.display = "none";
        price_per_return_trip_display.style.display = "block";
        single_trips_display.style.display = "none";
        return_trips_display.style.display = "block";
    } else {
        price_per_single_trip_display.style.display = "block";
        price_per_return_trip_display.style.display = "none";
        single_trips_display.style.display = "block";
        return_trips_display.style.display = "none";
    }
    


    single_trips_display.innerHTML = bus_instance.number_trips()
    price_per_single_trip_display.innerHTML = `R${bus_instance.price_per_single_trip()}`
    return_trips_display.innerHTML = bus_instance.number_return_trips()
    price_per_return_trip_display.innerHTML = `R${bus_instance. price_per_return_trip()}`
}
function bus_location() {
    const selected_value = this.value
    bus_instance.bus_location(selected_value)
 
}



location_select.addEventListener("change", bus_location)


calculate_btn.addEventListener("click", bus_travel)