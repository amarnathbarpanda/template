import React from 'react';
import './MyJobs.css';
import { jobActions } from '../config/data';
import Actions from './Actions';

const MyJobs = () => {
  return (
    <div className='Myjobs'>
          <div className="content layout">
              <Actions actions={jobActions}/>
              <section className="main">
                <div className="task">
                      <h2 className='task__title'>
                          K10 Maths Text Book Solution
                      </h2>
                      <p className='task__desc'>intern digipplus</p>
                </div>
              </section>
              <section className="notification">
                  <h3 className="ann__title center">Announcements📢</h3>
                  <ul className="announcements">
                      <li className='ann__item'>
                          <p>We are working on adding Project and Internship Details, So just fill up profile only.</p>
                      </li>
                  </ul>
              </section>
        </div>
    </div>
  )
}

export default MyJobs;