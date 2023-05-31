// first need to test for values
// the test for calculations on values

describe('This will test all values', function() {
    it('This will test the points input', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(40)

        assert.equal(40, bus_travel.points_value())

    })

    it('This will test location value for when the select location value', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.bus_location("select_location")

        assert.equal("select_location", bus_travel.location_return())

    })

    it('This will test location value for Milnerton', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.bus_location("milnerton")

        assert.equal("milnerton", bus_travel.location_return())

    })

    it('This will test location value for Pinelands', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.bus_location("pinelands")

        assert.equal("pinelands", bus_travel.location_return())

    })

    it('This will test location value for Atlantis', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.bus_location("atlantis")

        assert.equal("atlantis", bus_travel.location_return())

    })
})

describe('All input calculations', function() {
    it('This will test return value of off-peak times on Atlantis', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(40)
        bus_travel.bus_location("atlantis")
        bus_travel.peak_times("off-peak")

        assert.equal(10, bus_travel.points_value())

    })
})