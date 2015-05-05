Router.route("/test", {
  name: "test",
  action: function() {
    console.log("The data is ", Util.getResponse("testWaitOn"));
  },
  waitOn: function() {
    if (!Util.isReady("testWaitOn")) {
      return Util.waitOnServer("testWaitOn");
    }
  }
})