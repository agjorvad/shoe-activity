app.service('ShoeService', ['$http', function ($http) {
    console.log('ShoeService is loaded');
    var self = this;

    self.getShoes = function () {
        $http({
            method: "GET",
            url: "/shoe"
        })
        .then(function(response) {
            self.shoeList = response.data;
            console.log(self.shoeList);
        })
        .catch(function(error){
            console.log("error on /shoe get", error)
        })
    }
    self.getShoes();


self.deleteShoe = function (shoeToDelete) {
    console.log(shoeToDelete)
    $http({
        method: "DELETE",
        url: "/shoe",
        params: shoeToDelete
    })
    .then(function(response){
        console.log(response);
        self.getShoes();
    })
    .catch(function(error) {
        console.log('error on /shoe delete', error);
    });
}

}]);