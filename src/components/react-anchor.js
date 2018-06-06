import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

const VOID_JAVASCRIPT = 'javascript:;';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    linkable: PropTypes.bool
  };

  static defaultProps = {
    linkable: true
  };
  /*===properties end===*/

  render() {
    const { className, linkable, href, ...props } = this.props;
    const _href = linkable ? href : VOID_JAVASCRIPT;
    return (
      <a href={_href} className={classNames('react-anchor', className)} {...props} />
    );
  }
}
