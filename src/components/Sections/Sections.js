import React, { Component } from 'react';
import styles from  "./Sections.module.css"


export default function  Sections({children }) {

    return (
        <section className={styles.sections}>
            {children}
        </section>
    )

}