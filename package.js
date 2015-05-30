Package.describe({
    summary: "Faker.js packaged for Meteor. Generate massive amounts of fake data. Port from digilord to allow on client",
    name: "dfischer:faker",
    version: "1.0.6",
    git: "https://github.com/dfischer/meteor-faker"
});

Npm.depends({"faker": "2.1.2"});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('coffeescript');
  api.add_files('faker.coffee', 'server');
  api.add_files('build/faker.js', 'client');

  api.export('faker');
});
