Page({

fetchDataFromAPI: function (id) {
  let Restaurant = new wx.BaaS.TableObject("restaurant");
  Restaurant.get(id).then(res => {
    this.setData({ restaurant: res.data})
  })

  },

setDataToAPI: function(){
  let Review = new wx.BaaS.TableObject("reviews");
  let newReview = Review.create();
  newReview.set().save().then(res => {
    console.log(res)
  }

  )
  
  // let MyTableObject = new wx.BaaS.TableObject(tableName);
  // let MyRecord = MyTableObject.create();
  // MyRecord.set(data);
  // MyRecord.set({
  //   key1: value1,
  //   key2: value2
  // });
  // MyRecord.save()

},


onLoad: function(options){
  this.fetchDataFromAPI(options.id)
}





})