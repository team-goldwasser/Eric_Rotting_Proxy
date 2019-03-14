## What is it?
- Proxy server for a Rotten Tomatoes clone group project.
- It connects three service modules: Scoreboard, Tickets & Showtimes, and Audience Reviews.

### Installing
- ```npm install```
### Start Local Server
- ```npm start```

## Deployement
AWS: Dockerized Node App
- http://ec2-18-144-66-112.us-west-1.compute.amazonaws.com/m/black_panther/

Cloudfront with improved page load speed
- http://daqyaicq3dmxp.cloudfront.net/m/black_panther/

Click any movies in the Top Box Office to update

## Tech Choices
Client
- Bootstrap
- CSS
	
Server
- Node
- Express

## Acknowledgements
- This is a group project that I completed with bernardlau and chrisweilacker at Hack Reactor.
- Each member clones one service module from Rotten Tomatoes
- Each member creates a proxy server to combine all modules

## Related Projects
- Tickets & Showtimes: https://github.com/number-ape/rotten_pomodoro_tickets_showtimes
- Scoreboard (chrisweilacker): https://github.com/number-ape/Rotten_Tomatoes_Scoreboard_Service
- Audience Review (bernardlau): https://github.com/number-ape/Rotten_Tomatoes_Reviews_Service
