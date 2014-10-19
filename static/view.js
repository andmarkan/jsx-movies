require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"J0Sn7i":[function(require,module,exports){
/** @jsx React.DOM */

var MovieView = React.createClass({displayName: 'MovieView',

  getInitialState: function() {
    return {isSelected: false}
  },

  select: function() {
    var isSelected = this.state.isSelected;
    this.setState({isSelected: !isSelected});
  },

  render: function() {
    console.log('** render **');

    var selected, thumb;
    if (this.state.isSelected) {
      selected = 'selected';
      thumb = React.DOM.img({src: "the_artist.png"})
    }
    var classString = 'movie ' + selected;

    return (
      React.DOM.article({className: classString, onClick: this.select, onTouchStart: this.select}, 
        "The Artist", 
        thumb
      )
    );

   }
});

module.exports = MovieView;


},{}],"view":[function(require,module,exports){
module.exports=require('J0Sn7i');
},{}]},{},[])