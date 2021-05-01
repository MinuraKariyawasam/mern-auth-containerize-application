import React from 'react'

export default function Login() {
    return (
                
<div class = "container">
    <div class="pt-5 pb-5 fs-1">
        <h1>
        Login
        </h1>
    </div>    
<div class="d-flex justify-content-center pt-auto">
        <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
            <label class="form-check-label pb-2" for="exampleCheck1">Check me out if you are not registered user</label>
        </div>
        <button type="submit" class="btn btn-primary">Login</button>

        </form>
</div>
</div> 
    )
}
