# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

  Your answer: We can fix this using migration method.The name of the foreign key name is Cohort_id. Foreign key be on student model

  Researched answer:In Research migration is a file that is generated through a rails command that will allow you to make changes to the database.
  The name of foriegn key is Cohort-Id and key be on Cohort model




2. Which RESTful routes must always be passed params? Why?

  Your answer: I think Update and Destroy must always be passed params

  Researched answer: In research Update and Destyore are troutes must always be passed params because they require paerticular column Id to make an action like update, edit, show and delete 



3. Name three rails generator commands. What is created by each?

  Your answer: I remeber that 1.rails new appName-it generates a new folder,
               2.rails db:create 
               3.rails g model List it can create model named List

  Researched answer: In research I learned some commands
               1.rails new appName-it generates a new    folder,
               2.rails db:create -setsup an empty database,  
               3.rails g model List-it can create model named List
               4.$ rails generate migration AddItemToList- it generates a new file in the migration directory



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students 
The Controller method is index and show. The action is to get or display all the students list         

method="POST"   /students
The Controller method is create. The action is to create a new student

method="GET"    /students/new   
 The Controller method is new. The action is to return an HTML form for creating a new student

method="GET"    /students/2   
The Controller method show. The action is to dispaly a specific or one item of student id:2

method="GET"    /students/2/edit    
The Controller method is edit. The action is to return an HTML form for editing a student id:2

method="PATCH"  /students/2     
The Controller method is update. The action is to modify specific id:2 student 

method="DELETE" /students/2      
The controller method is destroy. The action is to delete or remove student id:2


5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).

1. As a user, I can see landing page with the list of titles for all my to do items
2. As a user, I can see a nav link that will take me to view where i can add a item with description to my to do list
3. As a user, I can see a nav link that will take me to view where i can add another item with description to my to do list 
4. As a user, I can see a nav link that will take me to view where i can add a remainder for each item to my to do list
5. As a user, I can see a save button that will save my added items to my to  do list
6. As a user, I can see all my items with description which I saved to to do list
7. As a user, If I want to make changes in my list I can see a nav link to view where i can make changes to my to do list
8. As a user, I can make update in my list I can see a nav link to view where I can update to my to do list
9. As a user, I can make delete in my list I can see a nav link to view where I can delete to my to do list 
10. As a user, I dont want my app so I can see a nav lnk to view where I can delete my app to do list