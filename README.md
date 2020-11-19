# Vets In Tech Web Development Course

## Week 4 Graduation, if you are good enough, John Shaw

#
### Retrospectiv
### Assignment

Final Project Deliverables:

- Mock Up
- MVP
- Breakdown
# To Do App MVP Iteration #1
​
## Framing Session
​
- Who: **54 year old** **Aspiring Nerd, trying to learn** named John
- What: Help organize his thoughts into a structured task list. Potentially help with **deadlines and "bleed over tasks".**
- When: **Late Evening after the normal work is done and I can learn**, when John can focus
- Where: Anywhere. **Computer**. 
- Why: John just keep forgetting tasks because he keeps track all in his head. Forgets task that he didn't do the previous days and etc. **His boss** is upset for forgetting their meeting plans.
​
## Features List
​
- Create a user maintenance screen to conduct CRUD operations for maintaining student transcripts.
- User community belong to the Ohio Public University System or the Ohio Department of Higher Education 
- Create / Add a user, institution, role, create date and end date and upon "add", it appears on screen. 
  - [T: 30 mins, S: C, P: H]
- Updating a user, institution, role, create date and end date and upon update the change appears on the screen. 
  - [T: 60 mins, S: N, P: M]
- Remove / Delete a user, institution, role, create date and end date and upon deletion the user is removed. 
  - [T: 30 mins, S: C, P: H]
- Order users based on Institution. 
  - [T: 1 hours S: N, P: L]
- Provide a list of Institutions to be added when the add or change is attempted.
  - [T: 1 hours mins S: X, P: L]
 - Provide a list of Roles to be prompted when the add or change is attempted. 
  - [T: 1 hours mins S: X, P: L] 
​
​
## Consideration
​
## TCS
​
- TIME: 5 hours
​
- SCOPE: 
  - Scale: 
    - C - Comfortable
    - N - Need Assistance
    - X - No idea
​
- COST/PRIORITY: $0 
  - Scale: 
    - H - High
    - M - Medium
    - L - Low
​
## MVP
​
Creating a to do app for that will allow creation of task and displayed in a priority list.
​- Create / Add a user, institution, role, create date and end date and upon "add", it appears on screen. 
  - [T: 30 mins, S: C, P: H]
- Updating a user, institution, role, create date and end date and upon update the change appears on the screen. 
  - [T: 60 mins, S: N, P: M]
- Remove / Delete a user, institution, role, create date and end date and upon deletion the user is removed. 
  - [T: 30 mins, S: C, P: H]


## POST-MVP
- Order users based on Institution. 
  - [T: 1 hours S: N, P: L]
- Provide a list of Institutions to be added when the add or change is attempted.
  - [T: 1 hours mins S: X, P: L]
 - Provide a list of Roles to be prompted when the add or change is attempted. 
  - [T: 1 hours mins S: X, P: L] 
- Verify 'Are you certain you want to Delete User?' (​Y or N)
  - [T: 30 min S: N, P: L]
- Order users based on Institution. 
  - [T: 1 hours S: N, P: L]
- Provide a list of Institutions to be added when the add or change is attempted.
  - [T: 1 hours mins S: X, P: L]
 - Provide a list of Roles to be prompted when the add or change is attempted. 
  - [T: 1 hours mins S: X, P: L] 

# Psuedocode
- Create a user John inputs a user this includes Institution, role, add date and end date and upon "add", it appears on screen. 
```js
function adduser(){
    // grab all the input tags values and store them in their own variable.
    // userName, institutionName, userRole, createDate, endDate
    
    // error/input validation making sure that the fields aren't empty.
        // all five fields are required for each user
    
    // the inputs field should be initialized with values so no junk data is in the fields
    // create an element with the tag li, stored to a variable, newUser
        // var newUser = document.createElement('userlist');
    // newUser = <li></li>
    // newUser.innerHTML = `<div class='UserItem'><p>${userName}</p><p>${institutionName}</p><p>${userRole}</p><p>${createDate}</p><p>${endDate}</p><button class='completeButton'>complete</button><button class='updDelButton'>update/delete</button></div>
    // I will append the new created userlist to the ul
        // make sure the ul has an id.
        // taskUl.appendChild(newUser);
}
```
- Order of users - user entry or Institution. 
- Complete a user - when John completes a user, show user completed in list.
- Updating a user - when John updates a user; show user updates completed in list. 
- Deleting a user - when John deletes a user; show user delete and ask to confirm; if Y delete. 
