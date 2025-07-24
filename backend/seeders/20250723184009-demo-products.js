"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Teclado Mecânico",
          price: 199.99,
          quantity: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mouse Gamer",
          price: 149.99,
          quantity: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Monitor 24"',
          price: 899.99,
          quantity: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cadeira Gamer",
          price: 1299.99,
          quantity: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Headset HyperX",
          price: 499.99,
          quantity: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
