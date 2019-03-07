//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    circular: true,
    picGroup: [
      '/image/swiperpic/swiper1.png',
      '/image/swiperpic/swiper2.png',
      '/image/swiperpic/swiper3.png',
      '/image/swiperpic/swiper4.png',
      '/image/swiperpic/swiper5.png'
    ]

  }
})