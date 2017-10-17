//The Clipboard is a singleton class and must be called like this:
//var clip = Clipboard.getInstance();

    var Clipboard = (function(){
        function Clipboard() {
            var content;
            return {
                setContent: function(newContent){
                    content = newContent;
                },
                getContent: function(){
                    return content;
                }
            }
        };
        var instance;
        return {
            getInstance: function(){
                if (instance == null) {
                    instance = new Clipboard();
                    // Hide the constructor so the returned objected can't be new'd...
                    instance.constructor = null;
                }
                return instance;
            }
        };
    })();


/*var mySingleton = (function () {

  // Instance stores a reference to the Singleton
  var instance;

  function init() {

    // Singleton

    // Private methods and variables
    function privateMethod(){
        console.log( "I am private" );
    }

    var privateVariable = "Im also private";

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log( "The public can see me!" );
      },

      publicProperty: "I am also public"
    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {

      if ( !instance ) {
        instance = init();
      }

      return instance;
    }

  };

})();*/