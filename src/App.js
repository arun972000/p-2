import './App.css';
import Sidebar from "./sidebar/sidebar";
import Navbar from './navbar';
import Card from './components/header cards';
import Chart from './components/chart';
import React, { useState } from 'react';
import Linechart from './components/linechart';
import Dchart from './components/donut chart';
import Card2 from './components/card2';
import "./components/card2.css";
import Colorcard from './components/colorcard';

function App() {
  const [toggle, settoggle] = useState(false)

  function handling() {
    if (toggle) {
      settoggle(false)
    } else {
      settoggle(true)
    }
  }
  return (
    <div className="App">
      <div className="d-flex">
        <Sidebar toggle={toggle} />
        <div className="container-fluid">
          <Navbar toggle={toggle} handling={handling} />
          <div className="d-flex justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <button className="btn btn-primary">Generate Report</button>
          </div>
          <div className="row">
            <Card title="EARNINGS (MONTHLY)" price="$40,000" icon={<i className="fas fa-calendar fa-2x text-gray-300"></i>} color="#4e73df"/>
            <Card title="EARNINGS (ANNUAL)" price="$215,000" icon={<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>} color="#1cc88a"/>
            <Card title="TASKS" price="50%" icon={<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>} color="#36b9cc"/>
            <Card title="PENDING REQUESTS" price="18" icon={<i class="fas fa-comments fa-2x text-gray-300"></i>} color="#f6c23e"/>
            <div className="row">
              <Chart width="col-12 col-sm-12 col-md-7 col-lg-8" title="Earnings Overview">

                <Linechart />
              </Chart>
              <Chart width="col-12 col-sm-12 col-md-5 col-lg-4" title="Revenue Sources">

                <Dchart />
              </Chart>
            </div>
          </div>
          <div className="row">


            <Colorcard><Card2 title="Projects">
              <h4 className="small font-weight-bold">Server Migration<span class="float-right">25%</span></h4>
              <div class="progress mb-4">
                <div class="progress-bar bg-success" role="progressbar" style={{ width: "25%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Customer Database<span class="float-right">50%</span></h4>
              <div class="progress mb-4">
                <div class="progress-bar bg-info" role="progressbar" style={{ width: "50%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Payout Details<span class="float-right">75%</span></h4>
              <div class="progress mb-4">
                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h4 className="small font-weight-bold">Account Setup<span class="float-right">Complete!</span></h4>
              <div class="progress mb-4">
                <div class="progress-bar bg-danger" role="progressbar" style={{ width: "100%" }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </Card2></Colorcard>
            <div className="col-lg-6 mb-4">
              <Card2 title="Illustrations">
                <div className="text-center">
                  <img src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg" className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} alt="Responsive" />
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                <a target="blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
              </Card2>
              <Card2 title="Development Approach">
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.
                  Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
              </Card2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
