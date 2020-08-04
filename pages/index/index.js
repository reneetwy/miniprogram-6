Page({

  getFonts: function(){

  },

  fetchDataFromAPI: function () {
    let Restaurant = new wx.BaaS.TableObject('restaurant');
    let query = new wx.BaaS.Query()

    Restaurant.setQuery(query).find().then(res => {
      this.setData({ restaurants: res.data.objects})
    })
    
  },

  goToShow: function(e){
    console.log(e)

    let id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: `../show/show?id=${id}`
    })
  },

  onLoad: function(options) {
    this.fetchDataFromAPI(options.id);
  }
 
})
