const mongoose = require("mongoose");
// require the mongoose package
const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/mydatabase");
};
// we use mongoose.connect to connect to our database which inturn returns a promise to work with our database .connect takes (protocol(here mongodb://)) then machine name (here localhost:27107) along with database name

// define a schema ,
//what is schema? its just a info for our collection that our collection should look like
//student with lowercase is just a schema
const student = new mongoose.Schema({
  firstname: String,
  lastname: String,
  age: Number
});

// now we create model which inturn helps to create a collections model yeild collections
//1st argument it takes is collection name ,2nd it takes the schema that how collection should look like
const Student = mongoose.model("student", student);

//callin the connect function and
connect()
  .then(async connection => {
    console.log(connection);
    const student = await Student.create({
      firstname: "Prashant",
      lastname: "Rawal",
      age: 24
    });
    console.log(student);
  })
  .catch(e => {
    console.error(e);
  });
