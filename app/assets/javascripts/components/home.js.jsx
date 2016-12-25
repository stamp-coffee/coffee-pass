class HomeIndex extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <ShopCarousel shops={this.props.shops} />
        </div>
        <br/>
        <div>
          {this.props.shops.map(shop => <ShopItem key={shop.id} {...shop} />)}
        </div>
      </div>
    )
  }
}

class ShopCarousel extends React.Component {
  render() {
    return (
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {this.props.shops.map((shop, i) => <li key={i} data-target="#carousel-example-generic" data-slide-to={i} className={i == 0 ? 'active' : ''}></li>)}
        </ol>
        <div className="carousel-inner" role="listbox">
          {this.props.shops.map(shop => <ShopCarouselItem key={shop.id} shop={shop} active={shop.id == 1}/>)}
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="icon-prev" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="icon-next" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

class ShopCarouselItem extends React.Component {
  render() {
    return (
      <div className={"carousel-item " + (this.props.active ? 'active' : '')} style={{ textAlign: 'center' }}>
        <a href={`/shops/${this.props.shop.id}`}>
          <img src={this.props.shop.image.url} alt={this.props.shop.image.title} />
        </a>
      </div>
    )
  }
}

class ShopItem extends React.Component {
  render() {
    return (
      <div className="col-xs-4">
        <div className="card" style={{ overflow: "hidden" }}>
          <img className="card-img-top" src={this.props.image.url} alt={this.props.image.title}
            style={{ width: "100%" }} />
          <div className="card-block">
            <h4 className="card-title">{this.props.name}</h4>
            <p className="card-text">{this.props.description}</p>
            <a href={`/shops/${this.props.id}`} className="btn btn-primary">Go</a>
          </div>
        </div>
      </div>
    )
  }
}

