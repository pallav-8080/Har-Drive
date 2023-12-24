## Application link

This application can be accessed at [Har-Drive](https://har-drive.netlify.app/).

## Application Details

### Functional Requirements

The application supports the following features - 

1. Users can upload files and folders by dragging and dropping or by using a file upload menu.
2. Users can edit file names.
3. Users can drag and move files into folders.
4. Users can delete any files or folders.
5. Users can switch between grid view and table view.
6. Users can preview a file without downloading it.

### Non-Functional Requirements 

Following NFRs have been targeted to ensure reliability of the application

1. __Modularity__ - The application is built with small and reusable code modules (components as known in React). The components are structured using the Atomic Design Principle, making it easy for any developer to extend and update the codebase freely.
2. __Security__ - Since this application collects data from a user's system, security is a critical NFR. A virus-infected file can lead to data loss for the user and sacrifice the application server as well. To ensure the security of both the application and the user, we use a 3rd party module that scans for viruses before uploading files.
3. __Robustness__ - The application has proper error handling to handle edge cases. Yet in case it breaks, the user will still be able to see the uploaded files and access file-related operations. Since there is no backend to the application, we use the browser storage to save the state of the data room and in the event of failures load it back using ReactContext.


## Development practices used
1. 
# Further improvements
# Tech stack
1. React - The application was initialized using the `create-react-app` scaffold. The various reasons behind choosing the framework include -  out-of-the-box tooling (Webpack, ESlint, Babel, etc), enhanced modularity(our NFR), allows ease of user event handling.
2. Typescript - A type system to make dynamic JS code more predictable. TS is added to allow specifying the types of data being passed around within the code, and it also helps in catching typical React errors like props mismatch and immutability issues, easy to catch during development.
3. Material-UI - This is the choice of design library used for the application. A design library helps ensure uniform and responsive styling  across the application. Out of the many available solutions, MUI is chosen due to its ease of use, high customizability, and detailed documentation. It comes out of the box with styled React components, making it easy to define default styles for React components.
  
# Challenges Faced
# Code organization

# Runnin the application locally
To run the app in development mode use `npm run start`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
