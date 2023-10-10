import React from "react";
import styles from "./cardgrid.module.css"
class Cardgrid extends React.Component{
   render(){
        return(
          <main className={styles.container} >
          <div className={styles.category}>
        <h1>Latest Posts</h1>
<div className={styles.filter}>
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII=" alt="" />
<p> Filter by category</p>
</div> 
<div>
<span className={styles.active}>all</span>
<span className={styles.nonactive}>Artificial Intelligence</span>
<span className={styles.nonactive}>Cloud Computing</span>
<span className={styles.nonactive}>DevOps</span>
<span className={styles.nonactive}>Programming Languages</span>
<span className={styles.nonactive}>Mobile Application Development</span>
<span className={styles.nonactive}>Technology and Tools</span> <br></br>
<div>
<span className={styles.nonactive}>Get a Job in a Tech Company</span>
<span className={styles.nonactive}>Others</span>
</div>
</div>
</div>
<div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Introduction To A Machine Learning Online Course</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
        <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
      </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/6.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Lamp Stack vs Mean Stack....................</h1>
        <div><span className={styles.author}>EdYoda </span>
        <span className={styles.date}>| 18 June 2023</span></div>
        <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
      </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/4.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Learn Cloud Computing- An Introduction</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/3.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Challenges of Machine Learning in Big Data Analytics</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/5.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Breaking The Myths around Cybersecurity</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/7.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Importance of Data Backup and Recovery in the IT industry</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>What is Web Scraping?...............................</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>What is Income Share Agreement.....</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <div className={styles.card}>
        <figure className={styles.cardimage}>
        <img src="https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png" alt=""/></figure>
        <h1 className={styles.cardtitle}>Practical Machine Learning with Python and Keras</h1>
        <div><span className={styles.author}>EdYoda </span>
          <span className={styles.date}>| 18 June 2023</span></div>
          <p className={styles.cardpara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo voluptatem maxime eos. Quam ipsa possimus, quos eos aspernatur soluta laboriosam dicta inventore quia nemo facere mollitia fugit perferendis ipsam laborum.</p>
        </div>
      <footer></footer>
    
 
        </main>
      
        )
    }
}

export default Cardgrid;