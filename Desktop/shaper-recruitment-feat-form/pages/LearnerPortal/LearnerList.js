

import Link from "next/link";
import styles from "../../styles/LearnerList.module.css";

export const getStaticProps = async () => {
    try {
        const res = await fetch("http://localhost:1337/api/interns");
        const data = await res.json();
        return {
            props: { learnerList: data.data }, // Access the "data" array
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: { learnerList: [] },
        };
    }
};

const LearnerList = ({ learnerList }) => {
    console.log("learnerList", learnerList);

    return (
        <div className={` ${styles.maincards}`}>

            <h1>All Students</h1>
            <div className={styles.cards}>
                {Array.isArray(learnerList) && learnerList.map(learner => (
                    <Link href={`/Portfolio/${learner.id}`} key={learner.id}>
                        <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
                            <div className={styles.cardImg}>
                            {learner.attributes.image && (
                                    <img
                                        src={process.env.NEXT_PUBLIC_STRAPI_API_URL + learner.attributes.image.url}
                                        alt={`Profile picture of ${learner.attributes.name}`}
                                        style={{ width: '100px', height: '100px' }} // Adjust the size as needed
                                    />
                                )}
                            </div>
                            <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
                                <h5 className="card-title">{learner.attributes.name}</h5>
                                <p className="card-title">{learner.attributes.cohort}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default LearnerList;
















































// import React from 'react'
// import styles from '../../styles/LearnerList.module.css'


// function LearnerList() {
//   return (
//     <div className={` ${styles.maincards}`}>
//         <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>


//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className={styles.cards}>
//                         <div className={styles.card} style={{ width: '20rem', height: '5rem' }}>
//                             <div className={styles.cardImg}>
//                             {console.log("Image path:", `/images/download.jpeg`)}
//                                 <img
//                                     src="/images/download.jpeg"
//                                     className="card-img-top"
//                                     alt={`Profile picture of `}
//                                     style={{ width: '5rem', height: '4rem' }}
//                                 />
//                             </div>
//                             <div className={`${styles.cardBody} card-body`} style={{ width: '10rem' }}>
//                                 <h5 className="card-title">tittle</h5>
//                                 <p className="card-text">Some quick</p>
//                             </div>
//                         </div>
//                     </div>
//     </div>
//   )
// }

// export default LearnerList











// /Users/da_m1_35/Desktop/shaper-recruitment/pages/LearnerPortal/[id].js
