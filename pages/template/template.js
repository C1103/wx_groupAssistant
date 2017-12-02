Page({
    data: {
        pictures: []
    },
    goToActivePage: function(e) {
        var index = e.target.setdata.current;
        wx.navigateTo({
            url: '../add_active/add_active?id=index',
        })
    },
    onLoad: function() {
        wx.setNavigationBarTitle({
            title: '选择模板'
        })
    }
})