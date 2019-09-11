// okk
(function () {
   var root = this; // global object. 이거엔 왠만하면 접근하지 않는게 좋다.
   var AdvStore = function () {
      var pointer = this;
      pointer.dict = {};
   };
   AdvStore.prototype = {
      set: function (key, val, mode) {
         var pointer = this;
         if (val !== undefined) {
            if (mode == 'minus') {
               pointer.dict[key] -= val;
            }
            else if (mode == 'plus') {
               pointer.dict[key] += val;
            }
            else {
               pointer.dict[key] = val;
            }
         }
         return pointer.dict[key];
      },
      get: function (key, default_) {
         var pointer = this;
         if (pointer.dict[key] === undefined) {
            if (default_ !== undefined) {
               pointer.dict[key] = default_;
            }
         }
         return pointer.dict[key];
      }
   };
   root.AdvStore = AdvStore;
}).call(this);
