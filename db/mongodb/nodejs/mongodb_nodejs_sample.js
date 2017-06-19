// Sample MongoDB wich runs from the nodejs console
// Depends on the mongodb module:
// $ npm install mongodb
const DB = "example";
const COLL = "test";
const OBJ = {
    "sample": 1
};
const join = require("path").join;
const MongoClient = require('mongodb').MongoClient;
const mongoURL = "mongodb://" + join("localhost", DB);
function info(msg) {
    console.log("Info: " + msg);
}
function error(msg) {
    console.error("Error: " + msg);
}
MongoClient.connect(mongoURL, function(err, db) {
    if (err) {
        error(err);
    } else {
        info("Connected");
        //db.createCollection(COLL);
        db.collection(COLL).insert(OBJ);
        info(`Sample object inserted in ${COLL} collection into the ${DB} database`);
    }
    process.exit();
});
