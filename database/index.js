const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'test';
const config = require(`${__dirname}/../config/config.json`)[env];

const Sequelizer = sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

const Customers = Sequelizer.define('customers', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  phoneNumber: {
    type: Sequelize.STRING
  }
});

const Stores = Sequelizer.define('stores', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  }
});

const Coupons = Sequelizer.define('coupons', {
  customerID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Customers,
      key: 'id'
    }
  },
  storeID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Stores,
      key: 'id'
    }
  },
  usedDate: {
    type: Sequelize.DATE,
  }
});

const Rewards = Sequelizer.define('rewards', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  storeID: {
    type: Sequelize.INTEGER,
    reference: {
      model: Stores,
      key: 'id'
    }
  },
  required: {
    type: Sequelize.INTEGER,
  }
});

module.exports = {
  Customers,
  Stores,
  Coupons,
  Rewards,
};