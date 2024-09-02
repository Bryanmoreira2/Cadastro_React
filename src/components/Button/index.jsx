import { Button } from "./styles";
import PropTypes from "prop-types";


function DefultButton({ children, theme, ...props }) {
    return (
        <Button{...props} theme={theme}>{children} </Button>
    )
}
DefultButton.protoType = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}
export default DefultButton
