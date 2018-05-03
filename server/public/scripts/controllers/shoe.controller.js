app.controller('ShoeController', ['ShoeService', function(ShoeService) {
    console.log('ShoeController has been loaded');
    var self = this;
    self.shoeList = ShoeService.shoeList;
}]);