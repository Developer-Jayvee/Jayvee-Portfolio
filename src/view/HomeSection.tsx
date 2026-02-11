import { MapPin } from "iconoir-react";
import SELFIMAGE from "../assets/images/SELF_IMAGE.jpg";
import "./styles/home.section.css"
import { GITHUB_LINK, LINKEDIN_LINK } from "../constants";

export default function HomeSection() {
    return (
        <div className="wrapper-grid-col-2">
            <div className="left-grid">
                <div className="image-holder">
                    <img src={SELFIMAGE} alt="ME" />
                </div>
            </div>
            <div className="right-grid">
                <div className="basic-info">
                    <p>Jayvee Obillo Hidlao</p>
                    <p>
                        <MapPin /> Antipolo City , Rizal
                    </p>
                    <p> Full Stack Web Developer / Data Entry </p>
                    <p>
                        <a title="Github" href={GITHUB_LINK} target="_blank">

                            <i className="devicon-github-original colored"></i>

                        </a>
                        <a title="LinkedIn" href={LINKEDIN_LINK} target="_blank">
                            <i className="devicon-linkedin-plain colored"></i>
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}