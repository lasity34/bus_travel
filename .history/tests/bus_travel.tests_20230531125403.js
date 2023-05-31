// first need to test for values
// the test for single trips
// write tests for return trips
// write test for cost of trips

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

describe('All single trips', function() {
    it('This will test number of single trips Atlantis to during off peak ', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("atlantis")

        assert.equal(3, bus_travel.number_trips())

    })

    it('This will test number of single trips to Atlantis during peak times', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("atlantis")

        assert.equal(2, bus_travel.number_trips())

    })

    it('This will test number of single trips Pinelands to during off peak ', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("pinelands")

        assert.equal(6, bus_travel.number_trips())

    })

    it('This will test number of single trips to Pinelands during peak times', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("pinelands")

        assert.equal(5, bus_travel.number_trips())

    })

    it('This will test number of single trips Milnerton to during off peak ', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("milnerton")

        assert.equal(5, bus_travel.number_trips())

    })

    it('This will test number of single trips to Pinelands during peak times', function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("milnerton")

        assert.equal(4, bus_travel.number_trips())

    })
})

describe('Cost of all single trips', function() {
    it("Testing price per single trip during peak to Milnerton", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("milnerton")

        assert.equal(25, bus_travel.price_per_single_trip())
    })

    it("Testing price per single trip during off-peak to Milnerton", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("milnerton")

        assert.equal(20, bus_travel.price_per_single_trip())
    })

    it("Testing price per single trip during peak to Atlantis", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("atlantis")

        assert.equal(37.5, bus_travel.price_per_single_trip())
    })

    it("Testing price per single trip during off-peak to Atlantis", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("atlantis")

        assert.equal(30, bus_travel.price_per_single_trip())
    })

    it("Testing price per single trip during peak to Atlantis", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("peak")
        bus_travel.bus_location("atlantis")

        assert.equal(37.5, bus_travel.price_per_single_trip())
    })

    it("Testing price per single trip during off-peak to Atlantis", function() {
        const bus_travel = bus_travel_factory()

        bus_travel.points_input(100)
        bus_travel.peak_times("off-peak")
        bus_travel.bus_location("atlantis")

        assert.equal(30, bus_travel.price_per_single_trip())
    })
})