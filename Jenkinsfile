CODE_CHANGE = getGitChanges()
pipeline { // day la top level
	 
	agent any // noi bat dau thuc thi
  environment { // noi dinh nghia bien moi truong
    NEW_VERSION = '1.3.0'
    // SERVICE_CREDENTIALS = credentials('github')
  }
  tools { // configure tools (not npm and yarn)
    maven 'Maven' // Maven configure trong global tool
  }
  parameters {
    string(name: 'VERSION', defaultValue: '', description: 'version to deploy on prod')
    choice(name: 'VERSION', choices: ['1.1.0', '1.2.0', '1.3.0'], description: '')
    booleanParam(name: 'executeTests', defaultValue: true, description: '')
  }

	stages { // noi work happen
		
		stage("build") { 
      when {
        expression {
          BRANCH_NAME == 'dev' && CODE_CHANGE == TRUE
        }
      }

			steps {
        // sh 'npm install'
        // sh 'npm build'
				echo 'building the application'
        echo "building version ${NEW_VERSION}"

        // groovy 
        // script {
        //   def test = 2 + 2 > 3 ? 'cool' : 'not cool' 
        //   echo test
        // }
			}
		}

		stage("test") { 
      when {
        expression {
          BRANCH_NAME == 'dev' && params.executeTests
        }
      }

			steps {
				echo 'testing the application'
			}
		}

		stage("deploy") { 
			steps {
				echo 'deploying the application'
        echo "deploying version ${params.VERSION}"
        // echo "deploying with ${SERVICE_CREDENTIALS}"

        withCredentials([ // can cai dat credentials binding plugin
          usernamePassword(credentials: 'github', usernameVariable: USER, passwordVariable: PWD)
        ]) {
          sh "some script ${USER} ${PWD}"
        }
			}
		}

    // thuc hien sau khi all stage xong suck email...
    post {

      // luon thuc hien bat ke thanh cong hay that bai
      always {
        //
      }

      success {
        //
      }

      failure {
        //
      }
    }
	}
}