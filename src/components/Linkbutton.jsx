import { Button} from 'react-bootstrap';

import './Linkbutton.css'

export const LinkButton = ({Link}) => {

    if (!Link || Link === "None") {
      return null;
    }
    return (
      <div className="link-button">
        <Button as="a" href={Link}>LINK</Button>
      </div>
    );
  
};