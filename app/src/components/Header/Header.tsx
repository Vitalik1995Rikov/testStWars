import { Link } from 'react-router-dom';

function Header() {
    return <div>Header
        <Link to='/'>Home</Link>
        <Link to='/characters'>Characters</Link>
    </div>
}

export default Header;