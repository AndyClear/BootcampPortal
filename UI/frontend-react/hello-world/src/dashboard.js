import React from 'react'
import {List,ListItem} from 'material-ui/List';
import {Timeline} from 'react-twitter-widgets'

class Dashboard extends React.Component {

 render() {
     const ret = [];
    const timeList = ["09:30", "12:15", "13:15", "17:00"];
    const itemList = ["Introduction to Microservices. Location: Code Node", "Lunch", "Practical session: using docker", "Day 1 finish"]
    for (let i = 0; i < timeList.length; i++) {
        ret[i] = <li>{" " + timeList[i] + " - " + itemList[i]}</li>

        }

  return (
  <div>
    <div>
      <h2>Welcome to the Devops Bootcamp Portal!</h2>
        <p>For all of your DevOps Bootcamp queries. Tweet using #devopsBootcamp and leave us a nice comment :).</p>
    </div>
      <h3>Schedule:</h3>
      <div>
        <ul>
        {ret}
        </ul>
      </div>
      <Timeline
    dataSource={{
      sourceType: 'widget',
      widgetId: '834005652318072833' 

    }}
    options={{
      height: '400', 
      width: '400'
    }}
    onLoad={() => console.log('Timeline is loaded!')}
  />
  </div>
  )
}
}

export default Dashboard;
