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
  firstname: {
    type: String,
    required: true,
    unique: true //required is validate but unique is index
  },
  favfoods: [{ type: String }],
  info: {
    school: {
      type: String
    },
    hasvehicle: Boolean
  },
  lastname: String,
  age: Number
});
//to add the extra info on schema just provide a object with a detailed info what is the type,required or not etc for validation ,you can also add nested schemas

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
    //another methods on mongo
    const found = await Student.find({ firstname: "prashant" }); //takes object argument to find ,for wildcard use {} empty object which return all the students
    const foundById = await Student.findById("5cb807fa201ded3088d23dad"); //takes id to find if it not able to find then will return null it will never return error
    const updated = await Student.findByIdAndUpdate(
      "5cb807fa201ded3088d23dad",
      { firstname: "PunisheR" },
      () => {
        console.log("successsfully updated");
      }
    ); //takes id then what property to update then cb function
    console.log(updated);
    console.log(foundById);
    console.log(found);
    console.log(student);
  })
  .catch(e => {
    console.error(e);
  });
