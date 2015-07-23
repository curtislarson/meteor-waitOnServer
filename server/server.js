Meteor.methods({

  testWaitOn: function(data) {
    console.log("Received data from the client: ", data)
    var rand = Math.random();
    console.log(rand);
    return rand;
  }

});