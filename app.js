// app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    let clientID = 'c37fe0426922eb95a083'  // 应用名称: 大众点评项目
    wx.BaaS.init(clientID)
    wx.BaaS.auth.loginWithWechat().then(user => {
      wx.setStorageSync('user', user)
    })
  }
})