app.factory("objSVC", function() {
    var obj = {};
    return {
        get: function() {
            return obj.id;
        },
        set: function(id) {
            obj.id = id;
        }
    };
});
