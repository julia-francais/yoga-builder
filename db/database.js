var knex = require('./knex')

module.exports = {
    knex: knex,
    outputAll: function() {
        return knex('poses');
    },
    outputByCat: function(category) {
        return knex('poses').whereIn('category', category);
    },
    addPose: function(insert) {
        return knex('poses').insert(insert);
    },
    outputByDiff: function(diff) {
        return knex('poses').where('difficulty', diff);
    },
    outputById: function(id) {
        return knex('poses').where('id', id);
    }
};
