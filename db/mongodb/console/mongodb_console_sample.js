// MongoDB example
// Launch this from the mongo console
var peopledb = db.getSiblingDB("people");
var john = { "userid": 1,
             "name": "John",
             "age": 23 };
var mary = { "userid": 2,
             "name": "Mary",
             "age": 45 };
peopledb.drivers.insert(john);
peopledb.drivers.insert(mary);
print(peopledb.drivers.find().forEach(function(x) {
    print("Hello " + x.name + "!");
}));
