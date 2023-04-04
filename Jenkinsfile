pipeline {
    agent any
    
    environment {
        GIT_URL = credentials('git-repo-frontend')
        AWS_REGION = 'ap-southeast-2'
        S3_BUCKET_NAME = 'uat.wrigo.com.au'
    }

    stages {
        stage('Git checkout') {
            steps{
                git branch: 'main', credentialsId: 'GitRepoAccessCredential', url: "${GIT_URL}"
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Test') {
            steps {
                //sh 'npm run test'
                echo 'test to be back'
            }
        }

        stage('Build ') {
            steps {
                sh 'npm run build'
                stash includes: 'build/*', name: 'app_build'
            }
        }
        
        stage('Deploy') {
            steps {
                unstash 'app_build'
                sh 'mkdir -p /var/lib/jenkins/app_build'
                sh 'cp -r build/* /var/lib/jenkins/app_build'
                
                withAWS(region: "${AWS_REGION}",credentials: 'aws-cli-credential') {
                sh 'aws s3 cp /var/lib/jenkins/app_build s3://${S3_BUCKET_NAME} --recursive'
                }
            }
        }
    }
    
    post {
        always {
            cleanWs()
        }
    }
}
