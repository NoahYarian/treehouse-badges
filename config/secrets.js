'use strict';

var databaseName = process.env.NODE_ENV === 'test' ? 'treehouse-badges-test' : 'treehouse-badges';

module.exports = {
  db: process.env.MONGODB_URL || `mongodb://localhost:27017/${databaseName}`
  // sessionSecret: process.env.SESSION_SECRET || 'areallylongsecrtthelongerthebetterlikethisisokay',
};
