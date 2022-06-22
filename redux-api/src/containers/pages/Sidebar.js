import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="container">
            <div className="side-lists">
                <h4>Clothing / Women's / Outwear</h4>
                <h4>Filters</h4>
                <div>
                    <h5>Attributes</h5>
                    <hr className="horizontal-line" />
                    <ul>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                    </ul>
                    <hr className="horizontal-line" />
                </div>

                <div>
                    <h5>Attributes</h5>
                    <ul>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                    </ul>
                    <hr className="horizontal-line" />
                </div>
                <div>
                    <h5>Colors</h5>
                    <ul class="colors-list">
                        <li class="one"></li>
                        <li class="two"></li>
                        <li class="three"></li>
                        <li class="four"></li>
                        <li class="five"></li>
                        <li class="six"></li>
                        <li class="seven"></li>
                        <li class="eight"></li>
                        <li class="nine"></li>
                        <li class="ten"></li>
                    </ul>
                    <hr className="horizontal-line" />
                </div>
                <div>
                    <h5>Attributs</h5>
                    <ul>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                        <li><input type="checkbox" /> option</li>
                    </ul>
                    <hr className="horizontal-line" />
                </div>

            </div>
        </div>
    )
}

export default Sidebar;