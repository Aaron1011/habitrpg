// Generated by CoffeeScript 1.3.3

module.exports = function(store) {
  return store.query.expose('users', 'withId', function(id) {
    return this.byId(id);
  });
};