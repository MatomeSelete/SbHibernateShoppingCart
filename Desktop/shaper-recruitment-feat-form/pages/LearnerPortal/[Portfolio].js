import { useRouter } from "next/router";
import React, { useState } from 'react';
import styles from "../../styles/Portfoli.module.css";


import FinalComments from '../../components/Portfoliocomponents/FinalComments';
import Names from '../../components/Portfoliocomponents/Names';
import ProfilePic from '../../components/Portfoliocomponents/ProfilePic';
import Projects from '../../components/Portfoliocomponents/Projects';
import Skillsset from '../../components/Portfoliocomponents/Skillsset';
import SoftSkills from '../../components/Portfoliocomponents/SoftSkills';
import TechSkills from '../../components/Portfoliocomponents/TechSkills';

const Portfolio = ({ setUserID }) => {

    const router = useRouter();
    const id = router.query.Portfolio;

    const [userid, setuserid] = useState(0)
    const [personalDetails, setPesonalDetails] = useState({})
    const [projectDetails, setProjectDetails] = useState({})
    const [softskillDetails, setsoftskillDetails] = useState({})
    const [techskillDetails, settechskillDetails] = useState({})

    React.useEffect(() => {
        const getQs = async () => {

            const res = await fetch("http://localhost:1337/api/applicants?populate=projects,techskillratings,softskillratings,skills");
            const json = await res.json();
            var i = id - 5 ;

            setPesonalDetails(json.data[i].attributes);
            setProjectDetails(json.data[i].attributes.projects.data[0].attributes);
            setsoftskillDetails(json.data[i].attributes.softskillratings.data[0].attributes);
            settechskillDetails(json.data[i].attributes.techskillratings.data[0].attributes);
            console.log(json.data[i]);
            return json
        }
        getQs();
    }, [])



    return (
        <div className='container'>
            <div className={`${styles.portfolioBody}`}>
                <section className={` ${styles.head}`}>
                    <div className={` ${styles.NavBAr}`}>

                    </div>
                    <div className={` ${styles.profilepic}`}>
                        <ProfilePic profile={personalDetails} />

                    </div>
                    <div className={` ${styles.NameSkillset}`}>
                        <div className={` ${styles.NameCohort}`}>
                            <Names detail={[personalDetails, projectDetails]} />
                        </div>

                        <div className={` ${styles.skillset}`}>
                            <Skillsset skills={techskillDetails} />
                        </div>

                        <div className={` ${styles.FinalComments}`} >
                            <FinalComments />
                        </div>

                    </div>

                </section>

                <section className={` ${styles.projects}`} >
                    <div className={` ${styles.AboutProject}`}>
                        <div className={` ${styles.ProjectBlocks}`}  >
                            <div className={` ${styles.ProjectBlock1}`}  >

                                <h2 className={` ${styles.skillsTags}`}> Tech Skills </h2>

                            </div>
                            <div className={` ${styles.ProjectBlock2}`}  >

                                <h2 className={` ${styles.skillsTags}`} > Soft Skills </h2>

                            </div>
                            <div className={` ${styles.ProjectBlock3}`}  >

                                <h2 className={` ${styles.skillsTags}`}> Projects </h2>
 
                            </div>
                            
                        </div>
                    </div>

                </section>

                <section className={` ${styles.Body}`}>
                    <div className={` ${styles.Skills}`}>
                        <div className={` ${styles.skillBlock}`}>
                            <TechSkills tech={techskillDetails} />
                        </div>
                        <div className={` ${styles.softSkillBlock}`} >
                            <SoftSkills soft={softskillDetails} />
                        </div>
                        <div className={` ${styles.projectBlock}`} >
                            <Projects  project={projectDetails} />
                        </div>

                    </div>

                </section> 


            </div>
        </div>
    )
}
export default Portfolio;
