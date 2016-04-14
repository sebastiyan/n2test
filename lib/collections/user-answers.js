UserAnswers = new Mongo.Collection("userAnswers");

if (Meteor.isServer) {
  Meteor.publish("userAnswers", function () {
      return Tests.find({});
  });
}
