/** @jsx React.DOM */

var MovieView = React.createClass({

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
      thumb = <img src="the_artist.png" />
    }
    var classString = 'movie ' + selected;

    return (
      <article className={classString} onClick={this.select} onTouchStart={this.select}>
        The Artist
        {thumb}
      </article>
    );

   }
});

module.exports = MovieView;

