// import React, { useEffect } from "react";
// import ZingChart from "zingchart";
// import Navbar from "./components/Navbar";
// import "./Dashboard.css";

// const Dashboard = () => {
//   useEffect(() => {
//     // ZingChart license key
//     ZingChart.LICENSE = ["7b185ca19b4be2cba68fdcd369c663a9"];

//     // Render charts
//     ZingChart.render({
//       id: "chart1",
//       height: "100%",
//       width: "100%",
//       data: {
//         type: "pie",
//         backgroundColor: "#00ffcc",
//         title: {
//           text: "Voters vs Eligible Voters",
//           fontColor: "white",
//           fontSize: "18px",
//         },
//         series: [
//           {
//             values: [70, 30], // 70% voted, 30% did not
//             backgroundColor: ["#00ffcc", "#ff0066"],
//           },
//         ],
//         tooltip: {
//           text: "%data-value Voted",
//           fontColor: "#fff",
//         },
//       },
//     });

//     ZingChart.render({
//       id: "chart2",
//       height: "100%",
//       width: "100%",
//       data: {
//         type: "bar",
//         backgroundColor: "#ff0066",
//         title: {
//           text: "Gender Voting Percentage",
//           fontColor: "white",
//           fontSize: "18px",
//         },
//         scaleX: { item: { fontColor: "white" } },
//         scaleY: { item: { fontColor: "white" } },
//         series: [
//           {
//             values: [60, 40], // 60% females, 40% males
//             backgroundColor: "#ff00ff",
//           },
//         ],
//         tooltip: {
//           text: "%data-value % Votes",
//           fontColor: "#fff",
//         },
//       },
//     });

//     ZingChart.render({
//       id: "chart3",
//       height: "100%",
//       width: "100%",
//       data: {
//         type: "pie",
//         backgroundColor: "#00ffcc",
//         title: { text: "Voters by Year", fontColor: "white", fontSize: "18px" },
//         series: [
//           {
//             values: [50, 30, 20], // E2, E1, E3 voter distribution
//             backgroundColor: ["#ffcc00", "#00ffcc", "#ff0066"],
//           },
//         ],
//         tooltip: {
//           text: "%data-value Voted",
//           fontColor: "#fff",
//         },
//       },
//     });

//     ZingChart.render({
//       id: "chart4",
//       height: "100%",
//       width: "100%",
//       data: {
//         type: "bar",
//         backgroundColor: "#ff0066",
//         title: {
//           text: "Voting Distribution by Year",
//           fontColor: "white",
//           fontSize: "18px",
//         },
//         series: [
//           {
//             values: [60, 25, 15],
//             backgroundColor: "#00ffcc",
//           },
//         ],
//         tooltip: {
//           text: "%data-value % Voters",
//           fontColor: "#fff",
//         },
//       },
//     });

//     ZingChart.render({
//       id: "chart5",
//       height: "100%",
//       width: "100%",
//       data: {
//         type: "pie",
//         backgroundColor: "#ffcc00",
//         title: {
//           text: "Votes Distribution",
//           fontColor: "white",
//           fontSize: "18px",
//         },
//         series: [
//           {
//             values: [100, 200, 150],
//             backgroundColor: ["#ff0066", "#00ffcc", "#ffcc00"],
//           },
//         ],
//         tooltip: {
//           text: "%data-value Votes",
//           fontColor: "#fff",
//         },
//       },
//     });
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div className="dashboard" id="charts">
//         <div id="chart1" className="item"></div>
//         <div id="chart2" className="item"></div>
//         <div id="chart3" className="item"></div>
//       </div>

//       <div className="dashboard">
//         <div id="chart4" className="item"></div>
//         <div id="chart5" className="item"></div>
//       </div>

//       <div className="leaderboard" id="leaderboard">
//         <h2>Leaderboard</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Name</th>
//               <th>Year</th>
//               <th>Email</th>
//               <th>Votes</th>
//             </tr>
//           </thead>
//           <tbody id="leaderboard-list">
//             {/* Leaderboard items will be inserted dynamically here */}
//           </tbody>
//         </table>
//       </div>

//       <footer>
//         <p> Dashboard &copy; 2025 | All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
