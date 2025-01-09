
set up path for componets in react
-install react router dom using the commend 
npm i react-router-dom

-step to set-up path for component using react router dom

    -React App must render inside
    <BrowserRouter></BrowserRouter>
    -components needs to set-up path must inside <Routers> components of reat router dom
    -<Route > using define each component path
    -<Route > is higher order component(HOC)  
    -getting component as props in a component

-create json server
    -create a folder to hold file
    -create packge.json file using the npm init -y
    -create a json file
    -install json-server using the command npx json-server json_file_name (npm i json-server@0.17.4)
    -

    axios for the react api  libreary npm i axios 

    add modified alert box library npm i react-toastify

    --how to deploy json file using node js
    -----------------------------------------

        - create a index.js file in server folder
        - update script in "pakege.json" file as "start":"node index.js"
        - create .gitingnore file and add node_modules folder
        - define json-server to run json file in index.js
