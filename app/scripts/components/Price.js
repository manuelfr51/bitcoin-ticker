/** @jsx React.DOM */
(function () {
    'use strict';
    var React = require('react');

    var Price = React.createClass({
        getInitialState: function () {
            return {
                price: this.props.price,
                style: {}
            };
        },
        componentWillReceiveProps: function (nextProps) {
            var color = '#333333';
            if (this.state.price !== null && !nextProps.reset) {
                if (nextProps.price > this.state.price) {
                    color = '#3c763d';
                } else if (nextProps.price < this.state.price) {
                    color = '#a94442';
                }
            }
            this.setState({
                price: nextProps.price,
                style: {
                    color: color
                }
            });
        },
        render: function () {
            return (
                <span style={this.state.style}>
                    {this.state.price ? this.state.price.toFixed(2) : 'Loading...'}
                </span>
            );
        }
    });

    module.exports = Price;
})();