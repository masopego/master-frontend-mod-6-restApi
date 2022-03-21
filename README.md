# Master Frontend Module 6: Rest API - GRAPHQL 🌐 🌐 🌐


### Introduction ✨: 

- We are going to consume a public API to display data from the Rick & Morty series : [https://rickandmortyapi.com/](https://rickandmortyapi.com/)
- To simulate writes we are going to use a local server [json-server](https://github.com/typicode/json-server)
- Copy the files from the `00-boilerplate` folder of the previous repository, locally.
- Change the scenes, routes and pods to character-collection and character
- Update the json-server
- Implement the mandatory exercises.


### Statement 🔥: 

#### Exercise 1: 

- Create a project in which we are going to get a list of actors from the Rick & Morty Rest API, using Axios
- Navigating to the page of a `character` we are going to show its details (second call to the Rest API).


#### Exercise 2: 

- Set up a local json-server
- Add a collection of `characters` (you can take the information from the previous exercise).
- In addition to the fields we already had, we added a new one where we can save the best phrases of each character

        - The field can be called `bestSentences`. 
        - Initialize this new field to empty for each character.
- Replace endpoints to point to json-server.
- The user can edit and save the `bestSentences` fields.


### Optional 🔥🔥🔥:

- Deploy the same application (from exercise 1) but using the [GraphQL API](https://rickandmortyapi.com/documentation/#graphql)
- Implement pagination in GraphQL.
