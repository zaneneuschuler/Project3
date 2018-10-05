const mongoose = require("mongoose");
const db = require("../models/index");
const userSeed = require('./userSeed')
const yardSaleSeed = require('./yardSaleSeed')

// This file empties the Books collection and inserts the books below

async function seed() {
    await mongoose.connect(
      process.env.MONGODB_URI ||
      "mongodb://localhost/mongoPaiMai"
    );

    await db.User.remove({})

    await db.User.collection.insertMany(userSeed)

    const users = await db.User.find({})

    await db.YardSale.remove({})

    await db.YardSale.collection.insertMany(yardSaleSeed)

    const yardSales = await db.YardSale.find({})

    users.forEach((user, index) => {
        if (yardSales[index]) {
           user.yardSales.push(yardSales[index])
           user.save()
        }
    })
    
}

seed()