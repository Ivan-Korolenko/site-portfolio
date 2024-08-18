# What is this?

It's my portfolio website repository. It contains all the code that I've wrote for my website.
You can use it freely for your purposes. Maybe you'll find something useful here.

I started this project in 2017. All what I did back then can be seen in the original commit.

# Live version

You can see what it looks like in action: https://ivankorolenko.com/

# How to start project locally

Requirements: you need Node and http-server library installed
https://nodejs.org/en/download
https://github.com/http-party/http-server#installation

##### 0.

Install NVM

##### 1.

Open Terminal in the project folder

```
nvm install 12.3.0
nvm use 12.3.0
npm i node-sass@4.14.1
npm i
npm run develop
```

##### 2.

Open another Terminal in the project folder

```
npm i -g http-server@13.1.0
http-server ./dist  -c-1
```

By default, it runs on port 8080, you can change it with a flag
https://github.com/http-party/http-server#available-options
