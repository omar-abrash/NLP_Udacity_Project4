// import all sass files
import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"

// import all js files
import { allHandleSubmit } from './js/allHandler'
import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'
import {handleSubmitTwo} from './js/formTwoHandler'


// export js functions
export {
    allHandleSubmit,
    handleSubmit,
    checkForName,
    handleSubmitTwo
}
