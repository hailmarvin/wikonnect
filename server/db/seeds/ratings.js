
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ratings').del()
    .then(function () {
      return knex('ratings').insert([
        {
          id: 'activity1',
          user_id: 'user1',
          chapter_id: 'chapter1',
          rating: 4,
          created_at: '2017-12-20 19:17:10',
          updated_at: '2017-12-20 19:17:10'
        }
      ]);
    });
};
