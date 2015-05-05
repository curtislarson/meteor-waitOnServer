Util = {};

Util.d_waitOns = {};

Util.waitOnServer = function(name) {
  if (this.d_waitOns[name] !== undefined &&
      this.d_waitOns[name].ready !== true) {
    return;
  }
  else {
    this.d_waitOns[name] = {};
  }
  var self = this;
  this.d_waitOns[name].dep = new Deps.Dependency();
  this.d_waitOns[name].ready = false;

  Meteor.call(name, function(err, or) {
    self.d_waitOns[name].ready = true;
    self.d_waitOns[name].dep.changed();
    self.d_waitOns[name].data = (err || or);
  });

  var handle = {
    ready: function() {
      self.d_waitOns[name].dep.depend();
      return self.d_waitOns[name].ready;
    }
  };
  return handle;
}

Util.getResponse = function(name) {
  return this.d_waitOns[name].data;
}

Util.isReady = function(name) {
  if (undefined === this.d_waitOns[name]) {
    return false;
  }
  else {
    return this.d_waitOns[name].ready;
  }
}