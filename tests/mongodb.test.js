const {MongoDBContainer} = require("@testcontainers/mongodb");
const {MongoClient} = require("mongodb");

it("should work using version 6.0.1", async () => {
    const mongodbContainer = await new MongoDBContainer("mongo:6.0.1").start();

    // This times out:
    await new MongoClient(mongodbContainer.getConnectionString()).connect();

    // This works:
    // await new MongoClient(mongodbContainer.getConnectionString(), {directConnection: true}).connect();

    // This works (running MongoDB natively on macOS):
    // await new MongoClient('mongodb://127.0.0.1').connect();

    // This works (running MongoDB in a container):
    // await new MongoClient('mongodb://127.0.0.1:27018').connect();

    await mongodbContainer.stop();
}, 30000);
