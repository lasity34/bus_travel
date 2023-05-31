


function bus_travel_factory() {

    let points = 0
    let location = ""

    function points_input(input) {
        points = input
    }


    

    function bus_location(input) {
        if (input === "milnerton") {
            location = "milnerton"
        } else if (input === "atlantis") {
            location = 'atlantis'
        } else if (input === 'pinelands') {
            location = 'pinelands'
        } else if (input === 'select_location') {
            location = 'select_location'
        }
    }

    function location_return() {
        return location
    }

    function points_value() {
        return points
    }


    return {
        points_input,
        points_value
    }
}