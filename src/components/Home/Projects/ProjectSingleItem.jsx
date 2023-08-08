import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectSingleItem = () => {
    const { id } = useParams();

    const [project, setProject] = useState(null);

    useEffect(() => {
        fetch('/projects.json')
            .then((res) => res.json())
            .then((data) => {
                const projectDetails = data.filter((item) => item.id == id);
                setProject(projectDetails);
            });
    }, [id]);

    const projects = project ? project[0] : '';
    if (!projects) {
       
        return <div className='flex justify-content-center align-items-center my-5'> <div></div></div>;
    }



    const { image, name, category, source, technologies, projectsFeatures , most_importantFeatures } = projects;
    console.log(projectsFeatures);


    return (
        <div >
            <div className='pt-5 pb-5 bg-black'>

            </div>

            <div className="container">
                <div className="row my-4 ">
                    <div className="col-md-4">
                        <div className="modal-images w-100 shadow-lg">
                            <img
                                src={projects.image}
                                className="img-fluid"
                                alt="liveLink"
                            />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className='ms-3 mobile-single-projects'>
                            <h2 className=''>{projects.name}</h2>
                            <div>
                                <a href={source.live_link} className="btn btn-outline-primary m-1">
                                    Live Link
                                </a>
                                <a href={source.client_repo} className="btn btn-outline-primary m-1">
                                    Client Repo
                                </a>
                                <a href={source.srepo} className="btn btn-outline-primary m-1">
                                    Server Repo
                                </a>
                            </div>

                            <div className="my-2">
                                <h3>Technologies:</h3>


                                {technologies.map(item => <button class="btn btn-info m-1 disabled">{item}</button>)}

                            </div>

                            <div className="my-2">
                            <h3>
                                Projects Features:
                            </h3>
                            <ul>
                            {projectsFeatures.map(item =><li>
                               {item}
                                </li>)}
                                
                            </ul>
                            </div>
                            <div className="my-2">
                            <h5>
                                Most Important Features:
                                
                            </h5>
                            <ul>
                            {most_importantFeatures.map(item =><li >
                               {item}
                                </li>)}
                                
                            </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSingleItem;