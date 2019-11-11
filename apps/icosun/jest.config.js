module.exports = {
  name: 'icosun',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/icosun',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
