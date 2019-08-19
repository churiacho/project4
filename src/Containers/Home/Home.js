import React, { Component } from "react";
import "./Home.css";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Footer from '../../Components/Footer/Footer.js';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Jumbotron fluid className="homeJumbo p-0 m-0" >
          <Container fluid className="m-0 p-5">
            <Row className="mb-5 p-5">
              <Col>
                <h1
                  className="display-3 text-uppercase text-left"
                  style={{ letterSpacing: "0.4rem" }}
                >
                  <span style={{ color: "#f44336" }}>Julia</span> Jo
                </h1>
              </Col>
            </Row>
            <Row className="px-5">
              <h2 style={{ fontFamily: "monospace", marginLeft: "1em" }}>
                Full Stack Developer
              </h2>
            </Row>
            <Row className="my-5 px-5">
              <Col
                lg="5"
                md="7"
                className="d-flex justify-content-around"
              >
             <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	  viewBox="0 0 430.117 430.118" className="skillbtn">
      <title>WordPress</title>
<g>
	<path id="WordPress" d="M0,215.059c0,118.786,96.274,215.059,215.059,215.059c118.759,0,215.059-96.272,215.059-215.059
		C430.117,96.303,333.817,0,215.059,0C96.274,0,0,96.303,0,215.059z M16.572,215.059c0-28.775,6.196-56.082,17.191-80.78
		l94.679,259.398C62.242,361.541,16.572,293.616,16.572,215.059z M215.059,413.541c-19.48,0-38.3-2.838-56.077-8.06l59.568-173.032
		l61.008,167.128c0.396,0.989,0.887,1.862,1.4,2.702C260.348,409.564,238.156,413.541,215.059,413.541z M375.466,211.337
		c11.323-28.317,15.112-50.955,15.112-71.084c0-7.309-0.49-14.09-1.372-20.421c15.495,28.287,24.307,60.711,24.307,95.232
		c0,73.235-39.671,137.151-98.662,171.538L375.466,211.337z M332.669,150.299c7.533,13.212,16.377,30.203,16.377,54.742
		c0,17-5.055,38.366-15.107,64.175l-19.807,66.123l-71.733-213.328c11.976-0.651,22.71-1.895,22.71-1.895
		c10.697-1.27,9.418-16.96-1.246-16.372c0,0-32.161,2.539-52.913,2.539c-19.508,0-52.264-2.539-52.264-2.539
		c-10.702-0.588-11.943,15.751-1.272,16.372c0,0,10.146,1.244,20.846,1.895l30.894,84.727L165.73,336.977L93.435,122.011
		c11.974-0.651,22.736-1.895,22.736-1.895c10.704-1.27,9.395-16.96-1.272-16.372c0,0-32.135,2.539-52.913,2.539
		c-3.72,0-8.093-0.098-12.757-0.231c35.5-53.884,96.506-89.475,165.831-89.475c51.674,0,98.723,19.767,134.02,52.131
		c-0.849-0.067-1.698-0.168-2.548-0.168c-19.541,0-33.342,16.972-33.342,35.209C313.193,120.122,322.621,133.959,332.669,150.299z"
		/>
</g>

