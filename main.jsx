import React from "react";
import Cardgrid from "../cardgrid/cardgrid";
import styles from "./main.module.css";
class Main extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <a href="#">
                            <div className={styles.logo}>EDYODA</div>
                            <p>Stories</p>
                        </a>
                        <div className={styles.blognav}>
                            <a href="#">
                                Explore Categories{" "}
                                <span>
                                    <img
                                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="
                                        alt="" />
                                </span>
                            </a>
      
                            <ul className={styles.info}>
                                <div className={styles.about}>
                                    <p> EdYoda is a learning and knowledge <br />
                                        sharing platform for techies</p>
                                </div>
                              
                                <div>
                                    <button className={styles.btn}>
                                        Go To Main Website
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </nav>
                </header>
                <Cardgrid />
            </div>
        );
    }
}

export default Main;