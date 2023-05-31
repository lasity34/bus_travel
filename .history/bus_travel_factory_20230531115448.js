// create input for points
// create function for bus location
// create function for peak times
//  need to calculate how many single trips
// need to calculate cost for single trip
//  need to calculate return trip
// need calculate how many return trips

function bus_travel_factory() {

    let points = 0
    let location = "";
    let peak = false
    let number_of_trips = 0

    function points_input(input) {
        points = input
    }

    function peak_times(input) {
        if (input === 'peak') {
           peak = true
        } else if (input === 'off-peak') {
            peak = false
        }
       }


    function bus_location(input) {
        let reduction
        if (input === "milnerton") {
            location = "milnerton"
            reduction = 20
        } else if (input === "atlantis") {
            location = 'atlantis'
            reduction = 30
        } else if (input === 'pinelands') {
            location = 'pinelands'
            reduction = 15
        } else if (input === 'select_location') {
            location = 'select_location'
        }

        if (peak) {
            reduction *= 0.25
        }

        number_of_trips = Math.floor(points / reduction)
      
    }

 



    function points_value() {
        return points
    }

    function location_return() {
        return location
    }

    function number_trips() {
        return number_of_trips
    }


    return {
        points_input,
        points_value,
        bus_location,
        location_return,
        peak_times,
        number_trips
    }
}