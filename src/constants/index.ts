
type ExperienceType = {
    company:string;
    date:{
        entry:string;
        exit:string;
    };
    position:string;
}
export const Experiences: ExperienceType[] =  [
        {
            company:"Elite Software and Data Security",
            date: {
                entry:"Aug 2025",
                exit: "Dec 2025"
            },
            position:"Full Stack Web Developer"
        },
        {
            company:"Pinnacle Technologies Inc.",
            date: {
                entry:"July 2022",
                exit: "July 2025"
            },
            position:"Full Stack Web Developer"
        },
           {
            company:"Melham Construction Company",
            date: {
                entry:"Jan 2022",
                exit: "Mar 2022"
            },
            position:"Software Engineer"
        },
]
export const PROJECTS = [
        {
            title:"Movie Find",
            description:"Fast Movie Search App",
            link:{
                description:"moviefind01.vercel.app",
                link:"https://moviefind01.vercel.app/"
            }
        },
          {
            title:"Shoe Shop",
            description:"Basic Shoe Cart System",
            link:{
                description:"shoeshopapp.vercel.app",
                link:"https://shoeshopapp.vercel.app"
            }
        },
        {
            title:"Youtube Clone",
            description:"HTML & CSS basic cloning",
            link:{
                description:"HC-youtube_clone",
                link:"https://jayveehidlao11.github.io/HC-youtube_clone/"
            }
        },
        {
            title:"Sari-Sari Store Inventory",
            description:"Inventory Tracker using Excel",
            link:{
                description:"Google Drive Link",
                link:"https://drive.google.com/drive/folders/1ND1RsKB9qiCRA7O8ITSK8DKxbYIsZHjr?usp=sharing"
            }
        },
          {
            title:"Sari-Sari Store Sales Tracker",
            description:"Sales Tracker using Excel",
            link:{
                description:"Google Drive Link",
                link:"https://drive.google.com/drive/folders/1TSOpZ49NxC2WVeHvbf5CaNCVKbwJ2ZU4?usp=sharing"
            }
        }
]

export const GITHUB_LINK = "https://github.com/Developer-Jayvee"
export const LINKEDIN_LINK = "https://www.linkedin.com/in/jayvee-hidlao-857452244/"