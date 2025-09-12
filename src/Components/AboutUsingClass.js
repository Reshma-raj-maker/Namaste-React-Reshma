import React from "react";
class AboutUsingClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.name + " Constructor called");
  }

  componentDidMount() {
    console.log(this.props.name + "component Did mount called");
  }
  render() {
    console.log(this.props.name + " render called");
    const { count, count1 } = this.state;
    return (
      <div>
        <div className="about-body">
          <h1>Count:{count}</h1>
          <button
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
                count1: this.state.count1 + 1,
              })
            }
          >
            Increment
          </button>
          <h1>Count:{count1}</h1>
          <h1>Name: {this.props.name}</h1>
          <h2>Location:{this.props.place}</h2>
          <h3>Contact:34554433</h3>
        </div>
      </div>
    );
  }
}
export default AboutUsingClass;
