import React from "react";
import "./Slider.css"

class Slider extends React.Component {
    constructor() {
      super()
      this.state = {
        selected: 0
      }
    }
    handleClick = e => {
      let value = e.target.getAttribute('data-value')
      if (value !== null) {
        this.setState({
          selected: value
        });
      }
    };
    render() {
      const { selected } = this.state;
      const style =
        this.state.selected >= 1
          ? { transform: `translateX(-${selected * 300}px)` }
          : {};
      const renderIndicator = []
      for(let i=0; i<3; i++) {
        renderIndicator.push(
          <li data-value={i} key={i} className={selected == i ? 'active' : ''}></li>
        )
      }
      return (
        <div className="slider">
          <div className="slide-items" style={style}>
            <div className="item">Slide 1</div>
            <div className="item">Slide 2</div>
            <div className="item">Slide 3</div>
          </div>
          <ul onClick={this.handleClick} className="indicators">
            {renderIndicator}
          </ul>
        </div>
      );
    }
  }

  export default Slider;