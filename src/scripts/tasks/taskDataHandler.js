// This will be a variable for my URL API call 
const taskAPI = "";


// This is where I will declare a constant and export my function that I will build for my API call

const randomTask = {
    
// This will be my fetch call initially for my get function and will parse the response into JSON

getAllTasks () {
        return fetch(taskAPI)
            .then(response => response.json())
    },
}