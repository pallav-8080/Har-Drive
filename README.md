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

Following NFRs have been targeted to ensure the reliability of the application

1. __Usability__ - The application is designed following the clean and active UI principles. The primary aim is to keep is easy for users to navigate without any guide or support. To achieve this, a list of UX design principles are sincerely followed which incudes - allowing scrolling for large contents, allowing drag and drop for ease of use, making use of intuitive action triggers like buttons and 3 dots for user actions, and displaying error and success toasters wherever necessary. Responsive UI is also considered a part of usability and the application is fully functional to be used across a range of devices with different screen sizes.

2. __Modularity__ - The application is built with small and reusable code modules (components as known in React). The components are structured using the Atomic Design Principle, making it easy for any developer to extend and update the codebase freely.
3.  __Security__ - Since this application collects data from a user's system, security is a critical NFR. A virus-infected file can lead to data loss for the user and sacrifice the application server as well. To ensure the security of both the application and the user, we use a 3rd party module that scans for viruses before uploading files.
4.   __Robustness__ - The application has proper error handling to handle edge cases. Yet in case it breaks, the user will still be able to see the uploaded files and access file-related operations. Since there is no backend to the application, the use of browser storage is done to save the state of the data room and in the event of failures, load the previous back into ReactContext.


## Tech stack
1. __React__ - The application was initialized using the `create-react-app` scaffold. The various reasons behind choosing the framework include -  out-of-the-box tooling (Webpack, ESlint, Babel, etc), enhanced modularity(our NFR), allows ease of user event handling.
2. __Typescript__ - A type system to make dynamic JS code more predictable. TS is added to allow specifying the types of data being passed around within the code, and it also helps in catching typical React errors like props mismatch and immutability issues, easy to catch during development.
3. __Material-UI__ - This is the choice of design library used for the application. A design library helps ensure uniform and responsive styling  across the application. Out of the many available solutions, MUI is chosen due to its ease of use, high customizability, and detailed documentation. It comes out of the box with styled React components, making it easy to define default styles for React components.

  ## Code organization
The application follows _Atomic code organization_ principle.
`src` - This folder contains the client-side code
`src`
    `components`
     `styles`
     `icons`

## Challenges Faced
1. __Drag and Drop__ - considering limited time, a 3rd party react library was used to offer drag&drop feature. Upon researching and after some trial and error it becomes clear that most of the drag&drop libraries out there offer limited funcitonalities. To make the correct choice of this library was crucial as it involved balancing functionalities and customization with fewer integration efforts and easy documentation to follow. After trying out 3 libraries, finally, a package called _react-drag-drop-files_ was adopted.
2. __Handling large file hierarchy__ - in a usual setup there will be a backend server that provides with necessary data on the list of files and folders inside the room. But with no backend, all of the state updates need to be stored somewhere. We make use of React context to store the full hierarchy of files and folders and make synchronous updates to the store. Although this solution works fine with fewer files, it comes with the challenge of updating the directory tree when there is a large nested hierarchy of files involved. To simplify we clone the context and store the absolute path for each file. Yet as of now the application only supports nesting up to 2 levels deep.

## Further improvements
Following are the enhancements that can be made to the current application state - 
1. __Support filters and search__: Add filters for file type, date added, owner, file size, etc. This will boost usbaility of the application by making it quicker with fewer clicks for user to access files of their choice.
2. __Allow file downloading__: Currently the system only provides a preview of the files in the data room. Problem with this is, some files can be very large, making git hard to read through file preview. A user might be interested in downloading them and viewing with appropriate other applications.
3. __Data room invitation__: The current application only allows a single user to perform operations in the data room. for collaboration, a user might be interested in sharing the whole or partial data room with someone else. To support this use case, either provide a quick public link to the data room for public sharing or allow sharing privately through email.
4. __Track file activity__: The application allows editing files - name and destination folder. This is perfectly fine for single users in a data room. But with multiple users, it's hard to keep track of edits. Tracking a file's journey within the data room will help follow up actions between users working on same file.
   
# Running the application locally
To run the app in development mode use `npm run start`.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
