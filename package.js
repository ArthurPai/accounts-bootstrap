Package.describe({
  name: 'std:accounts-bootstrap',
  version: '1.1.2',
  summary: 'Bootstrap UI - Accounts UI for React in Meteor 1.3',
  git: 'https://github.com/std/accounts-bootstrap',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3');
  api.use('ecmascript');
  api.use('underscore');
  api.use('fourseven:scss@3.4.1');
  api.use('std:accounts-ui@1.1.20');

  api.addFiles([
    'styles.scss', 'social-buttons.css'
  ], 'client');

  api.mainModule('main.jsx');
});
