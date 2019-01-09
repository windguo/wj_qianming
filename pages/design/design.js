Page({
    data:{
        objectArray:[]
    },
    onLoad:function(){
        wx.showLoading({})
        wx.setNavigationBarTitle({
            title: '手写签名设计'
        });
        wx.request({
					url: 'https://www.yishuzi.com.cn/e/api/creat/get.php?getJson=designList&token=' + getApp().globalData.token,
            method: 'GET',
            dataType: 'json',
            success: (json) => {
                console.log('desiginList',json.data);
                this.setData({
                    objectArray: json.data.result
                });
                wx.hideLoading();
            }
        })
    },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '一笔签名设计,快来申请定制独一无二的签名',
      path:'/pages/design/design',
      imageUrl: '',
      success: (res) => {
        wx.showToast({
          content: '分享成功'
        });
      },
      fail: (res) => {
        wx.showToast({
          content: '分享失败,原因是' + res
        });
      }
    }
  },
})