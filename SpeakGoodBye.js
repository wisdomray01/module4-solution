(function (window) {
    var byeSpeaker = {};
    byeSpeaker.name = "John";
    var speakWord = "Good Bye ";
    byeSpeaker.sayBye = function () {
      console.log(speakWord + byeSpeaker.name);
    }
  
    window.byeSpeaker = byeSpeaker;
  
  })(window);