const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.urlencoded());



const flights = [
    { id: 1, airline: "Air India", from: "Delhi", to: "Dubai", price: 25000, seats: 120 },
    { id: 2, airline: "IndiGo", from: "Delhi", to: "Mumbai", price: 8000, seats: 180 },
    { id: 3, airline: "Emirates", from: "Delhi", to: "London", price: 55000, seats: 200 },
    { id: 4, airline: "SpiceJet", from: "Mumbai", to: "Goa", price: 6000, seats: 150 },
    { id: 5, airline: "Qatar Airways", from: "Delhi", to: "Doha", price: 40000, seats: 170 },
    { id: 6, airline: "Vistara", from: "Delhi", to: "Bangalore", price: 12000, seats: 160 },
    { id: 7, airline: "AirAsia", from: "Kolkata", to: "Bangkok", price: 22000, seats: 140 },
    { id: 8, airline: "Lufthansa", from: "Delhi", to: "Frankfurt", price: 65000, seats: 210 },
    { id: 9, airline: "Singapore Airlines", from: "Chennai", to: "Singapore", price: 30000, seats: 190 },
    { id: 10, airline: "British Airways", from: "Mumbai", to: "London", price: 70000, seats: 220 }
];

// Task 1
// Create an API to get all flights.

app.get('/flights', (req, res) => {
    res.json(
        {
            status: 200,
            success: true,
            message: "flights data fetched successfully",
            data: flights
        }
    );
})


// Task 2
// Create an API to get flight by ID

app.get('/flights/:id', (req, res) => {
    const flightId = req.params.id;

    const flight = flights.find(f => f.id == flightId)
    res.json(
        {
            status: 200,
            success: true,
            message: "flights data fetched successfully",
            data: flight
        }
    );
})


// Task 3
// Create an API to filter flights by departure city.

app.get('/flights-departure', (req, res) => {
    const from = req.query.f;
    // const maxPrice = req.query.p;
    const filtereddeparture = flights.filter(p => {
        return (!from || p.from == from)
        //  &&
        //     (!maxPrice || p.price <= maxPrice)

    })
    res.json({
        status: 200,
        success: true,
        message: "flights data fetched successfully",
        data: filtereddeparture
    });
    console.log(filtereddeparture);

})


// Task 4
// Create an API to filter flights by destination city.

app.get('/flights-destination', (req, res) => {
    const to = req.query.t;
    // const maxPrice = req.query.p;
    const filterdestination = flights.filter(p => p.to == to)
    res.json({
        status: 200,
        success: true,
        message: "flights data fetched successfully",
        data: filterdestination
    })
})



// Task 5
// Create an API to get flights under a certain price.
// Example: under 20000

app.get('/filter-price', (req, res) => {
    const maxPrice = req.query.p;
    // const filteredcategory = products.filter(p => p.category == category)
    const filtered = flights.filter(p => {
        return (!maxPrice || p.price <= maxPrice)
    })
    res.json({
        status: 200,
        success: true,
        message: "flights data fetched successfully",
        data: filtered
    });
})


// Task 6
// Create an API to filter flights by airline name.
// Example: Emirates
app.get('/flights-airline', (req, res) => {
    const airline = req.query.a;
    // const maxPrice = req.query.p;
    const filterairline = flights.filter(p => p.airline == airline)
    res.json({
        status: 200,
        success: true,
        message: "flights data fetched successfully",
        data: filterairline
    })
})


// Task 7
// Create an API to combine filters.
// Example:
// from=Delhi
// price=30000

// Return flights that match:
// departure city
// AND price less than given value.
app.get('/filter-flights', (req, res) => {

    const from = req.query.f
    const maxPrice = req.query.p

    const filteredFlights = flights.filter(f => {
        return (!from || f.from == from) &&
            (!maxPrice || f.price <= maxPrice)
    })

    res.json({
        status: 200,
        success: true,
        message: "flights data fetched successfully",
        data: filteredFlights
    })

})

app.post('/flights/add', (req, res)=>{
  const incomingData = req.body;

  if(!incomingData.airline || !incomingData.from || !incomingData.to || !incomingData.price || !incomingData.seats){
    return res.json({
      status: 400, 
      success: false,
      message: "Incomplete data"
    })
  }


  const newflights = {
    id: flights.length + 1,
    airline: incomingData.airline,
    from: incomingData.from,
    to: incomingData.to,
    price: incomingData.price,
    seats: incomingData.seats
  }

  flights.push(newflights);

  res.json({
    status: 200,
    success: true,
    message: "Movie saved successfully",
    data : flights
  })
})







app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})