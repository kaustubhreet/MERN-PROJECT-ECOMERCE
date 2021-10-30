import Flag from './footer.jsx';
import ImagBlog from './quantum pics/software.gif';
import FAQs from './FAQs';
import { Link } from 'react-router-dom';

const Blog3 = () => {
    return (
        <>
            <div className="container">
                <h1 className="shadow-lg p-3 mb-5 bg-white rounded"><center>HOW TO BECOME SOFTWARE DEVELOPMENT IN 2021?</center></h1><hr></hr>
                <div className="container mt-3">
                <div className="continer">
                <img src={ImagBlog} style={{width:"100%",height:"60%"}}  alt="dia" /> 
            </div>
            <div className="container-fluid mt-3 shadow-lg bg-white rounded">
                <h2><br/><br/> What is Software Engineering? </h2><br/>
                    Software engineering is a process of analyzing user requirements and then designing, building, and testing software application which will satisfy those requirements.
                    <br/><br/>
                    In this software engineering tutorial, you will learn:
                    <br/>
                    <h2>What is Software Engineering?</h2><br/><br/>
                    Steps to Becoming A Software Engineer
                    <br/><h2> What Does A Software Engineer Do?</h2><br/>
                    Different Type of Careers in Software Engineering<br/>
                    Best practices for Software Engineers<br/><br/>
                    9 Steps to Becoming A Software Engineer<br/><br/><br/>

                    Software engineering is an ever-changing profession. Therefore, one should adopt as new technologies are developed. As it has shifting nature, there are many different entry points into the IT profession.
                    <br/>
                    However, there is no single way of achieving this. Here are some steps to becoming a professional software engineer.

                    <br/>

                    <ul>
                        <li>
                    Step #1: Be Clear About Your End Goal </li>
                    Starting a new career is not easy. However, when you have a final destination in mind, it helps when you find and deal with a hurdle in your road. You should have a clear goal like:

                    I want to build my career as a software engineer
                    I want to work as a software engineer at an established IT company.
                    I want to work as a team member and get paid well for it.
                    <br/>
                    <li>Step #2: Select A Language to Learn </li>
                    Software engineering never focuses exclusively on coding. However, you should know at least a couple of languages, and a deeper understanding of how they will function. There is no common agreement on which languages are most useful.

                    Below are given the list of some popular programming languages:
                    <li>
                    Python </li>
                    <li>JavaScript </li>
                    <li>C#</li> 
                     <li>C++</li>
                    <li>Ruby </li>
                    <li> Java</li>
                    <br/>
                    <li> Step #3: Earn A Degree in Computer Science or A Related Field </li>
                    You should first earn a degree in computer science or a related field. You should have at least a bachelor’s degree to begin your career as a software engineer.

                    Majoring in computer science will offer you the most useful background for designing software. Interviewers will ask questions regarding data structures and algorithms. Therefore, the theoretical knowledge provided by traditional computer science degrees best prepares you for this.

                    However, you will mostly spend your time outside of the classroom coding software and to learn how to write real software.

                    <br/><li>Step #4: Supplement your studies</li>
                    Educational books are frequently outdated. Reference books are revised much slower than software is updated. All the education institutes provide theoretical concepts and ways of thinking that can be important for your success.

                    Although, how much you will get paid is being able to apply the knowledge of the real-world software. This is where your study helps you.

                    Here are some ways to supplement your learning:

                    StackOverflow is the most reliable question and answer website for developers. You can search according to the technology, problem space, or language you want to improve in.
                    Sites like CodinGame and CodeWars offer thousands of programming solutions which help you to test your skills.
                    <br/> <li>Step #5: Read Code Written by Experienced Developers </li>
                    Another useful aspect of becoming a software engineer is learning how to read other people’s code. You can do this easily by visiting sites like GitHub repositories and looking through documentation.

                    However, sometimes documentation also goes wrong, but most of the source code accurate in these sites. Therefore, by learning to read that code, you’ll be able to understand how a specific program is working.

                    <br/> <li> Step #6: Find A Community of Software Engineers</li>
                    You need to find a community to learn which guide you to success as a software engineer. Therefore, when you are surrounded by a community of like-minded people, you have an automatic support system. A real-world software engineering community gives you guidance on where to focus your learning. Sites like Meetup is an ideal choice to find other professionals.

                    <br/><li> Step #7: Build Projects</li>
                    Nothing like practical experience. You need to start building projects on a language you are comfortable with. By doing this, you not only enhance your learning but also found a potential employer. As you learn how to code, build projects, etc., you should slowly help you to build up your professional network.

                    <br/><li> Step #8: Master Your Pre-Interview Skills</li>
                    Next, you need to focus on your resume as it plays a vital part for your hiring. You’ll need to master three things: resume, cover letter, and your online presence.

                    Hiring HR managers still look at them to get a snapshot of your skills and experience. Moreover, cover letters are needed when applying for jobs online; they’re your opportunity to get someone’s attention and make an impression.

                    <br/> <li> Step #9: Ace Your Job Interview</li>
                    Finally, the time is come to face the interview. Most of IT companies start with a screening interview, usually done on the internet, at home. After that, you need to face a phone interview. If you successfully clear both interviews, you’ll land the on-site interview.

                    <br/><li>   Step #10: Accept the Job Offer</li>
                    After you successfully clear round of interviews and demonstrate your new skills, you will likely to get a job offer. Select the best which helps you to enhance your career.
</ul>    <br/>
                    <h2>  What Does A Software Engineer Do? </h2>
                    Here, are important roles played by software engineer:
                    <br/>
                    He or she should be a good programmer and should be well-versed in data structures and algorithms.
                    Should be fluent in more than one programming language.
                    Should be familiar with various design approaches.
                    Responsible for defining the feasibility of software operations through problem definition, evaluation, analysis, and solution development.
                    Documenting and demonstrating solutions by developing flowcharts, diagrams, documentation, diagrams, layouts, code comments, etc.
                    Developing solutions by following software development standards.
                    Improves operations by completing systems analysis work and make a recommendation for inefficient procedures and policies.
                    Obtaining and licensing software after gaining relevant data from vendors.
                    Testing and approving products
                    Providing relevant data through the collection, analysis, and summarizing of service and development issues
                    <br/><br/> <br/>
                </div>
                </div>
            </div>
           <br/><br/>
            {/*pages no */}
            <div className="container-fluid">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <Link class="page-link" to="#" tabindex="-1" aria-disabled="true">
                                Previous</Link>
                        </li>
                        <li class="page-item"><a class="page-link" href="Blog1">1</a></li>
                        <li class="page-item"><a class="page-link" href="Blog2">2</a></li>
                        <li class="page-item"><a class="page-link" href="Blog">3</a></li>
                        <li class="page-item">
                            <Link class="page-link" to="#">Next</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div class="container-fluid shadow-lg p-3 mb-5 bg-white rounded">
   <FAQs /><br/>
        </div>
            < Flag />
        </>
    )
};

export default Blog3;