### Planning out file + componnents

#### Sections:

- Sections:
  - General:
    - Inputs:
      - Name
      - Email
      - Phone-Number
  - Educational Experience:
    - Inputs:
      - School-name
      - Title of study
      - Date of study
  - Practical Experience
    - Inputs:
      - Company name
      - Position title
      - Main responsbilities
      - Date worked

#### How can these be grouped?

- Sections:

  - Array of Objects: [general, educational, practical]
  - Each object will contain the information for the inputs:
  - _OR_ I could hard-code evvery input, to match, but that would be way too much work
  - Input will directly update the CV display
  - Eventlistner (useState) will be attached to the "section" component and be different by using Display
  - Each input will have the title be changed by passing through a prop "name"
  - useState will reflect overall Display() component.

  - Files/components:
    - section.jsx
    - allSection.jsx
    - input.jsx
    - display.jsx
    - app.jsx (display section + displays)

### Instructions:

1. [x] Create a new React project.

2. [x] Think about how to structure your application into components. Your application should include:
       A section to add general information like name, email and phone number.
       A section to add your educational experience (school name, title of study and date of study)
       A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)

3. Be sure to include an edit and submit button for each section or for the whole CV. The submit button should submit your form and display the value of your input fields in HTML elements. The edit button should add back (display) the input fields, with the previously displayed information as values. In those input fields, you should be able to edit and resubmit the content. You’re going to make heavy use of state and props, so make sure you understood those concepts.

4. Create a components directory under your src directory and add your components.

5. Include a styles directory under your src directory for your CSS files. You’ll need to import these in the component files to use them.

6. Push the results and deploy them with any of the options mentioned below!
