//importing http
const { log } = require('console');
const http=require('http');

//creating server
const server=http.createServer((req,res)=>{
    const {method,url}=req;
    if(url.toLowerCase()==='/'){
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`
        <div>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/signin">Signin</a></li>
            <li><a href="/signup">Signup</a></li>
          </ul>
        </div>
      `)
      return res.end()
    }
    else if(url.toLowerCase()==='/home'){
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`<div>
      <h1>Home Page</h1>
      <p>
        Welcome to our website. Explore amazing features,
        modern UI components, and seamless user experience.
      </p>
      <button>Get Started</button>
    </div>`)
    return res.end();
    }
    else if(url.toLowerCase()==='/signin'){
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`<div>
      <h1>Signin Page</h1>
      <p>
        Login using your registered email and password
        to access your account dashboard.
      </p>
      <form>
        <input type="email" placeholder="Enter Email" />
        <br /><br />
        <input type="password" placeholder="Enter Password" />
        <br /><br />
        <button>Signin</button>
      </form>
    </div>`);
    return res.end();
    }
    else if(url.toLowerCase()==='/signup'){
      res.writeHead(200,{'content-type':'text/html'});
      res.write(`<div>
      <h1>Signup Page</h1>
      <p>
        Create a new account and join our platform
        to explore all premium features.
      </p>
      <form>
        <input type="text" placeholder="Full Name" />
        <br /><br />
        <input type="email" placeholder="Enter Email" />
        <br /><br />
        <input type="password" placeholder="Create Password" />
        <br /><br />
        <button>Create Account</button>
      </form>
    </div>`);
    return res.end();
    }
    else{
      res.writeHead(404);
      res.write(`<h1>404-Error Not Found!</h1>`)
      return res.end();
    }
})

//port number
const PORT=3000;

//listen to port
server.listen(PORT,()=>{
  console.log(`Server is up and it is on http://localhost:${PORT}`);  
})