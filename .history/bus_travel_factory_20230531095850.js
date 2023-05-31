


function bus_travel_factory() {

    let points = 0

    function points_input(input) {
        points = input
    }


    function points_value() {
        return points
    }


    return {
        points_input,
        points_value
    }
}