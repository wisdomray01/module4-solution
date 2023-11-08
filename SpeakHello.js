(function (window) {
    var helloSpeaker = {};
    helloSpeaker.name = "Frank";
    var speakWord = "Hello ";
    helloSpeaker.sayHello = function () {
      console.log(speakWord + helloSpeaker.name);
    }
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);