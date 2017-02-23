import React from 'react'

  class Dashboard extends React.Component {
  render() {
  return (
  <div>
    <div>
      <h2>Welcome to the Devops Bootcamp Portal!</h2>
        <p>For all of your DevOps Bootcamp queries. Access all pages from the top-left corner of the page.</p>
    </div>
    <body>
      <h3>Schedule:</h3>
      <ul>
        <li>09:30 - Introduction to Microservices. Location: Code Node</li>
        <li>12:15 - Lunch.</li>
        <li>13:15 - Practical session: using docker.</li>
        <li>17:00 - Day 1 finish.</li>
      </ul>
    </body>
  </div>
  )
}
}

export default Dashboard;
