import React from 'react';
import PropTypes from 'prop-types';

import Page, {
  CardLayout, Card,
} from '@cerner/terra-application/lib/page';

import ApplicationInfoCard from './content/ApplicationInfoCard';

const propTypes = {
  label: PropTypes.string,
  pageKey: PropTypes.string,
  onRequestClose: PropTypes.func,
};

const Page1 = ({ label, pageKey, onRequestClose }) => (
  <Page
    pageKey={pageKey}
    label={label}
    // metaData={metaData}
    onRequestClose={onRequestClose}
  >
    <CardLayout>
      <Card>
        <p>Page demonstrates the following features:</p>
        <ul>
          <li>Page header action that presents a modal workflow</li>
          <li>Content that triggers Page APIs</li>
        </ul>
      </Card>
      <ApplicationInfoCard />
    </CardLayout>
  </Page>
);

Page1.propTypes = propTypes;

export default Page1;
