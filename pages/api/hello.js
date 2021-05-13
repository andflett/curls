import axios from "axios"

export default async function SendQuestion(req, res) {

  console.log(req)

  await SendEmail('hi', 'there').then(response =>
    res.status(200).json({ response })
  )

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
        "value": `<p>${message}</p><br /><p><a href="">Check again any time here</a></p>`
      }
    ],
    "subject": `${subject}`,
    "personalizations": [
      {
        "to": [{
          "email": "andrflett@gmail.com",
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
