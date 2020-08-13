pipeline { // day la top level
	 
	agent any // noi bat dau thuc thi

	stages { // noi work happen
		
		stage("build") { 
			steps {
        // sh 'npm install'
        // sh 'npm build'
				echo 'building the application'

        // groovy
        script {
          def test = 2 + 2 > 3 ? 'cool' : 'not cool' 
          echo test
        }
			}
		}

		stage("test") { 
			steps {
				echo 'testing the application'
			}
		}

		stage("deploy") { 
			steps {
				echo 'deploying the application'
			}
		}
	}
}