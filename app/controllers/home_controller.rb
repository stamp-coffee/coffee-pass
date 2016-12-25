class HomeController < ApplicationController
  def index
    @shops = 10.times.map do |i|
      {
        id: i,
        name: 'café 1886 at Bosch',
        description: '渋谷駅 5分',
        image: {
          url: 'https://tabelog.ssl.k-img.com/restaurant/images/Rvw/44894/44894357.jpg',
          title: 'dummy'
        }
      }
    end
  end
end
