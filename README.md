Polling App
This is a basic polling app that allows users to create questions with multiple options and vote on those options. The app is built using Node.js, Express, MongoDB, EJS, and Bootstrap.

Features
Create Questions: Users can create new poll questions by providing a question text and a list of options (comma-separated).
Vote on Options: Users can vote on the options of existing questions by selecting their choice from a dropdown menu and providing their name.
View Results: The app displays the percentage of votes for each option, allowing users to see the current status of the poll.
Delete Questions: Users can delete questions, removing them from the poll.
Installation
Clone the repository:

bash
Copy code
git clone <repository_url>
Install dependencies:

bash
Copy code
npm install
Set up MongoDB:

Make sure you have MongoDB installed and running.
Create a database named poll-app.
Run the application:

bash
Copy code
node app.js
Visit http://localhost:3000 in your web browser.

Usage
Create a Question:

Click on the "Create Question" button.
Enter the question text and options in the form.
Click "Create Question" to submit.
Vote on a Question:

Scroll down to view existing questions.
Select an option and enter your name in the voting form.
Click "Vote" to submit your vote.
View Results:

Each question card displays the percentage of votes for each option.
Delete a Question:

Each question card has a "Delete Question" button.
Click on the button to delete the corresponding question.
Technologies Used
Node.js
Express
MongoDB
EJS (Embedded JavaScript)
Bootstrap
Contributing
Feel free to contribute to the development of this project by opening issues or submitting pull requests.
