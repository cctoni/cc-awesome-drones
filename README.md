# # codecentric awesome drones! 
Watch the videos or follow us on our channels:

Follow us on IG TV and our blog.
📺 [Instagram TV](https://www.instagram.com/sourcewars.io/channel/)
✍️ [Blog over at codecentric](https://blog.codecentric.de)

Maybe youtube? 🤟


⚠️️️ ⚠️⚠️️️ **ATTENTION**: Drones can hurt you and your beloved colleagues. Use the codebase at your own risk. Don’t be dumb and test the commands with removed propellers from your drone.  Don’t drink and fly. 🤷‍♂️ ⚠️️️ ⚠️️️ ⚠️️️


## Software Used
* React (with React Hooks!)
* Later on styling with maybe styled components or tailwind.css
* Node.js and UDP4 sockets for communicating with drone
* Socket.io WebSockets for sending data to/from the browser
* Next.js for easy react setup scaffolding

## Hardware Used
* [DJI Tello Drone](https://www.amazon.de/gp/product/B078XV32CJ/ref=ppx_yo_dt_b_asin_title_o05_s01?ie=UTF8&psc=1)
* [Extra Batteries](https://amzn.to/2SyV70J) - The Drone comes with one battery, but for continual development I recommend  two batteries or more — one in the charger and one in the drone. For flying away from your house you definitely need at least 3 as they only last about 10-15 mins.
* [Fast Battery Charger with 4 slots](https://amzn.to/2SAWqwb)


## How to use this code

### Frontend

1. cd `ui`
2. `npm i` yep it’s a nifty shorthand 🆒
3. `npm run dev`


### Backend
1. cd `backend`
2. `npm install`
3. connect to drone via wifi -  your computer really can do this 🛸
4. `npm start`


## Troubleshooting

[Docs for Tello are available here](https://dl-cdn.ryzerobotics.com/downloads/tello/20180910/Tello%20SDK%20Documentation%20EN_1.3.pdf)

Ensure to update your firmware. You can do this via the Tello app on your phone.  ⛑️ If you lose your WIFI connection to the drone, restart the server (backend) by typing `rs`  into the terminal. This will re-run the famous `command command`telling our drone that you are the awesome SDK hack0r. If not all your commands sent to the drone will be ignored. 

One does not simply send commands. 😝


## License — WTFPL 🤟

Use this as a basis for your cool, experimental stuff.  Please use it, hack it and if you like share your enhancements via PR. 

## Examples & Resources

* [jsolderitsch/tello-nodejs](https://github.com/jsolderitsch/tello-nodejs) - was the inspirational code for this project
* I need to find a way to stream video to the browser - maybe WebRTC 🙇‍♂️
* Link your repo here for others to learn! 💁‍♂️
