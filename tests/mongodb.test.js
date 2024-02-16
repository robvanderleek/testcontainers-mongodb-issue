const {MongoDBContainer} = require("@testcontainers/mongodb");
const {MongoClient} = require("mongodb");

it("should work using version 6.0.1", async () => {
    const mongodbContainer = await new MongoDBContainer("mongo:6.0.1").start();

    // This times out:
    await new MongoClient(mongodbContainer.getConnectionString()).connect();

    // This works:
    await new MongoClient(mongodbContainer.getConnectionString(), {directConnection: true}).connect();

    await mongodbContainer.stop();
}, 30000);
