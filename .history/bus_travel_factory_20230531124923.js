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
    let price_single_trip = 0

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
        } 
         if (input === 'select_location') {
            location = 'select_location'
            number_of_trips = 0
        }

        if (peak) {
            reduction = reduction * 1.25
        }

        price_single_trip = reduction
    
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

    function price_per_single_trip() {
        return price_single_trip
    }


    return {
        points_input,
        points_value,
        bus_location,
        location_return,
        peak_times,
        number_trips,
        price_per_single_trip
    }
}