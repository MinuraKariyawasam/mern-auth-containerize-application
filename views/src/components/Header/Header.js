import React from 'react'
import { Link } from 'react-router-dom' 

export default function Header() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to = "/">
        <a class="navbar-brand" href="#">Mern Authentication System</a>
        </Link>  
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <Link to = "/login">
                <a class="nav-item nav-link active" href="#">Login <span class="sr-only">(current)</span></a>
              </Link>
              <Link to = "/signup">
                <a class="nav-item nav-link" href="#">Signup</a>
              </Link>
            </div>
        </div>
      </nav>
  
    );
}



