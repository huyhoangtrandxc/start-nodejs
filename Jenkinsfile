pipeline { // day la top level
	 
	agent any // noi bat dau thuc thi

	stages { // noi work happen
		
		stage("build") { 
			steps {
				echo 'building the application'
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