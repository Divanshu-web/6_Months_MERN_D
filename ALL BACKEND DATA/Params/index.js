const express = require('express')

const app = express()
const port = 3000

const students = [
  { id: 1, name: "Nikhil", course: "MERN" },
  { id: 2, name: "Satyam", course: "MERN" },
  { id: 3, name: "Divanshu", course: "MERN" },
  { id: 4, name: "Ishmeet", course: "MERN" },
  { id: 5, name: "GArv", course: "MERN" }
]

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/hello', (req, res) => {
  res.send("Hello Backend")
})

app.get('/students', (req, res) => {
  res.json(
    {
      status: 200,
      success: true,
      message: "Students data fetched successfully",
      data: students
    }
  );
})

app.get('/students/:id', (req, res) => {
  const studentId = req.params.id;

  const student = students.find(s => s.id == studentId)

  if(student == undefined){
    res.json({
    status: 404,
    success: false,
    message: "Student not found",
  });
  }else{
    res.json({
      status: 200,
      success: true,
      message: "Student fetched",
      data: student
    });
  }
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})






const products = [
    { id: 1, name: "Mobile", category: "Electronics", price: 50000 },
    { id: 2, name: "Laptop", category: "Electronics", price: 5000 },
    { id: 3, name: "T-Shirt", category: "Fashion", price: 50040 },
    { id: 4, name: "Pant", category: "Fashion", price: 50000 },
    { id: 5, name: "Tablet", category: "Electronics", price: 5000 },
]

app.get('/products', (req, res) => {
    res.json(products);
})

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;

    const product = products.find(p => p.id == productId);

    res.json(product);
})


app.get('/filter-products', (req, res) => {
    const category = req.query.c;
    const maxPrice = req.query.p;


    // const filteredcategory = products.filter(p => p.category == category)

    const filtered = products.filter(p => {
        return (!category || p.category == category) &&
            (!maxPrice || p.price <= maxPrice)

    }) 


    res.json(filtered);

})


























