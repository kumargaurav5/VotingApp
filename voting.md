# Voting application

## WHAT ?
A app where user candidate can register and Voter can vote registered candidate .

## Voting app functionality
1. user sign up / sign in
2. user can see list of candidate
3. voter can vote only one candidate 
4. there is a route which shows the list of candidate and their live counts sorted by their vote
5. user must have a unique id - adhar card
6. there should be one admin who can only maintain the table of candidates and he can't able to vote.
7. user can change their password
8. login with adhar and password 
9. admin can't vote 

## routes
User Authenication:
- /signup: Post - Create a new user
- /login: post  - Log in to an existing account

Voting:
- /candidates: Get - Get the list of candidates 
- /vote/:candidateId : post  - Log in to an existing account

Vote Counts:
- /vote/counts : Get - Get the list of candidates sorted in their vote counts 

User Profile:
- /profile : Get - Get the user's profile information
- /profile/password : Put - change the user's password 

Admin Candidate Management :
- /candidates :Post - create a new destination
- /candidates/:candidateId : put - update an existing candidate
- /candidates/:candidateId : delete - delete a candidate from a list.

