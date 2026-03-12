var App;
(function (App) {
    var Services;
    (function (Services) {
        function greet(user) {
            return "Hello ".concat(user.name);
        }
        Services.greet = greet;
    })(Services = App.Services || (App.Services = {}));
})(App || (App = {}));
var user = { name: "Tom" };
console.log(App.Services.greet(user));
