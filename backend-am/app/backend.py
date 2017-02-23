from flask import Flask
import os

app = Flask(__name__)
# cache = redis.StrictRedis(host='redis', port=6379, db=0)
salt = "UNIQUE_SALT"
name = os.environ['HOSTNAME']


@app.route('/')
def mainpage():

    header = '<html><head><title>Bootcamp Baby</title></head><body>'
    body = "bootcamp"
    footer = '</body></html>'

    return header + body + footer


@app.route('/events')
def events():

    json = '''{
    "title": "devops bootcamp",
    "description": "Capgemini devops hackathon bootcamp",
    "id":1
    }
    '''

    return json

@app.route('/schedules/<event>')
def schedules(event):

    json = '''{
    "schedule": [
    { "time":"Mon", "item":"meetup" },
    { "time":"Wed", "item":"implement" },
    { "time":"Fri", "item":"show" }
    ]
    }
    '''

    return json

@app.route('/users/<event>')
def users(event):

    json = ''' [
    { "name": "Teo",
      "pic": "http://google.com"
      }

    { "name": "Mo",
      "pic": "http://google.com"
      }

    { "name": "Ed",
      "pic": "http://google.com"
      }
    ]
    '''

    return json

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
