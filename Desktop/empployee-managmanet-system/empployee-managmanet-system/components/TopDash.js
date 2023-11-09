import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const TopDash = () => {
  return (
    <div className={` ${styles.cards}`}>
      <Link href="/all-employees">
        <a className={`card ${styles.cards}`}>
          <div className="card-body">
            <h5 className="card-title">All Employee</h5>
          </div>
        </a>
      </Link>

      <Link href="/add-employee">
        <a className={`card ${styles.cards}`}>
          <div className="card-body">
            <h5 className="card-title">Add Employee</h5>
          </div>
        </a>
      </Link>

      <Link href="/edit-profile">
        <a className={`card ${styles.cards}`}>
          <div className="card-body">
            <h5 className="card-title">Edit Profile</h5>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default TopDash;
