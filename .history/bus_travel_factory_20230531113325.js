// create input for points
// create function for bus location
// create function for peak times


function bus_travel_factory() {

    let points = 0
    let location = "";
    let peak = ''

    function points_input(input) {
        points = input
    }


    function bus_location(input) {
        if (input === "milnerton") {
            location = "milnerton"
            points -= 20
        } else if (input === "atlantis") {
            location = 'atlantis'
            points -= 30
        } else if (input === 'pinelands') {
            location = 'pinelands'
            points -= 15
        } else if (input === 'select_location') {
            location = 'select_location'
        }
    }

   function peak_times(input) {
    if (input === 'peak') {
        points *= 1.25
    } else if (input === 'off-peak') {
        points
    }
   }



    function points_value_return() {
        return points
    }

    function location_return() {
        return location
    }


    return {
        points_input,
        points_value,
        bus_location,
        location_return,
        peak_times
    }
}