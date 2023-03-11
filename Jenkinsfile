pipeline {
        agent any

        stages{
                stage ("Teste") {
                        steps {
                               nodejs(nodeJSInstallationName: 'Node 18.x', configId: '<config-file-provider-id>') {
                                 sh 'node -v'
                }
                        }
                }
        }
}