</svg>
                <svg
                  className="skillbtn"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-11.5 -10.23174 23 20.46348"
                >
                  <title>React JS</title>
                  <circle cx="0" cy="0" r="2.05" />
                  <g strokeWidth="1" fill="none">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                  </g>
                </svg>

                <svg
                  className="skillbtn"
                  id="Layer_1"
                  version="1.1"
                  viewBox="0 0 96 96"
                >
                  <title>Javascript</title>
                  <g>
                    <path d="M87,9v67.4L48.8,86.6c-0.1,0-0.4,0.1-0.8,0.1s-0.8,0-0.8-0.1L9,76.4V9h36.6h4.9H87 M90.6,3H50.4c-1.3,0-3.6,0-4.9,0H5.4 C4.1,3,3,4.1,3,5.4v73.1c0,1.3,1.1,2.7,2.4,3.1l40.3,10.7c0.7,0.2,1.5,0.3,2.4,0.3s1.7-0.1,2.4-0.3l40.3-10.7 c1.3-0.3,2.4-1.7,2.4-3.1V5.4C93,4.1,91.9,3,90.6,3L90.6,3z" />
                  </g>
                  <line className="st0" x1="3" x2="93" y1="18" y2="18" />
                  <g>
                    <path
                      className="st0"
                      d="M4,70l41.4,11.3c1.4,0.4,3.7,0.4,5.1,0L92,70"
                    />
                  </g>
                  <g>
                    <path d="M29.5,55.7l3.7-2.7c0.9,1.6,2.2,2.3,3.4,2.3c2,0,3-1,3-4.1V36h5.5v15.7c0,4.6-2.4,8.3-7.8,8.3C33.7,60,31.2,58.6,29.5,55.7 z" />
                    <path d="M48,56.7l3.2-3.6c1.8,1.4,4.1,2.4,6.1,2.4c2.3,0,3.5-0.9,3.5-2.2c0-1.5-1.4-1.9-3.6-2.8L54,49.2c-2.5-1-5-2.9-5-6.3 c0-3.8,3.6-6.9,8.8-6.9c2.8,0,5.9,1.1,8,3.1l-2.8,3.3c-1.6-1.2-3.2-1.8-5.1-1.8c-1.9,0-3.2,0.8-3.2,2.1c0,1.4,1.6,1.9,3.8,2.7 l3.2,1.2c3,1.1,4.9,3,4.9,6.3c0,3.8-3.4,7.2-9.3,7.2C53.9,60,50.5,58.9,48,56.7z" />
                  </g>
                </svg>

                <svg
                  version="1.1"
                  className="skillbtn"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 64 64"
                  enableBackground="new 0 0 64 64"
                >
                  <title>Bootstrap</title>
                  <g>
                    <path d="M32.2,34.8h-6.5V45h6.5c5.4,0,5.7-3.8,5.7-5.2C38,38.6,37.5,34.8,32.2,34.8z" />
                    <path
                      d="M55.4,0H8.6C3.8,0,0,3.8,0,8.6v46.8C0,60.2,3.8,64,8.6,64h46.8c4.7,0,8.6-3.8,8.6-8.6V8.6
                      C64,3.8,60.2,0,55.4,0z M34.6,52H15.4V12h18.7c10.6,0,12.9,7.5,12.9,10.5c0,6-3.4,7.5-5.1,8.2c2.6,0.7,6.8,2.9,6.8,10.6
                      C48.6,43.4,48.3,52,34.6,52z"
                    />
                    <path d="M36.1,23.5c0-1.2-0.8-3.9-4.6-3.9h-5.8v8h5.7C35.6,27.6,36.1,24.9,36.1,23.5z" />
                  </g>
                </svg>

                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  className="skillbtn"
                  viewBox="0 0 27.17 27.17"
                >
                <title>HTML5</title>
                  <g>
                    <path
                      d="M1.609,0.008c0.013,0.129,0.023,0.248,0.033,0.367c0.103,1.153,0.203,2.307,0.307,3.459
		c0.132,1.465,0.265,2.933,0.395,4.397c0.11,1.232,0.219,2.467,0.328,3.7c0.124,1.389,0.249,2.777,0.373,4.167
		c0.109,1.231,0.218,2.467,0.328,3.7c0.134,1.502,0.27,3.002,0.398,4.504c0.008,0.097,0.039,0.138,0.135,0.164
		c3.177,0.896,6.352,1.793,9.525,2.687c0.08,0.022,0.176,0.021,0.256,0c3.187-0.894,6.373-1.789,9.56-2.682
		c0.109-0.031,0.143-0.078,0.15-0.185c0.068-0.837,0.146-1.673,0.219-2.509c0.082-0.922,0.166-1.846,0.248-2.77
		c0.074-0.826,0.146-1.65,0.221-2.477c0.084-0.924,0.166-1.848,0.248-2.771c0.072-0.825,0.146-1.649,0.221-2.476
		c0.082-0.92,0.164-1.84,0.246-2.76c0.074-0.828,0.146-1.656,0.223-2.486c0.082-0.92,0.164-1.84,0.246-2.76
		c0.074-0.838,0.148-1.678,0.227-2.517C25.517,0.51,25.538,0.258,25.562,0C17.571,0.008,9.6,0.008,1.609,0.008z M20.831,7.965
		c-3.82,0-7.638,0-11.47,0c0.09,1.033,0.179,2.056,0.267,3.082c3.649,0,7.287,0,10.938,0c-0.027,0.217-0.061,0.422-0.08,0.629
		c-0.051,0.521-0.1,1.043-0.146,1.562c-0.084,0.943-0.166,1.892-0.248,2.835c-0.072,0.848-0.145,1.691-0.221,2.539
		c-0.047,0.535-0.1,1.07-0.145,1.604c-0.008,0.084-0.062,0.086-0.111,0.101c-1.293,0.356-2.584,0.713-3.877,1.067
		c-0.709,0.197-1.417,0.396-2.127,0.591c-0.032,0.01-0.076,0.004-0.11-0.007c-2.006-0.551-4.011-1.104-6.015-1.653
		c-0.092-0.023-0.094-0.08-0.1-0.146c-0.051-0.644-0.102-1.283-0.15-1.927c-0.067-0.864-0.135-1.729-0.203-2.594
		c-0.002-0.022-0.002-0.049-0.004-0.08c0.99,0,1.978,0,2.971,0c0.025,0.281,0.052,0.562,0.076,0.838
		c0.044,0.49,0.088,0.979,0.13,1.472c0.004,0.056,0.021,0.078,0.075,0.094c1.076,0.287,2.15,0.578,3.228,0.867
		c0.038,0.011,0.084,0.006,0.123-0.004c1.062-0.285,2.123-0.574,3.187-0.856c0.064-0.019,0.092-0.048,0.098-0.113
		c0.117-1.254,0.236-2.51,0.357-3.763c0-0.004-0.002-0.009-0.004-0.023c-3.463,0-6.928,0-10.401,0C6.596,11.049,6.326,8.029,6.055,5
		c5.025,0,10.028,0,15.057,0C21.021,5.988,20.925,6.971,20.831,7.965z"
                    />
                  </g>
                </svg>

                <svg
                  version="1.1"
                  id="Capa_1"
                  className="skillbtn"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 535.5 535.5"
                >
                  <title>CSS 3</title>
                  <g>
                    <g>
                      <path
                        d="M393.516,320.689c9.792,0,18.258-1.531,25.398-4.59c7.14-3.063,13.056-7.039,17.748-11.938
			c4.689-4.895,8.16-10.506,10.401-16.83c2.244-6.32,3.366-12.75,3.366-19.275c0-8.568-1.428-15.912-4.284-22.032
			c-2.854-6.12-6.63-11.322-11.319-15.606c-4.692-4.284-9.69-7.752-14.994-10.404l-15.3-7.65
			c-6.528-2.856-11.526-5.304-14.994-7.344s-5.202-4.284-5.202-6.732c0-4.08,1.53-6.63,4.59-7.65c3.063-1.02,5.202-1.53,6.426-1.53
			c10.2,0,18.36,3.468,24.48,10.404c2.854,2.04,5.508,2.856,7.956,2.448c2.854,0,5.1-1.428,6.729-4.284l11.628-18.36
			c2.856-4.08,2.448-7.956-1.224-11.628c-12.648-12.648-28.968-18.972-48.96-18.972c-16.32,0-29.682,4.794-40.086,14.382
			c-10.404,9.588-15.606,21.726-15.606,36.414c0,8.568,1.431,15.708,4.284,21.42c2.856,5.712,6.528,10.608,11.019,14.688
			c4.485,4.08,9.384,7.446,14.688,10.098c5.304,2.652,10.404,4.998,15.3,7.038c7.347,3.264,12.75,6.12,16.221,8.568
			c3.468,2.448,5.199,5.304,5.199,8.568c0,6.936-4.689,10.404-14.073,10.404c-11.019,0-20.4-4.283-28.152-12.854
			c-1.632-2.04-4.08-3.06-7.344-3.06c-3.672,0-6.12,1.428-7.347,4.283l-12.237,18.975c-2.448,4.08-2.244,7.957,0.609,11.629
			C352.716,313.549,371.076,320.689,393.516,320.689z M270.504,320.689c9.792,0,18.36-1.531,25.704-4.59
			c7.344-3.063,13.362-7.039,18.054-11.938c4.692-4.895,8.16-10.506,10.404-16.83c2.244-6.32,3.366-12.75,3.366-19.275
			c0-8.568-1.53-15.912-4.593-22.032c-3.06-6.12-6.834-11.322-11.319-15.606c-4.488-4.284-9.486-7.752-14.994-10.404
			c-5.508-2.652-10.71-5.202-15.606-7.65c-6.117-2.856-11.016-5.304-14.688-7.344s-5.508-4.284-5.508-6.732
			c0-4.08,1.53-6.63,4.59-7.65s5.406-1.53,7.038-1.53c10.2,0,18.357,3.468,24.479,10.404c2.04,2.448,4.692,3.264,7.956,2.448
			c2.448,0,4.692-1.428,6.732-4.284l11.628-18.36c2.854-4.08,2.448-7.956-1.227-11.628c-12.646-12.648-28.968-18.972-48.96-18.972
			c-16.319,0-29.682,4.794-40.083,14.382c-10.404,9.588-15.606,21.726-15.606,36.414c0,8.568,1.428,15.708,4.284,21.42
			c2.856,5.712,6.528,10.608,11.016,14.688s9.282,7.446,14.382,10.098c5.1,2.652,10.098,4.998,14.994,7.038
			c7.752,3.264,13.362,6.12,16.83,8.568s5.202,5.304,5.202,8.568c0,6.936-4.692,10.404-14.076,10.404
			c-11.424,0-20.808-4.283-28.152-12.854c-1.632-2.04-4.284-3.06-7.956-3.06c-3.264,0-5.508,1.428-6.732,4.283l-12.852,18.975
			c-2.448,4.486-2.04,8.365,1.224,11.629C229.5,313.549,247.656,320.689,270.504,320.689z M201.348,280.908
			c1.224-2.447,1.224-4.895,0-7.344c-0.816-2.447-2.448-4.08-4.896-4.896l-20.196-9.179c-2.448-1.224-4.896-1.224-7.344,0
			c-2.856,1.224-4.488,3.06-4.896,5.508c-0.816,2.04-2.652,5.101-5.508,9.181s-7.14,6.117-12.852,6.117
			c-7.752,0-14.076-4.182-18.972-12.546c-4.896-8.364-7.344-19.276-7.344-32.742c0-13.464,2.448-24.48,7.344-33.048
			s11.22-12.85,18.972-12.85c4.896,0,8.772,1.632,11.628,4.896s5.1,6.528,6.732,9.792c1.224,2.448,3.06,4.08,5.508,4.896
			s4.692,0.816,6.732,0l20.196-9.18c2.856-1.224,4.488-3.06,4.896-5.508c0.816-2.856,0.612-5.304-0.612-7.344
			c-11.832-25.296-30.192-37.944-55.08-37.944c-20.808,0-37.638,7.956-50.49,23.868s-19.278,36.72-19.278,62.424
			s6.426,46.409,19.278,62.118c12.852,15.707,29.682,23.563,50.49,23.563C170.544,320.689,189.108,307.43,201.348,280.908z
			 M517.14,9.793c5.307,0,9.69,1.734,13.158,5.202s5.202,7.854,5.202,13.158v384.335c0,3.672-1.122,7.141-3.366,10.404
			s-4.998,5.508-8.262,6.73L275.4,524.482c-1.635,0.816-3.879,1.225-6.732,1.225c-2.856,0-5.1-0.406-6.732-1.225L12.24,429.623
			c-3.672-1.225-6.63-3.469-8.874-6.73C1.122,419.627,0,416.16,0,412.488V28.153c0-5.304,1.836-9.69,5.508-13.158
			s7.956-5.202,12.852-5.202H517.14L517.14,9.793z"
                      />
                    </g>
                  </g>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="rails"
                  viewBox="0 0 411 155"
                >
                  <title>Ruby on Rails</title>
                  <g transform="translate(8 8)" fill="#fff">
                    <path d="M344.6 121.5L344.6 139.6 377.3 139.6C384 139.6 395.5 134.7 395.9 121L395.9 114C395.9 102.3 386.3 95.4 377.3 95.4L361 95.4 361 87 393.3 87 393.3 68.8 362.3 68.8C354.3 68.8 343.6 75.4 343.6 87.7L343.6 94C343.6 106.3 354.2 112.6 362.3 112.6 384.8 112.7 356.9 112.6 377.7 112.6L377.7 121.4M169.4 117.1C169.4 117.1 186.9 115.6 186.9 93 186.9 70.4 165.7 68.3 165.7 68.3L127.5 68.3 127.5 139.6 146.7 139.6 146.7 122.4 163.3 139.6 191.7 139.6 169.4 117.1zM162 102.5L146.7 102.5 146.7 86.2 162.1 86.2C162.1 86.2 166.4 87.8 166.4 94.3 166.4 100.8 162 102.5 162 102.5zM234.3 68.8L214.8 68.8C200.9 68.8 196.2 81.4 196.2 87.4L196.2 139.6 215.7 139.6 215.7 127.1 234 127.1 234 139.6 252.9 139.6 252.9 87.4C252.9 72.2 239.1 68.8 234.3 68.8zM234 106.9L215.6 106.9 215.6 89.6C215.6 89.6 215.6 85.7 221.7 85.7L228.4 85.7C233.8 85.7 233.9 89.6 233.9 89.6L233.9 106.9 234 106.9z" />
                    <rect width="20.3" height="70.8" x="261.8" y="68.8" />
                    <polygon points="310.6 121.3 310.6 68.8 290.4 68.8 290.4 121.3 290.4 139.6 310.6 139.6 337.9 139.6 337.9 121.3" />
                    <path d="M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z" />
                    <path d="M7,139.6 L86,139.6 C86,139.6 70.9,70.7 120.9,42.8 C131.8,37.5 166.5,17.7 223.3,59.7 C225.1,58.2 226.8,57 226.8,57 C226.8,57 174.8,5.1 116.9,10.9 C87.8,13.5 52,40 31,75 C10,110 7,139.6 7,139.6 Z" />
                    <path d="M7 139.6L86 139.6C86 139.6 70.9 70.7 120.9 42.8 131.8 37.5 166.5 17.7 223.3 59.7 225.1 58.2 226.8 57 226.8 57 226.8 57 174.8 5.1 116.9 10.9 87.7 13.5 51.9 40 30.9 75 9.9 110 7 139.6 7 139.6zM171.6 16.5L172 9.8C171.1 9.3 168.6 8.1 162.3 6.3L161.9 12.9C165.2 14 168.4 15.2 171.6 16.5z" />
                    <path d="M162.1 37.7L161.7 44C165 44.1 168.3 44.5 171.6 45.2L172 39C168.6 38.3 165.3 37.9 162.1 37.7zM125.1 6.5L126.1 6.5 124.1.4C121 .4 117.8.6 114.5 1L116.4 6.9C119.3 6.6 122.2 6.5 125.1 6.5zM129.9 43.3L132.2 50.2C135.1 48.8 138 47.6 140.9 46.7L138.7 40.1C135.3 41.1 132.4 42.2 129.9 43.3zM84.5 17L80 10.1C77.5 11.4 74.9 12.8 72.2 14.4L76.8 21.4C79.4 19.8 81.9 18.3 84.5 17zM105 62L109.8 69.2C111.5 66.7 113.5 64.4 115.7 62.1L111.2 55.3C108.9 57.4 106.8 59.7 105 62zM90.5 94.2L98.6 100.6C99 96.7 99.7 92.8 100.7 88.9L93.5 83.2C92.2 86.9 91.3 90.6 90.5 94.2zM46.7 46.7L39.6 40.5C37 43 34.5 45.5 32.2 48L39.9 54.6C42 51.9 44.3 49.2 46.7 46.7zM16.5 91.4L5 87.2C3.1 91.5 1 96.5 0 99.2L11.5 103.4C12.8 100 14.9 95.1 16.5 91.4zM89 119.6C89.2 124.9 89.7 129.2 90.2 132.2L102.2 136.5C101.3 132.6 100.4 128.2 99.8 123.5L89 119.6z" />
                  </g>
                </svg>

              </Col>
            </Row>
            
          </Container>
        </Jumbotron>
        <Footer 
          bg={footerstyle}
        />
      </div>
    );
  }
}

const footerstyle = {
  background: "rgb(227,176,103)",
background: "linear-gradient(200deg, rgba(227,176,103,0.8) 15%, rgba(246,80,152,0.8) 33%, rgba(0,3,40,0.8) 97%)",
}

export default Home;
