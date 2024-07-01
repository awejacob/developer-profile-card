import "./card.css"

const skills = [
   
    {
        skills:"Javascript",
        level:"expert",
        color:"#EFD81D",
    },
    {
        skills:"React",
        level:"professional",
        color:"#60DAFB",
    },
    {
        skills:"Nextjs",
        level:"intermediate",
        color:"#2662EA",
    },
    {
        skills:"Tailwindcss",
        level:"professional",
        color:"cadetblue",
    },
    {
        skills:"Git & Github",
        level:"professional",
        color:"#E84F33",
    },
    {
        skills:"Linux",
        level:"expert",
        color:"#C3DCAF",
    },
    {
        skills:"Virtualization",
        level:"professional",
        color:"#FF3B00",
    },
    
    {
        skills:"Cybersecurity",
        level:"intermediate",
        color:"green",
    },
]

import Image1 from "./awe.jpg";

function Card() {
  return (
    <main className="card">
      <Avatar/>
      <Profile />
      <Skills />
    </main>
  );
}

export default Card;

export function Profile() {
  return (
    <div>
      <h1>Jacob Awe</h1>
    </div>
  );
}

export function Avatar(){
    return(
        <img className="avatar" src={Image1} alt="vatar" />
    )
}

export function Skills() {
   return(
   <ul className="skill-list">
     {skills.map((skill)=>(
        <SkillsList key={skill.skills} skill={skill}/>
    ))}
   </ul>
   )
}

export function SkillsList({skill}) {
   return(
    <div className="skill-list" style={{backgroundColor:skill.color}}>
        <li>{skill.skills}</li>
        <li>
        {skill.level === 'professional' && '💪'}
        {skill.level === 'expert' && '👍'}
        {skill.level === 'intermediate' && '👌'}
        </li>
    </div>
   )
}
