Package.describe({
    summary: "Port from digilord to allow on client",
    name: "dfischer:faker",
    version: "1.0.8",
    git: "https://github.com/dfischer/meteor-faker"
});

Npm.depends({"faker": "2.1.2"});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use('coffeescript');
  api.add_files('dfischer:faker.coffee', 'server');
  api.add_files('build/faker.js', 'client');
  api.add_files('dfischer:faker.html', 'client');

  api.export('faker', 'server');
});
