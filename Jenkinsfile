pipeline {
        agent any

        stages{
                stage ("Teste") {
                        steps {
                               nodejs(nodeJSInstallationName: 'node18', configId: '<config-file-provider-id>') {
                                 sh 'node -v'
                }
                        }
                }
        }
}