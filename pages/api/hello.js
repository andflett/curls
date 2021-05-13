import axios from "axios"

export default async function SendQuestion(req, res) {

  console.log(req.body[0]['Stock Counter'])

  let message = null
  let subject = null

  if(req.body[0]['Stock Counter'] == "Sold out online") {
    message = "<p>Still out of stock, we'll try again at 7am tomorrow.</p><br /><p><a href='https://isbootscurlcremeinstockyet.vercel.app/'>Check again any time here</a></p>"
    subject = "Boots Curl Creme is still sold out."
  } else {
    message = "<p>Curl creme is no longer showing as out of stock on boots.com</p><p><a href='https://www.boots.com/boots-essentials-curl-creme-250ml-10088417'>Go check</a></p>"
    subject = "Boots Curl Creme may be back in stock!"
  }

  if(message && subject) {
    await SendEmail(message, subject).then(response =>
      res.status(200).json({ response })
    )
  } else {
    res.status(500).json({ "error": "error" })
  }

}

async function SendEmail(message, subject) {

  const authConfig = {
     headers: {
        Authorization: "Bearer " + process.env.SENDGRID_TOKEN
     }
  }

  const email = {
    "content": [
      {
        "type": "text/html",
        "value": `${message}`
      }
    ],
    "subject": `${subject}`,
    "personalizations": [
      {
        "to": [{
          "email": "cristinanlfonseca@gmail.com",
          "name": "Cris"
        }]
      }
    ],
    "from": {
      "email": 'andrflett@gmail.com',
      "name": 'Andrew Flett'
    }
  }

  axios.post('https://api.sendgrid.com/v3/mail/send', email, authConfig)
  .then((res) => {
    resolve(res.response?.data)
  })
  .catch((res) => {
    reject(res.response?.data?.errors)
  })

}
