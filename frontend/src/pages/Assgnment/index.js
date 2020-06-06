import React from 'react';
import AssgnmentCreator from '../containers/AssgnmentCreator';
import AssgnmentList from '../containers/AssgnmentList';
import AssgnmentFilter from "../containers/AssgnmentFilter";
import styles from './index.module.css';





export default function AssgnmentPage() {
    return (
        <div className={styles.bodyContainer}>
            <AssgnmentCreator></AssgnmentCreator>
            <AssgnmentList></AssgnmentList>
            <AssgnmentFilter></AssgnmentFilter>
        </div>
    );
};