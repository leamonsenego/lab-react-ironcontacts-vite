import PropTypes from 'prop-types'
function Greetings(props) {

    const greetings = {
        de: "Hallo",
        en: "Hello",
        es: "Hola",
        fr: "Bonjour"
    }
    return (
        <div className="greetings border d-flex">
            {greetings[props.lang]},{props.children}


        </div>


    )


}
export default Greetings

Greetings.propTypes = {
    lang: PropTypes.string,
    children: PropTypes.string,
    
}