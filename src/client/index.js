// import all sass files
import "./styles/resets.scss"
import "./styles/base.scss"
import "./styles/header.scss"
import "./styles/form.scss"
import "./styles/footer.scss"

// import all js files
import { handleSubmit } from './js/formHandler'
import { checkForName } from './js/nameChecker'


// export js functions
export {
    handleSubmit,
    checkForName
}
