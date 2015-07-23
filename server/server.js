Meteor.methods({

  testWaitOn: function() {
    console.log("Received data from the client: ", arguments)
    var rand = Math.random();
    console.log(rand);
    return rand;
  }

});