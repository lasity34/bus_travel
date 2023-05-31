

describe('This will test all logic for the bus widget', function() {
    it('This will test the points input', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(40)

        assert.equal(40, bus_travel.points_value())

    })
})