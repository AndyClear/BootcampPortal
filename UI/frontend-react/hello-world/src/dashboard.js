import React from 'react'
import {List,ListItem} from 'material-ui/List';

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
        <p>For all of your DevOps Bootcamp queries. Access all pages from the top-left corner of the page.</p>
    </div>
      <h3>Schedule:</h3>
      <div>
        <ul>
        {ret}
        </ul>
      </div>
  </div>
  )
}
}

export default Dashboard;
