# handling events
    -calling non-parameterized event handler
    -calling parameterized event handler


 state chnages over time but the data cannot be changed
    -state is immutable
    -state is read-only
    -state is a snapshot of the data at a particular point in time
    -state is a representation of the data at a particular point in time

--> every component in the react should return the react element

--> only one parent element can be returned from a component\
-->react elemt can be defined as JSX format which is a syntax extension for JavaScript and it allows us to write HTML-like code in our JavaScript code
-->rendering and displaying 
      the react element on the screen is done by the reactDOM library which provides a method     called render() that takes a react element and a DOM element as arguments and renders the react element into the DOM element

### form vadation and submissions
    -react
    -react hook form or formik react libraries for form handling and validation

#       const {register,handleSubmit,formState:{errors}} = useForm()
        -register is a function that is used to register an input or select element and apply validation rules to it
        -handleSubmit is a function that is used to handle the form submission and it takes a callback function as an argument that will be called when the form is submitted and the validation is successful
        -formState is an object that contains the state of the form and it has a property
        called errors that contains the validation errors for each input field
        
