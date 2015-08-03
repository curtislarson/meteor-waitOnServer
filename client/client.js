Router.route("/test", {
  name: "test",
  action: function() {
    console.log("The data is ", Util.getResponse("testWaitOn"));
  },
  waitOn: function() {
    // Call the async function, with an optional data argument
    return Util.waitOnServer("testWaitOn", {foo: "bar"}, {bar: "foo"});
  }
});

Router.route("/test2", {
  name: "test2",
  action: function() {
    console.log("The data is ", Util.getResponse("testWaitOn"));
  },
  waitOn: function() {
    // Call the async function, with an optional data argument
    return Util.waitOnServer("testWaitOn", {foo: "bar"});
  }
});