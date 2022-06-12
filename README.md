# HANDS-ONLY

- App that encourages people to provide hands-only CPR in case of cardiac-arrest emergencies

# TECH/TOOLS

[FRONTEND]: React with CRA with state management via useContext hook

[BACKEND]: NodeJS, Express, MongoDB-Atlas

[SUBSCRIPTION]: MailChimp API

# STEPS

[1]: Download the doc and run npm install to install all the dependencies
[2]: Use node server/index.js to run the server/ alternatively use nodemon
[3]: On a different terminal, cd client and run npm start

# TESTING

ANSWERS:
c-b-c-a-c-a-b-c-a

# THE IDEA

[GOOD_SAM_FEAR]

- It turns out that an impressive amount of people refrain from providing CPR in case of emergencies out of fear to do the wrong thing.

- Associations such as American Heart Association and Red Cross consistently put effort towards educating good-sams and simplifying guidelines in order to help resolve this issue

[THE_SOLUTION]

- This is an app that provides 9 quiz explanation and questions detailing the steps needed in order to help in case of cardiac arrest

- These are current guidelines available from The Red Cross.

- At the end of the quiz, the learner has the opportunity to sign up for newsletter to stay updated

# THE APPROACH

- The user is met with with a simple CTA page

- Pressing the START call-to-action button initiates the quiz modal

- The quiz consists of a dark blue scrollable explanation box, followed by a paragraph with a question in regards the explanation provided.

- The user will choose from 3 possible alternatives, getting a small warning in case the choice is incorrect, moving forward otherwise.

- After 9 quiz explanation/questions, the user receives a message stating the quiz is now over, with a button to finish.

- The finish button will lead to a congratulatory message and a form for newsletter subscription

- If the user chooses the subscribe, a request is sent to the server who will integrate MailChimp API for newsletter (email) campaign

- Alternatively, the user may opt out and click return home which closes the modal and resets the quiz

[DATA]

- Data is fetch from the server with useEffect and axios when root is accessed

- The server pulls it from Mongo database

- To avoid multiple requests from the front-end,server response with the data is stored in a hard coded empty array

[THINGS_TO_CHANGE]

- At the end of the quiz, a summary of the steps should be rendered to reenforce the concepts learned

[ARYSE_TANSY]: Self-taught full-stack web developer on a life-long journey of learning and applying new skills.
