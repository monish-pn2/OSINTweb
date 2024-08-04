import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { Link } from 'react-router-dom';

import emailData from "./email.json"; // Adjust the path as necessary
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

const EmailGraph = () => {
  const svgRef = useRef();
  const [root, setRoot] = useState(null);

  useEffect(() => {
    const width = 1280; // Adjust width as needed
    const dx = 60; // Vertical spacing
    const dy = 250; // Horizontal spacing
    const tree = d3.tree().nodeSize([dx, dy]);

    const transformData = (data) => {
      return {
        name: data.name,
        children: [
          {
            name: "Details",
            children: [
              {
                name: `Deliverable: <tspan font-weight="bold">${
                  data.json_data.data.deliverable || "False"
                }</tspan>`,
              },
              {
                name: `Disposable: <tspan font-weight="bold">${
                  data.json_data.data.disposable || "False"
                }</tspan>`,
              },
              {
                name: `Domain: <tspan font-weight="bold">${
                  data.json_data.data.domain || "False"
                }</tspan>`,
              },
              {
                name: `Catch-All: <tspan font-weight="bold">${
                  data.json_data.data.catch_all || "False"
                }</tspan>`,
              },
              {
                name: `Gibberish: <tspan font-weight="bold">${
                  data.json_data.data.gibberish || "False"
                }</tspan>`,
              },
              {
                name: `Spam: <tspan font-weight="bold">${
                  data.json_data.data.spam || "False"
                }</tspan>`,
              },
              {
                name: `Valid Syntax: <tspan font-weight="bold">${
                  data.json_data.data.valid_syntax || "False"
                }</tspan>`,
              },
              {
                name: `Webmail: <tspan font-weight="bold">${
                  data.json_data.data.webmail || "False"
                }</tspan>`,
              },
            ],
          },
          {
            name: "Social Media",
            children: data.social_media.data.account_details
              ? Object.entries(data.social_media.data.account_details)
                  .filter(([platform, details]) => details.registered === true)
                  .map(([platform]) => ({
                    name: `<tspan font-weight="bold">${platform}</tspan>`,
                  }))
              : [{ name: "No social media accounts registered" }],
          },
          {
            name: "Breaches",
            children: data.social_media.data.breach_details
              ? data.social_media.data.breach_details.breaches.map(
                  (breach) => ({
                    name: breach.domain
                      ? `${breach.name} (${breach.date})`
                      : breach.name,
                  })
                )
              : [{ name: "No breach information available" }],
          },
          {
            name: "Additional Breaches",
            children: data.breaches
              ? data.breaches.result.map(
                  (breach) => ({
                    name: breach.sources
                      ? `${breach.sources} (${breach.password})`
                      : breach.sources,
                  })
                )
              : [{ name: "No breach information available" }],
          },
        ],
      };
    };

    if (!root) {
      const rootNode = d3.hierarchy(transformData(emailData));
      rootNode.x0 = dx / 2;
      rootNode.y0 = width / 2;
      setRoot(rootNode);
    }

    const update = (source) => {
      const duration = 750;
      const nodes = root.descendants().reverse();
      const links = root.links();

      let x0 = Infinity;
      let x1 = -x0;
      root.each((d) => {
        if (d.x > x1) x1 = d.x;
        if (d.x < x0) x0 = d.x;
      });

      const height = x1 - x0 + dx * 2;

      d3.select(svgRef.current).selectAll("*").remove();

      const svg = d3
        .select(svgRef.current)
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", [-dy * 2, x0 - dx, width * 2, height * 2])
        .attr(
          "style",
          "max-width: 100%; height: auto; font: 40px sans-serif; user-select: none;"
        );

      const gLink = svg
        .append("g")
        .attr("fill", "none")
        .attr("stroke", "#555")
        .attr("stroke-opacity", 1)
        .attr("stroke-width", 5);

      const gNode = svg
        .append("g")
        .attr("cursor", "pointer")
        .attr("pointer-events", "all");

      const link = gLink
        .selectAll("path")
        .data(links)
        .join("path")
        .attr(
          "d",
          d3
            .linkHorizontal()
            .x((d) => d.y)
            .y((d) => d.x)
        )
        .attr("stroke-opacity", 0)
        .transition()
        .duration(duration)
        .attr("stroke-opacity", 1);

      const node = gNode
        .selectAll("g")
        .data(nodes)
        .join("g")
        .attr("transform", (d) => `translate(${d.y},${d.x})`)
        .on("click", (event, d) => {
          d.children = d.children ? null : d._children;
          update(d);
        });

      node
        .transition()
        .duration(duration)
        .attr("transform", (d) => `translate(${d.y},${d.x})`);

      node
        .append("circle")
        .attr("r", 9)
        .attr("fill", (d) => (d._children ? "red" : "green"))
        .attr("stroke-width", 10);

      node
        .append("text")
        .attr("dy", "0.31em")
        .attr("x", (d) => (d._children ? -6 : 6))
        .attr("text-anchor", (d) => (d._children ? "end" : "start"))
        .html((d) => d.data.name);

      nodes.forEach((d) => {
        d.x0 = d.x;
        d.y0 = d.y;
      });
    };

    if (root) {
      tree(root);
      root.descendants().forEach((d, i) => {
        d.id = i;
        d._children = d.children;
        if (d.depth && d.children) d.children = null;
      });
      update(root);
    }
  }, [root]);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav className="sidebar">
        <style>
          {`
            .sidebar {
              position: fixed;
              top: 0;
              bottom: 0;
              left: 0;
              width: 280px;
              padding: 20px;
              background-color: #343a40;
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .sidebar .nav {
              flex-grow: 1;
              margin-bottom: 20px;
            }
            .nav-content {
              margin-left: 280px;
              padding: 0;
              width: calc(100% - 280px);
            }
            .sticky-header {
              position: -webkit-sticky;
              position: sticky;
              top: 0;
              z-index: 1020;
            }
            .nav-content .navbar {
              margin: 0;
              background-color: #343a40;
              color: white;
            }
            .sidebar-brand {
              margin-bottom: 4rem;
              font-size: 1.5rem;
            }
            .heading{
            margin-left:20px;
            }
          `}
        </style>
        <div>
          <div className="sidebar-brand">
            <Link to="/" className="text-white text-decoration-none">
              My Webpage
            </Link>
          </div>
          <ul className="nav flex-column mb-auto">
            <li className="nav-item">
              <Link className="nav-link active text-white" to="/">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#search-new"></use>
                </svg>
                Search New
              </Link>
            </li>
            <li>
              <Link className="nav-link text-white" to="/previous">
                <svg className="bi pe-none me-2" width="16" height="16">
                  <use xlinkHref="#search-previous"></use>
                </svg>
                Search Previous
              </Link>
            </li>
          </ul>
          <hr />
        </div>
        <div className="dropdown">
          <a
            href="#"
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt=""
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>mdo</strong>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="nav-content">
        <nav className="navbar sticky-header navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">FAQs</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="main-content">
          <h1 className='heading'>Email Tree</h1>
          <div style={{ overflow: 'auto', height: 'calc(100vh - 120px)', padding: '0 20px' }}>
            <div ref={svgRef}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailGraph;
