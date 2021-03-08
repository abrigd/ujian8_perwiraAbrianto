import React from 'react'
import { Link } from 'react-router-dom';

export default function SideBar() {
    return (
      <div>
        <div className="side-map">
          <h5>Welcome to MyData</h5>

          <nav>
            <ul>
              <li>
                <Link to="/">Dashboard</Link>
              </li>
              <li>
                <Link to="/manage-user">Manage User</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
}
