class ShopsController < ApplicationController
  def show
    @shop = {
      id: params[:id] || 1,
      name: 'café 1886 at Bosch',
      description: '渋谷駅 5分',
      tel: '0120-444-444',
      capacity: '83席 （店内：71席　テラス：12席）',
      tags: %w(Wifi 禁煙),
      budget: '￥1,000～￥1,999',
      station: '渋谷駅 [東京]',
      genre: 'カフェ コーヒー専門店 サンドイッチ',

      lat: 35.65793747394359,
      lng: 139.70582207882092,

      address: '東京都渋谷区渋谷3-6-7',
      access: <<-TXT,
JR、東急、京王井の頭、東京メトロ 渋谷駅 東口より 徒歩5分
渋谷駅から327m
      TXT
      holiday: '不定休',
      bussiness_hour: <<-TXT,
月-金 8:30-21:00（L.O.20:30）
土日祝 11:00-20:00（L.O.19:30)
朝食営業、日曜営業
      TXT

      payment_method: 'VISA、MASTER、JCB、AMEX、Diners',

      cabin: false,
      homepage: 'http://www.bosch-cafe.jp',
      open: '2015年9月10日',
      smoking: '完全禁煙',
      parking: false,
      mobile: 'docomo、au、SoftBank、Y!mobile',

      image: {
        url: 'https://tabelog.ssl.k-img.com/restaurant/images/Rvw/44894/44894357.jpg',
        title: 'dummy'
      }
    }
  end

  def payment
    @shop = {
      id: params[:id] || 1,
      name: 'café 1886 at Bosch'
    }
  end
end
