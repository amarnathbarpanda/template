import React from 'react';
import { homeActions } from '../config/data';
import Actions from './Actions';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <h2 className='title'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAtFBMVEX////vZDnuqEz7+/vQzsn58+vvtmvvcEnt7ez23NPPkn3Nzs37+fjbsHXxmHzsqU7QuZnZ2tfrZz7z8/HxxYrvdlHXhGnHx8T37uHusmLHpJfwg2HS1NPTto347+z25N7Ino/22bPnu4Lk5OD10KH0o4rwyb3ipZHfqWLhjXLMr4S8vLbIvrnleVbg4Nzk29fWtITVzb7s4tXu3MTfyarRxK7HhW7Kt7DIp5rpva/YqZjNnY1TXfnpAAABSUlEQVRYhe3Y2VLCMBSA4UqKBBvENFVECmVzBeO+v/97aUkqJ/TMpDYXKpP/sp35YJr2dAkC3+/FVrkqkyRvIoiTQpJG3nQmnBimmA6nTn+nYELPeMYzdRlC2DphMnDXd9gPsHli1IdMdrqPdIYMo+ZuA0kz7dYO0jkyjGowe2n5wNVhon/CXHSMhlyv1OURrGVjrha9EMTVYjDKo9665bWNGYaSwvSpwYyNNwMrk1JGQMVuuI2M7AyvcJ/0jGc2GWSG1GBu7+6PQU19LWRGbSvT7RvN6eohMhscGsU/nDdTKbZg+rkzXaQNJjbCGPbweFDuiYNDHD+PjV6QU5UIKnkpqRZcMyeLKAVxirxSECaQ1P2+YKIZLe+sXsFUuVKqMG4vIp7xzNYwr47M6O3946uldGMIlWrAuH1qyIda/iDo/OUjgA+Cf7xPQrg8KsczzUMAAAAASUVORK5CYII=" alt=""/>
                welcome to digipplus
            </h2>

            <h3 className="ann__title">Announcements📢</h3>
            <ul className="announcements">
                <li className='ann__item'>
                    <p>We are working on adding Project and Internship Details, So just fill up profile only.</p>
                </li>
            </ul>
            <div className="content">
                <Actions actions={homeActions}/>
            </div>

        </div>
    )
}

export default Home;