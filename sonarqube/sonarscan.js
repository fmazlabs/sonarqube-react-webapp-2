const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        token: "38f2706391b19936618d223cdf11943af533fade",
        options: {
            'sonar.projectName': 'sonarqube-react-project',
            'sonar.projectDescription': 'Here I can add a description of my project',
            'sonar.projectKey': 'sonarqube-react-project',
            'sonar.projectVersion': '0.0.1',
            'sonar.exclusions': '',
            'sonar.sourceEncoding': 'UTF-8',
        }
    },
    () => process.exit()
)