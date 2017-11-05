import React from "react";
import PropTypes from "prop-types";
import { browserHistory } from "react-router";
import { connect } from "react-redux";
import Banner from "./banner";

import "../styles/skeleton.css";
import "../styles/custom.css";
import CarBuyingStyles from "../styles/car-buying.css";

class DealerView extends React.Component {
  constructor(props) {
    super(props);
  }

 render() {
    return (
      <div>
        <Banner className={"dealer-banner"} title={"Dealer View"} />
      </div>
      );
    }
}


const mapStateToProps = state => {
  return {
    transactions: state.transactions
  };
};

DealerView.propTypes = {
  transactions: PropTypes.array
};

export default connect(mapStateToProps)(DealerView);