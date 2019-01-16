Page({
  data: {
    message: '你好啊！',
    objArr: [
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' },
      { id: 2, unique: 'unique_2' },
      { id: 1, unique: 'unique_1' },
      { id: 0, unique: 'unique_0' }
    ],
    numArr: [1, 2, 3, 4]
  },
  // 随机排列
  switchs(e) {
    const length = this.data.objArr.length
    for(let i=0;i<length;i++){
      const x = Math.floor(Math.random()*length)
      const y = Math.floor(Math.random()*length)
      const temp = this.data.objArr[x]
      this.data.objArr[x] = this.data.objArr[y]
      this.data.objArr[y] = temp
    }
    this.setData({
      objArr: this.data.objArr
    })
  },
  addSwitch: function () {
    const length = this.data.objArr.length;
    this.data.objArr = [{ id: length, unique:'_unique'+length}].concat(this.data.objArr)
    this.setData({
      objArr: this.data.objArr
    })
  },
  addNum() {
    this.data.numArr = [this.data.numArr.length + 1].concat(this.data.numArr)
    this.setData({
      numArr:this.data.numArr
    })
  },


  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log('小程序初始化完成')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序启动，或从后台进入前台显示')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序从前台进入后台')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序发生脚本错误')
  },

})