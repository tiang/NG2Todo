var AppComponent = ng
  .Component({
    selector: 'my-app',
  })
  .View({
     templateUrl: 'app/components/friends/friends.html',
     directives: [ng.NgFor, ng.NgIf]
  })
  .Class({
    constructor: function () { 
      this.myName = "Ben";
      this.names = ["Tiang", "Alya", "Alex", "Olga"];

      this.addFriend = function($event,newFriend) {
        this.names.push(newFriend)
        console.log('add friend');
        newFriend = null;
      }
      this.removeFriend = function() {
        this.names.pop();
      }
      this.doneTyping = function(event,v){
        console.log(event);
        console.log(v);
      }
    },
 
  });


document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);    
});



