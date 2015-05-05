Meteor.methods({

  testWaitOn: function() {
    var rand = Math.random();
    console.log(rand);
    return rand;
  }

});