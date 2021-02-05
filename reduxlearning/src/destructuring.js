// Object destructuring
const person = {
    name: "Milo",
    age: 26,
    location: {
      city: "Philadelphia",
      temp: 92
    }
  }

  const { name, age } = person;

  console.log(`${name} is ${age} years old.`)

  const { city, temp: temperature } = person.location;
  console.log(`It is ${temperature} degrees in ${city}.`);

  const book = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    publisher: {
      name: "Penguin"
    }
  };

  const { name: publisherName = "Self-Published"} = book.publisher;

  console.log(publisherName);

//   Array destructuring
 const address = ['1299 S Juniper Street', "Philadelphia", "Pennsylvania", "19147"];
 const [ , city, state ] = address;
 console.log(`You are in ${city}, ${state}.`);

 const item = ["Coffee (hot)", "£2.00", "£2.50", "£2.75"];

  const [coffee, , price, ] = item;

  // we need to grab the first and the third item
 console.log(`A medium ${coffee} costs ${price}.`);