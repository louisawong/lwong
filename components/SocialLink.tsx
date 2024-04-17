export const SocialLink = ({icon, link}:{icon: React.ReactNode; link: string})=>  {
return (
  <a href={link} target="_blank" rel="noreferrer">
    {icon}
  </a>
)
}
