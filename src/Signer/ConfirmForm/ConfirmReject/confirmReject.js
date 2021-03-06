// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import Button from '../../../Button';
import { requestShape } from '../../util/react';
import styles from './confirmReject.css';

export default class ConfirmReject extends Component {
  static contextTypes = {
    api: PropTypes.object.isRequired
  };

  static propTypes = {
    className: PropTypes.string,
    request: requestShape.isRequired
  };

  handleReject = () => this.context.api.signer.rejectRequest(this.props.request.id);

  render () {
    const { className } = this.props;

    return (
      <div className={className}>
        <div className={styles.rejectText}>
          <FormattedMessage
            id='signer.txPendingReject.info'
            defaultMessage='Are you sure you want to reject the request?'
          />
          <br />
          <strong>
            <FormattedMessage id='signer.txPendingReject.undone' defaultMessage='This cannot be undone' />
          </strong>
        </div>
        <Button
          onClick={this.handleReject}
          className={styles.rejectButton}
          fullWidth
          label={<FormattedMessage id='signer.txPendingReject.buttons.reject' defaultMessage='Reject Request' />}
        />
      </div>
    );
  }
}
