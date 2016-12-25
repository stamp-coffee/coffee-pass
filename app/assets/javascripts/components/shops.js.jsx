class ShopsShow extends React.Component {
  render() {
    const shop = this.props.shop;
    return (
      <div className="container">
        <img src={shop.image.url} alt={shop.image.title} />
        <h2>{shop.name}</h2>
        <p>{shop.description}</p>
        <p>
          {shop.tags.map((t,i) =>
            <span key={i} className="tag tag-info pull-right">{t}</span>
          )}
        </p>

        <div style={{ margin: '10px'}}>
          <a className="btn btn-primary pull-right" href={`/shops/${shop.id}/payment`}>会計する</a>
        </div>

        <div>
          <GoogleMap lat={shop.lat} lng={shop.lng} title={shop.title}/>
        </div>

        <table className="table">
          <tbody>
          <tr><th scope="row">店名</th><td>{shop.name}</td></tr>
          <tr><th scope="row">TEL</th><td>{shop.tel}</td></tr>
          <tr><th scope="row">住所</th><td>{shop.address}</td></tr>
          <tr><th scope="row">交通手段</th><td>{shop.access}</td></tr>
          <tr><th scope="row">営業時間</th><td>{shop.bussiness_hour}</td></tr>
          <tr><th scope="row">定休日</th><td>{shop.holiday}</td></tr>
          <tr><th scope="row">予算</th><td>{shop.budget}</td></tr>
          <tr><th scope="row">支払い方法</th><td>{shop.payment_method}</td></tr>
          <tr><th scope="row">座席</th><td>{shop.capacity}</td></tr>
          <tr><th scope="row">個室</th><td>{shop.cabin ? '有' : '無'}</td></tr>
          <tr><th scope="row">禁煙・喫煙</th><td>{shop.smoking}</td></tr>
          <tr><th scope="row">駐車場</th><td>{shop.parking}</td></tr>
          <tr><th scope="row">携帯電話</th><td>{shop.mobile}</td></tr>
          <tr><th scope="row">ホームページ</th><td><a href={shop.homepage} target="_blank">{shop.homepage}</a></td></tr>
          <tr><th scope="row">オープン日</th><td>{shop.open}</td></tr>
          </tbody>
        </table>
      </div>
    )
  }

  onPayment() {
    alert('未実装')
  }
}

class GoogleMap extends React.Component {
  tick() {
    this.timerID = setTimeout(() => {
      if (this.scriptLoaded()) {
        const latlng = { lat: this.props.lat, lng: this.props.lng };
        this.map = new google.maps.Map(this.element, {
          center: latlng,
          mapTypeId:google.maps.MapTypeId.ROADMAP,
          mapTypeControl:false,
          scaleControl:true,
          disableDoubleClickZoom:true,
          zoom: 17 // FIXME
        });
        this.marker = new google.maps.Marker({
          position: latlng,
          map: this.map,
          title: this.props.title
        });
      } else {
        this.tick();
      }
    }, 1000)
  }

  scriptLoaded() {
    return typeof google != 'undefined' &&
      typeof google.maps != 'undefined' &&
      typeof google.maps.Map != 'undefined';
  }

  componentDidMount() {
    this.tick();
  }

  componentWillUnmount() {
    clearTimeout(this.timerID);
  }

  render() {
    return (
      <div
        id="map"
        style={{ width: "500px", height: "500px" }}
        ref={(element) => this.element = element}></div>
    )
  }
}

class ShopsPayment extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>{this.props.shop.name}</h1>
        <div>
          <img src="http://hp.vector.co.jp/authors/VA023120/infoserver21/sample/QR_Code_map.png"/>
        </div>
      </div>
    )
  }
}
