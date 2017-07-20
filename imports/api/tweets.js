import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Tweets = new Mongo.Collection('tweets');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('tasks', function tasksPublication() {
    return Tasks.find({
        //Find parameters
    });
  });
}

Meteor.methods({
	//Add tweet
  'tweets.insert'(text) {
    check(text, String);

    Tweets.insert({
      content: text,
      createdAt: new Date(),
      //Add creator and username
      //Add location
    });
  },

  //Delete (Remove) tweet
  'tweets.remove'(taskId) {
    check(taskId, String);

    Tweets.remove(taskId);
  },
});