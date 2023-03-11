pipeline {
        agent any

        stages{
                stage ("Teste") {
                        steps {
                               nodejs(nodeJSInstallationName: 'node18', configId: '104831d2-f537-49ad-8940-d0ef714f32bf') {
                                 sh 'node -v'
                }
                        }
                }
        }
}